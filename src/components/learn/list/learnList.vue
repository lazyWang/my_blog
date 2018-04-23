<template>
 <div class="main">
     <el-col class="content-left" :span="15">
        <div class="list" v-for="(item,index) in lists" :key="index">
            <h3 class="title">{{item.title}}</h3>
            <div class="title-class"><span><i class="el-icon-date" style="color:rgb(120, 207, 235);"></i> {{item.data}}</span><span><i class="el-icon-more" style="color:rgb(110, 188, 198);"></i> 评论（{{item.comment}}）</span><span><i class="el-icon-service" style="color:rgb(255, 130, 142);"></i> 作者： {{item.anutor}}</span><span><i class="el-icon-menu" style="color:rgb(120, 207, 235);"></i> 分类：{{item.class}}</span><span><i class="el-icon-view" style="color:rgb(0, 153, 102);"></i> 阅读（{{item.readNum}}）</span></div>
            <div class="list-content"> 
              <img class="list-img"  :src="item.img">
              <div class="list-text">
                {{item.contentTop}}
              </div>
            </div>
            <div class="list-read">阅读全文>></div>
        </div>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
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
      //文章
      lists: [
        {
          title: "关于html5的一些心得",
          data: "2018年4月13日",
          comment: 1,
          anutor: "why",
          class: "html",
          readNum: "3",
          img:
            "http://www.yangqq.com/d/file/jstt/css3/2017-08-08/a1fbdb8105f82ea04993f2dbbeacf29a.jpg",
          contentTop: `至于我为什么想起来写正则。你知道正则能干啥吗？今天有一个搜索关键词高亮的需求，网上一查，正则( ˇˍˇ )。加上之前有用过正则捕获，域名正则匹配，都是稀里糊涂一知半解的就用正则实现了，这让我不禁深深地感受到正则的强大…`
        },
        {
          title: "别让这些闹心的套路，毁了你的网页设计",
          data: "2018年4月13日",
          comment: 1,
          anutor: "why",
          class: "html",
          readNum: "3",
          img:
            "http://www.yangqq.com/d/file/jstt/css3/2017-08-08/a1fbdb8105f82ea04993f2dbbeacf29a.jpg",
          contentTop: `至于我为什么想起来写正则。你知道正则能干啥吗？今天有一个搜索关键词高亮的需求，网上一查，正则( ˇˍˇ )。加上之前有用过正则捕获，域名正则匹配，都是稀里糊涂一知半解的就用正则实现了，这让我不禁深深地感受到正则的强大…`
        },
        {
          title: "十条设计原则教你学会如何设计网页布局!",
          data: "2018年4月13日",
          comment: 1,
          anutor: "why",
          class: "html",
          readNum: "3",
          img:
            "http://www.yangqq.com/d/file/jstt/css3/2017-08-08/a1fbdb8105f82ea04993f2dbbeacf29a.jpg",
          contentTop: `至于我为什么想起来写正则。你知道正则能干啥吗？今天有一个搜索关键词高亮的需求，网上一查，正则( ˇˍˇ )。加上之前有用过正则捕获，域名正则匹配，都是稀里糊涂一知半解的就用正则实现了，这让我不禁深深地感受到正则的强大…`
        },
        {
          title: "用js+css3来写一个手机栏目导航",
          data: "2018年4月13日",
          comment: 1,
          anutor: "why",
          class: "html",
          readNum: "3",
          img:
            "http://www.yangqq.com/d/file/jstt/css3/2017-08-08/a1fbdb8105f82ea04993f2dbbeacf29a.jpg",
          contentTop: `至于我为什么想起来写正则。你知道正则能干啥吗？今天有一个搜索关键词高亮的需求，网上一查，正则( ˇˍˇ )。加上之前有用过正则捕获，域名正则匹配，都是稀里糊涂一知半解的就用正则实现了，这让我不禁深深地感受到正则的强大…`
        },
        {
          title: "6条网页设计配色原则,让你秒变配色高手",
          data: "2018年4月13日",
          comment: 1,
          anutor: "why",
          class: "html",
          readNum: "3",
          img:
            "http://www.yangqq.com/d/file/jstt/css3/2017-08-08/a1fbdb8105f82ea04993f2dbbeacf29a.jpg",
          contentTop: `至于我为什么想起来写正则。你知道正则能干啥吗？今天有一个搜索关键词高亮的需求，网上一查，正则( ˇˍˇ )。加上之前有用过正则捕获，域名正则匹配，都是稀里糊涂一知半解的就用正则实现了，这让我不禁深深地感受到正则的强大…`
        },
        {
          title: "如何导入帝国模板组",
          data: "2018年4月13日",
          comment: 1,
          anutor: "why",
          class: "html",
          readNum: "3",
          img:
            "http://www.yangqq.com/d/file/jstt/css3/2017-08-08/a1fbdb8105f82ea04993f2dbbeacf29a.jpg",
          contentTop: `至于我为什么想起来写正则。你知道正则能干啥吗？今天有一个搜索关键词高亮的需求，网上一查，正则( ˇˍˇ )。加上之前有用过正则捕获，域名正则匹配，都是稀里糊涂一知半解的就用正则实现了，这让我不禁深深地感受到正则的强大…`
        }
      ],
      //名片
      mylists:[

      ],
      //推荐文章
      essayLists:[
        {id:'1',name:'关于html5的一些心得'},
        {id:'2',name:'十条设计原则教你学会如何设计网页布局'},
        {id:'3',name:'如何导入帝国模板组'},
        {id:'4',name:'6条网页设计配色原则'},
        {id:'5',name:'用js+css3来写一个手机栏目导航'},
        {id:'6',name:'别让这些闹心的套路，毁了你的网页设计'}
      ],
      //热门分类
      hotLists:[
        {class:'html',color:'bg-danger'},
        {class:'css',color:'bg-blue'},
        {class:'javascript',color:'bg-success'},
        {class:'vue',color:'bg-warning'},
        {class:'angular',color:'bg-info'}
      ],
      currentPage4: 1
    };
  },
  props:['mylists'],
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
};
</script>
<style  scoped>
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
.list {
  padding: 0 20px 40px;
  background-color: #fff;
  border-bottom: 1px solid rgb(204, 204, 204);
}
.list:last-child {
  border: none;
}
.title {
  line-height: 40px;
  font-size: 16px;
  text-indent: 20px;
  text-align: left;
  color: #555;
}
.title-class {
  margin: 0px 20px 10px;
  display: flex;
  font-size: 12px;
  text-align: left;
  /* border-top: 1px dashed #555; */
  /* border-bottom: 1px dashed #555; */
  justify-content: space-around;
  margin: 0 -20px 10px;
  color: #838383;
}
.list-content {
  text-align: left;
  text-indent: 20px;
  overflow: hidden;
  font-size: 14px;
  color: #888;
}

.list-img {
  width: 200px;
  float: left;
  margin-right: 20px;
}

.list-text {
  margin-top: 10px;
  padding-left:20px;
}

.list-read {
  /* background-color: rgb(232, 135, 48); */
  cursor: pointer;
  width: 80px;
  height: 22px;
  color: rgb(87, 165, 183);
  float: right;
  line-height: 22px;
  font-size: 14px;
  border-radius: 5px;
}

.why-detail-right-top {
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  position: relative;
}

.search-img{
  position: absolute;
  right: 25px;
  top: 27px;
  font-size: 26px;
  color: #1e9fff;
}
.why-detail-right-list {
  border-radius: 10px;
  margin:0 0 25px;
  background-color: #fff;
  padding:10px 0 20px;
}
.why-detail-right-list-nav{
  float: left;  
  height: 26px;
  padding:0 10px;
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
.my-card{
  font-size: 16px;
  color: #666;
  font-weight: normal;
  padding-bottom: 5px;
  border-bottom: 1px solid #1AA195;
}
.list-a{
  color:#666;
}
</style>