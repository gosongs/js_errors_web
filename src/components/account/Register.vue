<template>
  <div class="register">
    <div class="register-top clearfix">
      <div class="register-top-logo fl-l">
        <img src="/static/img/logo.png" alt="">
        <span>Bug Tracker</span>
      </div>
      <router-link class="fl-r register-top-login" to="/account/login">Sign in</router-link>
    </div>
    <div class="register-welcome">
      <h2>Fix Your JavaScript</h2>
      <h4>Track Error Context. Actually Fix Bugs.</h4>
    </div>
    <div class="register-form">
      <div class="form-body">
        <Form ref="formRef" :model="formData" :rules="formRules" label-position="top">
          <Form-item label="Name" prop="username">
            <Input type="text" v-model="formData.username" placeholder="Your full name">
            </Input>
          </Form-item>

          <Form-item label="Email" prop="email">
            <Input type="text" v-model="formData.email" placeholder="you@company.com">
            </Input>
          </Form-item>

          <Form-item label="Password" prop="password">
            <Input type="password" v-model="formData.password" placeholder="Password (at least 6 characters)">
            </Input>
          </Form-item>

          <Form-item label="Confirm your password" prop="checkPass">
            <Input type="password" v-model="formData.checkPass" placeholder="Password (at least 6 characters)">
            </Input>
          </Form-item>
          <!--<Checkbox v-model="formData.agreeTerms">I agree with the <a href="">Terms and Conditions </a></Checkbox>-->
          <Button
            :loading="loading" long :disabled="!formData.agreeTerms" type="primary" @click="handleSubmit">
            START FREE
          </Button>
        </Form>
      </div>
    </div>
    <div class="register-foot">
      <p><b>Bug Tracker</b> is the easiest way to Track, Log, Monitor, and Report JavaScript Errors from your Web
        Application.</p>
    </div>
  </div>
</template>

<script>
  import md5 from 'blueimp-md5'
  export default{
    data(){
      const required = {required: true, message: '必填', trigger: 'change'};
      return {
        formData: {
          username: '',
          email: '',
          password: '',
          checkPass: '',
          agreeTerms: true
        },
        loading: false,
        formRules: {
          username: [
            required
          ],
          email: [
            required
          ],
          password: [
            required,
            {type: 'string', min: 6, message: '最小6位', trigger: 'change'}
          ],
          checkPass: [
            required,
            {type: 'string', min: 6, message: '最小6位', trigger: 'change'}
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
            $.post(api + '/account/register', {
              username: this.formData.username,
              email: this.formData.email,
              password: md5(this.formData.password)
            })
              .then(res => {
                this.loading = false;
                if (res.Code === 0) {
                  this.$router.push('/account/login');
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
  .register {

    &-top {
      height: 60px;
      line-height: 60px;
      background: #fff;
      padding: 0 4.16667%;
    }
    &-top-logo {
      img {
        height: 25px;
        vertical-align: middle;
      }
      span {
        line-height: 20px;
        font-size: 18px;
        vertical-align: middle;
        color: #5e6873;
        font-weight: 600;
        margin-left: 5px;
      }
    }
    &-top-login {
      color: #707274;
      font-size: 15px;
      -webkit-transition: color .2s;
      transition: color .2s;
      &:hover {
        color: #2d3033;
      }
    }
    &-welcome {
      width: 100%;
      background: #fff;
      text-align: center;
      padding: 2.4rem 0;
      h2 {
        font-size: 26px;
        line-height: 2.6rem;
        margin-bottom: .6rem;
      }
      h4 {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.4rem;
        color: #80858f;
      }
    }
    &-foot {
      font-size: 14px;
      text-align: center;
      line-height: 1.4rem;
      color: #80858f;
      max-width: 90%;
      margin: 3.2rem auto 0;
    }
    &-form {
      padding-top: 2.4rem;
    }
    .form {
      &-body {
        margin: 0 auto;
        width: 476px;
        padding: 2.4rem;
        border-radius: 4px;
        background: #fff;
        box-shadow: 0 10px 20px rgba(33, 33, 69, .095), 0 6px 6px rgba(33, 33, 69, .115);
      }
      &-foot {
        .ivu-btn {
          margin-top: 20px;
        }
      }
    }
  }
</style>
