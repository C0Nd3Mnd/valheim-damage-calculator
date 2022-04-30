<script setup lang="ts">
import packageJSON from '../../package.json';
import { computed } from 'vue';
import { VALHEIM_VERSION } from '../data/version';

const version = computed(() => packageJSON.version);
const valheimVersion = computed(() => VALHEIM_VERSION);
</script>

<template>
  <p>
    Valheim Damage Calculator {{ version }}, made for Valheim version
    {{ valheimVersion }}.
  </p>
  <p>
    Thank you to all the authors and maintainers of the
    <a href="https://valheim.fandom.com" target="_blank">Valheim Wiki</a> where
    a lot of the data is sourced from.
  </p>
  <p>
    Made with <v-icon color="red">mdi-heart</v-icon> by
    <a href="https://github.com/C0Nd3Mnd" target="_blank">C0Nd3Mnd</a>, see
    <a
      href="https://github.com/C0Nd3Mnd/valheim-damage-calculator"
      target="_blank"
      >this project on GitHub</a
    >.
  </p>
</template>
