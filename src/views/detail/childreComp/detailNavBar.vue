<template>
  <div>
    <nav-bar>
      <div slot ='left' class="left" @click="back" ><span></span></div>
      <div slot ='center' class="title">
      <div v-for='(item,index) in titles' :key='index' @click="detailifo(index)" 
        :class="{clicked :titleClick === index}">
        {{item}}
      </div>
    </div>
    <div slot ='right'></div>
    </nav-bar>
  </div>

</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar'

// import  {getDetail} from '../../../network/detail'
export default {
  name: 'detailNavBar',
  components:{
    NavBar
  },
  
  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      titleClick:0,
      detaildata:''
    }
  },
  props:{
    getiid:{
      type:String,
      default:''
    }
  },
  created() {
    // getDetail(this.iid).then(res =>{
    // console.log(res);
    // })
  },

  

  methods: {
    back(){
      this.$router.back()
    },
    detailifo(index){
      // console.log(index);
      this.titleClick = index
      this.$emit('titleClick',index)
    }
  },
}
</script>

<style>
  .left span::after{
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    width: 15px;
    height: 15px;
    border-top: 2px solid pink;
    border-left: 2px solid pink;
    transform: rotate(-45deg);
  }

  .title{
    display: flex;
    justify-content: space-around;
    
  }

  .clicked{
    color: pink;
  }
</style>