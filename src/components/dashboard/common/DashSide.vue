<template>
  <div class="side">
    <div class="side-all">
      <b>4</b> Errors
    </div>
    <div class="side-menu">
      <div @click="jumpRoute('today')" class="side-menu-item">
        Introduced Today (<b>4</b>)
      </div>
      <div @click="jumpRoute('all')" class="side-menu-item">
        All (<b>4</b>)
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    methods: {
      jumpRoute(name){
        const key = this.$route.params.key;
        this.$router.push('/dashboard/' + key + '/' + name);
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
