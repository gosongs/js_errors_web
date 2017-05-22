<template>
  <div class="layout">
    <Side></Side>
    <div class="layout-content">
      <MyHead></MyHead>
      <div class="layout-main">
        <transition name="fade" mode="out-in" appear>
          <router-view keep-alive></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import MyHead from './Head.vue'
  import Side from './Side.vue'
  export default{
    components: {
      MyHead,
      Side
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .layout {
    height: 100%;
    width: 100%;
    &-content{
      position: fixed;
      top: 0;
      left: 220px;
      width: calc(100% - 220px);
      height: 100%;
    }
    &-main {
      padding: 20px;
      background: #eceff1;
      height: 100%;
      width: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
</style>
