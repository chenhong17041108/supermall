<template>
  <div class="tab-control">
      <div v-for="(item , index) in titles" :key="index" class="controlItem" 
      :class="{isactive:index === currentIndex}"   @click="getActive(index)" >
      <span>{{item}}</span>
      
      </div>
  </div>
</template>

<script>


export default {
  name: 'TabConrtol',
  data(){
      return{
           currentIndex:0
      }
  },
  props:{
      titles:Array,
      default(){
          return []
      }
  },
  methods:{
      getActive(index){
        this.currentIndex = index
        this.$emit('change',index)
      },
      
  }
  
}

</script>

<style scoped>
.tab-control{
display: flex;
text-align: center;
font-size: 15px;
height: 40px;
line-height: 40px;

}
.controlItem{
flex:1;


}
.isactive span{
border-bottom: var(--color-tint) 3px solid;
}
span{
padding: 5px;

}
.isactive{
color:var(--color-high-text)
}

</style>
