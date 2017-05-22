<template>
  <div class="panel create">
    <div class="panel-title">
      <h3>创建项目</h3>
    </div>
    <div class="panel-body">
      <Form :model="formItem" :label-width="80">
        <Form-item label="名称">
          <Input v-model="formItem.input" placeholder="请输入" />
        </Form-item>
        <Form-item label="类型">
          <Select v-model="formItem.select" placeholder="请选择" style="width:200px">
            <Option value="beijing">Javascript</Option>
            <Option value="shanghai">React</Option>
            <Option value="shenzhen">Angular</Option>
          </Select>
        </Form-item>
        <Form-item label="启动">
          <Radio-group v-model="formItem.radio">
            <Radio label="male">开</Radio>
            <Radio label="female">关</Radio>
          </Radio-group>
        </Form-item>
        <Form-item label="Key">
          Key
        </Form-item>
        <Form-item label="备注">
          <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                 placeholder="请输入..."/>
        </Form-item>
        <Form-item>
          <Button type="primary">提交</Button>
          <Button type="ghost" style="margin-left: 8px">取消</Button>
        </Form-item>
      </Form>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          checkbox: [],
          date: '',
          time: '',
          slider: [20, 50],
          textarea: ''
        }
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">

</style>
