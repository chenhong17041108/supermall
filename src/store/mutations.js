export default{
    addCounts(state,payload){
        payload.count++
    },
    addLists(state,payload){
        payload.checked = true
        state.cartGoods.push(payload)
    }
}
