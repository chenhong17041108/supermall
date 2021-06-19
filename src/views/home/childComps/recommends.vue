<template>
  <div class="recommends">
     <div v-for="(item,index) in recommends" :key="index" class="recommendsItem">
     <a :href="item.link">
     <img :src="item.image" alt="">
     <div>{{item.title}}</div>
     </a>
     </div>
  </div>
</template>

<script>


export default {
  name: 'Recommends',
  props:{
      recommends:Array,
      default:()=>{
          return []
          
      }
  }
  
}
</script>

<style scoped>
.recommendsItem{
    flex:1;
   
    text-align: center;
    padding: 10px 0 20px;
    font-size: 14px;
}
.recommendsItem img{
    width: 65px;
    height:65px;
    margin-bottom: 5px;
}
.recommends{
    display: flex;
     width: 100%;
    border-bottom: 10px solid #eee;
}


</style>
