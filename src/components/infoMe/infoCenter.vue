<template>
    <div>
      <div class="breadvrumb-line">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>关于why</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="maxim">{{maxim}}</div>
      </div>
      <transition name="fade">
         <div class="why-detail" v-if="opac">
            <div class="layui-main">
                <div class="why-detail-left el-rate__decimal">
                    <img class="why-photo" src="../../../static/images/why.jpg" alt="">
                    <h2 class="why-title">一、关于why</h2>
                    <p class="why-list">1.一个对于"web前端"抱着梦想,不停提高自我价值的90后中年人。</p>
                    <p class="why-list">2.一个天秤男，平时渴望别人的认同，情绪倾向於表面，其实嘴里说的有时和心里想的是两回事。面临选择时有时会犹豫，但决定之后不达目的不罢休。</p>
                    <p class="why-learn">在我认为：不管学习什么东西，一定要有属于自己的“学习方法”和善于“对事物的总结”。</p>
                    <p class="why-learnList">俗话说的好：“方向不对，努力白费！”很多人都是盲目的去学习，导致花了大量的时间，在学习一些没有用处的东西，到头来什么都没学会，因此会打击自己的学习欲望，也会让自己处于迷茫当中...一个优秀的传道授业者“不单单传授的是知识，更多传授的是思维和方法”。---授人以鱼不如授人以渔</p>
                    <p class="why-learnList">其实，人的一生中都是在不断的学习，不管是技术也好，做人也罢！我觉得都应该以一颗“谦卑的心态来学习，秉持利他之心来帮助他人。”</p>
                      <img class="why-name"   src="../../../static/images/name.png" alt="">
                </div>
                <div class="why-detail-right el-rate__decimal">
                    <div class="why-detail-right-top">
                        <form action="">
                            <el-input v-model="searchText" placeholder="请输入搜索内容"></el-input>
                            <i class="el-icon-search search-img"></i>
                        </form>
                    </div>
                    <el-row class="why-detail-right-list" :gutter="5">
                        <el-col :span="12" ><router-link to="/growth"><div class=" why-detail-right-list-nav bg-danger">个人日记</div></router-link></el-col>
                        <el-col :span="12"><div class=" why-detail-right-list-nav bg-warning" @click="getAvi">视频教程</div></el-col>
                        <el-col :span="12" ><div class="why-detail-right-list-nav bg-success">web前端</div></el-col>
                        <el-col :span="12"><div class="why-detail-right-list-nav bg-blue" @click="getInfo">个人简介</div></el-col>
                    </el-row>
                    <div class="why-detail-right-list layui-clear">
                        <h2 class="why-detail-right-list-title">你也想建立一个个人网页？</h2>
                        <p class="why-detail-right-list-info">假如你也想要打造一个属于你自己的网站，成为一个家喻户晓的人物呢？</p>
                        <p class="why-detail-right-list-info">点击了解
                            <a href="#" class="layui-word-aux">如何建立个人网站</a>
                        </p>
                    </div>
                    <div class="why-detail-right-list layui-clear" id="view">
                        <ul class="list-text">
                          <li v-for="item in lists" :key="item.class"> 
                            <span>{{ item.class }}：</span>
                            <span>{{ item.content }}</span>
                          </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </transition>
    </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [],
      searchText: "",
      opac: 0,
      maxim:''
    };
  },
  created() {
    this.$http.post(this.api + "/blog/Infome/getInfoMe").then(res => {
      this.lists = res.data;
    }),
    this.$http.post(this.api + "/blog/Growfoot/getMaxim").then(res => {
      this.maxim = res.data.code[0].infome;
    });
  },
  mounted() {
    this.$set(this.$data, "opac", 1);
  },
  methods:{
    getAvi(){
            this.$alert('现在还没有视频呢，想要什么学习资源请留言告诉我', '视频教程', {
          confirmButtonText: '确定',
        });  
    },
    getInfo(){
        this.$alert('这就是我的简历，想更了解我请联系QQ', '个人简历', {
          confirmButtonText: '确定',
          // callback: action => {
          //   this.$message({
          //     type: 'info',
          //     message: `action: ${ action }`
          //   });
          // }
        });
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
.maxim {
  position: absolute;
  top: 0;
  right: 20px;
  font-size: 12px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.why-detail {
  margin-top: 16px;
}
.why-detail-left {
  width: 680px;
  background-color: #fff;
  padding-bottom: 124px;
  position: relative;
  right: 20px;
}
.why-detail-right {
  width: 396px;
  vertical-align: top;
  position: relative;
  left: 20px;
}

.why-photo {
  width: 300px;
  height: 400px;
  margin: 16px;
  float: left;
}
.why-learn {
  margin-top: 220px;
  font-size: 15px;
  color: #666;
  line-height: 25px;
  text-indent: 25px;
  padding: 0 10px;
}
.why-learnList {
  font-size: 15px;
  color: #666;
  line-height: 25px;
  text-indent: 25px;
  padding: 0 10px;
}
.why-name {
  width: 240px;
  height: 100px;
  position: absolute;
  bottom: 5px;
  right: 5px;
}

/* .opac{
  transition: all 10s;
  opacity: 1;
} */

.search-img {
  position: absolute;
  right: 25px;
  top: 27px;
  font-size: 26px;
  color: #1e9fff;
}
.why-title {
  margin-top: 24px;
  font-size: 16px;
  font-weight: 600;
  color: #73706d;
  margin-bottom: 10px;
}
.why-list {
  font-size: 15px;
  color: #666;
  line-height: 25px;
  margin-bottom: 8px;
  text-indent: 22px;
  padding: 0 10px;
}
.why-detail-right-top {
  padding: 20px;
  background-color: #fff;
  position: relative;
}

.why-detail-right-list {
  margin: 25px 0;
  background-color: #fff;
  padding: 20px 0;
}
.why-detail-right-list-nav {
  width: 178px;
  height: 50px;
  line-height: 50px;
  margin: 0 10px 15px;
  text-align: center;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
}
.why-detail-right-list-nav:hover {
  font-size: 20px;
  transition: all 0.2s;
}
.why-detail-right-list-title {
  font-size: 16px;
  font-weight: 600;
  color: #f45;
  text-align: center;
  padding: 10px 2px 2px;
}
.why-detail-right-list-info {
  text-indent: 20px;
  font-size: 14px;
  font-weight: 500;
  color: #575656;
  padding: 5px;
  line-height: 25px;
}
.list-text {
  padding: 0 20px;
  color: #484646;
}
.list-text li {
  line-height: 25px;
}
</style>