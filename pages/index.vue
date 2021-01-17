<template>
    <div id="index">
      <Home/>
      <Advantages/>
      <Type/>
      <Services/>
      <Feedback/>
      <Clients/>
      <Map/>
      </div>
</template>

<script>
import Navbar from "../components/navbar";
import Home from "../components/LandingPage/home";
import Advantages from "../components/LandingPage/advantages";
import Type from "../components/LandingPage/type";
import Services from "../components/LandingPage/services";
import Feedback from "../components/LandingPage/feedback";
import Map from "../components/LandingPage/map";
import Clients from "../components/LandingPage/clients";
import Myfooter from "../components/myfooter";
export default {
  components: {Myfooter, Clients, Map, Feedback, Services, Type, Advantages, Home, Navbar}
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
  h2{
    text-align: center;
    font-family: 'Viaoda Libre', cursive;
    padding-bottom: 2%;
    text-shadow: 2px 2.5px 2.5px rgb(15, 37, 56);
    color: #cfdde8;
    font-size: 2.25rem !important;
  }
</style>
