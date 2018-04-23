<template>
    <div class="main">
        <div class="sel-class">
            <el-col :span="4">
                <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link">
                        分类<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command='all' >全部</el-dropdown-item>                        
                        <el-dropdown-item :command=index+1  v-for="(item,index) in classes" :key="item.id">{{item.class}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </div>
        <div class="photo-list">
            <div class="list-content"  v-for="(item,index) in photoList" :key="index"  v-show="show=='all' || (show==item.class_type)">
                <router-link :to="'/dispor/photoList/'+item.book"><img class="list-content-img" :src="item.img" alt=""></router-link>
                <div class="ln1">
                    <span class="ln1-left">{{item.class}}</span>
                    <span class="ln1-right">{{item.remark}}</span>
                </div>
                <div class="ln2">
                    <span>创建于{{item.creat_time}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      photoList: [],
      classes:[],
      show:'all'
    };
  },
  created() {
    this.$http.post(this.api + "/blog/Infome/getInfoMe").then(res => {
      this.lists = res.data;
    }),
    this.$http.post(this.api + "/blog/Growfoot/getMaxim").then(res => {
      this.maxim = res.data.code[0].infome;
    }),
    this.$http.post(this.api+'/blog/Photo/getClass').then(res => {
      this.classes = res.data;
    }),
    this.$http.post(this.api+'/blog/Photo/getBook').then(res => {
      this.photoList = res.data
    })
  },
  methods: {
      handleCommand(command){
          this.$set(this.$data,'show',command)
      }
  }
};
</script>
<style  scoped>
.main {
  margin-top: 20px;
}
.sel-class{
    width: 100%;
    height: 40px;
    text-align: left;
    text-indent: 20px;
}
.photo-list{
    display: flex;
    flex-wrap:wrap;
    align-content:flex-end;
    /* justify-content:space-around; */
}
.list-content{
    box-sizing: border-box;
    width: 190px;
    height: 248px;
    padding: 14px 14px 19px;
    border-color: #F0F0F0 #E6E6E6 #D8D8D8;
    border-style: solid;
    border-width: 1px;
    background: #fff url(http://r.ph.126.net/photo/image/album/bg_album_list.png?v=20111219) repeat-x 0 bottom;
    margin: 0 25px 23px 0;
    display: inline;
    position: relative;
}
.list-content:hover{
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    background-color: #fefefe;
}
.list-content-img{
    width: 160px;
    height: 160px;
}
.ln1,.ln2{
    margin-top: 6px;
    font-size: 12px;
    line-height: 20px;
    text-align: left;
}
.ln1-left{
    float: left;
    width: 90px;
    text-align: left;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap; 
}
.ln1-right{
    float: right;
    width: 60px;
    text-align: right;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.ln2{
    color: #999;
}
</style>