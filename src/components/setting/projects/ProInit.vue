<template>
  <div class="init">
    <div class="breadcrumb">
      <router-link class="breadcrumb-link" to="/settings/projects">Projects</router-link>
      >
      <span class="breadcrumb-link active">{{location}}</span>
    </div>
    <div class="panel">
      <div class="panel-body">
        <div class="init-welcome">
          Detection libraries enable us to capture data on errors in your application. No matter which language or
          framework
          you use, our libraries are lightweight, won't affect performance, and are easy to install.
        </div>

        <div class="init-method">
          <h3 class="init-method-title">Installing the JS detection library</h3>
          <p>Include <b>bugsnag.js</b> from our CDN in the tag of your website</p>
        </div>

        <router-link to="/dashboard">
          <Button type="ghost">back to dashboard</Button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        location: ''
      }
    },
    created(){
      this.location = this.$route.name;
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .init {
    &-welcome {
      font-size: 1.29443rem;
      color: #4c4c52;
    }
    &-method {
      margin: 1.9rem 0;
      h3 {
        font-weight: 400;
        color: #212129;
        font-size: 1.61803rem;
        margin-bottom: 1.425rem;
      }
      p {
        line-height: 1.425rem;
        margin-bottom: .475rem;
      }
    }
  }
</style>
