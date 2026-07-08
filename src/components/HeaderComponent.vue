<script setup lang="ts">
import IconExport from '@/icons/IconExport.vue'
import IconLogo from '@/icons/IconLogo.vue'
import IconPreview from '@/icons/IconPreview.vue'
</script>

<template>
  <header class="header">
    <div class="logo-cnt">
      <IconLogo class="logo" />
      <h1 class="app-name">Drop H</h1>
    </div>

    <div class="action-cnt">
      <button class="action-btn">
        <IconPreview class="icon" />
        <span>Preview</span>
      </button>

      <button class="action-btn">
        <IconExport class="icon" />
        <span>Export</span>
      </button>
    </div>
  </header>
</template>

<style lang="css" scoped>
.header {
  display: flex;
  align-items: center;
  width: 100%;
  background: var(--component-cl);
  padding: 0.1rem 0.5rem;
  border: 1px solid var(--border-cl);
}

.logo-cnt {
  display: flex;
  align-items: center;
  gap: 0.1rem;
}
.logo {
  width: 50px;
  height: 50px;
  color: orange;
}

.app-name {
  display: flex;
  background: linear-gradient(to right, orange, orangered);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.action-cnt {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-inline-start: auto;
}

.action-btn {
  display: flex;
  border: none;
  background: var(--button-cl);
  align-items: center;
  padding: 0.2rem 1rem;
  color: var(--text-cl);
  border-radius: 0.5rem 1rem;
}

.action-btn span {
  font-size: var(--fs-sm);
}
.action-btn:nth-child(2) {
  background: linear-gradient(to right, orange, orangered);
}
.icon {
  width: 20px;
  height: 20px;
}
</style>
