<template>
<el-container>
  <el-header height="60px">
    <top activeIndex="1"></top>
  </el-header>
  <el-container type="flex" class="flexCenter">
      <el-col :span="16" class="infoBody">
        <el-main>
          <transition name="fade">
            <profile v-if="opac"></profile>
          </transition>
        </el-main>
      </el-col>
  </el-container>
</el-container>
</template>

<script>
import top from './main/top/top';
import profile from './main/profile/profile';
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      num: 10,
      opac:0
    };
  },
  mounted(){
    console.log(this)
    console.log(1)
    this.$set(this.$data,'opac', 1)
  },
  components: {
    top,
    profile
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.flexCenter{
  justify-content: center;
}
.el-header,
.el-footer {
  background-color: #303133;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
