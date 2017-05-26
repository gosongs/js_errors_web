<template>
  <div class="config">
    <div class="breadcrumb">
      <router-link class="breadcrumb-link" to="/settings/projects">Projects</router-link>
      >
      <span class="breadcrumb-link active">{{type}}</span>
    </div>
    <div class="config-item clearfix">
      <div class="config-item-left">
        Change the name and type of your project, access the Notifier library API key, and manage the way Bugsnag groups
        incoming error data
      </div>
      <div class="config-item-right">
        <div class="panel p0">
          <div class="panel-body">
            <div class="config-label bg">
              <h3>Project Name</h3>
              <h4>{{project.name}}</h4>
            </div>

            <div class="config-label bg">
              <h3>Project Type</h3>
              <h4>{{project.type}}</h4>
            </div>

            <div class="config-label bg">
              <h3>Project API Key</h3>
              <h4>{{project.key}}</h4>
            </div>

            <div class="config-label bg" @click="clearPro">
              <p class="link">Clear error data</p>
            </div>

            <div class="config-label bg" @click="deletePro">
              <p class="link">Delete project</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal
      v-model="deleteProModal"
      title="DELETE"
      ok-text="OK"
      cancel-text="Cancel"
      @on-hide="hideModal"
      @on-ok="deleteProOk">
      <p>Confirm delete? Cannot be restored after deletion.</p>
    </Modal>

    <Modal
      v-model="clearProModal"
      title="CLEAR"
      ok-text="OK"
      cancel-text="Cancel"
      @on-hide="hideModal"
      @on-ok="clearProOk">
      <p>Clear error data? Cannot be restored after deletion.</p>
    </Modal>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        type: '',
        key: ''
      }
    },
    computed: {
      deleteProModal(){
        return this.$store.state.currentModal === 'DELETE_MODAL';
      },
      clearProModal(){
        return this.$store.state.currentModal === 'CLEAR_MODAL';
      },
      project(){
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
    methods: {
      hideModal(){
        this.$store.commit('CURRENT_MODAL', '');
      },
      deletePro(){
        this.$store.commit('CURRENT_MODAL', 'DELETE_MODAL');
      },
      deleteProOk(){
        const api = this.$store.state.DEV_API;
        const data = {
          uid: this.$store.state.user.uid,
          key: this.key
        };
        $.post(api + '/project/remove', data)
          .then(res => {
            if (res.Code === 0) {
              this.$Message.success('Success');
              this.$router.push('/settings/projects');
            } else {
              this.$Message.error(res.Message);
            }
          })
      },
      clearPro(){
        this.$store.commit('CURRENT_MODAL', 'CLEAR_MODAL');
      },
      clearProOk(){
        const api = this.$store.state.DEV_API;
        const data = {
          uid: this.$store.state.user.uid,
          key: this.key
        };
        $.post(api + '/project/clear', data)
          .then(res => {
            if (res.Code === 0) {
              this.$Message.success('Success');
              this.$router.push('/settings/projects');
            } else {
              this.$Message.error(res.Message);
            }
          })
      }
    },
    created(){
      const {type, key} = this.$route.params;
      this.key = key;
      this.type = type;
      if (this.$store.getters.projectsList) {
        const data = {
          uid: this.$store.state.user.uid
        };
        this.$store.dispatch('getProjectsList', data);
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .p0 {
    padding: 0;
  }

  .config {
    &-item {
      margin-bottom: 3rem;
    }
    &-item-left {
      float: left;
      width: 40%;
      padding-right: 5rem;
      font-size: 16px;
      font-weight: 400;
      color: #69696f;
      margin-top: 10px;
    }
    &-item-right {
      float: right;
      width: 60%;
    }
    &-label {
      cursor: pointer;
      position: relative;
      border-bottom: 1px solid #f3f3f7;
      padding: 17px 50px 17px 20px;
      -webkit-transition: background-color .05s;
      transition: background-color .05s;
      &.bg {
        background-color: transparent;
        background-image: url('/static/img/arrow.svg');
        background-repeat: no-repeat;
        background-position: right 1.5rem center;
        background-size: 12px 12px;
      }
      &:hover {
        background-color: #f6f8f8;
      }
      h3 {
        font-weight: 600;
        color: #69696f;
        font-size: 14px;
      }
      h4 {
        color: #212129;
        font-size: 14px;
      }
      span {
        position: absolute;
        right: 20px;
        top: 10px;
      }
      .link {
        line-height: 14px;
        font-weight: 500;
        font-size: 14px;
        color: #2B81C1;
      }
    }
  }
</style>
