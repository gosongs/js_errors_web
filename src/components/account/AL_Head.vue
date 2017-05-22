<template>
  <div class="head">
    <div class="head-logo">
      <b>前端错误收集平台</b>
    </div>
    <div class="head-tour">
      <b>Need an account?</b>
      <Button type="success">Create account</Button>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss" type="text/scss">
  $headH: 71px;
  .head {
    padding: 0 30px;
    height: $headH;
    line-height: $headH;
    border-bottom: 1px solid #eee;
    background-color: #f4f4f4;
    &-logo {
      float: left;
      font-size: 18px;
    }
    &-tour {
      b {
        color: #333;
        font-size: 13px;
      }
      float: right;
    }
  }
</style>
