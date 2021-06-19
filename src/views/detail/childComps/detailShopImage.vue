<template>
  <div v-if="Object.keys(shopInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{shopInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div v-for="(itemx,index) in shopInfo.detailImage" :key="index">
    <div class="info-key">{{itemx.key}}</div>
    <div class="info-list">
      <img v-for="(item, indey) in itemx.list" :key="indey" :src="item" alt="" @load="imageLoad" >
    </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'DetailShopImage',
  props:{
      shopInfo:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  methods:{
      imageLoad(){
          this.$emit('imageLoad')
      }
  }
  
}
</script>

<style scoped>
.goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-desc {
     padding: 0 15px;
  }

  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .info-desc .end::after {
    right: 0;
  }

  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .info-list img {
    width: 100%;
  }


</style>
