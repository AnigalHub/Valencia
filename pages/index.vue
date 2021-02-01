<template>
    <div id="index">
      <Home/>
      <Type/>
      <!-- <Advantages/> -->
      <Services/>
      <Feedback/>
      <Clients/>
      <Mymap/>
      </div>
</template>

<script>
import Navbar from "../components/navbar";
import Home from "../components/LandingPage/home";
import Advantages from "../components/LandingPage/advantages";
import Type from "../components/LandingPage/type";
import Services from "../components/LandingPage/services";
import Feedback from "../components/LandingPage/feedback";
import Clients from "../components/LandingPage/clients";
import Myfooter from "../components/myfooter";
import Mymap from "../components/LandingPage/mymap";
export default {
  components: {Mymap, Myfooter, Clients, Feedback, Services, Type, Advantages, Home, Navbar}
}
</script>

<style>
  #index{
    background:linear-gradient( to top left, #304355, #768c9e,#304355);
  }
  .container-fluid{
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .container{
    padding-right: 15px !important;
    padding-left: 15px !important;
  }
  .row {
    margin: 0 !important;
  }

</style>
