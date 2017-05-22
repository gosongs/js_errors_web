<template>
  <div class="list">
    <div class="panel">
      <div class="panel-title">
        <h3>我的项目</h3>
        <div class="panel-handle">
          <router-link to="/project/create">
            <Button type="success" shape="circle">
              <Icon type="plus-round"></Icon>
              创建项目
            </Button>
          </router-link>
        </div>
      </div>
      <div class="panel-body">
        <Table stripe :columns="columns" :data="projectList"></Table>
      </div>
      <div class="panel-foot">

      </div>
    </div>

    <Modal
      v-model="removeModal"
      title="删除"
      @on-hide="hideModal"
      @on-ok="removeOk">
      <p>确认删除吗? 删除以后不可恢复。</p>
    </Modal>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        projectList: [],
        columns: [
          {
            title: 'ID',
            key: 'id',
            width: 50
          },
          {
            title: 'Key',
            key: 'key',
            width: 280
          },
          {
            title: '名称',
            key: 'name',
            width: 130,
            render(row, column, index){
              return `<span class="project-name" @click="jumpToProject(${index})">${row.name}</span>`
            }
          },
          {
            title: '状态',
            key: 'status',
            width: 100,
            render(row, column, index){
              return row.status ? '已激活' : '未激活'
            }
          },
          {
            title: '类型',
            key: 'type',
            width: 100
          },
          {
            title: '创建时间',
            key: 'createdAt',
            width: 150,
            render (row, column, index) {
              let t = new Date(row.createdAt).format('yyyy-MM-dd hh:mm:ss')
              return t + '';
            }
          },
          {
            title: '更新时间',
            key: 'updatedAt',
            width: 150,
            render (row, column, index) {
              let t = new Date(row.updatedAt).format('yyyy-MM-dd hh:mm:ss')
              return t + '';
            }
          },
          {
            title: '操作',
            width: 200,
            render (row, column, index) {
              return `<i-button type="text" style="color:#039be5" size="small" @click="fireEdit(${index})">
                        编辑
                      </i-button>
                      <i-button type="text" style="color:#039be5" size="small" @click="fireRemove(${index})">
                        删除
                      </i-button>`;
            }
          }
        ],
        currentIndex: null
      }
    },
    computed: {
      removeModal(){
        return this.$store.state.currentModal === 'removeProjectModal';
      },
      user(){
        return this.$store.state.user;
      }
    },
    methods: {
      hideModal(){
        this.currentIndex = null;
        this.$store.commit('CURRENT_MODAL', '');
      },
      showModal(name){
        this.$store.commit('CURRENT_MODAL', name);
      },
      fireRemove(index){
        this.currentIndex = index;
        this.showModal('removeProjectModal');
      },
      removeOk(){
        const api = this.$store.state.DEV_API;
        const uid = this.user.uid;
        const pid = this.projectList[this.currentIndex].pid;
        $.post(api + '/project/remove', {uid, pid})
          .then(res => {
            if (res.Code === 0) {
              this.getList();
            } else {
              this.$Message.error(res.Message);
            }
          })
      },
      getList(){
        const uid = this.$store.state.user.uid;
        const api = this.$store.state.DEV_API;
        $.post(api + '/project/list', {uid})
          .then(res => {
            if (res.Code === 0) {
              this.projectList = res.Data;
            } else {
              this.$Message.error(res.Message);
            }
          })
      },
      jumpToProject(index){
        console.log(this.projectList[index])
        const {type, status, pid} = this.projectList[index];
        if (status) {

        } else {
          this.$router.push('/project/init/' + type + '/' + pid)
        }
      }
    },
    created(){
      this.getList();
    }
  }
</script>

<style lang="scss" type="text/scss">
  .project-name {
    color: #039be5;
    cursor: pointer;
  }
</style>
