import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
state:{
    cartGoods:[]
},
mutations,
    // let oldProduct = null
    //   for(let item of state.cartGoods){
    //       if(item.iid ===payload.iid){
    //           oldProduct = item
    //       }
    //   }
    //   if(oldProduct){
    //        oldProduct.count =+1
    //   }else{
    //       state.cartGoods.push(payload)
    //       payload.count =1
    //   }
   

actions,


getters
    

})

export default store