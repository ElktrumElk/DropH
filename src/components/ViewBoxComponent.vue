<script setup lang="ts">
import { isHashildren, viewBox } from '@/lib/global/variables'
</script>

<template>
  <div class="view-box" ref="viewBox">
    <span v-if="!isHashildren">Drag and Drop</span>
  </div>
</template>

<style lang="css" scoped>
.view-box {
  display: flex;
  border: 0.5px dashed grey;
  border-radius: 0.2rem;
  margin: 0.5rem;
  width: 99.5%;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
}

.view-box span {
  font-size: 2rem;

  background: linear-gradient(to right, orangered, orange);
  -webkit-background-clip: text;
  background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  align-self: center;
  margin-block: auto;
}
</style>
