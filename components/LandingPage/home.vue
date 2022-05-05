<template>
  <div id="Home">
    <b-container>
      <div class="title_guard">Частное охранное предприятие <nobr> "{{information.name_company}}" </nobr></div>
      <b-row class="big_version">
        <b-col cols="4">
          <img src="../../static/Landing_page/Home/guard.png" alt="охранник">
        </b-col>
        <b-col>
          <div class="slogan">Безопасность частных лиц и объектов  любой сложности  на высшем уровне!</div>
          <Advantages/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
    import Advantages from "./advantages";
    import Information from "../../static/documents/information.json";
    export default {
      name: "home",
      components: {Advantages},
      data(){
        return{
          information:Information,
        }
      }
    }
</script>
<style scoped>

</style>

