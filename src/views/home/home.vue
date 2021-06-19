<template>
  <div id="home">
  <nav-bar class="home-nav"><span slot="center">购物街</span></nav-bar>
  <tab-control class="tab-control1"  
  :titles="['流行', '新款', '精选']" @change="nameChange"
  ref="tabControl1"
  v-show="showif"
  ></tab-control>
  <b-scroll class="wrapper" 
            ref="scroll" 
            :scroll-type="3"
            @positonChange="ifShow"
            @pullingUp="pullingUp"
            :pullUpLoad="true">
   <home-swiper :banners="banners" @imgLoad1="getHeight" ></home-swiper>
  <recommends :recommends="recommends"></recommends>
  <feature-vue></feature-vue>
  <tab-control  
  :titles="['流行', '新款', '精选']" 
  @change="nameChange"
  ref="tabControl2"
  ></tab-control>
  <goods-list :goods="goods[name].list"></goods-list>
  </b-scroll>
  <back-top class="back" @click.native="backTop" v-show="isShow" ></back-top>
  
  </div>

</template>

<script>
import NavBar from 'components/common/navbar/navbar'
import TabControl from '../../components/content/tabControl/tabControl.vue'
import goodsList from 'components/content/goods/goodsList'


import Recommends from './childComps/recommends.vue'
import FeatureVue from './childComps/featurevue.vue'
import HomeSwiper from './childComps/homeswiper.vue'
import BackTop from '@/components/content/backTop/backTop'



import {getHomeMultidata,getHomeData} from '../../network/home'
import {offImgMixin} from '@/common/mixin'

import BScroll from '@/components/common/Bscroll/BScroll'


export default {
  name: 'home',
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      name:"pop",
      isShow:false,
      offsetTop:0,
      showif:false,
      positionY:0,
      
    }
  },
  mixins:[offImgMixin],
  components:{
      HomeSwiper,
      NavBar,
      TabControl,
      Recommends,
      FeatureVue,
      goodsList,
      BScroll,
      BackTop
   
  },
  created(){
    this.getHomeMultidata(),
    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')
    
      },
  mounted(){
   
  },
  activated(){
       this.$refs.scroll.scroll.y = this.positionY
       this.$refs.scroll.refresh()
  },
  deactivated(){
    
         this.positionY = this.$refs.scroll.scroll.y
         this.$bus.$off('imgLoad',this.offImg)
  },

  methods:{
    getHomeMultidata(){
       getHomeMultidata().then(res =>{
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list
       })
       },
        getHomeData(type){
          const page = this.goods[type].page + 1
          getHomeData(type,page).then(res=>{
           
             this.goods[type].list.push(...res.data.list)
             this.goods[type].page += 1
             this.$refs.scroll.finishPullUp()

          })
        },
        nameChange(index){
          switch(index){
            case 0: this.name='pop'
            break
            case 1: this.name='new'
            break
            case 2: this.name='sell'
            break
          
          }
          this.$refs.tabControl2.currentIndex = index
          this.$refs.tabControl1.currentIndex = index

          
        },
        backTop(){
            
            this.$refs.scroll.backToTop(0,0)
        },
       
        
        ifShow(position){
          this.isShow = - position.y > 1000
          this.showif = - position.y > this.$refs.tabControl2.$el.offsetTop
        },
        pullingUp(){
          this.getHomeData(this.name)
          
        },
        getHeight(){
          
          this.offsetTop = this.$refs.tabControl2.$el.offsetTop
        }
     
        
    
  }

}
</script>

<style scoped>
#home{
  
  position: relative;
}
.back{

position: fixed;
right: 10px;
bottom: 50px;
}
.wrapper{

position: absolute;
right: 0;
left:0;
top:44px;
bottom: 49px;


}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
   position:fixed;
    left: 0;
    right: 0;
    top:0;
    z-index: 9;
    /**z-index越大显示的越上面 */
}
.tab-control{

background-color: #fff;
}
.tab-control1{
  position: relative;
  z-index: 9;
  top:44px;

background-color: #fff;
}



</style>
