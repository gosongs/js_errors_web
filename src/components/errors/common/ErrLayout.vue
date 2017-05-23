<template>
  <div class="errors">
    <ErrHead></ErrHead>

    <div class="errors-main">
      <ErrSide></ErrSide>

      <div class="errors-layout">
        <transition name="fade" mode="out-in" appear>
          <router-view keep-alive></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import ErrHead from './ErrHead.vue'
  import ErrSide from './ErrSide.vue'
  export default{
    components: {
      ErrHead,
      ErrSide
    }
  }
</script>

<style scoped lang="scss" type="text/scss">

</style>
