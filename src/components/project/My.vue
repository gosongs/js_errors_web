<template>
  <div class="list">
    <div class="panel">
      <div class="panel-title">
        <h3>我的项目</h3>
        <div class="panel-handle">
          <router-link to="/project/create">
            <Button type="success" shape="circle"><Icon type="plus-round"></Icon>创建项目</Button>
          </router-link>
        </div>
      </div>
      <div class="panel-body">
        <Table stripe :columns="columns" :data="projectList"></Table>
      </div>
      <div class="panel-foot">

      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        projectList: [],
        columns: [
          {
            title: '项目',
            key: 'name'
          },
          {
            title: '状态',
            key: 'enable'
          },
          {
            title: 'Key',
            key: 'key'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">

</style>
