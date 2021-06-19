<template>
  <div class="cart">
  <scroll class="content">
  <cart-list-item v-for="(item,index) in cartList" :key="index" 
  :itemInfo="item"
  
  ></cart-list-item>
  </scroll>
  
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Scroll from 'components/common/Bscroll/BScroll.vue'
import cartListItem from './cartListItem.vue'

export default {
  name: 'CartList',
  data(){
      return{
          totalPrice:0
      }
  },
  
  components:{
      Scroll,
      cartListItem
  },
  computed:{
    ...mapGetters(['cartList'])
  },
  methods:{
      
  }
  
}
</script>

<style scoped>
.cart{
    height: calc(100vh - 44px - 49px);
    
}
.content{
    height: 100%;
    overflow: hidden;
}


</style>
