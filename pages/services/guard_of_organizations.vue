<template>
  <div id="guard_of_organizations" class="page services services_with_types">
    <Name_page :name_page="name_page" />
    <b-container>
      <div class="description_services">
        <img src="../../static/services/guard_of_organizations/guard_of_organizations.jpg" class="first_img">
        <p class="text"><span class="emphasized">Охрана организаций</span> предусматривает комплекс мер, направленных на обеспечение безопасности функционирования объекта, сохранности материального имущества, информационной безопасности, защиту жизни и здоровья лиц организации.</p>
        <p class="text"><u>Охрана организаций надежно защитит вас от:</u></p>
        <ul class="text">
          <li v-for="paragraph in DefenceFrom" :key="paragraph.index">{{paragraph.paragraph}}</li>
        </ul>
      </div>
      <h6 class="block_two">Разновидности охраны организаций:</h6>
      <div class="flex-container">
        <div class="type_guard_beautiful_block" v-for="guard in TypesOfGuard" :key="guard.index">
          <component :is="guard.svg"/><span class="name_type_guard">{{guard.name}}</span>
          <b-row>
            <b-col cols="5">
              <img :src="guard.img_src" :alt="guard.img_alt">
            </b-col>
            <b-col>
              <ul class="text">
                <li v-for="name_guard in guard.list" :key="name_guard.index">{{name_guard.guard}}</li>
              </ul>
            </b-col>
          </b-row>
        </div>
        <div class="type_guard_beautiful_block">
            <img src="../../static/services/guard_of_organizations/building.jpg" alt="здание">
        </div>
      </div>
      <Tarrifs_content/>
    </b-container>
  </div>
</template>

<script>
    import Name_page from "../../components/secondary_pages/name_page";
    import Tarrifs_content from "../../components/secondary_pages/tarrifs_content";
    import Guard_shield_typesSVG from "../../components/secondary_pages/services_svg/guard_shield_types_svg";
    export default {
      name: "guard_of_organizations",
      components: {Tarrifs_content, Name_page},
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
              name: "Охрана образовательных и дошкольных учреждений",
              svg: Guard_shield_typesSVG,
              img_src: "../guard_of_organizations/guard_of_educational_institutions.jpg",
              img_alt: "охрана_коммерческих_объектов",
              list: [
                {guard: "Охрана детских садов"},
                {guard: "Охрана школ"},
                {guard: "Охрана интерната"},
                {guard: "Охрана вузов/училищ"},
              ]
            },
            {
              name: "Охрана медицинских учреждений",
              svg: Guard_shield_typesSVG,
              img_src: "../guard_of_organizations/guard_of_medical_institutions.jpg",
              img_alt: "охрана_частных_объектов",
              list: [
                {guard: "Охрана поликлиник"},
                {guard: "Охрана аптек"},
                {guard: "Охрана больниц"},
                {guard: "Охрана медицинских центров"},
              ]
            },
            {
              name: "Охрана муниципальных объектов - госучреждений",
              svg: Guard_shield_typesSVG,
              img_src: "../guard_of_organizations/gallery.jpg",
              img_alt: "охрана_частных_объектов",
              list: [
                {guard: "Охрана административных зданий"},
                {guard: "Охрана музеев и театров"},
                {guard: "Охрана библиотек"},
                {guard: "Охрана церквей"},
              ]
            },
          ],
        }
      }
    }
</script>

<style scoped>

</style>
