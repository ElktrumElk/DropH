<script setup lang="ts">
import IconSelectionBox from '@/icons/IconSelectionBox.vue'
import IconSelectNormal from '@/icons/IconSelectNormal.vue'
</script>

<template>
  <menu class="tool-bar">
    <li class="tools">
      <button class="tools-button">
        <IconSelectNormal class="tools-ic" />
      </button>
    </li>
    <li class="tools">
      <button class="tools-button">
        <IconSelectionBox class="tools-ic" />
      </button>
    </li>
  </menu>
</template>

<style lang="css" scoped>
.tool-bar {
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 10px;
  bottom: 50%;
  margin-block: auto;
  background: var(--component-cl);
  border-radius: 0.4rem;
  border: 1px solid var(--border-cl);
  list-style: none;
  gap: 0.5rem;
  overflow: hidden;
  padding: 0.5rem;
}

.tools {
  display: flex;
  align-items: center;
}
.tools-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  border-radius: 4rem;
  background: none;
}
.tools-button:hover {
  background: var(--button-hover-cl);
}

.tools-ic {
  display: flex;
  width: 30px;
  height: 30px;
  color: var(--text-cl);
}
</style>
