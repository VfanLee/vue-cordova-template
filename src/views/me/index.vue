<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div>me page</div>

  <input type="text" v-model="value" />
</template>
