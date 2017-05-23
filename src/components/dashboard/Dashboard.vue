<template>
  <div>
    <h1>
      Hello VUE
    </h1>
  </div>
</template>

<script>
  export default{
    components: {

    },
    created(){
      const key = this.$route.params.key;
    }
  }
</script>

<style scoped lang="scss" type="text/scss">

</style>
