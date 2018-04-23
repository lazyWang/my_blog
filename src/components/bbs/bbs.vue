<template>
 <div>
    <div class="breadvrumb-line">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>留言板</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="maxim">大丈夫处世处，当交四海英雄</div>
    </div>
    <div class="bbs-main">
        <el-col class="content-left" :span="15">
            <div class="reselt-main">
                <el-input type="textarea" :rows="4" maxlength="200" placeholder="请输入留言内容，最多输入200字" v-model="bbsContent" resize="none"></el-input>
                <el-button class="publish" @click="setBbs" type="success" size="medium">发表</el-button>
            </div>
            <div class="reselt-content clearfix" v-for="(item,index) in messageList" :key="index">
                <el-col class="reselt-content-left" :span="4">
                    <img class="reselt-content-left-img" :src="item.head_img" alt="">
                    <p class="reselt-content-left-name">👑{{item.NickName}}</p>
                </el-col>
                <el-col class="reselt-content-right" :span="20">
                    <div  @click="cancelReply" class="itemcontent">{{item.content}}</div>
                    <p class="creat-time">{{item.creat_time}}  <span class="setReply" @click="showReply" :data-idx='item.Id'  :data-id='item.user_id' :data-name='item.NickName' :data-index='index'>回复</span></p>
                    <div class="secondReply">
                      <ul>
                        <li class="secondReply-list" v-for="(subitem,id) in item.data" :key="id">
                          <img :src="subitem.head_img" alt="">
                          <div>
                            <span class="name">{{subitem.NickName}}:</span>
                              回复
                            <span class="name">{{subitem.replyName}}:</span>
                            <span>{{subitem.content}}</span>
                            <p class="secondReply-list-time">{{subitem.creat_time}} <span class="rename" :data-idx='item.Id' :data-id='subitem.user_id' @click="showReply" :data-name='subitem.NickName' :data-index='index'>回复</span></p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div v-if="reply[index]" class="reply">
                      回复:{{replyName}}
                      <el-input type="textarea" :rows="2" maxlength="200" placeholder="请输入留言内容，最多输入200字" v-model="replyContent" resize="none"></el-input>
                      <p class="creat-time"><span class="setReply" @click="cancelReply">取消&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="setReply" @click="setReply"> 回复</span></p>
                    </div>
                </el-col>
            </div>
            <div class="block">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="pagesize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="count">
                </el-pagination>
            </div>
        </el-col>
        <el-col class="content-right" :offset="3" :span="6">
            <div v-if="login"  class="content-right-info">
                <img class="content-right-info-img" :src="myInfo.head_img" alt="">
                <img class="infobg" src="../../../static/images/infobg.png" alt="">
                <div class="ln1">
                    <span>👑{{myInfo.NickName}}</span>
                    <span @click="cancelLogin" class="ln2">退出登录</span>
                    <span  class="ln2">个人中心</span>
                </div>
            </div>
            <div v-else class="content-right-info">
                <img class="content-right-info-img" src="https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/0602b0aecef7b3bd3058" alt="">
                <img class="infobg" src="../../../static/images/infobg.png" alt="">
                <div class="ln1">
                    <span>游客</span>
                    <span @click="showLoginBox" class="ln2">登录</span>
                </div>
            </div>
        </el-col>        
    </div>
    <div v-if="loginBox">
        <div @click="cancelLoginBox" class="maxLoginBox">点击空白处取消登录</div>
        <div class="loginBox">
             <div v-if="isLogin==1" class="main">
                <h2>登 录</h2>
                <br>
                <el-input placeholder="请输入帐号" v-model="userName"  prefix-icon="el-icon-service">
                    <template slot="prepend">帐号</template>
                </el-input>
                <br>
                <br>
                <el-input type="password" placeholder="请输入密码" v-model="password"  prefix-icon="el-icon-goods">
                    <template slot="prepend">密码</template>
                </el-input>
                <br>
                <br>
                <el-button @click="setLogin" class="login" type="primary" size="small">登录</el-button>
                <span @click="toRegsister" class="resgister">还没有帐号，前往注册</span>
            </div>
            <div v-else class="main">
                <h2>登 录</h2>
                <br>
                <el-input placeholder="请输入帐号" v-model="userName"  prefix-icon="el-icon-service">
                    <template slot="prepend">帐号</template>
                </el-input>
                <br>
                <br>
                <el-input placeholder="请输入昵称" v-model="NickName"  prefix-icon="el-icon-edit">
                    <template slot="prepend">昵称</template>
                </el-input>
                <br>
                <br>
                <el-input type="password" placeholder="请输入密码" v-model="password"  prefix-icon="el-icon-goods">
                    <template slot="prepend">密码</template>
                </el-input>
                <br>
                <br>
                <el-button @click="setRegsister" class="login" type="primary" size="small">注册</el-button>
                <span @click="toLogin" class="resgister">已有帐号，前往登录</span>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      //回复用户名 id 内容
      replyName:'',
      replyUid:0,
      idx:0,
      replyContent:'',
      reply:[false],
      // 登录界面 1 注册界面 0
      isLogin:1,
      userName:'',
      NickName:'',
      password:'',
      login: false,
      // 总条数
      count:0,
      // 页码
      currentPage: 1,
      // 每页条数
      pagesize:10,
      bbsContent: "",
      myInfo: {},
      loginBox: false,
      userId:0,
      messageList:[]
    };
  },

  created() {
    var currentPage = this.currentPage;
    var pagesize = this.pagesize;
    this.getMessage(currentPage,pagesize);
    var userId;
    var cookieArr = document.cookie.split("; ");
    for (var i = 0; i < cookieArr.length; i++) {
      var arr = cookieArr[i].split("=");
      if (arr[0] == "loginStatus") {
        userId = arr[1];
      }
    }
    this.$http.post(this.api + "/blog/Loginuser/getUserInfo?id=" + userId).then(res => {
        if (res.data.code == 200) {
          this.login = true;
          this.myInfo = res.data.data[0];
          this.userId = res.data.data[0].id;
        }
      });
  },
  methods: {
    setReply(){
      var currentPage = this.currentPage;
      var pagesize = this.pagesize;
      var replyUid = this.replyUid;
      var userId = this.userId;
      var idx = this.idx;
      var replyContent = this.replyContent;
      console.log(replyUid)
      this.$http.post(this.api+'/blog/Message/setReply?userId='+userId+'&replyUid='+replyUid+'&content='+replyContent+'&idx='+idx).then(res=>{
        if(res.data.code==200){
            this.$message({
              message: '回复成功',
              type: 'success'
            });
          this.getMessage(currentPage,pagesize);
          this.cancelReply();
          this.replyContent='';
        }
      })
    },
    showReply(e){
      var i = e.target.dataset.index;
      var name = e.target.dataset.name;
      var idx = e.target.dataset.idx;
      var id = e.target.dataset.id;
      var reply = this.reply;
      this.replyName = name;
      this.idx = idx;
      this.replyUid = id;
      for(var j = 0;j<reply.length;j++){
        this.$set(this.reply,j,false)
      }
      this.$set(this.reply,i,true)
    },
    cancelReply(){
      var reply = this.reply;
      for(var j = 0;j<reply.length;j++){
        this.$set(this.reply,j,false)
      } 
    },
    // 发表留言
    setBbs() {
        var bbsContent =  this.bbsContent;
        var login = this.login;
        var userId = this.userId;
        var currentPage = this.currentPage;
        var pagesize = this.pagesize;
        if(!login){
            this.$message("请先登录");
            return;
        }
        if(bbsContent.length<6){
            this.$message("至少输入6个字");
            return;
        }
        this.$http.post(this.api+'/blog/Message/setMessage?content='+bbsContent+'&userId='+userId+'&replyUser=0').then(res=>{
          if(res.data.code==200){
            this.$message({
              message: '发表成功',
              type: 'success'
            });
          this.bbsContent = '';
          this.getMessage(1,pagesize);
          }
        })
    },
    handleSizeChange(val) {
      this.pagesize = `${val}` - 0;
      var currentPage = this.currentPage;
      this.getMessage(currentPage,`${val}`)
    },
    handleCurrentChange(val) {
      var pagesize = this.pagesize;
      this.getMessage(`${val}`,pagesize)
    },
    showLoginBox() {
      this.loginBox = true;
    },
    cancelLoginBox(){
      this.loginBox = false;
      this.userName = '',
      this.password = ''
    },
    // 登录
    setLogin() {
      var userName = this.userName;
      var password = this.password;
      if (this.userName == "" || this.password == "") {
        this.$message("帐号或密码不能为空");
        return;
      }
      this.$http.post(this.api + "/blog/Loginuser/setLogin?userName=" + userName + "&password=" + password)
        .then(res => {
          if(res.data.code==200){
            this.setCookie("loginStatus", res.data.data[0].id, 7);
            this.login = true;
            this.myInfo = res.data.data[0];
            this.loginBox = false;
            this.userName = '',
            this.password = '',
            this.userId = res.data.data[0].id;
          }
          if(res.data.code==401){
            this.$message(res.data.message);
          }
        });
    },
    setRegsister(){
      var userName = this.userName;
      var NickName = this.NickName;
      var password = this.password;
      if(userName == '' || NickName == '' || password == ''){
        this.$message("帐号、昵称或密码不能为空");
        return;
      }
      this.$http.post(this.api+'/blog/Regsister/setRegsister?userName='+userName+'&NickName='+NickName+'&password='+password).then(res=>{
        if(res.data.code==200){
          this.$message("注册完成");
            this.setCookie("loginStatus", res.data.data[0].id, 7);
            this.login = true;
            this.myInfo = res.data.data[0];
            this.loginBox = false;
            this.userName = '',
            this.password = '',
            this.userId = res.data.data[0].id;
        }
        if(res.data.code==401){
          this.$message(res.data.message);
        }
      })
    },
    cancelLogin(){
        this.removeCookie('loginStatus');
        this.login = false;
        this.myInfo = [];
    },
    // 删除和设置cookies
    removeCookie(name){
        this.setCookie( name,1,-1 )
    },
    setCookie(c_name, value, expiredays) {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + expiredays);
      document.cookie =
        c_name +
        "=" +
        escape(value) +
        (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
    },
    // 获取留言
    getMessage(currentPage,pagesize){
      this.$http.post(this.api+'/blog/Message/getMessage?currentPage='+currentPage+'&pagesize='+pagesize).then(res=>{
        if(res.data.code==200){
          console.dir(res)
          this.messageList = res.data.data;
          this.count = res.data.count;
        }
      })
    },
    toRegsister(){
      this.userName = '',
      this.NickName = '',
      this.password = ''
      this.isLogin = 0;
    },
    toLogin(){
      this.userName = '',
      this.NickName = '',
      this.password = ''
      this.isLogin = 1;
    }
  }
};
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
  cursor: pointer;
}

