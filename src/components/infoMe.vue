<template>
<el-container>
  <el-header height="60px">
    <top activeIndex="2"></top>
  </el-header>
  <el-container type="flex" class="flexCenter">
      <el-col :span="16" class="infoBody">
        <el-main>
            <info-center></info-center>
        </el-main>
      </el-col>
  </el-container>
</el-container>
</template>

<script>
import top from "./main/top/top";
import infoCenter from "./infoMe/infoCenter";
export default {
  data() {
    return {
        activeIndex: "2"
    };
  },

  components: {
      top,
      infoCenter
  },

};
</script>
<style  scoped>
.el-header,
.el-footer {
  background-color: #303133;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.flexCenter{
  justify-content: center;
}

.infoBody{
  min-width: 1140px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: rgb(239, 239, 239);
  margin-top: 20px;
  color: #333;
  text-align: left;
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
.el-container{
    background-color: rgb(239, 239, 239);
}
</style>