<template>
  <div class="dash full-screen">
    <DashHead></DashHead>

    <div class="dash-content clearfix">
      <DashSide></DashSide>
      <div class="dash-main">
        <transition name="fade" mode="out-in" appear>
          <router-view keep-alive></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import DashHead from './DashHead.vue'
  import DashSide from './DashSide.vue'
  export default{
    components: {
      DashHead,
      DashSide
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .dash {
    &-content {
      width: 100%;
      height: calc(100% - 35px);
    }
    &-main {
      float: right;
      height: 100%;
      width: calc(100% - 21.5rem);
      background: #f8f8f8;
    }
  }
</style>
