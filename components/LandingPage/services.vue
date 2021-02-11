<template>
    <div id="Services">
      <b-container>
        <h2>Виды деятельности организации:</h2>
        <div class="flex-container">
          <div v-for="(guard,index) in Guard" :key="index">
            <router-link :to="guard.link">
              <b-button>
                <img :src="guard.src" :alt="guard.alt"/>
                <p class="text1">{{guard.name_guard}}</p>
              </b-button>
            </router-link>
          </div>
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
            {src:"LandingPage/24.jpg", alt:"охрана_объектов", name_guard:"Охрана объектов",link:'/services/object_guard/'},
            {src:"LandingPage/23.jpg", alt:"личная_охрана", name_guard:"Личная охрана",link:'/services/bodyguard'},
            {src:"LandingPage/22.jpg", alt:"охрана_недвижимости", name_guard:"Охрана недвижимости",link:'/services/guard_of_real_estate/'},
            {src:"LandingPage/25.jpg", alt:"охрана_мероприятий", name_guard:"Охрана мероприятий",link:'/services/guard_of_events'},
            {src:"LandingPage/26.jpg", alt:"сопровождение_грузов", name_guard:"Сопровождение грузов",link:'/services/cargo_escort'},
          ]
        }
      }
    }
</script>

<style scoped lang="scss">
  #Services{
    padding: 2.5% 0;
    background:linear-gradient( to bottom, #36506c, #718199,#718199, #36506c);
    filter: brightness(80%);
  }
  h2{
    text-decoration: underline;
    margin-top: 0 !important;
    text-align: center;
    font-family: 'Yeseva One', cursive;
    padding-bottom: 2%;
    text-shadow: 2px 2.5px 2.5px rgb(15, 37, 56);
    color: rgba(255, 255, 255, 0.86);
    font-size: 2.2rem;
    background: transparent;
    font-weight: 500;
    letter-spacing: -.5px;
    padding-left: 0;
  }
  .flex-container {
    display: flex;
    flex-wrap: wrap;
  }
  .flex-container > div {
    width: 30.5%;
    margin: 0 1.25% 2% 1.25% !important;
  }
  .btn:hover{
    background-color: rgba(250, 250, 255,.9) !important;
    img{
      filter: brightness(100%)!important;
    }
  }
  .btn{
    background-color: rgba(250, 250, 255,.45) !important;
    box-shadow: 2px 5px 5px #273849;
  }
  img{
    box-shadow: 2px 5px 5px #273849;
    width: 100%;
    filter: brightness(75%)!important;
  }
  p{
    margin: 0!important;
  }
  .text1{
    font-weight: 400;
    padding: 2% 0;
    text-shadow: 1px 1px 0 rgb(15, 37, 56), 2px 2px 6px #fff !important;
    font-size: 1.5rem;
    text-align: center;
    color: rgb(15, 37, 56);
    font-family: 'Source Serif Pro', serif !important;
    letter-spacing: -.8px;
    line-height: 1.4rem;
    border-radius: 0 !important;
    border: 2.5px solid rgba(255, 255, 255, 0.19);
  }
</style>
