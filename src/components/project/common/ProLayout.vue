<template>
  <div class="pro">
    <div class="pro-head">
      <router-link class="pro-head-return" to="/dashboard">< return to dashboard</router-link>
    </div>

  </div>
</template>

<script>

</script>

<style scoped lang="scss" type="text/scss">
  .pro {
    &-head {
      position: fixed;
      width: 100%;
      padding-top: 1px;
      background: #212129;
      box-shadow: 0 -1px 0 0 rgba(0, 0, 0, .15) inset;
      line-height: 35px;
    }
    &-head-return {
      color: rgba(255, 255, 255, .8225);
      text-transform: uppercase;
      font-size: 12px;
      padding: 0 25px;
      font-weight: bold;
      &:hover {
        color: rgba(255, 255, 255, .8875);
      }
    }
  }
</style>
