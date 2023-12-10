<script lang="ts">
  export default {
    onLaunch: function () {
      console.log('App Launch');
    },
    onShow: async function () {
      console.log('App Show');
    },
    onHide: function () {
      console.log('App Hide');
    },
  };
</script>

<style lang="scss">
  /*每个页面公共css */
  @use '@/uni_modules/aurora-ui/design/index.scss' as *;

  @use '@/uni_modules/aurora-ui/design/shared.scss' as *;

  page {
    background-color: getCssVar('bg-color');
    height: 100%;
  }
</style>
