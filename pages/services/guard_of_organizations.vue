<template>
  <div id="guard_of_organizations" class="page services services_with_types">
    <Name_page :name_page="name_page" />
    <b-container>
      <b-row>
        <b-col><img src="../../static/422212508651055_cea3.jpg"></b-col>
        <b-col cols="7">
          <p class="text"><span class="emphasized">Охрана организаций</span> предусматривает комплекс мер, направленных на обеспечение безопасности функционирования объекта, сохранности материального имущества, информационной безопасности, защиту жизни и здоровья лиц организации.</p>
          <p class="text"><u>Охрана организаций надежно защитит вас от:</u></p>
          <ul class="text">
            <li v-for="paragraph in DefenceFrom" :key="paragraph.index">{{paragraph.paragraph}}</li>
          </ul>
        </b-col>
      </b-row>
      <h6>Разновидности охраны организаций:</h6>
      <div class="flex-container">
        <div class="beautiful_block" v-for="guard in TypesOfGuard" :key="guard.index">
          <component :is="guard.svg"/><span class="li_text">{{guard.name}}</span>
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
        <div class="beautiful_block">
            <img src="../../static/shkolapiksi.jpg">
        </div>
      </div>
      <Tarrifs_content/>
    </b-container>
  </div>
</template>

<script>
    import Secondary_pages from "../../components/secondary_pages/secondary_pages.scss";
    import Name_page from "../../components/secondary_pages/name_page";
    import Tarrifs_content from "../../components/tarrifs/tarrifs_content";
    import Guard_shield_typesSVG from "../../components/secondary_pages/services_svg/guard_shield_types_svg";
    import Guard_shieldSVG from "../../components/secondary_pages/services_svg/guard_shield_svg";
    export default {
      name: "guard_of_organizations",
      components: {Tarrifs_content, Name_page},
      data() {
        return {
          name_page: "Охрана организаций",
          DefenceFrom: [
            {paragraph: "незаконного проникновения;",},
            {paragraph: "кражи имущества;",},
            {paragraph: "утечки информации;",},
            {paragraph: "противоправных действий;",},
            {paragraph: "нарушения общественного порядка.",}
          ],
          TypesOfGuard: [
            {
              name: "Охрана образовательных и дошкольных учреждений",
              svg: Guard_shield_typesSVG,
              img_src: "../005.jpg",
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
              img_src: "../000004.jpg",
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
              img_src: "../344.jpg",
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
