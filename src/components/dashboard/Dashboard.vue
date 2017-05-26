<template>
  <div class="home">
    Loading
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    projectsList() {
      return this.$store.getters.projectsList;
    }
  },
  created() {
    if (this.projectsList.length) {
      const firstKey = this.projectsList[0].key;
      this.$router.push('/dashboard/all/' + firstKey);
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
.home {
  padding: 20px;
}
</style>
