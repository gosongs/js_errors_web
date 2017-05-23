<template>
  <div class="list">
    <div class="panel">
      <div class="panel-title">
        <h3>错误列表</h3>
      </div>
      <div class="panel-body">
        <div class="data-table">
          <Table stripe :columns="columns" :data="dataList"></Table>
        </div>

        <div class="data-pager clearfix">
          <Page style="float: right;"
                :total="dataTotal"
                show-sizer
                show-elevator
                size="small"
                @on-change="changePageNow"
                @on-page-size-change="changePageSize"></Page>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        columns: [
          {
            title: 'ID',
            key: 'id',
            width: 50
          },
          {
            title: '错误名',
            key: 'errName',
            width: 150
          },
          {
            title: '路径',
            key: 'errUrl',
            width: 200
          },
          {
            title: '行号',
            key: 'errLine',
            width: 80
          },
          {
            title: '发生次数',
            key: 'errTime',
            width: 100
          },
          {
            title: '浏览器类型',
            key: 'browserType',
            width: 100
          },
          {
            title: '浏览器版本',
            key: 'browserVersion',
            width: 100
          },
          {
            title: '状态',
            key: 'status',
            width: 100
          },
          {
            title: 'IP',
            key: 'ip',
            width: 100
          },
          {
            title: '自定义数据',
            key: 'userData',
            width: 100
          },
          {
            title: '首次发生',
            key: 'createAt',
            width: 150,
            render (row, column, index) {
              let t = new Date(row.createdAt).format('yyyy-MM-dd hh:mm:ss')
              return t + '';
            }
          },
          {
            title: '上次重现',
            key: 'createAt',
            width: 150,
            render (row, column, index) {
              let t = new Date(row.updatedAt).format('yyyy-MM-dd hh:mm:ss')
              return t + '';
            }
          }
        ],
        pageNow: 1,
        pageSize: 10
      }
    },
    computed: {
      dataList(){
        const _ = this.$store.getters.errorsList;
        return _ ? _.rows : [];
      },
      dataTotal(){
        const _ = this.$store.getters.errorsList;
        return _ ? _.count : 0;
      }
    },
    methods: {
      changePageNow(now){
        this.pageNow = now;
        this.getList();
      },
      changePageSize(size){
        this.pageSize = size;
        this.getList();
      },
      getList(){
        const data = {
          uid: this.$store.state.user.uid,
          key: this.$route.params.key,
          pageNow: this.pageNow,
          pageSize: this.pageSize
        };
        this.$store.dispatch('getErrorsList', data)
      }
    },
    created(){
      this.getList();
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .data {
    &-table {

    }
    &-pager {
      margin-top: 10px;
    }
  }
</style>
