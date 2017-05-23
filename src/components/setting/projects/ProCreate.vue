<template>
  <div class="create">
    <div class="breadcrumb">
      <router-link class="breadcrumb-link" to="/settings/projects">Projects</router-link>
      >
      <span class="breadcrumb-link active">{{location}}</span>
    </div>

    <div class="panel">
      <div class="panel-body">
        <div class="create-welcome">
          Projects represent a single application that Bugsnag monitors for errors. We recommend creating a project for
          each
          language in your application.
        </div>

        <div class="create-form">
          <Form ref="formRef" :model="formData" :rules="formRules" label-position="top">
            <Form-item label="Project name" prop="name">
              <Input v-model="formData.name" placeholder="请输入"/>
            </Form-item>
            <Form-item label="Project type" prop="type">
              <Select v-model="formData.type" placeholder="请选择" style="width:150px">
                <Option value="javascript">Javascript</Option>
                <Option value="react">React</Option>
                <Option value="angular">Angular</Option>
                <Option value="vue">Vue</Option>
              </Select>
            </Form-item>
            <Form-item label="Project API Key" prop="key">
              {{formData.key}}
            </Form-item>
            <Form-item label="Status" prop="status">
              {{statusText}}
            </Form-item>
            <Form-item label="Project info">
              <Input v-model="formData.info" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                     placeholder="请输入..."/>
            </Form-item>
            <Form-item>
              <Button :loading="loading" type="primary" @click="submitForm">CONTINUE</Button>
              <Button type="ghost" style="margin-left: 8px" @click="resetForm">CANCEL</Button>
            </Form-item>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {uuid} from '../../../utils/index'
  export default{
    data(){
      const requireRule = {required: true, message: '必填', trigger: 'change'};
      return {
        location: '',
        formData: {
          name: '', // 项目名
          type: '', // 项目类型
          status: false, // 是否激活, 当收到第一个bug的时候, 激活改项目
          key: '', // 项目id
          info: '', // 项目备注
          uid: ''
        },
        formRules: {
          name: [
            requireRule
          ],
          type: [
            requireRule
          ],
          key: [
            requireRule
          ]
        },
        loading: false
      }
    },
    computed: {
      statusText(){
        return this.formData.enable ? '激活' : '未激活'
      }
    },
    methods: {
      resetForm(){
        const key = this.formData.key;
        this.formData = {
          name: '',
          type: '',
          status: false,
          info: '',
          uid: ''
        };
        this.$refs.formRef.resetFields();
        this.formData.key = key;
      },
      submitForm(){
        this.$refs.formRef.validate((valid) => {
          if (valid) {
            const api = this.$store.state.DEV_API;
            this.loading = true;
            this.formData.uid = this.$store.state.user.uid;
            $.post(api + '/project/create', this.formData)
              .then(res => {
                this.loading = false;
                if (res.Code === 0) {
                  this.$router.push('/settings/proinit/' + this.formData.type + '/' + this.formData.key);
                } else {
                  this.$Message.error(res.Message);
                }
              }, err => {
                this.loading = false;
                this.$Message.error(err);
              })
          }
        })
      }
    },
    created(){
      this.formData.key = uuid();
      this.location = this.$route.name;
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .create {
    &-welcome {
      font-size: 1.29443rem;
      color: #4c4c52;
    }
    &-form {
      margin-top: 20px;
    }
  }
</style>
