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
          <Table stripe :columns="columns" :data="projectsList"></Table>
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
              return `<span class="project-name" @click="jumpToProject(${index})">${row.name}</span>`
            }
          },
          {
            title: 'STATUS',
            key: 'status',
            width: 100,
            render(row, column, index){
              return row.status ? '已激活' : '未激活'
            }
          },
          {
            title: 'TYPE',
            key: 'type',
            width: 100
          },
          {
            title: 'CREATED AT',
            key: 'createdAt',
            width: 150,
            render (row, column, index) {
              let t = new Date(row.createdAt).format('yyyy-MM-dd hh:mm:ss')
              return t + '';
            }
          },
          {
            title: 'UPDATED AT',
            key: 'updatedAt',
            width: 150,
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
      jumpToProject(index){
        const {type, status, key} = this.projectsList[index];
        if (status) {
          this.$router.push('/settings/proconfig/' + type + '/' + key)
        } else {
          this.$router.push('/settings/proinit/' + type + '/' + key)
        }
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
