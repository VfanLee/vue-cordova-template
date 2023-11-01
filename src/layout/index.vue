<script setup>
import Tabbar from './tabbar/index.vue'
</script>

<template>
  <main class="main__container">
    <div class="app-main">
      <RouterView v-slot="{ Component }">
        <KeepAlive>
          <component :is="Component"></component>
        </KeepAlive>
      </RouterView>
    </div>

    <Tabbar />
  </main>
</template>

<style lang="scss" scoped>
.app-main {
  padding-bottom: 50px;
}
</style>
