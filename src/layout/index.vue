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

<style lang="scss">
.main__container {
  padding-bottom: 60px;
}
</style>
