<template>
  <div class="all">
    <AllCount></AllCount>
    <AllData></AllData>
  </div>
</template>

<script>
  import AllCount from './AllCount.vue'
  import AllData from './AllData.vue'
  export default{
    components: {
      AllCount,
      AllData
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .all{
    padding: 20px;
  }
</style>
