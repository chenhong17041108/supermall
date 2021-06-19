<template>
  <div>
  <nav-bar>
  <div slot="left" class="back" @click="imgClick">
  <img src="@/assets/img/common/back.svg" alt="">
  </div>
  <div slot="center" class="detailBar">
  <div v-for="(item,index) in titles" :key="index" 
  class="BarItem" 
  @click="itemClick(index)"
  :class="{isActive:currentIndex === index}">{{item}}</div>
  </div>
  </nav-bar>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/navbar'

export default {
  name: 'detailBar',
  data(){
      return {
          titles:[
              '商品',
              '参数',
              '评论',
              '推荐'
          ],
          currentIndex:0
              
          
      }

  },
  components:{
      navBar
    
  },
  methods:{
      itemClick(index){
          
          this.currentIndex = index
          this.$emit('goto',index)
      },
      imgClick(){
          this.$router.back()
      }
  } 
  
}
</script>

<style scoped>
.detailBar{
display: flex;
font-size: 13px;
}
.BarItem{
flex: 1;
}
.back img{
margin-top: 10px;
}
.isActive{
color:var(--color-high-text);
}
</style>
