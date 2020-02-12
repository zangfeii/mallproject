<template>
  <div v-show="msg">
    <div>
      <p class="title">{{msg.title}}</p><br>
      <div>
        <span class="realPrice">{{msg.newPrice}}   </span>
        <span class="newPrice" v-if ='msg.oldPrice'>{{msg.oldPrice}}    </span>
        <span class="discount" v-if='msg.discount'>{{msg.discount}}</span>
      </div>
    </div>
    <br>
    <div class="text2">
      <span>{{msg.columns[0]}}</span>
      <span>{{msg.columns[1]}}</span>
      <span>{{msg.services[2].name}}</span>
    </div>
    <br>
    <div class="text3">
      <span v-for='(item,index) in msg.services' :key='index' v-show='index <= 1' class="text3_1" ref="spanref"> 
        <img :src="msg.services[index].icon" alt="" class="img" v-if ='msg.services[index].icon'>
        {{msg.services[index].name}}</span>
      <!-- <span>
        <img :src="msg.services[1].icon" alt="" class="img">
        {{msg.services[1].name}}
      </span> -->
    </div>
  </div>  
</template> 

<script>
export default {
  name: 'goodStatus',
  props:{
    msg:{
      type: Object,
      default(){
        return {}
      }
    }, 
  },
}
</script>

<style>
  .title{
    font-size: 20px;
    color: black;
  }

  .realPrice{
    color: #FF8D9C;
    font-size:30px;
  }

  .newPrice{
    text-decoration: line-through;
  }

  .discount{
    background-color: #F72C43;
    color: white;
    padding: 4px;
    border-radius: 10px;
  }

  .text2{
    display: flex;
    justify-content: space-between;
  }

  .text3{
    display: flex;
    justify-content: space-between;
  }

  .text3_1 {
    color: #575658;
  }

  .img{
    width: 10%;
  }
</style>