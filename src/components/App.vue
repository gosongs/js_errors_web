<template>
  <div id="app" class="app full-screen">
    <transition name="fade" mode="out-in" appear>
      <router-view keep-alive></router-view>
    </transition>
  </div>

</template>

<script>
  export default {
    name: 'app',
    data () {
      return {}
    }
  }
</script>

<style lang="scss" type="text/scss">
  @import "../assets/scss/app";
  .app {
    position: fixed;
    top: 0;
    left: 0;
  }
  .full-screen{
    height: 100%;
    width: 100%;
  }
</style>
