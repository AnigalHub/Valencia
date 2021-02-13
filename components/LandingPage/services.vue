<template>
    <div id="Services">
      <b-container>
        <h2>Виды деятельности организации:</h2>
        <div class="flex-container">
          <router-link v-for="(guard,index) in Guard" :key="index" :to="guard.link">
            <b-button>
              <img :src="guard.src" :alt="guard.alt"/>
              <p class="textLandingPage">{{guard.name_guard}}</p>
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
            {src:"LandingPage/21.jpg", alt:"охрана_организаций", name_guard:"Охрана организаций",link:'/services/guard_of_organizations/'},
            {src:"LandingPage/22.jpg", alt:"охрана_недвижимости", name_guard:"Охрана недвижимости",link:'/services/guard_of_real_estate/'},
            {src:"LandingPage/24.jpg", alt:"охрана_объектов", name_guard:"Охрана объектов",link:'/services/object_guard/'},
            {src:"LandingPage/23.jpg", alt:"личная_охрана", name_guard:"Личная охрана",link:'/services/bodyguard'},
            {src:"LandingPage/25.jpg", alt:"охрана_мероприятий", name_guard:"Охрана мероприятий",link:'/services/guard_of_events'},
            {src:"LandingPage/26.jpg", alt:"сопровождение_грузов", name_guard:"Сопровождение грузов",link:'/services/cargo_escort'},
          ]
        }
      }
    }
</script>

<style scoped>



</style>
