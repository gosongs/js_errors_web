<template>
  <div class="head">
    <div class="head-inner">
      <div class="head-toggle">
        <Poptip placement="bottom-start">
          <div class="project-name">
            <span :class="project.curType"></span>
            <b>{{project.curName}}</b>
          </div>
          <div class="custom-pop" slot="content">

            <div class="project-list-item" v-for="_ in project.list" @click="jumpToProject(_.key)">
              <span :class="_.logoClass"></span>
              <b>{{_.name}}</b>
              <span>0 OPEN</span>
            </div>

            <div class="project-tool">
              <router-link to="/settings/projects">MANAGE PROJECTS</router-link>
              <router-link to="/settings/procreate">NEW PROJECT</router-link>
            </div>
          </div>
        </Poptip>
      </div>
      <div class="head-separator"></div>
      <div class="head-menu">
        <!--<router-link to="/dashboard/home" class="head-menu-item">HOME</router-link>-->
        <!--<router-link to="/" class="head-menu-item">TimeLine</router-link>-->
        <router-link to="/settings" class="head-menu-item">Settings</router-link>
      </div>

      <MiniHeadAccount></MiniHeadAccount>
    </div>
  </div>
</template>

<script>
  import MiniHeadAccount from '../../common/MiniHeadAccount.vue'
  export default{
    data(){
      return {}
    },
    components: {
      MiniHeadAccount
    },
    computed: {
      project(){
        let list = this.$store.getters.projectsList || [];
        let curName = 'Bug Tracker', curType = 'logo-default', res;
        const key = this.$route.params.key;
        if (list.length) {
          list.map((_, i) => {
            _['logoClass'] = 'logo-' + _.type;
            if (key && _.key === key) {
              curName = _.name;
              curType = _.logoClass;
            }
          });
        }

        return {
          curName,
          curType,
          list
        };
      }
    },
    methods: {
      jumpToProject(key){
//        this.$router.push('/dashboard/all/' + key);
//        $('body').click();
      }
    },
    created(){
      const list = this.$store.getters.projectsList;
      if (list) {
        const data = {
          uid: this.$store.state.user.uid
        };
        this.$store.dispatch('getProjectsList', data);
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .head {
    height: 35px;
    &-inner {
      position: fixed;
      z-index: 9999;
      width: 100%;
      padding-right: 1.75rem;
      background: #212129;
      box-shadow: 0 -1px 0 0 rgba(0, 0, 0, .15) inset;
      line-height: 35px;
    }
    &-separator {
      display: inline-block;
      width: 1px;
      height: 1.75rem;
      background-image: -webkit-linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, .2), rgba(255, 255, 255, 0));
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, .2), rgba(255, 255, 255, 0));
      vertical-align: middle;
    }
    &-toggle {
      display: inline-block;
    }
    &-menu {
      display: inline-block;
      margin-left: 1rem;
    }
    &-menu-item {
      display: inline-block;
      padding: 0 .666rem;
      color: rgba(255, 255, 255, .3975);
      font-size: 1.15rem;
      line-height: 2.75rem;
      font-weight: bolder;
      &:hover {
        color: rgba(255, 255, 255, .8875);
      }
    }
  }

  .project-name {
    display: inline-block;
    cursor: pointer;
    color: rgba(255, 255, 255, .8225);
    opacity: 1;
    -webkit-transition: opacity .15s;
    transition: opacity .15s;
    padding: 0 1.75rem;
    span {
      margin-right: 10px;
    }
    b {
      font-size: 1.15rem;
      max-width: 21.5rem;
      display: inline-block;
      vertical-align: middle;
    }
  }

  .custom-pop {
    position: relative;
    z-index: 999;
    background: #212129;
    border: 1px solid #06060f;
    box-shadow: 0 1px 4px rgba(15, 15, 21, .2), 0 5px 15px rgba(15, 15, 21, .12), 0 3px 6px rgba(0, 11, 20, .1), inset 0 0 0 1px #303037;
    white-space: nowrap;
  }

  .project-list-item {
    cursor: pointer;
    padding: 0.5rem .5rem .5rem 1.75rem;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    &:hover {
      border-top-color: #34343c;
      border-bottom: 1px solid #34343c;
      background: #34343c;
      b {
        color: #fff;
      }
    }
    span:first-child {
      margin-right: 10px;
    }
    b {
      font-size: 1.15rem;
      display: inline-block;
      width: 15rem;
      color: #9b9b9f;
    }
  }

  .project-tool {
    width: 100%;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    a {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      cursor: pointer;
      background-image: -webkit-linear-gradient(#44444b, #424249);
      background-image: linear-gradient(#44444b, #424249);
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .01), 0 1px 0 rgba(0, 0, 0, .04), 0 1px 0 0 rgba(255, 255, 255, .05) inset;
      text-align: center;
      color: #c3c3c5;
      line-height: 3rem;
      -webkit-transition: color .2s;
      transition: color .2s;
      padding: 0 1.75rem;
      border-right: 1px solid rgba(255, 255, 255, .05);
      &:last-child {
        border-right: none;
      }
      &:hover {
        color: #75c2f5;
        background-image: -webkit-linear-gradient(#494950, #44444b);
        background-image: linear-gradient(#494950, #44444b);
      }
    }
  }
</style>
