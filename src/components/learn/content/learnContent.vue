<template>
 <div class="main">
     <el-col class="content-left" :span="15">
       <div class="content-main">
          <h2 class="content-main-title">关于html5的一些心得</h2>
          <p class="content-autor"><span><i class="el-icon-service" style="color:rgb(255, 130, 142);"></i> 作者：why</span> <span><i class="el-icon-date" style="color:rgb(120, 207, 235);"></i>2018-11-12</span> <span><i class="el-icon-view" style="color:rgb(0, 153, 102);"></i> 阅读（11）</span></p>
          <div class="content-main-body">
            <div class="brief">
              简介：有些站长说想做一个手机适应的网站,但是导航太难了,如果要使用框架的话,代码非常多,冗余.再用dreamwear打开,那直接就不响应了.我一直都喜欢用简单的代码来实现,js,css3利用的好,同样可以做出好看实用的导航,关键是代码极少.现在我把步骤分享出来
            </div>
            <div>
              
            </div>
          </div>
       </div>
     </el-col>
     <el-col class="content-right" :offset="2" :span="7">
        <div class="why-detail-right-list layui-clear" id="view">
            <h4 class="my-card">我的名片</h4>          
            <ul class="list-text2">
              <li v-for="item in mylists" :key="item.name"> 
                <span>{{ item.class }}：</span>
                <span>{{ item.content }}</span>
              </li>
            </ul>
        </div>
        <div class="why-detail-right-top">
            <form action="">
                <el-input v-model="searchText" placeholder="请输入搜索内容"></el-input>
                <i class="el-icon-search search-img"></i>
            </form>
        </div>
        <div class="why-detail-right-list clear" :gutter="20">
            <h4 class="my-card">热门分类</h4>                    
            <div v-for="item in hotLists" v-bind:class="item.color" :key="item.class"  class="why-detail-right-list-nav">{{item.class}}</div>
        </div>
          <div class="why-detail-right-list" id="view">
            <h4 class="my-card">热门文章</h4>          
            <ul class="list-text2">
              <li v-for="item in essayLists" :key="item.name"> 
                <span>{{ item.id }}：</span>
                <a class="list-a" href="#"><span>{{ item.name }}</span></a>
              </li>
            </ul>
        </div>
     </el-col>
 </div>
</template>

<script>
export default {
  data() {
    return {
      searchText:'',
      //名片
      mylists: [],
      //推荐文章
      essayLists: [
        { id: "1", name: "关于html5的一些心得" },
        { id: "2", name: "十条设计原则教你学会如何设计网页布局" },
        { id: "3", name: "如何导入帝国模板组" },
        { id: "4", name: "6条网页设计配色原则" },
        { id: "5", name: "用js+css3来写一个手机栏目导航" },
        { id: "6", name: "别让这些闹心的套路，毁了你的网页设计" }
      ],
      //热门分类
      hotLists: [
        { class: "html", color: "bg-danger" },
        { class: "css", color: "bg-blue" },
        { class: "javascript", color: "bg-success" },
        { class: "vue", color: "bg-warning" },
        { class: "angular", color: "bg-info" }
      ]
    };
  },
  props:['mylists'],

  methods: {}
};
</script>
<style  scoped>
.main {
  text-align: left;
}
.content-left {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-top: 20px;
  overflow: hidden;
}
.content-right {
  overflow: hidden;
  margin-top: 20px;
  text-align: left;
}

.content-main {
  background-color: #fff;
}

.content-main-title {
  font-size: 20px;
  line-height: 40px;
  text-align: center;
}
.content-autor {
  font-size: 14px;
  text-indent: 10px;
}

.content-main-body {
  padding: 10px 20px 20px;
}
.brief {
  color: #888888;
  border: 1px solid #f3f3f3;
  padding: 10px;
  margin: 20px auto 15px auto;
  line-height: 23px;
  background: none repeat 0 0 #f6f6f6;
}
.why-detail-right-top {
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  position: relative;
}

.search-img {
  position: absolute;
  right: 25px;
  top: 27px;
  font-size: 26px;
  color: #1e9fff;
}
.why-detail-right-list {
  border-radius: 10px;
  margin: 0 0 25px;
  background-color: #fff;
  padding: 10px 0 20px;
}
.why-detail-right-list-nav {
  float: left;
  height: 26px;
  padding: 0 10px;
  line-height: 26px;
  margin: 10px 0 0 10px;
  text-align: center;
  border-radius: 5px;
  font-size: 12px;
  color: #fff;
  cursor: pointer;
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
.list-text2 {
  font-size: 14px;
  padding: 0 20px;
  color: #666;
}
.list-text2 li {
  line-height: 25px;
}
.my-card {
  font-size: 16px;
  color: #666;
  font-weight: normal;
  padding-bottom: 5px;
  border-bottom: 1px solid #1aa195;
}
.list-a {
  color: #666;
}
</style>