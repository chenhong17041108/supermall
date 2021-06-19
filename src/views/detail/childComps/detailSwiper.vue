<template>
  <div>
  <swiper class="imgSwiper">
  <swiper-item v-for="(item,index) in topImg" :key="index"><img :src="item" alt=""></swiper-item>
  </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'

export default {
  name: 'detailSwiper',
  components:{
      Swiper, 
      SwiperItem
  },
  props:{
       topImg:Array,
       default(){
           return []
       }
  }
}
   
  
            
</script>

<style scoped>
.imgSwiper{
  height: 300px;
  overflow: hidden;
}



</style>
