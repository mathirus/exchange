<template>
    <div>
        <b-container>
            <b-row align-h="center">
                <b-col cols="6">
                <pulse-loader :loading="isloading" :color="'#ebeb34'" :size="150"></pulse-loader>
                </b-col>
          </b-row>
        </b-container>
       
      

        <table_component v-if="!isloading" :coins="coins"
        >
        </table_component>
      
    </div>
</template>
<script>
    import api from '../api'
    import table_component from '../components/table_component.vue'
    export default{
        name: 'Home',
        components: { table_component },
        created(){
            this.isloading=true
            api.getCoins()
            .then(coins => (this.coins = coins))
            .finally(()=> this.isloading = false)
        },
        data(){
            return{
                coins:[],
                isloading:false,
            }
        }
    }
</script>