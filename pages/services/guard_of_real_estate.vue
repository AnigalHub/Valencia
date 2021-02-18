<template>
  <div id="guard_of_real_estate" class="page services services_with_types">
    <Name_page :name_page="name_page"/>
    <b-container>
     <img src="../../static/services/guard_of_real_estate/guard_of_real_estate.jpg" alt="охрана_недвижимости" class="first_img"/>
      <p class="text"><span class="emphasized">Профессиональная охрана недвижимости </span> позволяет владельцам объекта работать и отдыхать спокойно. Наша организация гарантирует полную безопасность посетителей и персонала, а также сохранность имущества всего здания.</p>
      <p class="text"><u>Методы работы охраны недвижимости подбираются отдельно под каждый объект, учитывая:</u></p>
      <ul class="text">
        <li v-for="name_metod in WorkingMethods" :key="name_metod.index">{{name_metod.name_metod}}</li>
      </ul>
      <h6 class="block_two">Разновидности охраны недвижимости:</h6>
      <div class="flex-container">
        <div class="type_guard_beautiful_block" v-for="guard in TypesOfGuard" :key="guard.index">
          <NuxtLink :to="guard.link">
            <component :is="guard.svg"/><span class="name_type_guard">{{guard.name}}</span>
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
      <Tarrifs_content/>
    </b-container>
  </div>
</template>

<script>
    import Tarrifs_content from "../../components/secondary_pages/tarrifs_content";
    import Name_page from "../../components/secondary_pages/name_page";
    import GuardSVG from "../../components/secondary_pages/shield_svg";
    export default {
      name: "guard_of_real_estate",
      components: {Name_page, Tarrifs_content},
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
              svg:GuardSVG,
              img_src:"./guard_of_commercial_object.jpg",
              img_alt:"охрана_коммерческих_объектов",
              list:[
                {guard:"Охрана банков"},
                {guard:"Охрана ресторанов и баров"},
                {guard:"Охрана торговых центров"},
                {guard:"Охрана офисов и бизнес-центров"},
                {guard:"Охрана салонов красоты"},
                {guard:"Охрана гостиниц и отелей"},
              ]
            },
            {
              link:"/services/_guard_of_real_estate/guard_private_property",
              name:"Охрана частных объектов",
              svg:GuardSVG,
              img_src:"./panel_protection.jpg",
              img_alt:"охрана_частных_объектов",
              list:[
                {guard:"Охрана коттеджей и коттеджных поселков"},
                {guard:"Охрана ТСЖ, жилых комплексов и многоквартирных домов"},
                {guard:"Охрана часных домов и загородных резиденций"},
                {guard:"Охрана дач и дачных поселков"},
              ]},
          ],
        }
      }
    }
</script>

<style scoped>

</style>
