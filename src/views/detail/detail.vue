<template>
  <div id="detail">
  
  <detail-bar class="detail-bar" @goto="goTo" ref="detailBar"></detail-bar>
  <b-scroll class="content" ref="scroll" @positonChange="shiftTitles" :scrollType="3">
  
  <detail-swiper :topImg="topImg"></detail-swiper>
  <detail-base-info :goods="Goods"></detail-base-info>
  <detail-shop-info-1 :shop="Shop" ></detail-shop-info-1>
  <detail-shop-image :shopInfo="shopInfo" @imageLoad="imgRefresh"></detail-shop-image>
  <detail-params-info ref="params" :paramInfo="paramInfo"></detail-params-info>
  <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
  <goods-list ref="recommend" :goods="recommend"></goods-list>
  </b-scroll>
  <back-top class="back" @click.native="backTop" v-show="isShow"></back-top>
  <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
  
  </div>
</template>

<script>
import detailBar from './childComps/detailBar.vue'
import detailSwiper from './childComps/detailSwiper'
import {getDetail,getRecommend,Goods,Shop} from '@/network/detail.js'
import DetailBaseInfo from './childComps/detailBaseInfo'
import DetailShopInfo1 from './childComps/detailShopInfo1'
import DetailShopImage from './childComps/detailShopImage.vue'
import DetailParamsInfo from './childComps/detailParamsInfo.vue'
import DetailCommentInfo from './childComps/detailCommentInfo.vue'
import DetailBottomBar from './childComps/detailBottomBar.vue'

import GoodsList from 'components/content/goods/goodsList'
import BackTop from 'components/content/backTop/backTop'


import BScroll from '../../components/common/Bscroll/BScroll.vue'




export default {
  name: 'detail',
  data(){
      return{
          iid:null,
          topImg:[],
          Goods:{},
          Shop:{},
          shopInfo:{},
          paramInfo:{},
          commentInfo:{},
          recommend:[],
          offImg:null,
          positionY:[],
         
          isShow:false,
         
         
         
      }
  },
  components:{
      detailBar,
      detailSwiper,
      DetailBaseInfo,
      DetailShopInfo1,
      BScroll,
      DetailShopImage,
      DetailParamsInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar,
      BackTop,
      
    

      
  },
    
  created(){
         this.iid = this.$route.params.iid
          getDetail(this.iid).then(res=>{
            console.log(res)
              const data = res.result
             
              this.topImg.push(...data.itemInfo.topImages)
              this.Goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
              this.Shop = new Shop(data.shopInfo)
              this.shopInfo = data.detailInfo
              this.paramInfo = data.itemParams
              if(data.rate.list !==0)
              this.commentInfo = data.rate.list[0]
              

          })
          getRecommend().then(res=>{
            this.recommend.push(...res.data.list)
            
          })
          
          
      
  },
  mounted(){
    this.offImg = ()=>{
      this.$refs.scroll.refresh()
    
    }
    this.$bus.$on('imgLoad',this.offImg)
    
    
  },
  deactivated(){
    this.$bus.$off('imgLoad',this.offImg)
  },
  methods:{
    imgRefresh(){
      this.$refs.scroll.refresh()
      
           this.positionY = []
           this.positionY.push(0)
           this.positionY.push(this.$refs.params.$el.offsetTop)
           this.positionY.push(this.$refs.comment.$el.offsetTop)
           this.positionY.push(this.$refs.recommend.$el.offsetTop)
           
           

          
     
    },
    goTo(index){
      
      
      this.$refs.scroll.scroll.scrollTo(0, -this.positionY[index], 100)

    },
    shiftTitles(position){
      
      if(-position.y >= 0 && -position.y < this.positionY[1]){
        this.$refs.detailBar.currentIndex = 0
      }else if(-position.y >= this.positionY[1] && -position.y < this.positionY[2]){
        this.$refs.detailBar.currentIndex = 1
      }else if(-position.y >= this.positionY[2] && -position.y < this.positionY[3]){
        this.$refs.detailBar.currentIndex = 2
      }else if(-position.y >= this.positionY[3]){
        this.$refs.detailBar.currentIndex = 3
      }
       this.isShow = - position.y > 1000
    }, 
    backTop(){
           
            this.$refs.scroll.backToTop(0,0)
        },
    addToCart(){
      const product = {}
      product.iid = this.iid
      product.image = this.topImg[0]
      product.title = this.Goods.title
      product.desc = this.Goods.desc
      product.price = this.Goods.realPrice
      this.$store.dispatch('addCart',product).then(res=>{
        
        this.$toast.Show(res,2000)
        })
    },

       
   
  

    
      
    
  }
  
}

</script>

<style scoped>
#detail{
  
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-bar{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content{
  height: calc(100% - 44px);
}
.back{

position: fixed;
right: 10px;
bottom: 50px;
}

</style>
