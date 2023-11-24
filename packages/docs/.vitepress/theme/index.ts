import { h } from 'vue';
import { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import AsideSponsors from './components/AsideSponsors.vue';
import './styles/index.css';

const theme: Theme = {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-ads-after': () => h(AsideSponsors),
    });
  },
};

export default theme;
