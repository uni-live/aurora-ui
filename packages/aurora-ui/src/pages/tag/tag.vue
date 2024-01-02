<template>
  <view class="u-page">
    <view class="u-demo-block">
      <text class="u-demo-block__title">基础功能</text>
      <view class="u-demo-block__content">
        <view class="u-page__tag-item">
          <a-tag>标签</a-tag>
        </view>
      </view>
    </view>
    <view class="u-demo-block">
      <text class="u-demo-block__title">自定义主题</text>
      <view class="u-demo-block__content">
        <view class="u-page__tag-item">
          <a-tag>标签</a-tag>
        </view>
        <view class="u-page__tag-item">
          <a-tag type="warning">标签 </a-tag>
        </view>
        <view class="u-page__tag-item">
          <a-tag type="success">标签 </a-tag>
        </view>
        <view class="u-page__tag-item">
          <a-tag type="error"> 标签</a-tag>
        </view>
      </view>
    </view>
    <view class="u-demo-block">
      <text class="u-demo-block__title">圆形标签</text>
      <view class="u-demo-block__content">
        <view class="u-page__tag-item">
          <a-tag type="warning" :round="100">标签 </a-tag>
        </view>
      </view>
    </view>
    <view class="u-demo-block">
      <text class="u-demo-block__title">镂空标签</text>
      <view class="u-demo-block__content">
        <view class="u-page__tag-item">
          <a-tag plain> 标签</a-tag>
        </view>
        <view class="u-page__tag-item">
          <a-tag type="warning" plain> 标签</a-tag>
        </view>
        <view class="u-page__tag-item">
          <a-tag type="success" plain>标签 </a-tag>
        </view>
        <view class="u-page__tag-item">
          <a-tag type="error" plain> 标签</a-tag>
        </view>
      </view>
    </view>
    <view class="u-demo-block">
      <text class="u-demo-block__title">文本类型</text>
      <view class="u-demo-block__content">
        <view class="u-page__tag-item">
          <a-tag text>标签</a-tag>
        </view>
        <view class="u-page__tag-item">
          <a-tag type="warning" text>标签</a-tag>
        </view>
        <view class="u-page__tag-item">
          <a-tag type="success" text>标签</a-tag>
        </view>
        <view class="u-page__tag-item">
          <a-tag type="error" text>标签</a-tag>
        </view>
      </view>
    </view>
    <view class="u-demo-block">
      <text class="u-demo-block__title">自定义尺寸</text>
      <view class="u-demo-block__content">
        <view class="u-page__tag-item">
          <a-tag size="mini">mini</a-tag>
        </view>
        <view class="u-page__tag-item">
          <a-tag size="small">小的</a-tag>
        </view>
        <view class="u-page__tag-item">
          <a-tag type="warning">正常</a-tag>
        </view>
        <view class="u-page__tag-item">
          <a-tag type="success" size="large">最大</a-tag>
        </view>
      </view>
    </view>
    <view class="u-demo-block">
      <text class="u-demo-block__title">可关闭标签</text>
      <view class="u-demo-block__content">
        <view class="u-page__tag-item">
          <a-tag type="warning" closable> 标签 </a-tag>
        </view>
      </view>
    </view>
    <view class="u-demo-block">
      <text class="u-demo-block__title">带图片和图标</text>
      <view class="u-demo-block__content">
        <view class="u-page__tag-item">
          <a-tag icon="map" plain>标签 </a-tag>
        </view>
        <view class="u-page__tag-item">
          <a-tag type="warning" plain icon="tags-fill"> 标签</a-tag>
        </view>
        <view class="u-page__tag-item">
          <a-tag type="success" plain icon="https://cdn.uviewui.com/uview/example/tag.png">
            标签
          </a-tag>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        close1: true,
        close2: true,
        close3: true,
        radios: [
          {
            checked: true,
          },
          {
            checked: false,
          },
          {
            checked: false,
          },
        ],
        checkboxs: [
          {
            checked: true,
          },
          {
            checked: false,
          },
          {
            checked: false,
          },
        ],
      };
    },
    methods: {
      radioClick(name) {
        this.radios.map((item, index) => {
          item.checked = index === name ? true : false;
        });
      },
      checkboxClick(name) {
        this.checkboxs[name].checked = !this.checkboxs[name].checked;
      },
    },
  };
</script>

<style lang="scss">
  .u-page__tag-item {
    margin-right: 20px;
  }

  .u-demo-block__content {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
</style>
