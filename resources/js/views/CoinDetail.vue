<template>
  <div>
    <b-container>
      <b-row align-h="center">
        <b-col cols="3">
          <rise-loader :loading="isloading" :color="'#ebeb34'" :size="100"></rise-loader>
        </b-col>
      </b-row>
    </b-container>
    

    <template v-if="!isloading">
      <b-container >
            <b-row class="mt-5">
                
                <b-col class="text-center">
                   <img     :src="`https://static.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`"             
                     :alt="coin.name"
                      
                   />
            <h1 class="">
                {{ coin.name }}
                <small class="">{{ coin.symbol }}</small>
            </h1>
            </b-col>

            <b-col class="">
            <ul>
                <li class="">
                <b class="">Ranking</b>
                <span>#{{ coin.rank }}</span>
                </li>
                <li class="">
                <b class="">Precio actual</b>
                <span>{{ coin.priceUsd | dollar }}</span>
                </li>
                <li class="">
                <b class="">Precio más bajo</b>
                <span>{{ min | dollar }}</span>
                </li>
                <li class="">
                <b class="">Precio más alto</b>
                <span>{{ max | dollar }}</span>
                </li>
                <li class="">
                <b class="">Precio Promedio</b>
                <span>{{ avg | dollar }}</span>
                </li>
                <li class="">
                <b class="">Variación 24hs</b>
                <span>{{ coin.changePercent24Hr | percent }}</span>
                </li>
            </ul>
            </b-col>

           
            </b-row>
            <b-row>
              <line-chart :colors="['orange']"
                :min="min"
                :max="max"
                :data="history.map(h=>[h.date, parseFloat(h.priceUsd).toFixed(2)])"
              ></line-chart>
            </b-row>

      </b-container>
    </template>
  </div>
</template>

<script>

import api from '../api'

export default {
  name: 'CoinDetail',

  data() {
    return {
      isloading:false,
      coin: {},
      history: []
    }
  },

  computed: {
    min() {
      return Math.min(
        ...this.history.map(h => parseFloat(h.priceUsd).toFixed(2))
      )
    },

    max() {
      return Math.max(
        ...this.history.map(h => parseFloat(h.priceUsd).toFixed(2))
      )
    },

    avg() {
      return Math.abs(
        ...this.history.map(h => parseFloat(h.priceUsd).toFixed(2))
      )
    }
  },

  created() {
    this.getCoin();  
  },

  methods: {
    getCoin() {
      const id = this.$route.params.id
      this.isloading=true;

      Promise.all([api.getCoin(id), api.getCoinHistory(id)]).then(
        ([asset, history]) => {
          this.coin = asset
          this.history = history
        }
      )
      .finally(()=>(this.isloading=false))
    }
  }
}
</script>

<style scoped>
td {
  padding: 10px;
  text-align: center;
}
</style>
