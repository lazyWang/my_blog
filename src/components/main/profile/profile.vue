<template>
 <div>
    <div class="block">
        <el-carousel trigger="click"  height="330px">
        <el-carousel-item v-for="item in img" :key="item.cid">
            <img class="banner" :src="item.img" alt="">
        </el-carousel-item>
        </el-carousel>
    </div> 
    <div>
        
    </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
        img:[
            { cid:1,img:'../../../static/images/banner_1.jpg' },
            { cid:2,img:'../../../static/images/banner_2.jpg' },
            { cid:3,img:'../../../static/images/banner_3.jpg' }
        ]
    };
  },

  components: {},

  computed: {}
};
</script>
<style  scoped>
.block{
    border-radius: 10px;
    overflow: hidden;
}
.banner{
    width: 1387px;
    height: 330px;
}
</style>