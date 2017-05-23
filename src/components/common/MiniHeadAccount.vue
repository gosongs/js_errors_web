<template>
  <div class="mini">
    <Poptip placement="bottom-end">
      <div class="mini-project-entry">T</div>
      <div class="custom-pop" slot="content">
        <div class="custom-pop-body">
          <div class="custom-pop-body-details">
            <h3>{{user.username}}</h3>
            <h4>{{user.nickname}}</h4>
            <h4>{{user.email}}</h4>
          </div>
          <router-link to="/settings" class="custom-pop-body-set">
            <Button type="primary">SETTINGS</Button>
          </router-link>
        </div>
        <div class="custom-pop-foot">
          <span @click="signOut">SIGN OUT</span>
        </div>
      </div>
    </Poptip>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        visible: false
      }
    },
    computed: {
      user(){
        return this.$store.state.user;
      }
    },
    methods: {
      signOut(){
        const userData = this.$localStorage.get('user');
        if (userData) {
          this.$localStorage.remove('user')
        }
        this.$router.push('/account/login');
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .mini {
    float: right;
    &-project-entry {
      cursor: pointer;
      background: #1aac9b;
      color: #f3fbfa;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      text-align: center;
      text-transform: uppercase;
      line-height: 2rem;
      font-weight: bold;
      font-size: calc(1rem - 2px);
      letter-spacing: .5px;
      padding-left: .5px;
    }
  }

  .custom-pop {
    position: relative;
    background: #212129;
    border: 1px solid #06060f;
    box-shadow: 0 1px 4px rgba(15, 15, 21, .2), 0 5px 15px rgba(15, 15, 21, .12), 0 3px 6px rgba(0, 11, 20, .1), inset 0 0 0 1px #303037;
    white-space: nowrap;
    &-body {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      padding: .5rem .75rem;
      box-shadow: inset 0 1px rgba(0, 0, 0, .05);
      background: #4b4b58;
    }
    &-body-details {
      h3 {
        font-size: 1.15rem;
        font-weight: 600;
        color: #fdfdfd;
      }
      h4 {
        line-height: 1.5rem;
        color: #c3c3c5;
      }
    }
    &-body-set {
      margin-left: 2rem;
      margin-top: auto !important;
      margin-bottom: auto !important;
    }
    &-foot {
      span {
        width: 100%;
        display: inline-block;
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
        &:hover {
          color: #75c2f5;
          background-image: -webkit-linear-gradient(#494950, #44444b);
          background-image: linear-gradient(#494950, #44444b);
        }
      }
    }
  }
</style>
