<template>
  <div id="guard_of_organizations" class="page services services_with_types">
    <b-container>
      <h1>{{name_page}}</h1>
      <div class="description_services">
        <img src="../../static/services/guard_of_organizations/guard_of_organizations.jpg" class="first_img" alt="охрана_организаций"/>
        <p class="text"><span class="emphasized">Охрана организаций</span> предусматривает комплекс мер, направленных на обеспечение безопасности функционирования объекта, сохранности материального имущества, информационной безопасности, защиту жизни и здоровья лиц организации.</p>
        <h4 class="text"><u>Охрана организаций надежно защитит вас от:</u></h4>
        <ul class="text">
          <li v-for="paragraph in DefenceFrom" :key="paragraph.index">{{paragraph.paragraph}}</li>
        </ul>
      </div>
      <h6 class="block_two">Разновидности охраны организаций:</h6>
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
        <div class="beautiful_block">
            <img src="../../static/services/guard_of_organizations/building.jpg" alt="здание">
        </div>
      </div>
      <Tariffs/>
    </b-container>
  </div>
</template>

<script>
  import Tariffs from "../tariffs";
  export default {
    name: "guard_of_organizations",
    components: {Tariffs},
    data() {
      return {
        name_page: "Охрана организаций",
        DefenceFrom: [
          {paragraph: "кражи имущества;",},
          {paragraph: "вандализма - осквернения здания;",},
          {paragraph: "утечки кофиденцальной информации;",},
          {paragraph: "противоправных действий;",},
          {paragraph: "нарушения общественного порядка;",},
          {paragraph: "незаконного проникновения на территорию организации.",},
        ],
        TypesOfGuard: [
          {
            link:"/services/_guard_of_organizations/guard_of_educational_institutions",
            name: "Охрана образовательных и дошкольных учреждений",
            img_src: "../guard_of_organizations/guard_of_educational_institutions.jpg",
            img_alt: "охрана_коммерческих_объектов",
            list: [
              {guard: "охрана детских садов;"},
              {guard: "охрана школ;"},
              {guard: "охрана интерната;"},
              {guard: "охрана вузов/училищ."},
            ]
          },
          {
            link:"/services/_guard_of_organizations/guard_of_medical_institutions",
            name: "Охрана медицинских учреждений",
            img_src: "../guard_of_organizations/guard_of_medical_institutions.jpg",
            img_alt: "охрана_частных_объектов",
            list: [
              {guard: "охрана поликлиник;"},
              {guard: "охрана аптек;"},
              {guard: "охрана больниц;"},
              {guard: "охрана медицинских центров."},
            ]
          },
          {
            link:"/services/_guard_of_organizations/guard_of_municipal_facilities",
            name: "Охрана муниципальных объектов - госучреждений",
            img_src: "../guard_of_organizations/gallery.jpg",
            img_alt: "охрана_частных_объектов",
            list: [
              {guard: "охрана административных зданий;"},
              {guard: "охрана музеев и театров;"},
              {guard: "охрана библиотек;"},
              {guard: "охрана церквей."},
            ]
          },
        ],
      }
    }
  }
</script>

<style scoped>

</style>
