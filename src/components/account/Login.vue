<template>
  <div class="login">
    <div class="login-form">
      <div class="form-head">
        登录
      </div>
      <div class="form-body">
        <Form ref="formRef" :model="formData" :rules="formRules" label-position="top">
          <Form-item label="用户名" prop="username">
            <Input type="text" v-model="formData.username"/>
          </Form-item>
          <Form-item label="密码" prop="password">
            <Input type="password" v-model="formData.password"/>
          </Form-item>
          <Checkbox v-model="formData.saveMe">七日内免登录</Checkbox>
        </Form>
      </div>
      <div class="form-foot">
        <Button :loading="loading" long type="primary" @click="handleSubmit('formCustom')">提交</Button>
        <router-link to="/account/register">
          <Button long type="ghost">注册</Button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
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
              password: this.formData.password
            })
              .then(res => {
                this.loading = false;
                if (res.Code === 0) {
                  const user = {
                    username: this.formData.username,
                    token: res.Data.token
                  };
                  this.$store.commit('SET_USER', user);
                  this.$router.push('/dashboard');

                  // local storage 存储一份
                  const storage = window.localStorage;
                  if(storage.getItem('user')){
                    storage.removeItem('user');
                  }
                  storage.setItem('user', JSON.stringify(user));
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
    margin: 8% auto 0 auto;
    &-form {

    }
    .form {
      &-head {
        position: relative;
        text-align: center;
        letter-spacing: -.05em;
        line-height: 20px;
        margin: 10px 0 30px;
        font-size: 25px;
      }
      &-body {

      }
      &-foot {
        .ivu-btn{
          margin-top: 20px;
        }
      }
    }
  }
</style>
