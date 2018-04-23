<template>
    <div class="main">
        <div class="sel-class">
            <el-col :span="4">
                <router-link to="/dispor/book">返回相册>></router-link>
            </el-col>
        </div>
        <div class="photo-list">
            <div class="list-content" v-for="(item,index) in photoList" :key="index">
                <router-link to="#"><img class="list-content-img" :src="item.img" alt=""></router-link>
                <div class="ln1">
                    <span>{{item.class}}</span>
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
      photoList: []
    };
  },

  created() {
    this.$http.post(this.api + "/blog/Photo/getPhotoList?book="+this.$route.params.book).then(res=>{
      console.log(res.data)
      this.photoList = res.data
    })
  },

  methods: {}
};
</script>
<style  scoped>
.main {
  margin-top: 20px;
}
.sel-class{
    width: 100%;
    height: 40px;
    font-size: 14px;
    text-align: left;
    text-indent: 20px;
}
.photo-list{
    display: flex;
    flex-wrap:wrap;
    /* align-content:flex-start; */
    /* justify-content:space-around; */
    align-items:flex-start;
}
.list-content{
    box-sizing: border-box;
    width: 170px;
    padding: 14px 10px 19px;
    border-color: #F0F0F0 #E6E6E6 #D8D8D8;
    border-style: solid;
    border-width: 1px;
    /* background: #fff url(http://r.ph.126.net/photo/image/album/bg_album_list.png?v=20111219) repeat-x 0 bottom; */
    margin: 0 25px 23px 0;
    /* display: inline; */
    position: relative;
    float: left;
}
.list-content:hover{
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    background-color: #fefefe;
}
.list-content-img{
    width: 140px;
}
.ln1,.ln2{
    margin-top: 6px;
    font-size: 12px;
    line-height: 20px;
    text-align: left;
}
.ln2{
    color: #999;
}
</style>