<template>
  <div class="head">
    <div class="head-inner clearfix">
      <router-link class="head-dashboard" to="/dashboard/home">< return to dashboard</router-link>

      <MiniHeadAccount></MiniHeadAccount>
    </div>
  </div>
</template>

<script>
  import MiniHeadAccount from '../../common/MiniHeadAccount.vue'
  export default{
    components: {
      MiniHeadAccount
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .head {
    height: 35px;
    &-inner {
      position: fixed;
      width: 100%;
      padding: 0 1.75rem;
      background: #212129;
      box-shadow: 0 -1px 0 0 rgba(0, 0, 0, .15) inset;
      line-height: 35px;
    }
    &-dashboard {
      float: left;
      color: rgba(255, 255, 255, .8225);
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
      &:hover {
        color: rgba(255, 255, 255, .8875);
      }
    }
  }
</style>
