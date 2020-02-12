<template>
  <div>
    <el-carousel  height ='400px' class="imgheight">
      <el-carousel-item v-for="(item,index) in imgs" :key="index">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'detaikSwipper',
  props:{
    imgs:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .imgheight img{
    width: 100%;
    height: 500px;
    overflow: hidden;
  }
</style>