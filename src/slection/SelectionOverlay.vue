<script setup lang="ts">
import { overlayRect, isOverlayVisible, selectionBox } from '@/lib/global/variables'
import { computed } from 'vue'

const rect = computed(() => overlayRect.value)
const isVisible = computed(() => isOverlayVisible.value)
</script>

<template>
  <svg v-if="isVisible" class="selection" ref="selectionBox">
    <g :style="{ transform: `translate(${rect.left}px, ${rect.top}px)` }">
      <!-- Dashed Selection Rectangle -->
      <rect
        :width="rect.width"
        :height="rect.height"
        fill="none"
        stroke="#3b82f6"
        stroke-width="2"
        stroke-dasharray="4 4"
      />

      <!-- Top-Left Corner Handle -->
      <rect x="-4" y="-4" width="8" height="8" fill="#ffffff" stroke="#3b82f6" stroke-width="2" />

      <!-- Top-Right Corner Handle -->
      <rect
        :x="rect.width - 4"
        y="-4"
        width="8"
        height="8"
        fill="#ffffff"
        stroke="#3b82f6"
        stroke-width="2"
      />

      <!-- Bottom-Left Corner Handle -->
      <rect
        x="-4"
        :y="rect.height - 4"
        width="8"
        height="8"
        fill="#ffffff"
        stroke="#3b82f6"
        stroke-width="2"
      />

      <!-- Bottom-Right Corner Handle -->
      <rect
        :x="rect.width - 4"
        :y="rect.height - 4"
        width="8"
        height="8"
        fill="#ffffff"
        stroke="#3b82f6"
        stroke-width="2"
      />
    </g>
  </svg>
</template>

<style lang="css" scoped>
.selection {
  pointer-events: auto;
  position: absolute;
  overflow: visible;
}
</style>
