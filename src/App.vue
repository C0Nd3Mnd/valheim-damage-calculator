<script setup lang="ts">
import { PropType, ref } from 'vue';
import {
  NConfigProvider,
  NLayout,
  NSpace,
  NLayoutHeader,
  NLayoutContent,
  NMenu,
  MenuOption,
} from 'naive-ui';
import { Breakpoints } from 'naive-ui/lib/config-provider/src/internal-interface';

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
  <n-config-provider>
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
          <router-view />
        </n-layout-content>
      </n-layout>
    </n-space>
  </n-config-provider>
</template>
