<script setup lang="ts">
import { onMounted } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'
import InspectionBar from './components/InspectionBar.vue'
import ToolBar from './components/ToolBar.vue'
import ViewBoxComponent from './components/ViewBoxComponent.vue'
import { BoxElements } from './lib/global/variables.ts'

onMounted(() => {
  const obj = BoxElements.getInstance()
  obj.click()
})
</script>

<template>
  <HeaderComponent />
  <ToolBar />
  <InspectionBar />
  <ViewBoxComponent />
</template>

<style scoped></style>
