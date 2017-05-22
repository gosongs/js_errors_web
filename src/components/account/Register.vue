<template>
  <div class="register">
    <div class="register-form">
      <div class="form-head">
        注册账号
      </div>
      <div class="form-body">
        <Form ref="formRef" :model="formData" :rules="formRules" label-position="top">
          <Form-item label="用户名" prop="username">
            <Input type="text" v-model="formData.username">
            </Input>
          </Form-item>

          <Form-item label="邮箱" prop="email">
            <Input type="text" v-model="formData.email">
            </Input>
          </Form-item>

          <Form-item label="密码" prop="password">
            <Input type="password" v-model="formData.password">
            </Input>
          </Form-item>

          <Form-item label="确认密码" prop="checkPass">
            <Input type="password" v-model="formData.checkPass">
            </Input>
          </Form-item>
          <Checkbox v-model="formData.agreeTerms">I agree with the <a href="">Terms and Conditions </a></Checkbox>
        </Form>
      </div>
      <div class="form-foot">
        <Button :loading="loading" long :disabled="!formData.agreeTerms" type="primary" @click="handleSubmit">提交
        </Button>
        <router-link to="/account/login">
          <Button type="ghost" long>已有账号, 去登陆</Button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
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
              password: this.formData.password
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
        .ivu-btn {
          margin-top: 20px;
        }
      }
    }
  }
</style>
