<template>
  <div id="homeSwiper">
  <swiper>
  <SwiperItem v-for="(item,index) in banners" :key = "index">
  <a :href="item.link">
  <img :src="item.image" alt="" @load="imgLoad">
  </a>

  </SwiperItem>
  </swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/navbar'
import {Swiper,SwiperItem} from 'components/common/swiper/index'

export default {
  name: 'HomeSwiper',
  data(){
    return{
      isLoad:false
    }
  },
  components:{
      NavBar,
      Swiper,
      SwiperItem
  },
  props:{
      banners:Array,
      default:()=>[]
  },
  methods:{   
    imgLoad(){
       if(!this.isLoad){
         
         this.$emit('imgLoad1')
         this.isLoad = true
       }
    }
  }
  
}
</script>

<style scoped>



</style>
