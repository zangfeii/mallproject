<template>
  <div class="shoper">
    <!-- 商家信息 -->
    <div class="logo">
      <span><img :src="shopermsg.logo" alt=""></span>
      <span class="shopname">{{shopermsg.name}}</span>
    </div>

      <!-- 数量信息 -->
    <div class="shopmsg">
      <!-- 商品数量信息 -->
      <div class="goodsnum">
        <div class="allsell">
          <p>{{shopermsg.goodssell}}</p>
          <p v-if="shopermsg.goodssell">销售量</p>
        </div>
        <div class="allgoods">
          <p>{{shopermsg.goodsnum}}</p>
          <p v-if="shopermsg.goodsnum">全部宝贝</p>
        </div>
      </div>
      
      <!-- 商家评价 -->
      <div class="shoperrmsg">
        <div v-for="(item,index) in shopermsg " :key="index">
          <!-- <p> {{item.score[1].name}}</p> -->
          <!-- <p> {{item.score[1].score}}</p> -->
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailShoper',
  props:{
     shopermsg:{
       type:Object,
       default(){
         return {}
       }
     }
  },
  created() {
    console.log('shoper:'+this.shopermsg)
    console.log('/////');
  },
}
</script>

<style>
  .logo {
    position: relative;
    margin-top: 50px;
    margin-left: 10px;
    font-size: 17px;
    color: #000;
    height: 30px;
  }

  .logo img{
    width: 30px;
    border-radius: 50%;
  }

  .shopname{
    /* display: inline; */
    position: absolute;
    margin-left: 10px;
    padding-top:5.5px;
  }
  
  .shopmsg{
    display: flex;
    justify-content:space-around;
    margin-top: 20px;
    color: #000;
  }

  .goodsnum {
    display: flex;
    justify-content:space-around;
    align-items: center
  }
  
  .allsell {
    padding-right: 50px;
  }

  p{
    margin: 5px;
  }
   
</style>