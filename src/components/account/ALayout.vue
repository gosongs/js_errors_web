<template>
  <div class="a-layout full-screen">
    <div class="a-layout-main">
      <transition name="fade" mode="out-in" appear>
        <router-view keep-alive></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import AL_Head from './AL_Head.vue'
  import AL_Ads from './AL_Ads.vue'
  export default{
    components: {
      AL_Head,
      AL_Ads
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .a-layout {
    background: #f7f7f7;
    &-main {

    }
  }
</style>
