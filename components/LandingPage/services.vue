<template>
    <div id="Services">
      <b-container>
        <h2>Виды деятельности организации:</h2>
        <div class="flex-container">
          <div v-for="(pad,index) in Open_mount_pads" :key="index">
            <b-button>
              <img :src="pad.src" :alt="pad.alt"/>
              <p class="text">{{pad.name_pad}}</p>
            </b-button>
          </div>
        </div>
        <Import_numbers/>
      </b-container>
    </div>
</template>

<script>
    import Import_numbers from "./import_numbers";
    export default {
        name: "services",
      components: {Import_numbers},
      data(){
          return{
            "Open_mount_pads":[
              {
                src:"21.jpg",
                alt:"Накладка_глухая_под_радиатор",
                name_pad:"Охрана организаций",
              },
              {
                src:"24.jpg",
                alt:"Накладка_глухая_под_радиатор",
                name_pad:"Охрана объектов",
              },

              {
                src:"23.jpg",
                alt:"Накладка_глухая_под_радиатор",
                name_pad:"Личная охрана",
              },
              {
                src:"22.jpg",
                alt:"Накладка_глухая_под_радиатор",
                name_pad:"Охрана недвижимости",
              },
              {
                src:"25.jpg",
                alt:"Накладка_глухая_под_радиатор",
                name_pad:"Охрана мероприятий",
              },
              {
                src:"26.jpg",
                alt:"Накладка_глухая_под_радиатор",
                name_pad:"Сопровождение грузов",
              },
             ]
          }
      }
    }
</script>

<style scoped>
  #Services{
    padding: 2.5% 0;
    background:linear-gradient( to top , #6d7d90, #bbc4d2, #6d7d90);
  }
  h2{
    text-align: center;
    font-family: 'Viaoda Libre', cursive;
    padding-bottom: 2%;
    text-shadow: 2px 2.5px 2.5px rgb(15, 37, 56);
    color: #cfdde8;
    font-size: 2.25rem;
    background: transparent;
    font-weight: 500;
    letter-spacing: normal;
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
  .btn{
    background: rgba(21, 45, 66, 0.75);
  }
  .btn{
    border: 1.8px solid #768c9e;
    box-shadow: 6px 5px 5px rgba(21, 45, 66) ;
  }
  img{
    box-shadow: 2px 5px 5px #273849;
  }
  p{
    margin: 0.5rem 0!important;
  }
  img{
    width: 100%;
  }
  .text{
    font-family: 'Viaoda Libre', cursive;
    font-weight: 500;
    letter-spacing: -1.75px;
    text-shadow: 1px 1px 2px rgb(15, 37, 56);
    font-size: 1.4rem;
    text-align: center;
    color: #ffffff;
  }
</style>
