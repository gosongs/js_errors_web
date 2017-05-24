<template>
  <div class="home">
    <div class="breadcrumb">
      <span class="breadcrumb-link active">Setting</span>
    </div>
    <div class="home-items clearfix">
      <div class="home-item">
        <router-link to="/settings/projects" class="card">
          <div class="card-logo">
            <img src="/static/img/logo_projects.svg" alt="">
          </div>
          <div class="card-title">
            projects
          </div>
          <div class="card-info">
            Notifier API keys, error handling preferences
          </div>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss" type="text/scss">
  .home{
    &-item{
      float: left;
      padding: 15px;
      width: 285px;
      height: 300px;
    }
  }
</style>
