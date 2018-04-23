<template>
 <div>
    <div class="breadvrumb-line">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>记录点滴</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="maxim">细细品味生活中的点滴</div>
    </div>
    <router-view></router-view>
 </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
        this.$set(this.lineList,i,0)
      }
  }
};
</script>
<style  scoped>
.breadvrumb-line {
  padding-bottom: 20px;
  position: relative;
  border-bottom: 1px solid #999;
}
.maxim{
    position: absolute;
    top: 0;
    right: 20px;
    font-size: 12px;
}

</style>