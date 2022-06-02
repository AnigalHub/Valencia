<template>
  <div id="guard_of_real_estate" class="page services services_with_types">
    <b-container>
      <h1>{{name_page}}</h1>
      <img src="../../static/services/guard_of_real_estate/guard_of_real_estate.jpg" alt="охрана_недвижимости" class="first_img"/>
      <p class="text"><span class="emphasized">Профессиональная охрана недвижимости </span> позволяет владельцам объекта работать и отдыхать спокойно. Наша организация гарантирует полную безопасность посетителей и персонала, а также сохранность имущества всего здания.</p>
      <h4 class="text"><u>Методы работы охраны недвижимости подбираются отдельно под каждый объект, учитывая:</u></h4>
      <ul class="text">
        <li v-for="name_metod in WorkingMethods" :key="name_metod.index">{{name_metod.name_metod}}</li>
      </ul>
      <h6 class="block_two">Разновидности охраны недвижимости:</h6>
      <div class="flex-container">
        <div class="beautiful_block" v-for="guard in TypesOfGuard" :key="guard.index">
          <NuxtLink :to="guard.link">
            <p class="emphasized">{{guard.name}}</p>
            <b-row>
              <b-col cols="5">
                <img :src="guard.img_src" :alt="guard.img_alt"/>
              </b-col>
              <b-col>
                <ul class="text">
                  <li v-for="name_guard in guard.list" :key="name_guard.index">{{name_guard.guard}}</li>
                </ul>
              </b-col>
            </b-row>
          </NuxtLink>
        </div>
      </div>
      <Tariffs/>
    </b-container>
  </div>
</template>

<script>
  import Tariffs from "../tariffs";
  export default {
    name: "guard_of_real_estate",
    components: {Tariffs},
    data() {
      return {
        name_page: "Охрана недвижимости",
        WorkingMethods:[
          {name_metod:"назначение, месторасположение и удаленность;",},
          {name_metod:"транспортная доступность;",},
          {name_metod:"высотность зданий;",},
          {name_metod:"наличие лифтов и количество лестничных пролетов;",},
          {name_metod:"общая криминальная ситуация в конкретном районе.",},
        ],
         TypesOfGuard:[
           {
             link:"/services/_guard_of_real_estate/guard_of_commercial_objects",
             name:"Охрана коммерческих объектов",
             img_src:"services/guard_of_real_estate/guard_of_commercial_object.jpg",
             img_alt:"охрана_коммерческих_объектов",
             list:[
               {guard:"охрана банков;"},
               {guard:"охрана ресторанов и баров;"},
               {guard:"охрана торговых центров;"},
               {guard:"охрана офисов и бизнес-центров;"},
               {guard:"охрана салонов красоты;"},
               {guard:"охрана гостиниц и отелей."},
             ]
           },
           {
             link:"/services/_guard_of_real_estate/guard_private_property",
             name:"Охрана частных объектов",
             img_src:"services/guard_of_real_estate/panel_protection.jpg",
             img_alt:"охрана_частных_объектов",
             list:[
               {guard:"охрана коттеджей и коттеджных поселков;"},
               {guard:"охрана ТСЖ, жилых комплексов и многоквартирных домов;"},
               {guard:"охрана часных домов и загородных резиденций;"},
               {guard:"охрана дач и дачных поселков."},
             ]
           },
         ],
      }
    }
  }
</script>

<style scoped>

</style>
