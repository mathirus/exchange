<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <router-link to="/"> 
        <b-navbar-brand >

            Exchange   <icon-component></icon-component>
      
        </b-navbar-brand>
     </router-link>
        <router-link to="/About">About</router-link>

  </b-navbar>
</div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
