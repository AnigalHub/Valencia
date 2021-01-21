<template>
  <div id="our_clients" class="page">
    <Name_page :name_page="name_page"/>
    <b-container>
      <p class="text">За время существования частного охранного предприятия “ООО Валенсия” были заключены долгосрочные и надежные отношения с различными организациями: государственными учреждениями (детские сады, школы, вузы), бизнес-центрами, ритейлерами, торговыми центрами, букмекерскими конторами, строительными компаниями и т.д.</p>
      <h6>Предприятия, которые выбрали наши услуги:</h6>
      <div class="flex-container">
        <div v-for="client in Clients" :key="client.index">
          <img :src="client.img_src" :alt="client.img_alt"/>
          <h5>{{client.name_client}}</h5>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
    import Secondary_pages from "../components/secondary_pages/secondary_pages.scss";
    import Name_page from "../components/secondary_pages/name_page";
    export default {
      name: "our_clients",
      components: {Name_page},
      data() {
        return {
          name_page:"Наши клиенты",
          Clients:[
            {name_client:"МОУ ГИМНАЗИЯ № 46", img_src:"../41.jpg", img_alt:"моу_гимназия_46",},
            {name_client:"МОУ СОШ № 25", img_src:"../42.jpg", img_alt:"моу_сош_25",},
            {name_client:"МОУ ШКОЛА № 17", img_src:"../43.jpg", img_alt:"моу_школа_17",},
            {name_client:"МОУ ЛИЦЕЙ №12", img_src:"../44.jpg", img_alt:"моу_лицей_12",},
            {name_client:"АДМИНИСТРАЦИЯ ГОРОДСКОГО ОКРУГА ЛЮБЕРЦЫ", img_src:"../46.jpg", img_alt:"администрация_городского_округа_люберцы",},
            {name_client:"МДОУ Д/С № 9 \"КОСМОС\"", img_src:"../45.jpg", img_alt:"мдоу_д/с_9_космос",},
            {name_client:"МОУ КАДЕТСКАЯ ШКОЛА", img_src:"../47.jpg", img_alt:"моу_кадетская_школа",},
            {name_client:"МОУ ГИМНАЗИЯ № 24", img_src:"../48.jpg", img_alt:"моу_гимназия_24",},
            {name_client:"МДОУ №28 \"СОВЕНОК\"", img_src:"../49.jpg", img_alt:"мдоу_28_совенок",},
          ]
        }
      }
    }
</script>

<style scoped>

</style>
