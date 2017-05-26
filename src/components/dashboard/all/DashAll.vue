<template>
  <div class="all">
    <div v-if="project.status">
      <AllCount></AllCount>
      <AllData></AllData>
    </div>
  </div>
</template>

<script>
import AllCount from './AllCount.vue'
import AllData from './AllData.vue'
export default {
  components: {
    AllCount,
    AllData
  },
  data() {
    return {
      key: ''
    }
  },
  computed: {
    project() {
      const list = this.$store.getters.projectsList;
      let p = {
        name: ''
      };
      if (list) {
        list.map((_, i) => {
          if (_.key = this.key) {
            p = _;
          }
        })
      }
      return p;
    }
  },
  created() {
    this.key = this.$route.params.key;
  },
  watch: {
    'project': function () {

    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
.all {
  padding: 20px;
}
</style>
