<template>  
    <div class="home">  
      <Header />  
      <HomeBanner />
    </div>  
  </template>  
  
  <script lang="ts">  
  import { defineComponent } from 'vue';  
  import Header from "../components/common/Header.vue";  
  import HomeBanner from '@/components/home/HomeBanner.vue';
  
  export default defineComponent({  
    name: "home_page",  // It's better to name the component according to the file it represents  
    components: {  
      Header,  
      HomeBanner
    },  
  });  
  </script>  
  
  <style scoped>  
  /* Add styles specific to the home page here */  
  
  </style>