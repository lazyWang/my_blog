<template>
 <div>
    <div class="breadvrumb-line">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>学习</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="maxim">{{maxim}}</div>
    </div>
    <div class="main">
        <router-view :mylists="mylists"></router-view>
    </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
        maxim:'',
        mylists:[]
    };
  },

  created() {
    this.$http.post(this.api + "/blog/Growfoot/getMaxim").then(
      res => {
        this.maxim = res.data.code[0].learn;
      }
    ),
    this.$http.post(this.api + "/blog/Infome/getInfoMe").then(
      res => {
        console.log(res.data)
        this.mylists = res.data;
      }
    )    
  },
  methods: {}
};
</script>
<style  scoped>
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
</style>