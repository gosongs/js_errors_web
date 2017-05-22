<template>
  <div class="panel create">
    <div class="panel-title">
      <h3>创建项目</h3>
    </div>
    <div class="panel-body">
      <Form ref="formRef" :model="formData" :rules="formRules" :label-width="80">
        <Form-item label="名称" prop="name">
          <Input v-model="formData.name" placeholder="请输入"/>
        </Form-item>
        <Form-item label="类型" prop="type">
          <Select v-model="formData.type" placeholder="请选择" style="width:150px">
            <Option value="javascript">Javascript</Option>
            <Option value="react">React</Option>
            <Option value="angular">Angular</Option>
            <Option value="vue">Vue</Option>
          </Select>
        </Form-item>
        <Form-item label="Key" prop="key">
          {{formData.key}}
        </Form-item>
        <Form-item label="状态" prop="status">
          {{statusText}}
        </Form-item>
        <Form-item label="备注">
          <Input v-model="formData.info" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                 placeholder="请输入..."/>
        </Form-item>
        <Form-item>
          <Button :loading="loading" type="primary" @click="submitForm">提交</Button>
          <Button type="ghost" style="margin-left: 8px" @click="resetForm">重置</Button>
        </Form-item>
      </Form>
    </div>
  </div>
</template>

<script>
  import {uuid} from '../../utils/index'
  export default{
    data(){
      const requireRule = {required: true, message: '必填', trigger: 'change'};
      return {
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
        this.formData = {
          name: '',
          type: '',
          status: false,
          key: '',
          info: '',
          uid: ''
        };
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
                  this.$router.push('/project/init/' + this.formData.type + '/' + this.formData.key);

                  // 刷新列表
                  const data = {
                    uid: this.$store.state.user.uid
                  };
                  this.$store.dispatch('getProjectsList', data);
                } else {
                  this.$Message.error(res.Message);
                }
              })
          }
        })
      }
    },
    created(){
      this.formData.key = uuid();
    }
  }
</script>

<style scoped lang="scss" type="text/scss">

</style>
