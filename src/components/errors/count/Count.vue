<template>
  <div class="count">
    <div class="panel">
      <div class="panel-body">
        <Row :gutter="20">
          <Col :span="8">
          <C_BrowserType></C_BrowserType>
          </Col>
          <Col :span="8">

          </Col>
          <Col :span="8">

          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
  import C_BrowserType from './C_BrowserType.vue'
  export default{
    components: {
      C_BrowserType
    }
  }
</script>

<style scoped lang="scss" type="text/scss">

</style>
