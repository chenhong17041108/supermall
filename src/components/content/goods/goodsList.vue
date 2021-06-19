<template>
  <div class="goods-list" >
     <goods-list-item v-for="(item,index) in goods" :key=index :goodsItem="item"></goods-list-item>
  </div>
</template>

<script>
import goodsListItem from './goodsListItem.vue'

export default {
  name: 'goodsList',
  data(){
      return{
    }
  },
  components:{
      goodsListItem
  },
  props:{
      goods:Array,
      default(){
          return []
      }

  }
}

</script>

<style scoped>
.goods-list{
display: flex;
flex-wrap: wrap;
justify-content: space-around;
}
</style>
