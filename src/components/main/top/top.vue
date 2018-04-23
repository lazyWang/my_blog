<template>
 <div class="header">
     <el-col :span="4" :offset=4 class="header-left">
        <h1>
          <a class="header-logo" src="../../../../static/images/图片4.png" alt="">王原宏</a>
        </h1>
        <span class="header-text">个人博客</span>
     </el-col>
     <el-col :span="12" :offset=1 class="header-nav">
        <el-menu  :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#303133" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1">
          <router-link to="/">首页</router-link>
          </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/infoMe">关于我</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/growth">成长</router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <router-link to="/learn/list">学习</router-link>  
        </el-menu-item>        
        <el-menu-item index="5">
          <router-link to="/dispor/book">生活</router-link>  
        </el-menu-item>
        <el-menu-item index="6">
          <router-link to="/bbs">留言</router-link>
        </el-menu-item>
        </el-menu>
     </el-col>
 </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  props: ["activeIndex"],
  components: {},

  computed: {}
};
</script>
<style scoped>
.header-left{
  vertical-align: top;
}
h1{
  width: 170px;
  display: inline-block;
}
h1>a{
  display:block;
  width: 170px;
  height: 60px;
  background: url("../../../../static/images/图片4.png");
  background-size: 170px 60px;
  text-indent: -9999px;  
}
a {
  display: block;
  position: relative;
  left: -20px;
  height: 100%;
  width: calc(100% + 40px);
  text-decoration: none;
}
.header {
  height: 60px;
}
.header-logo {
  height: 60px;
  vertical-align: top;
}
.header-text {
  font-size: 22px;
  display: inline-block;
  color: #fff;
}
</style>