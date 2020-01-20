<template>
  <div class="gooditem">
    <img :src="gooditem.show.img" alt=""  @load="imgLoad">
    
    <div class="good-info">
      <p class="goodtext">{{gooditem.title}}</p>
      <span class="price">{{gooditem.price}}</span>
      <span class="collect">{{gooditem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name :'homeGoodListItem',
  props: {
    gooditem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad(){
      //$bus需要在main.js中配置
    this.$bus.$emit('loadimg')
    }
  },
}
</script>

<style>
  .gooditem{
    width: 48%;
    font-size: 12px;
  }
  .gooditem img {
    width: 100%;
    padding: 4px;
    border-radius: 10px;
  }

  .goodtext{
    overflow: hidden;
    text-overflow: ellipsis;
    /* text-align: center; */
  }
  
  .price{
    color:red;
    font-size: 13px;
  }

  .price::before{
    content: '¥';
    font-size: 10px;
  }

  .good-info{
    white-space: nowrap;
    text-align: center;
    overflow: hidden;
  }
  .collect::before{
    content: '♥ ';
    font-size: 15px;
    padding-left: 4px;
  }
</style>