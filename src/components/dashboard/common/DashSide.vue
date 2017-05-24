<template>
  <div class="side">
    <div class="side-all">
      <b>{{errorsCount.all}}</b> Errors now
    </div>
    <div class="side-menu">
      <div @click="jumpRoute('today')" class="side-menu-item">
        Introduced Today (<b>{{errorsCount.today}}</b>)
      </div>
      <div @click="jumpRoute('all')" class="side-menu-item">
        All (<b>{{errorsCount.all}}</b>)
      </div>
      <div @click="jumpRoute('all')" class="side-menu-item second-level">
        Open (<b>{{errorsCount.status.open}}</b>)
      </div>
      <div @click="jumpRoute('all')" class="side-menu-item second-level">
        Closed (<b>{{errorsCount.status.closed}}</b>)
      </div>
      <div @click="jumpRoute('all')" class="side-menu-item second-level">
        Ignore (<b>{{errorsCount.status.ignore}}</b>)
      </div>
      <div @click="jumpRoute('all')" class="side-menu-item second-level">
        Immediately (<b>{{errorsCount.status.immediately}}</b>)
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        errorsCount: {
          status: {
            open: 0,
            closed: 0,
            ignore: 0,
            immediately: 0
          }
        }
      }
    },
    methods: {
      jumpRoute(name){
        const key = this.$route.params.key;
        this.$router.push('/dashboard/' + key + '/' + name);
      },
      getErrorsCount(){
        const data = {
          key: this.$route.params.key
        };
        if (data.key) {
          this.$store.dispatch('getErrorsCount', data)
        }
      }
    },
    computed: {
      counts(){
        return this.$store.getters.errorsCount
      }
    },
    created(){
      this.getErrorsCount();
    },
    watch: {
      '$route': function () {
        this.getErrorsCount();
      },
      'counts': function () {
        this.errorsCount = this.counts;
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .side {
    float: left;
    background: #ebebec;
    border-right: 1px solid #dcdcdd;
    width: 21.5rem;
    height: 100%;
    &-all {
      color: #212129;
      padding: 0 1.75rem;
      font-size: 1.99979rem;
      line-height: 2.5rem;
      margin: 2.25rem 0;
    }
    &-list {
      font-size: 13px;
    }
    &-menu-item {
      font-weight: bold;
      display: inline-block;
      position: relative;
      padding: 0 1.75rem;
      width: 100%;
      cursor: pointer;
      color: #9b9b9f;
      font-size: 1.15rem;
      line-height: 2.25rem;
      -webkit-transition: color .05s ease-out, background-color .05s ease-out;
      transition: color .05s ease-out, background-color .05s ease-out;
      &.second-level {
        text-indent: 0.8em;
      }
      &:hover {
        color: #212129;
        background: rgba(10, 10, 20, 0.03);
      }
      &:hover:before {
        background: #4b4b58;
      }
      &.active {
        background: #9f9fa9;
      }
      &:before {
        position: absolute;
        display: block;
        content: "";
        left: 0;
        width: .333rem;
        height: 100%;
      }
    }
  }
</style>
