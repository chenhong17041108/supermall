<template>
  <div>
  <nav-bar class="nav-bar">
  <div slot="center">购物车({{cartLength}})</div>
  </nav-bar>
  <cart-list></cart-list>
  <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/navbar'
import CartList from './cartComps/cartList.vue'
import cartBottomBar from './cartComps/cartBottomBar.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'cart',
  components:{
    NavBar,
    CartList,
    cartBottomBar
  },
  computed:{
    ...mapGetters(['cartLength'])
  }
  
}
</script>

<style scoped>
.nav-bar{
  background-color:var(--color-tint);
  color: #fff;
}

</style>
