<script setup lang="ts">
import { NStatistic, NIcon } from 'naive-ui';
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  value: {
    required: true,
  },
});
</script>

<template>
  <n-statistic :label="label" :value="value">
    <template #prefix>
      <n-icon>
        <span :class="['mdi', `mdi-${icon}`]" :style="{ color }" />
      </n-icon>
    </template>
  </n-statistic>
</template>
