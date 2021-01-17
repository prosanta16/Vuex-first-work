<template>
    <div id="app">
        <compBookListOne ></compBookListOne>
        <compBookListTwo ></compBookListTwo>
        <button class="btn btn-success" @click="rp">Reduce Price</button>
    </div>
</template>

<script>
import compBookListOne from "./components/BookListOne"
import compBookListTwo from "./components/BookListTwo"
export default {
    components:{
      compBookListOne,
      compBookListTwo
    },
    methods:{
        rp(){
            this.$store.commit('reducePrice');
        }
    }
}
</script>
