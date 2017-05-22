<template>
  <div class="head">
    <div class="head-logo">

    </div>
    <div class="head-account">
      <Dropdown placement="bottom-end" trigger="click" @on-click="clickItem">
        <a href="javascript:void(0)">
          欢迎你, <b>{{user.username}}</b>
          <Icon type="arrow-down-b"></Icon>
        </a>
        <Dropdown-menu slot="list">
          <Dropdown-item>账户设置</Dropdown-item>
          <Dropdown-item>登录历史</Dropdown-item>
          <Dropdown-item name="logout">注销登录</Dropdown-item>
        </Dropdown-menu>
      </Dropdown>
    </div>
  </div>
</template>

<script>
  export default{
    computed: {
      user(){
        return this.$store.state.user || {username: ''};
      }
    },
    methods: {
      clickItem(name){
        switch (name){
          case 'logout':
            this.logout();
            break;
          default:
            break;
        }
      },
      logout(){
        this.$localStorage.remove('user');
        this.$router.push('/account/login');
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  $headH: 58px;
  .head {
    width: 100%;
    height: $headH;
    margin: 0;
    padding: 0 20px;
    background: #EDEDED;
    border-bottom: 1px solid #D9DEE4;
    &-account {
      padding: 20px 0 20px 20px;
      float: right;
    }
  }
</style>
