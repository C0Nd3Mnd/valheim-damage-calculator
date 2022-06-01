<script setup lang="ts">
import { useRoute } from 'vue-router';
import { creatures } from '@/data/creatures';
import { Ability, DamageType, TenacityModifier } from '@/types';
import { useCharacterStore } from '@/store/character';

const characterStore = useCharacterStore();

const route = useRoute();

const { name } = route.params;

const creature = $computed(() => creatures.find((c) => c.name === name));

function multiplier(level: number) {
  return 1 + level * 0.5;
}

function calculateDamage(damage: number) {
  if (damage / 2 > characterStore.totalArmor) {
    return damage - characterStore.totalArmor;
  }

  return (
    Math.round((damage / (characterStore.totalArmor * 4)) * damage * 100) / 100
  );
}

function hitsToLethal(ability: Ability, level: number) {
  return Math.ceil(
    characterStore.health / damageAfterMitigations(ability, level)
  );
}

function trueDamage(ability: Ability, level: number) {
  return (
    ability.attacks.map((x) => x.damage).reduce((sum, a) => sum + a, 0) *
    multiplier(level)
  );
}

function damageAfterMitigations(ability: Ability, level: number) {
  let total = 0;

  for (const attack of ability.attacks) {
    const modifier = (
      characterStore.activeModifiers as TenacityModifier[]
    ).find((x) => x.type === attack.type);

    if (!modifier) {
      total += attack.damage * multiplier(level);
      continue;
    }

    total += attack.damage * multiplier(level) * modifier.tenacity;
  }

  return calculateDamage(total);
}

const damageTypeLabels = {
  [DamageType.Blunt]: 'Blunt',
  [DamageType.Pierce]: 'Pierce',
  [DamageType.Slash]: 'Slash',
  [DamageType.Fire]: 'Fire',
  [DamageType.Poison]: 'Poison',
  [DamageType.Spirit]: 'Spirit',
  [DamageType.Frost]: 'Frost',
  [DamageType.Lightning]: 'Lightning',
};
</script>

<template>
  <h5 class="text-h5">{{ name }}</h5>
  <template v-if="creature">
    <v-table>
      <thead>
        <tr>
          <th>Ability</th>
          <th>Attacks</th>
          <th>True Damage</th>
          <th>After Mitigations</th>
          <th>Hits to Lethal</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="i in creature.maxLevel + 1">
          <tr>
            <th class="text-subtitle-1" colspan="5">
              Level {{ i - 1 }} {{ name }}
            </th>
          </tr>
          <tr v-for="ability in creature.abilities" :key="ability.name">
            <td>{{ ability.name }}</td>
            <td>
              <ul>
                <li v-for="attack in ability.attacks" :key="attack.type">
                  {{ attack.damage * multiplier(i - 1) }}
                  {{ damageTypeLabels[attack.type] }}
                </li>
              </ul>
            </td>
            <td>{{ trueDamage(ability, i - 1) }}</td>
            <td>{{ damageAfterMitigations(ability, i - 1) }}</td>
            <td>{{ hitsToLethal(ability, i - 1) }}</td>
          </tr>
        </template>
      </tbody>
    </v-table>
  </template>
</template>
