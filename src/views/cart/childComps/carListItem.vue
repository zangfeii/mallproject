<template>
  <div id="carlistitem">
    <!-- 选择按钮 -->
    <div class="btn">
       <check-button @click.native="isChecked" :ischek='caritem.isChecked'></check-button>
    </div>
    <!-- 图片信息 -->
    <div class="pic">
      <img :src="caritem.img" alt="">
    </div>
    <!-- 商品信息 -->
    <div class="goodsinfo">
      <p>{{caritem.title}}</p>
      <div class="goodsvalue">
        <span class="price">{{caritem.price}}</span>
        <span>x{{caritem.count}}</span>
      </div>
    </div>
  </div>  
</template>

<script>
import checkButton from './checkButton'
export default {
  name: 'carListItem',
  components: {checkButton},
  props: {
    caritem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    isChecked(){
      this.caritem.isChecked = !this.caritem.isChecked
    }
  }
}
</script>

<style>
  #carlistitem {
    display: flex;
    border: 1.5px solid pink;
    border-radius: 10px;
    padding: 5px;
    margin: 5px;
  }

  .btn {
    width: 5%;
    margin: 10% auto;
  }

  .pic {
    width: 20%;
    text-align: center;
    /* height: 100px; */
  }
  
  .goodsinfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 75%;
  }

  .goodsvalue {
    padding: 5px;
    display: flex;
    justify-content: space-between
  }

  .price {
    color: orange;
    font-size: 17px;
  }

  .goodsinfo p {
    font-size: 19px;
    color: black;
  }
  
  p {
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
  }



  .pic img {
    /* width: 25%; */
    border-radius: 10px;
  }
</style>