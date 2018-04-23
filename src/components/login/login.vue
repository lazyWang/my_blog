<template>
 <div class="main">
    <h2>登 录</h2>
    <br>
    <el-input placeholder="请输入帐号" v-model="userName"  prefix-icon="el-icon-service">
        <template slot="prepend">帐号</template>
    </el-input>
    <br>
    <br>
    <!-- <el-input placeholder="请输入昵称" v-model="NickName"  prefix-icon="el-icon-edit">
        <template slot="prepend">昵称</template>
    </el-input>
    <br>
    <br> -->
    <el-input type="password" placeholder="请输入密码" v-model="password"  prefix-icon="el-icon-goods">
        <template slot="prepend">密码</template>
    </el-input>
    <br>
    <br>
    <el-button @click="setLogin" class="login" type="primary" size="small">登录</el-button>
    <span class="resgister">还没有帐号，前往注册</span>
 </div>
</template>

<script>
export default {
 data () {
 return {
    userName:'',
    NickName:'',
    password:'',
 };
 },
 created(){
 },
methods:{
    setLogin(){
        var userName = this.userName;
        var password = this.password;
        if(this.userName=='' || this.password==''){
            this.$message('帐号或密码不能为空');
        }
        this.$http.post(this.api+'/blog/Loginuser/setLogin?userName='+userName+'&password='+password).then(res=>{
            console.log(res)
             this.setCookie('loginStatus',res.data.data[0].id,7)
        })
    },
        setCookie(c_name,value,expiredays){
        var exdate=new Date();
        exdate.setDate(exdate.getDate()+expiredays);
        document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
    }
},

}

</script>
<style  scoped>
.main {
  padding: 10px;
  border: 1px solid rgb(238, 238, 238);
}

.resgister {
  margin-left: 10px;
  color: #409eff;
  font-size: 12px;
}
</style>