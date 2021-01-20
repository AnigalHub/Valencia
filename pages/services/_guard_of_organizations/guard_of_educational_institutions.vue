<template>
  <div id="guard_of_educational_institutions" class="page">
    <Name_page :name_page="name_page"/>
    <b-container>
      <b-row>
        <b-col>
          <img src="../../../static/005.jpg">
        </b-col>
        <b-col cols="7">
          <p class="text"><b>Образовательные и дошкольные учреждения</b>- это важнейшие социальные организации, посетителями которой являются в основном дети и подростки, которые не очень любят дисциплину, а круг мер активного воздействия на них крайне ограничен. Именно в этом и состоит специфика охраны образовательных и дошкольных учреждений.</p>
          <div class="import">
            <div class="li_text" v-for="guard in GuardOfEducationalAndPreschoolInstitutions" :key="guard.index">
              <component :is="guard.svg"/>{{guard.name}}
            </div>
          </div>
        </b-col>
      </b-row>
      <h6>Особенности охраны образовательных и дошкольных учреждений:</h6>
      <b-row>
        <b-col v-for="feature in GuardOfEducationalInstitutionFeatures" :key="feature.index">
          <ul class="text">
            <li v-for="name_feature in feature.features" :key="name_feature.index">{{name_feature.feature}}</li>
          </ul>
        </b-col>
      </b-row>
      <b-row class="im_descr">
        <b-col cols="8">
          <h6>Комплекс мероприятий охраны учебных заведений:</h6>
          <ul class="text">
            <li v-for="duty in DutiesGuardOfEducationalInstitutionFeatures" :key="duty.index">{{duty.duty}}</li>
          </ul>
        </b-col>
        <b-col>
          <img src="../../../static/image-5.jpg" >
        </b-col>
      </b-row>
      <Tarrifs_content/>
    </b-container>
  </div>
</template>

<script>
    import Name_page from "../../../components/secondary_pages/name_page";
    import Tarrifs_content from "../../../components/tarrifs/tarrifs_content";
    import Guard_shieldSVG from "../../../components/secondary_pages/services_svg/guard_shield_svg";
    export default {
      name: "guard_of_educational_institutions",
      components: {Tarrifs_content, Name_page},
      data() {
        return {
          name_page: "Охрана образовательных и дошкольных учреждений",
          GuardOfEducationalAndPreschoolInstitutions:[
            {name:"Охрана детских садов",svg:Guard_shieldSVG},
            {name:"Охрана школ",svg:Guard_shieldSVG},
            {name:"Охрана интерната",svg:Guard_shieldSVG},
            {name:"Охрана вузов/училищ",svg:Guard_shieldSVG},
          ],
          GuardOfEducationalInstitutionFeatures:[
            {
              features:[
                {feature:"запрет на оружие;"},
                {feature:"защита жизни и здоровья воспитанников;"},
                {feature:"пресечение конфликтов;"},
                {feature:"большая проходимость взрослых на территорию;"},
              ]
            },
            {
              features:[
                {feature:"электронные пропуски и видеонаблюдение для отслеживания посещения;"},
                {feature:"большое число вносимых сумок и пакетов посетителями учреждения;"},
                {feature:"транспортные средства на территории учебного заведения."},
              ]
            }
          ],
          DutiesGuardOfEducationalInstitutionFeatures:[
            {duty:"профессиональная физическая охрана лиц и организации, осуществляющих свою деятельность;"},
            {duty:"реализация контрольно-пропускной системы;"},
            {duty:"регулярное патрулирование территории;"},
            {duty:"профилактика преступности на территории учреждения;"},
            {duty:"монтаж современного оборудования для видеонаблюдения;"},
            {duty:"постоянный визуальный мониторинг поведения посетителей организации;"},
            {duty:"наблюдение за въездом и выездом автотранспорта на территории учебного заведения;"},
            {duty:"мгновенная реакция на нештатные ситуации;"},
            {duty:"противопожарные мероприятия."},
          ],
        }
      }
    }
</script>

<style scoped lang="scss">
  h6{
    margin-left: 20px !important;
  }
  .row h6{
    margin-left: 0 !important;
  }
  .row:first-child{
    padding-bottom: 2% !important;
  }
  .row:nth-child(2){
    padding-bottom: 0.05% !important;
  }
  .row:nth-child(4){
    padding-bottom: 1.5%;
  }
  .row:nth-child(3), .row:nth-child(5){
    ul{
      margin-left: -8%;
    }
  }
  .im_descr .col{
    padding: 5% 0 0 0 !important;
  }
  li{
    padding-bottom: 0.85%;
  }
  .col-4{
    padding: 6% 0 0 0 !important;
  }
  .col .col{
    padding: 0 5px !important;
  }
  .import ul{
    margin-left: -8%;
  }

</style>
