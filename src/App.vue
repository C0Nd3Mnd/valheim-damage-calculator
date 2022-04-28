<script setup lang="ts">
import { ref } from 'vue';
import {
  NLayout,
  NSpace,
  NLayoutHeader,
  NLayoutContent,
  NMenu,
  MenuOption,
} from 'naive-ui';

const activeKey = ref<string | null>(null);
const menuOptions = ref<MenuOption[]>([
  {
    label: 'Home',
    key: 'home',
  },
  {
    label: 'Character',
    key: 'character',
  },
]);
</script>

<template>
  <n-space vertical size="large">
    <n-layout>
      <n-layout-header>
        <n-menu
          v-model:value="activeKey"
          mode="horizontal"
          :options="menuOptions"
        />
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        Hello :O
      </n-layout-content>
    </n-layout>
  </n-space>
</template>
