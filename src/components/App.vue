<template>
  <div id="app" class="app full-screen">
    <transition name="fade" mode="out-in" appear>
      <router-view keep-alive></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {}
    },
    methods: {
      checkUser(){
        const userData = this.$localStorage.get('user');
        if (userData) {
          this.$store.commit('SET_USER', JSON.parse(userData));
        } else if (this.$route.path !== '/account/register') {
          this.$router.push('/account/login');
        }
      }
    },
    created(){
      this.checkUser();
    },
    watch: {
      '$route': function () {
        this.checkUser();
      }
    }
  }
</script>

<style lang="scss" type="text/scss">
  @import "../assets/scss/app";

  .app {
    position: fixed;
    top: 0;
    left: 0;
  }

  .full-screen {
    height: 100%;
    width: 100%;
  }
</style>
