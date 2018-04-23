<template>
 <div>
    <div class="breadvrumb-line">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>成长的印迹</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="maxim">{{maxim}}</div>
    </div>
    <div class="main">
        <el-row v-for="(item,index) in lists" :key="item.id">
            <el-col :span="15">
                <div class="list-content bg-purple-dark" v-bind:class="{ listContenthover: lineList[index] }" v-on:mouseover="setSpan" v-on:mouseleave="cancelSpan"  :data-index='index'>
                   {{item.footprint}}
                </div>
            </el-col>
            <el-col :offset='2' :span="1" class="line-box">
                <div class="list-line">
                    <span class="line-eyes" :data-index='index' v-on:mouseover="setSpan" v-on:mouseleave="cancelSpan" v-bind:class="{ active: lineList[index] }"></span>
                </div>
            </el-col>
            <el-col :offset='2' :span="3">
                <div class="list-data bg-purple-dark bg-success" :data-index='index' v-on:mouseover="setSpan" v-on:mouseleave="cancelSpan" v-bind:class="{ dataHover: lineList[index] }">
                   {{item.data_time}}
                </div>
            </el-col>
        </el-row>
    </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
        lists:[],
      lineList:[0],
      maxim:''
    };
  },
    created(){
        this.$http.post(this.api+'/blog/Growfoot/getGrow').then(response => {
            this.lists=response.data.code
            }, response => {
        });
        this.$http.post(this.api+'/blog/Growfoot/getMaxim').then(res=>{
            this.maxim=res.data.code[0].grow
        },res=>{
        })
  },
  methods: {
      setSpan(e){
          let i = e.target.dataset.index;
          let lineList = this.$data.lineList;
          this.$set(this.lineList,i,true)
      },
      cancelSpan(e){
          let i = e.target.dataset.index;
          let lineList = this.$data.lineList;
          this.$set(this.lineList,i,false)
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
.main {
  margin-top: 20px;
}
.list-content {
  position: relative;
  border-radius: 10px;
  padding: 10px 20px 30px;
  text-align: left;
  text-indent: 20px;
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 20px;
  height: 85px;
  border-top: 1px solid rgb(231, 231, 231);
  box-sizing: border-box;
}
.list-data {
  margin-top: 15px;
  position: relative;
  padding: 0 20px;
  height: 40px;
  min-width: 137px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  margin-bottom: 20px;
  border-top-left-radius:10px;
  border-bottom-right-radius:10px;
  transition: all 1s;  
  opacity:.7;
}
.listContenthover {
  background-color: #eee;
}
.dataHover{
  opacity: 1;
  background-color: rgb(139, 191, 93);
  transition: all 1s;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
}
.line-box{
    height: 100%;
}
.list-line{
    width: 3px;
    background:rgb(238, 238, 238);
    height: 105px;
}
.line-eyes{
    transition: all 0.2s;    
    position: relative;
    top: 30px;
    left: -9px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 3px solid rgb(238, 238, 238);
    display: inline-block;
    background-color: #fff;
}
.active{
    border: 3px solid #999;    
    width: 22px;
    top: 28px;    
    left: -12px;
    height: 22px; 
    transition: all 0.5s;
    border-color: rgb(139, 191, 93);
}
</style>