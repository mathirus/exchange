<template>
    <div>
        <b-container>
              <b-row>
          <b-col  align-self="center">
            <table class="table table-striped table-hover" >
                <thead>
                    <tr class="text-center">
                        <th></th>
                        <th>
                        <span>Ranking</span>
                        </th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cap. de Mercado</th>
                        <th>Variación 24hs</th>
                        <td class="hidden sm:block"></td>
                    </tr>
                </thead>
                <tbody>
                    <tr 
                    v-for="coin in coins"
                    :key="coin.id"
                    >
                        <td>
                          <img class="image" :src="`https://static.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`" :alt="coin.name">
                        </td>
                        <td>
                          <b>#{{coin.rank}}</b>
                        </td>
                        <td>
                          <router-link :to="{name:'coin-detail', params:{ id: coin.id } }">
                            {{coin.name}}    
                         </router-link>
                         <small>{{coin.symbol}}</small>
                        </td>
                        <td>
                            {{ coin.priceUsd | dollar }}
                        </td>
                        <td>
                          {{coin.marketCapUsd | dollar }}
                        </td>
                        <td :class="coin.changePercent24Hr.includes('-') ? 'red' : 'green'">
                            {{ coin.changePercent24Hr | percent }}
                        </td>
                        <td class="hidden sm:block"></td>
                    </tr>
                </tbody>
            </table>
        </b-col>
      </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
  name: "table_component",

  props: {
    coins: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.image{
  max-height: 30px;
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
  
}

.red{
  color: crimson;
}

.green{
  color:lime;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
  
}
</style>