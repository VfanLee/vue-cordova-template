<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div>contact page</div>

  <van-button type="primary" @click="count++">{{ count }}</van-button>
</template>

<style lang="scss" scoped></style>
