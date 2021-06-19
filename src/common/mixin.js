export const offImgMixin ={
    data(){
        return{
            offImg:null
        }
    },
    mounted(){
        this.offImg = ()=>{
            this.$refs.scroll.refresh()
            }
            this.$bus.$on('imgLoad',this.offImg)
    }
}