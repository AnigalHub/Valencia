<template>
    <div id="Home">
      <b-container>
        <div class="title_guard">Частное охранное предприятие "ООО Валенсия"</div>
        <b-row class="big_version">
          <b-col cols="4">
            <img src="../../static/Landing_page/guard.png" alt="охранник">
          </b-col>
          <b-col>
            <div class="slogan">Безопасность частных лиц и объектов  любой сложности  на высшем уровне!</div>
            <Advantages/>
          </b-col>
        </b-row>
        <div class="mobile_version">
          <div class="title_guard">Частное охранное предприятие <br> "ООО Валенсия"</div>
          <div class="slogan">Безопасность частных лиц и объектов <br> любой сложности  на Высшем уровне!</div>
          <b-row>
            <b-col cols="4">
              <img src="../../static/Landing_page/guard.png" alt="охранник">
            </b-col>
            <b-col>
              <div class="slogan">Безопасность частных  лиц  и объектов  любой сложности на Высшем уровне!</div>
              <Advantages/>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
</template>

<script>
    import Advantages from "./advantages";
    export default {
      name: "home",
      components: {Advantages},
    }
</script>
<style scoped>

</style>

