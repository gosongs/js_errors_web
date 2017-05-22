<template>
  <div class="side">
    <a class="side-logo">
      <b>前端错误收集平台</b>
    </a>
    <div class="side-toggle">
      <Select v-model="curProject" style="width:200px; margin-left: 10px;">
        <Option v-for="_ in projectsList" :value="_.name" :key="_.key">{{ _.name }}</Option>
      </Select>
    </div>
    <div class="side-list">
      <Menu theme="dark" @on-select="selectMenu">
        <Submenu name="project">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            项目管理
          </template>
          <Menu-item name="/project/create">创建项目</Menu-item>
          <Menu-item name="/project/my">我的项目</Menu-item>
          <Menu-item name="/generateErr">生成错误</Menu-item>
        </Submenu>
        <Submenu name="errors">
          <template slot="title">
            <Icon type="ios-people"></Icon>
            错误管理
          </template>
          <Menu-item name="/errors/count">图标统计</Menu-item>
          <Menu-item name="/errors/list">错误列表</Menu-item>
        </Submenu>
        <Submenu name="user">
          <template slot="title">
            <Icon type="ios-people"></Icon>
            用户管理
          </template>
          <Menu-item name="2-1">新增用户</Menu-item>
          <Menu-item name="2-2">用户列表</Menu-item>
        </Submenu>
      </Menu>
    </div>
    <div class="side-tool">

    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        curProject: ''
      }
    },
    computed: {
      projectsList(){
        return this.$store.getters.projectsList || [];
      }
    },
    methods: {
      selectMenu(name){
        const key = this.$route.params.key;
        this.$router.push(name + '/' + key)
      }
    },
    created(){
      const data = {
        uid: this.$store.state.user.uid
      };
      this.$store.dispatch('getProjectsList', data);
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .side {
    width: 220px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    background: #464c5b;
    &-toggle {
      margin-top: 20px;
    }
    &-logo {
      font-weight: 400;
      font-size: 22px;
      width: 100%;
      line-height: 59px;
      display: block;
      height: 58px;
      margin: 0;
      padding-left: 10px;
      color: #fff;
    }
    &-tool {
      position: fixed;
      bottom: 0;
      clear: both;
      display: block;
      padding: 5px 0 0;
      width: 220px;
      height: 35px;
      background: #313540;
    }
  }
</style>
