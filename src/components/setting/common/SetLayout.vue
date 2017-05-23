<template>
  <div class="setting full-screen">
    <SetHead></SetHead>

    <div class="setting-content">
      <router-link to="/settings" class="setting-jump">
        <Icon type="ios-cog" size="30"></Icon>
      </router-link>
      <transition name="fade" mode="out-in" appear>
        <router-view keep-alive></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import SetHead from './SetHead.vue'
  export default{
    components: {
      SetHead
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .setting {
    background: #ebebec;
    &-content {
      position: relative;
      width: 855px;
      margin: 0 auto;
      padding: 70px 0;
    }
    &-jump {
      position: absolute;
      top: 70px;
      left: -20px;
    }
  }
</style>
