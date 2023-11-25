<script setup lang="ts">
  import { useData } from 'vitepress';
  import { watchEffect, ref } from 'vue';
  const { theme, page, site } = useData();

  const href = ref('https://h5.uviewui.com/#/');
  const aaa = ref('400px  !important');

  watchEffect(() => {});
</script>

<template>
  <div class="demo-model">
    <div class="model-content">
      <iframe id="demo-modal" class="iframe" scrolling="auto" frameborder="0" :src="href"></iframe>
    </div>
  </div>
</template>

<style>
  .aside {
    max-width: v-bind(aaa);
  }
  .demo-model {
    font-size: 16px;
    width: 330px;
    position: fixed;
    z-index: 10;
    margin: 0;
    /* top: calc(3.6em + 3px); */
    top: calc((100vh - 560px - 3.6rem) / 2 + 3.6rem);
    box-sizing: border-box;
    overflow-y: auto;
    /* background-image: url(/iPhone_model.png); */
    background-image: url(../../../static/image/iPhoneX_model.png);
    background-repeat: no-repeat;
    background-size: 100%;
    /* box-shadow: 0 4px 25px 0 rgba(4, 40, 60, 0.18); */
    border-radius: 30px;
    padding: 48px 13px 25px 13px;
  }

  .model-content {
    box-sizing: border-box;
    height: 100%;
    border-bottom-left-radius: 30px;
  }

  .iframe {
    height: 100%;
    width: 100%;
    border-radius: 30px;
  }

  @media screen and (min-width: 1200px) {
    .demo-model {
      width: 310px;
      height: calc(310px * 143.6 / 70.9);
    }

    .demo-model {
      top: calc((100vh - 310px * 143.6 / 70.9 - 3.6rem) / 2 + 3.6rem);
    }
  }

  @media (max-width: 1200px) {
    .demo-model {
      display: none;
    }
  }

  @media screen and (min-width: 1366px) {
    .demo-model {
      width: 270px;
      height: calc(270px * 143.6 / 70.9);
      top: calc((100vh - 270px * 143.6 / 70.9 - 3.6rem) / 2 + 3.6rem);
    }
  }

  @media screen and (min-width: 1500px) {
    .demo-model {
      width: 310px;
      height: calc(310px * 143.6 / 70.9);
      top: calc((100vh - 310px * 143.6 / 70.9 - 3.6rem) / 2 + 3.6rem);
    }
  }

  @media screen and (min-width: 1920px) {
    .demo-model {
      width: 360px;
      height: calc(360px * 143.6 / 70.9);
      top: calc((100vh - 350px * 143.6 / 70.9 - 3.6rem) / 2 + 3.6rem);
    }
  }
</style>
