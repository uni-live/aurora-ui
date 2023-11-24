import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Aurora UI',
  description: 'A VitePress Site',

  themeConfig: {
    outline: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/introduction', activeMatch: '^/guide/' },
      { text: '组件', link: '/components/', activeMatch: '^/components/' },
      { text: 'API', link: '/markdown-examples' },
      { text: 'Functions', link: '/markdown-examples' },
      { text: '物料商城', link: '/markdown-examples' },
      { text: '赞助作者', link: '/assistance' },
      {
        text: '1.0.0',
        items: [
          {
            text: '1.0.1',
            link: 'https://github.com/vuejs/pinia/discussions',
          },
          {
            text: '1.0.2',
            link: 'https://github.com/vuejs/pinia/blob/v2/packages/pinia/CHANGELOG.md',
          },
          {
            text: '1.0.3',
            link: 'https://certification.vuejs.org/?friend=VUEROUTER',
          },
        ],
      },
    ],

    sidebar: {
      '/assistance': [],
      '/components': [
        {
          text: '基础组件',
          items: [
            { text: 'Color 色彩', link: '/markdown-examples' },
            { text: 'Icon 图标', link: '/markdown-examples' },
            { text: 'Image 图片', link: '/markdown-examples' },
            { text: 'Button 按钮', link: '/markdown-examples' },
            { text: 'Text 文本', link: '/markdown-examples' },
          ],
        },
        {
          text: '表单组件',
          items: [
            { text: 'Color 色彩', link: '/markdown-examples' },
            { text: 'Icon 图标', link: '/markdown-examples' },
            { text: 'Image 图片', link: '/markdown-examples' },
            { text: 'Button 按钮', link: '/markdown-examples' },
            { text: 'Text 文本', link: '/markdown-examples' },
          ],
        },
        {
          text: '数据组件',
          items: [
            { text: 'Color 色彩', link: '/markdown-examples' },
            { text: 'Icon 图标', link: '/markdown-examples' },
            { text: 'Image 图片', link: '/markdown-examples' },
            { text: 'Button 按钮', link: '/markdown-examples' },
            { text: 'Text 文本', link: '/markdown-examples' },
          ],
        },
        {
          text: '反馈组件',
          items: [
            { text: 'Color 色彩', link: '/markdown-examples' },
            { text: 'Icon 图标', link: '/markdown-examples' },
            { text: 'Image 图片', link: '/markdown-examples' },
            { text: 'Button 按钮', link: '/markdown-examples' },
            { text: 'Text 文本', link: '/markdown-examples' },
          ],
        },
        {
          text: '布局组件',
          items: [
            { text: 'Color 色彩', link: '/markdown-examples' },
            { text: 'Icon 图标', link: '/markdown-examples' },
            { text: 'Image 图片', link: '/markdown-examples' },
            { text: 'Button 按钮', link: '/markdown-examples' },
            { text: 'Text 文本', link: '/markdown-examples' },
          ],
        },
        {
          text: '导航组件',
          items: [
            { text: 'Color 色彩', link: '/markdown-examples' },
            { text: 'Icon 图标', link: '/markdown-examples' },
            { text: 'Image 图片', link: '/markdown-examples' },
            { text: 'Button 按钮', link: '/markdown-examples' },
            { text: 'Text 文本', link: '/markdown-examples' },
          ],
        },
        {
          text: '其他组件',
          items: [
            { text: 'Color 色彩', link: '/markdown-examples' },
            { text: 'Icon 图标', link: '/markdown-examples' },
            { text: 'Image 图片', link: '/markdown-examples' },
            { text: 'Button 按钮', link: '/markdown-examples' },
            { text: 'Text 文本', link: '/markdown-examples' },
          ],
        },
      ],
      '/': [
        {
          text: '基础',
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '安装', link: '/markdown-examples' },
            { text: '快速开始', link: '/api-examples' },
            { text: '注意事项', link: '/api-examples' },
            { text: '交流反馈', link: '/markdown-examples' },
          ],
        },
        {
          text: '进阶',
          items: [
            { text: '国际化', link: '/markdown-examples' },
            { text: '升级', link: '/api-examples' },
            { text: '主题', link: '/api-examples' },
            { text: '暗黑模式', link: '/api-examples' },
            { text: '自定义命名空间', link: '/api-examples' },
            { text: '更新日志', link: '/api-examples' },
            { text: '常见问题整理', link: '/api-examples' },
          ],
        },
        {
          text: '开发',
          items: [
            { text: '开发指南', link: '/markdown-examples' },
            { text: '开发常见问题', link: '/api-examples' },
            { text: '提交示例', link: '/api-examples' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/uni-live/aurora-ui' }],
  },
});
