<template>
  <div class="all-data">
    <div class="panel">
      <div class="panel-title">
        <h3>All errors data</h3>
      </div>
      <div class="panel-body">
        <div class="all-data-table">
          <Table stripe :columns="columns" :data="dataList"></Table>
        </div>

        <div class="all-data-pager clearfix">
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
            title: 'Name',
            key: 'errName',
            width: 150
          },
          {
            title: 'Url',
            key: 'errUrl',
            width: 200
          },
          {
            title: 'Line',
            key: 'errLine',
            width: 80
          },
          {
            title: 'Times',
            key: 'errTime',
            width: 100,
            sortable: true
          },
          {
            title: 'Browser type',
            key: 'browserType',
            width: 120
          },
          {
            title: 'Browser version',
            key: 'browserVersion',
            width: 130
          },
          {
            title: 'Status',
            key: 'status',
            width: 100,
            render(row, column, index){
              switch (row.status) {
                case 'open':
                  return `<Tag color="blue">${row.status}</Tag>`;
                  break;
                case 'closed':
                  return `<Tag color="yellow">${row.status}</Tag>`;
                  break;
                case 'ignore':
                  return `<Tag color="green">${row.status}</Tag>`;
                  break;
                case 'immediately':
                  return `<Tag color="red">${row.status}</Tag>`;
                  break;
                default:
                  break;
              }
            },
            filters: [
              {
                label: 'open',
                value: 1
              },
              {
                label: 'closed',
                value: 2
              },
              {
                label: 'ignore',
                value: 3
              },
              {
                label: 'immediately',
                value: 4
              }
            ],
            filterMultiple: false,
            filterMethod (value, row) {
              switch (value) {
                case 1:
                  return row.status === 'open';
                  break;
                case 2:
                  return row.status === 'closed';
                  break;
                case 3:
                  return row.status === 'ignore';
                  break;
                case 4:
                  return row.status === 'immediately';
                  break;
                default:
                  break;
              }
            }
          },
          {
            title: 'IP',
            key: 'ip',
            width: 100
          },
          {
            title: 'User data',
            key: 'userData',
            width: 100
          },
          {
            title: 'Create time',
            width: 150,
            render (row, column, index) {
              let t = new Date(row.createdAt).format('yyyy-MM-dd hh:mm:ss')
              return t + '';
            }
          },
          {
            title: 'Update time',
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
    },
    watch: {
      '$route': function () {
        this.getList();
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .all {
    &-data-pager {
      margin-top: 20px;
    }
  }
</style>
