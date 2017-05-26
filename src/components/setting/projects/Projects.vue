<template>
  <div class="pro">
    <div class="breadcrumb">
      <span class="breadcrumb-link active">Projects</span>
    </div>

    <div class="pro-list">
      <div class="panel">
        <div class="panel-title">
          <div class="panel-handle">
            <router-link to="/settings/procreate">
              <Button type="success" shape="circle">ADD PROJECTS</Button>
            </router-link>
          </div>
        </div>
        <div class="panel-body">
          <Table stripe style="cursor: pointer;" :columns="columns" :data="projectsList"
                 @on-row-click="clickRow"></Table>
        </div>
        <div class="panel-foot">

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
            title: 'PROJECT NAME',
            key: 'name',
            render(row, column, index){
              return `<b class="project-name">${row.name}</b>`
            }
          },
          {
            title: 'STATUS',
            key: 'status',
            width: 100,
            render(row, column, index){
              return row.status ? 'Activated' : 'Not active'
            }
          },
          {
            title: 'TYPE',
            key: 'type',
            width: 100
          },
          {
            title: 'CREATED AT',
            width: 170,
            render (row, column, index) {
              let t = new Date(row.createdAt).format('yyyy-MM-dd hh:mm:ss')
              return t + '';
            }
          },
          {
            title: 'UPDATED AT',
            width: 170,
            render (row, column, index) {
              let t = new Date(row.updatedAt).format('yyyy-MM-dd hh:mm:ss')
              return t + '';
            }
          }
        ]
      }
    },
    computed: {
      user(){
        return this.$store.state.user;
      },
      projectsList(){
        return this.$store.getters.projectsList;
      }
    },
    methods: {
      getList(){
        const data = {
          uid: this.$store.state.user.uid
        };
        this.$store.dispatch('getProjectsList', data);
      },
      jumpToProject(row){
        const {type, status, key} = row;
        if (status) {
          this.$router.push('/settings/proconfig/' + type + '/' + key)
        } else {
          this.$router.push('/settings/proinit/' + type + '/' + key)
        }
      },
      clickRow(row){
        this.jumpToProject(row);
      }
    },
    created(){
      this.getList();
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .pro {
    &-list {
      padding: 15px;
    }
  }

  .data-pager {
    margin-top: 15px;
  }
</style>
