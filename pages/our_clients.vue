<template>
  <div id="our_clients" class="page">
    <Name_page :name_page="name_page"/>
    <b-container>
      <p class="text">За время существования частного охранного предприятия “ООО Валенсия” были заключены долгосрочные и надежные отношения с различными организациями: государственными учреждениями (детские сады, школы, вузы), бизнес-центрами, ритейлерами, торговыми центрами, букмекерскими конторами, строительными компаниями и т.д.</p>
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
    import Secondary_pages from "../components/secondary_pages/secondary_pages.scss";
    import Name_page from "../components/secondary_pages/name_page";
    export default {
      name: "our_clients",
      components: {Name_page},
      data() {
        return {
          name_page:"Наши клиенты",
          Clients:[
            {name_client:"МОУ Гимназия № 46", img_src:"../our_clients/gymnasium_46.jpg", img_alt:"моу_гимназия_46",},
            {name_client:"МОУ СОШ № 25", img_src:"../our_clients/school_25.jpg", img_alt:"моу_сош_25",},
            {name_client:"МОУ Школа № 17", img_src:"../our_clients/school_17.jpg", img_alt:"моу_школа_17",},
            {name_client:"МОУ Лицей №12", img_src:"../our_clients/lyceum_12.jpg", img_alt:"моу_лицей_12",},
            {name_client:"Администрация Города Люберцы", img_src:"../our_clients/lyubertsy_administration.jpg", img_alt:"администрация_городского_округа_люберцы",},
            {name_client:"МДОУ Детский Сад № 9 \"Космос\"", img_src:"../our_clients/kindergarten_9.jpg", img_alt:"мдоу_д/с_9_космос",},
            {name_client:"МОУ Кадетская Школа", img_src:"../our_clients/cadet_school.jpg", img_alt:"моу_кадетская_школа",},
            {name_client:"МОУ Гимназия № 24", img_src:"../our_clients/gymnasium_24.jpg", img_alt:"моу_гимназия_24",},
            {name_client:"МДОУ №28 \"Совенок\"", img_src:"../our_clients/kindergarten_owlet.jpg", img_alt:"мдоу_28_совенок",},
          ]
        }
      }
    }
</script>

<style scoped>

</style>
