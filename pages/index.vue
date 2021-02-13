<template>
    <div id="LandingPage">
      <Home/>
      <Type/>
      <Services/>
      <Feedback/>
      <Clients/>
      <Mymap/>
    </div>
</template>

<script>
import Home from "../components/LandingPage/home";
import Type from "../components/LandingPage/type";
import Services from "../components/LandingPage/services";
import Feedback from "../components/LandingPage/feedback";
import Clients from "../components/LandingPage/clients";
import Mymap from "../components/LandingPage/mymap";
export default {
  components: {Mymap, Clients, Feedback, Services, Type, Home}
}
</script>

<style>
  #LandingPage{
    background:linear-gradient( to top left, #304355, #768c9e,#304355);
  }
  #LandingPage img{
    border: none;
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
