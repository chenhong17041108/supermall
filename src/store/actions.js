export default{
    
        addCart(context,payload){
            return new Promise((resolve,rejact)=>{
                let oldProduct = context.state.cartGoods.find((item)=>{
                    return item.iid === payload.iid
                })
                if(oldProduct){
                    context.commit('addCounts',oldProduct)
                    resolve('当前商品数量+1')
                }else{
                    payload.count =1
                context.commit('addLists',payload)
                    resolve('加入购物车成功')
                }

            })
            
        }
}