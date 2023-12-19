<script lang="ts" setup>
  import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
  import { useConfigStore } from './stores/use-config';

  useConfigStore();

  onLaunch(() => {
    console.log('App Launch');
  });

  onShow(() => {
    console.log('App Show');
  });

  onHide(() => {
    console.log('App Hide');
  });
</script>

<style lang="scss">
  page {
    height: 100%;
  }
</style>
