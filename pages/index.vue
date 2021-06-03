<template>
    <div id="Landing_page">
      <Home/>
      <Services/>
      <Type/>
      <Feedback/>
      <Clients/>
      <Mymap/>
    </div>
</template>

<script>
import Home from "../components/LandingPage/home";
import Services from "../components/LandingPage/services";
import Type from "../components/LandingPage/type";
import Feedback from "../components/LandingPage/feedback";
import Clients from "../components/LandingPage/clients";
import Mymap from "../components/LandingPage/mymap";
export default {
  components: {Mymap, Clients, Feedback, Type, Services, Home}
}
</script>

<style>
  
</style>
