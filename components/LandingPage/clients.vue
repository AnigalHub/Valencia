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
                {img_src:"../our_clients/MOU_Gymnasium_46.jpg", img_alt:"моу_гимназия_46",},
                {img_src:"../our_clients/MOU_SOSH_25.jpg", img_alt:"моу_сош_25",},
                {img_src:"../our_clients/MDOU_Kindergarten_9.jpg", img_alt:"мдоу_д/с_9_космос",},
              ]
            },
            {
              clients:[
                {img_src:"../our_clients/MDOU_28_Owlet.jpg", img_alt:"мдоу_28_совенок",},
                {img_src:"../our_clients/Administration_Of_Lyubertsy.jpg", img_alt:"администрация_городского_округа_люберцы",},
                {img_src:"../our_clients/MOU_Gymnasium_24.jpg", img_alt:"моу_гимназия_24",},
              ]
            },
            {
              clients:[
                {img_src:"../our_clients/MOU_Cadet_School.jpg", img_alt:"моу_кадетская_школа",},
                {img_src:"../our_clients/MOU_School_17.jpg", img_alt:"моу_школа_17",},
                {img_src:"../our_clients/MOU_Lyceum_12.jpg", img_alt:"моу_лицей_12",},
              ]
            }
          ],
          ClientsMobile:[
            {img_src:"../our_clients/MOU_Gymnasium_46.jpg", img_alt:"моу_гимназия_46",},
            {img_src:"../our_clients/MOU_SOSH_25.jpg", img_alt:"моу_сош_25",},
            {img_src:"../our_clients/MDOU_Kindergarten_9.jpg", img_alt:"мдоу_д/с_9_космос",},
            {img_src:"../our_clients/MDOU_28_Owlet.jpg", img_alt:"мдоу_28_совенок",},
            {img_src:"../our_clients/Administration_Of_Lyubertsy.jpg", img_alt:"администрация_городского_округа_люберцы",},
            {img_src:"../our_clients/MOU_Gymnasium_24.jpg", img_alt:"моу_гимназия_24",},
            {img_src:"../our_clients/MOU_Cadet_School.jpg", img_alt:"моу_кадетская_школа",},
            {img_src:"../our_clients/MOU_School_17.jpg", img_alt:"моу_школа_17",},
            {img_src:"../our_clients/MOU_Lyceum_12.jpg", img_alt:"моу_лицей_12",},
          ]
        }
      }
    }

</script>

<style scoped>

</style>
