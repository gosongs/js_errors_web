<template>
  <div class="head clearfix">
    <div class="head-menu">

    </div>
    <div class="head-line"></div>
    <div class="head-account">

    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss" type="text/scss">
  .head {
    position: fixed;
    z-index: 2004;
    width: 100%;
    padding-top: 1px;
    background: #212129;
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, .15) inset;
    font-size: 1.15rem;
    line-height: 2.75rem;
    &-menu {
      float: left;
    }
    &-line {
      display: inline-block;
      width: 1px;
      height: 1.75rem;
      background-image: -webkit-linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, .2), rgba(255, 255, 255, 0));
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, .2), rgba(255, 255, 255, 0));
      vertical-align: middle;
    }
    &-account {
      float: right;
    }
  }
</style>
