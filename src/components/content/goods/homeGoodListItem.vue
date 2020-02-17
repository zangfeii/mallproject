<template>
  <div class="gooditem" @click="itemClicl" v-show="gooditem">
    <img v-lazy="showimg" alt=""  @load="imgLoad">
    
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
    if(this.$route.path.indexOf('/home')){
      this.$bus.$emit('loadimg')
    } else if(this.$route.path.indexOf('/detail')){
      this.$bus.$emit('detailItemimgLoad')
    }
    
    },
    itemClicl(){
      this.$router.push("/detail/"+this.gooditem.iid)
      console.log('点击');
    }
  },

  computed: {
    showimg(){
      return   this.gooditem.image || this.gooditem.show.img
      // if(this.gooditem.show.img){
      //   return this.gooditem.show.img
      // }
      // return this.gooditem.image
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