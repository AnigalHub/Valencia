<template>
    <div id="Clients">
      <div class="container">
        <b-carousel id="carousel_desktop" v-model="slide" :interval="6000" controls indicators>
          <b-carousel-slide v-for="(client, index) in Clients" :key="index">
            <template #img>
              <b-row>
                <b-col v-for="img in client.clients" :key="img.name">
                  <a href="/our_clients">
                      <img :src="img.img_src" :alt="img.img_alt">
                  </a>
                </b-col>
              </b-row>
            </template>
          </b-carousel-slide>
        </b-carousel>
        <b-carousel id="carousel_mobile" v-model="slide" :interval="6000" controls>
          <a href="/our_clients">
            <b-carousel-slide v-for="img in ClientsMobile" :key="img.name" :img-src="img.img_src" :img-alt="img.img_alt"></b-carousel-slide>
          </a>
        </b-carousel>
      </div>
    </div>
</template>

<script>
    export default {
      name: "clients",
      data() {
        return {
          slide: 0,
          sliding: null,
          Clients:[
            {
              clients:[
                {name_client:"МОУ Гимназия №46", img_src:"../our_clients/46.jpg", img_alt:"моу_гимназия_46",},
                {name_client:"МОУ СОШ №25", img_src:"../our_clients/25.jpg", img_alt:"моу_сош_25",},
                {name_client:"МДОУ Детский Сад №9 \"Космос\"", img_src:"../our_clients/9.jpg", img_alt:"мдоу_д/с_9_космос",},
              ]
            },
            {
              clients:[
                {name_client:"МДОУ №28 \"Совенок\"", img_src:"../our_clients/28.jpg", img_alt:"мдоу_28_совенок",},
                {name_client:"Администрация города Люберцы", img_src:"../our_clients/ad.jpg", img_alt:"администрация_городского_округа_люберцы",},
                {name_client:"МОУ Гимназия №24", img_src:"../our_clients/24.jpg", img_alt:"моу_гимназия_24",},
              ]
            },
            {
              clients:[
                {name_client:"МОУ Кадетская Школа", img_src:"../our_clients/kad.jpg", img_alt:"моу_кадетская_школа",},
                {name_client:"МОУ Школа №17", img_src:"../our_clients/17.jpg", img_alt:"моу_школа_17",},
                {name_client:"МОУ Лицей №12", img_src:"../our_clients/12.jpg", img_alt:"моу_лицей_12",},
              ]
            }
          ],
          ClientsMobile:[
            {name_client:"МОУ Гимназия №46", img_src:"../our_clients/gymnasium_46.jpg", img_alt:"моу_гимназия_46",},
            {name_client:"МОУ СОШ №25", img_src:"../our_clients/school_25.jpg", img_alt:"моу_сош_25",},
            {name_client:"МОУ Школа №17", img_src:"../our_clients/school_17.jpg", img_alt:"моу_школа_17",},
            {name_client:"МОУ Лицей №12", img_src:"../our_clients/lyceum_12.jpg", img_alt:"моу_лицей_12",},
            {name_client:"Администрация города Люберцы", img_src:"../our_clients/lyubertsy_administration.jpg", img_alt:"администрация_городского_округа_люберцы",},
            {name_client:"МДОУ Детский Сад №9 \"Космос\"", img_src:"../our_clients/kindergarten_9.jpg", img_alt:"мдоу_д/с_9_космос",},
            {name_client:"МОУ Кадетская Школа", img_src:"../our_clients/cadet_school.jpg", img_alt:"моу_кадетская_школа",},
            {name_client:"МОУ Гимназия №24", img_src:"../our_clients/gymnasium_24.jpg", img_alt:"моу_гимназия_24",},
            {name_client:"МДОУ №28 \"Совенок\"", img_src:"../our_clients/kindergarten_owlet.jpg", img_alt:"мдоу_28_совенок",},
          ]
        }
      }
    }

</script>

<style scoped>

</style>
