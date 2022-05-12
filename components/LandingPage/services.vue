<template>
  <div id="Services">
    <b-container>
      <div class="flex-container">
        <router-link v-for="(guard,index) in Guard" :key="index" :to="guard.link">
          <b-button class="beautiful_block">
            <img :src="guard.src" :alt="guard.alt"/>
            <p class="emphasized">{{guard.name_guard}}</p>
          </b-button>
        </router-link>
      </div>
      <Import_numbers/>
    </b-container>
  </div>
</template>

<script>
    import Import_numbers from "./import_numbers";
    import Advantages from "./advantages";
    export default {
      name: "services",
      components: {Advantages, Import_numbers},
      data(){
        return{
          Guard:[
            {src:"Landing_page/Services/guard_of_organizations.jpg", alt:"охрана_организаций", name_guard:"Охрана организаций",link:'/services/guard_of_organizations/'},
            {src:"Landing_page/Services/guard_of_real_estate.jpg", alt:"охрана_недвижимости", name_guard:"Охрана недвижимости",link:'/services/guard_of_real_estate/'},
            {src:"Landing_page/Services/object_guard.jpg", alt:"охрана_объектов", name_guard:"Охрана объектов",link:'/services/object_guard/'},
            {src:"Landing_page/Services/bodyguard.jpg", alt:"личная_охрана", name_guard:"Личная охрана",link:'/services/bodyguard'},
            {src:"Landing_page/Services/guard_of_events.jpg", alt:"охрана_мероприятий", name_guard:"Охрана мероприятий",link:'/services/guard_of_events'},
            {src:"Landing_page/Services/cargo_escort.jpg", alt:"сопровождение_грузов", name_guard:"Сопровождение грузов",link:'/services/cargo_escort'},
          ]
        }
      }
    }
</script>

<style scoped>



</style>
