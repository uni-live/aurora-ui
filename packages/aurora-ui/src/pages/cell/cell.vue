<template>
  <view class="cell-page">
    <view class="u-page__item">
      <text class="u-page__item__title">基础功能</text>
      <a-cell-group>
        <a-cell title="uView UI" value="内容" clickable required :isLink="true"></a-cell>
        <a-cell title="利剑出鞘,一统江湖" value="内容" label="挣脱束缚,向往自由"></a-cell>
      </a-cell-group>
    </view>
    <view class="u-page__item">
      <text class="u-page__item__title">自定义图标/图片</text>
      <a-cell-group>
        <a-cell title="单元格" icon="lock-fill"></a-cell>
        <a-cell title="单元格" icon="https://cdn.uviewui.com/uview/example/tag.png"></a-cell>
      </a-cell-group>
    </view>
    <view class="u-page__item">
      <text class="u-page__item__title">显示右箭头</text>
      <a-cell-group>
        <a-cell title="单元格" value="组件" isLink></a-cell>
        <a-cell title="单元格" value="工具" arrow-direction="up" isLink></a-cell>
        <a-cell title="单元格" value="模板" arrow-direction="down" isLink></a-cell>
      </a-cell-group>
    </view>
    <view class="u-page__item">
      <text class="u-page__item__title">右侧内容垂直居中</text>
      <a-cell-group>
        <a-cell title="单元格" value="内容" label="描述信息" center></a-cell>
      </a-cell-group>
    </view>
    <!-- <view class="u-page__item">
      <text class="u-page__item__title">自定义插槽</text>
      <a-cell-group>
        <a-cell value="内容">
          <view slot="title" class="u-slot-title">
            <text class="u-cell-text">单元格</text>
            <a-tag text="标签" plain size="mini" type="warning"> </a-tag>
          </view>
        </a-cell>
        <a-cell title="单元格" isLink>
          <text slot="value" class="u-slot-value">99</text>
        </a-cell>
      </a-cell-group>
    </view> -->
  </view>
</template>
<script lang="ts">
  export default {
    data() {
      return {};
    },
    methods: {
      click() {
        console.log('Cell is clicked.');
      },
    },
  };
</script>

<style lang="scss">
  page {
    background-color: #f3f4f6;
  }
  .cell-page {
    background-color: #ffffff;
  }

  .cell-box {
    &__title {
      font-size: 14px;
      color: rgb(143, 156, 162);
      margin: 20px 0px 0px 15px;
    }

    &__block {
      // background-color: #fff;
      margin-top: 20px;
    }
  }

  .u-page {
    padding: 0;

    &__item {
      &__title {
        display: flex;
        width: 100%;
        color: #909193;
        background-color: #f3f4f6;
        padding: 15px;
        font-size: 15px;

        &__slot-title {
          // color: $u-primary;
          font-size: 14px;
        }
      }
    }
  }

  .u-slot-title {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .u-cell-text {
    font-size: 15px;
    line-height: 22px;
    color: #303133;
    margin-right: 5px;
  }

  .u-slot-value {
    line-height: 17px;
    text-align: center;
    font-size: 10px;
    padding: 0 5px;
    height: 17px;
    color: #ffffff;
    border-radius: 100px;
    background-color: #f56c6c;
  }
</style>
