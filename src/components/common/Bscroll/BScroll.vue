<template>
  
   <div  class="wrapper" ref="wrapper">
      <div>
        <slot></slot>
        </div>
   </div>
  
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'BScroll',
  props:{
    scrollType:Number,
    default:0,
    pullUpLoad:Boolean,
    default:false
  },
  data(){
      return{
          scroll:null
      }
  },
  mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{
             click:true,
             probeType:this.scrollType,
             pullUpLoad:this.pullUpLoad
      })
      this.scroll.on('scroll',(position)=>{
        this.$emit('positonChange',position)
      })
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })


  },
  methods:{
    backToTop(x,y,time=300){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    }
  }
 
  
  }
</script>

<style scoped>




</style>
