<script setup lang="ts">
import { useStore } from 'vuex';
import { NSelect, NTable, NH2, NH3 } from 'naive-ui';
import { creatureOptions, creatures } from '../data/creatures';
import { computed, ref } from 'vue';
import { Ability, DamageType, TenacityModifier } from '../types';
import CharacterSummary from '../components/CharacterSummary.vue';

const store = useStore();

function multiplier(level: number) {
  return 1 + level * 0.5;
}

function calculateDamage(damage: number) {
  if (damage / 2 > store.getters.totalArmor) {
    return damage - store.getters.totalArmor;
  }

  return (
    Math.round((damage / (store.getters.totalArmor * 4)) * damage * 100) / 100
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
    const modifier = (store.getters.activeModifiers as TenacityModifier[]).find(
      (x) => x.type === attack.type
    );

    if (!modifier) {
      total += attack.damage * multiplier(level);
      continue;
    }

    total += attack.damage * multiplier(level) * modifier.tenacity;
  }

  return calculateDamage(total);
}

function hitsToLethal(ability: Ability, level: number) {
  return Math.ceil(store.state.health / damageAfterMitigations(ability, level));
}

function getCreatureOptions() {
  return creatureOptions();
}

const creatureName = ref('');
const creature = computed(() =>
  creatures.find(({ name }) => name === creatureName.value)
);

const damageTypeLabels = ref({
  [DamageType.Blunt]: 'Blunt',
  [DamageType.Pierce]: 'Pierce',
  [DamageType.Slash]: 'Slash',
  [DamageType.Fire]: 'Fire',
  [DamageType.Poison]: 'Poison',
  [DamageType.Spirit]: 'Spirit',
  [DamageType.Frost]: 'Frost',
  [DamageType.Lightning]: 'Lightning',
});
</script>

<template>
  <character-summary />
  <n-h2>Select Creature</n-h2>
  <n-select v-model:value="creatureName" :options="getCreatureOptions()" />
  <template v-if="creature">
    <template v-for="i in creature.maxLevel + 1">
      <n-h3>Level {{ i - 1 }} {{ creatureName }}</n-h3>
      <n-table>
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
        </tbody>
      </n-table></template
    >
  </template>
</template>
