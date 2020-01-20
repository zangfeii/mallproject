<template>
  <div class="wrapp" ref="wrapp">
    <div class="conent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import  BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    probeType :{
      type: Number,
      default: 0
    },
    pullUpLoad:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
     scroll: null,
     
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapp,{
      click: true,
      probeType: this.probeType,
      // pullUpLoad: true,
      pullUpLoad: this.pullUpLoad,
    }),
    this.scroll.on('scroll',(position) =>{
      this.$emit('scroll',position)
      // console.log(position);
    }),
    this.scroll.on('pullingUp', ()=>{
      // console.log('加载更多');
      this.$emit('pullingUp')
    })
  },
  methods: {
   scrollTo(x,y, time = 800){
      this.scroll.scrollTo(x,y,time)
    },

  },
}
</script>

<style scoped>

</style>