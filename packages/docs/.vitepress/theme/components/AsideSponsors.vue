<script setup lang="ts">
  import { useData } from 'vitepress';
  import { watchEffect } from 'vue';
  const { theme, page, site } = useData();

  watchEffect(() => {
    console.log(theme.value, '=================', page.value, site.value);
  });
</script>

<template>
  <div>
    <div class="model"> </div>
  </div>
</template>

<style scoped>
  .model {
    width: 280px;
    height: 100%;
    position: fixed;
    color: #000;
    top: 100px;
    box-sizing: border-box;
    background-image: url(../../../static/image/iPhoneX_model.png);
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 30px;
    padding: 48px 23px 38px 16px;
    overflow-y: auto;
    z-index: 10;
    margin: 0;
    font-size: 16px;
  }
</style>
