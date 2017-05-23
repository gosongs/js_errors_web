<template>
  <div class="login">
    <div class="login-form">
      <div class="form-head">
        <router-link to="/">
          <img src="/static/img/logo.png" alt="">
        </router-link>
        <h2>Welcome Back</h2>
        <h5>Sign in to continue to Bug Tracker</h5>
      </div>
      <div class="form-body">
        <Form ref="formRef" :model="formData" :rules="formRules" label-position="top">
          <Form-item prop="username">
            <Input type="text" v-model="formData.username" placeholder="Username"/>
          </Form-item>
          <Form-item prop="password">
            <Input type="password" v-model="formData.password" placeholder="Password"/>
          </Form-item>

          <Button :loading="loading" long type="primary" @click="handleSubmit('formCustom')">SIGN IN</Button>

          <div class="form-help clearfix">
            <div class="fl-l">
              <Checkbox v-model="formData.saveMe">Remember me</Checkbox>
            </div>
            <div class="fl-r">
              <router-link to="/account/reset">
                Forgot Password?
              </router-link>
            </div>
          </div>
        </Form>
      </div>
      <div class="form-foot">
        No account? .
        <router-link to="/account/register">
          Create a free account now
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import md5 from 'blueimp-md5'
  export default{
    data(){
      return {
        formData: {
          username: '',
          password: '',
          saveMe: true
        },
        loading: false,
        formRules: {
          username: [
            {required: true, message: '请填写用户名', trigger: 'change'}
          ],
          password: [
            {required: true, message: '请填写密码', trigger: 'change'},
            {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'change'}
          ]
        }
      }
    },
    methods: {
      handleSubmit(){
        this.$refs.formRef.validate((valid) => {
          if (valid) {
            const api = this.$store.state.DEV_API;
            this.loading = true;
            $.post(api + '/account/login', {
              username: this.formData.username,
              password: md5(this.formData.password)
            })
              .then(res => {
                this.loading = false;
                if (res.Code === 0) {
                  const user = {
                    username: this.formData.username,
                    token: res.Data.token,
                    uid: res.Data.uid,
                    email: res.Data.email,
                    nickname: res.Data.nickname
                  };
                  this.$store.commit('SET_USER', user);
                  // local storage 存储一份
                  if (this.$localStorage.get('user')) {
                    this.$localStorage.remove('user');
                  }
                  this.$localStorage.set('user', JSON.stringify(user));

                  // 先存储再跳转
                  this.$router.push('/dashboard');
                } else {
                  this.$Message.error(res.Message);
                }
              })
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .login {
    width: 350px;
    margin: 0 auto;
    &-form {

    }
    .form {
      &-head {
        padding-top: 5rem;
        text-align: center;
        position: relative;
        line-height: 20px;
        font-size: 25px;
        img {
          width: 84px;
        }
        h2 {
          font-weight: 300;
          color: #1d1e25;
          font-size: 26px;
          margin: 2rem 0 1rem;
        }
        h5 {
          font-size: 16px;
          font-weight: 300;
          color: #666;
          margin-bottom: 3rem;
        }
      }
      &-body {
        border-radius: 2px;
        padding: 2rem 2.5rem;
        background: #fff;
        border: 1px solid rgba(0, 0, 0, .12);
        box-shadow: 0 0.25rem 1rem 0 rgba(0, 0, 0, .05);
      }
      &-help {
        margin-top: .75rem;
        label{
          color: rgba(0,0,0,.6);
        }
      }
      &-foot {
        text-align: center;
        margin-top: 1.25rem;
        color: rgba(0, 0, 0, .5);
      }
    }
  }
</style>
