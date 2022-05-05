<template>
  <div id="our_clients" class="page">
    <b-container>
      <h1>{{name_page}}</h1>
      <p class="text">За время существования частного охранного предприятия <span class="emphasized"> "{{information.name_company}}" </span> были заключены долгосрочные и надежные отношения с различными организациями: государственными учреждениями (детские сады, школы, вузы), бизнес-центрами, ритейлерами, торговыми центрами, букмекерскими конторами, строительными компаниями и т.д.</p>
      <h6>Предприятия, которые выбрали наши услуги:</h6>
      <div class="flex-container">
        <div v-for="client in Clients" :key="client.index">
          <img :src="client.img_src" :alt="client.img_alt"/>
          <p class="text emphasized">{{client.name_client}}</p>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
  import Information from "static/documents/information.json"
  export default {
    name: "our_clients",
    data() {
      return {
        name_page:"Наши клиенты",
        information:Information,
        Clients:[
          {name_client:"МОУ Гимназия №46", img_src:"../our_clients/MOU_Gymnasium_46.jpg", img_alt:"моу_гимназия_46",},
          {name_client:"МОУ СОШ №25", img_src:"../our_clients/MOU_SOSH_25.jpg", img_alt:"моу_сош_25",},
          {name_client:"МДОУ Детский Сад №9 \"Космос\"", img_src:"../our_clients/MDOU_Kindergarten_9.jpg", img_alt:"мдоу_д/с_9_космос",},
          {name_client:"Администрация города Люберцы", img_src:"../our_clients/Administration_Of_Lyubertsy.jpg", img_alt:"администрация_городского_округа_люберцы",},
          {name_client:"МОУ Гимназия №24", img_src:"../our_clients/MOU_Gymnasium_24.jpg", img_alt:"моу_гимназия_24",},
          {name_client:"МДОУ №28 \"Совенок\"", img_src:"../our_clients/MDOU_28_Owlet.jpg", img_alt:"мдоу_28_совенок",},
          {name_client:"МОУ Кадетская Школа", img_src:"../our_clients/MOU_Cadet_School.jpg", img_alt:"моу_кадетская_школа",},
          {name_client:"МОУ Школа №17", img_src:"../our_clients/MOU_School_17.jpg", img_alt:"моу_школа_17",},
          {name_client:"МОУ Лицей №12", img_src:"../our_clients/MOU_Lyceum_12.jpg", img_alt:"моу_лицей_12",},
        ]
      }
    }
  }
</script>

<style scoped>

</style>
