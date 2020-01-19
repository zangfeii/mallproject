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
  data() {
    return {
     scroll: null,
     props: {
       probeType :{
         type: Number,
         default: 0
       }
     }
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapp,{
      click :true,
      probeType:this.probeType,
      pullUpLoad:true
    }),
    this.scroll.on('scroll',(position) =>{
      this.$emit('scroll',position)
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