.breadvrumb-line {
  padding-bottom: 20px;
  position: relative;
  border-bottom: 1px solid #999;
}
.maxim {
  position: absolute;
  top: 0;
  right: 20px;
  font-size: 12px;
}

.bbs-main {
  color:#333;
  margin-top: 20px;
  text-align: left;
}
.reselt-main {
  border-radius: 5px;
  padding: 20px 10px 10px;
  border: 1px solid rgb(238, 238, 238);
  margin-bottom: 30px;
}
.publish {
  margin-top: 10px;
}
.reselt-content {
  border: 1px solid rgb(238, 238, 238);
  padding: 10px 0;
  position: relative;
}
.reselt-content-left {
  float: left;
}
.reselt-content-left-img {
  display: block;
  margin: 0 auto;
  height: 75px;
  width: 75px;
  border: 2px solid rgb(232, 233, 234);
}

.reselt-content-left-name {
  color: #409eff;
  margin-top: 5px;
  font-size: 14px;
  text-align: center;
}
.reselt-content-right {
  float: right;
  line-height: 24px;
  font-size: 14px;
  word-wrap: break-word;
  overflow: hidden;
  color: #333;
}
.itemcontent{
  height: 120px;
}
.creat-time {
  text-align: right;
  color: #999;
  font-size: 12px;
  margin-right: 20px;
}
.creat-time span {
  color: #409eff;
}
.block {
  margin-top: 10px;
}
.content-right-info {
  padding: 20px 10px;
  border: 1px solid rgb(238, 238, 238);
  text-align: center;
  height: 150px;
  border-radius: 5px;
  position: relative;
}
.content-right-info-img {
  /* margin: 0 auto 10px; */
  padding: 4px;
  float: left;
  margin-left: 10px;
  /* display: block; */
  border: 1px solid rgb(238, 238, 238);
  width: 90px;
  height: 90px;
}
.infobg {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 30px;
}
.ln1 {
  float: left;
  /* width: 90px; */
  margin: 10px 10px;
}
.ln1 span {
  display: block;
  font-size: 12px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
  line-height: 22px;
}
.ln1 .ln2 {
  color: #409eff;
  cursor: pointer;
}
.maxLoginBox {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: #000;
  opacity: 0.4;
  color: #fff;
}
.loginBox {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(232, 233, 234);
  width: 360px;
}
.setReply{
  cursor: pointer;
}
.secondReply{
  padding: 4px 15px 14px;
  margin-top: 5px;
  background-color: #f7f8fa;
}
.secondReply-list img{
  float: left;
  width: 32px;
  height: 32px;
  border: 1px #ccc solid;
  padding: 1px;
  margin-right: 10px;
}
.secondReply-list .name{
  color: #409eff;
  line-height: 32px;
}
.reply{
  color: #409eff;
  height: 115px;
  text-indent: 10px;
  border-radius: 4px;
}
.rename{
  color: #409eff;
  cursor: pointer;
}
.secondReply-list-time{
  font-size: 12px;
  color: #999;
  text-align: right;
  margin-right: 5px;
}
</style>