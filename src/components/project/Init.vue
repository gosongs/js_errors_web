<template>
  <div class="init">
    <div class="panel">
      <div class="panel-body">
        <h2>集成 JS</h2>
        <p>在网站的 <span class="code">&lt;head&gt;</span> 标签中粘贴以下代码:
        </p>
        <div class="code">
          &lt;script type=&quot;text/javascript&quot; src=&quot;{{jsUrl}}&quot; crossOrigin=&quot;anonymous&quot;&gt;&lt;/script&gt;<br>

          BJ_REPORT.init({<br>
          &nbsp;&nbsp;id: "<b>{{key}}</b>",<br>
          &nbsp;&nbsp;url: &quot;http://127.0.0.1/badjs&quot;<br>
          });<br><br>

          BJ_REPORT.tryJs().spyAll();<br>
          &lt;/script&gt;
        </div>
        <p>以上代码已包含你的 <span class="code">General Key</span> (项目唯一标识)，配置成功后所有抛出的异常及 <span class="code">console.error</span> 都将发送到 BugHD。</p>

        <h2>测试配置</h2>
        <p>使用手动发送异常来验证配置是否成功，刷新页面后将会有一个 <span class="code-inline">Test Error</span> 错误出现。</p>
        <div class="code">
          &lt;script type=&quot;text/javascript&quot;&gt;<br>
          bughd(&#x27;notify&#x27;,&#x27;Error Category&#x27;,&#x27;Test Error&#x27;);<br>
          &lt;/script&gt;
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        jsUrl: 'https://demo.site.com/jserrors.min.js'
      }
    },
    computed: {
      key(){
        return this.$route.params.key;
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  h2{
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  p{
    font-size: 14px;
    color: #535353;
    margin: 0 0 10px;
  }
</style>
