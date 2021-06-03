<template>
  <div id="guard_of_educational_institutions" class="page services types_of_guard">
    <b-container>
      <h1>{{name_page}}</h1>
      <img src="../../../static/services/guard_of_organizations/guard_of_educational_institutions.jpg" alt="охрана_дошкольных_учреждений" class="first_img"/>
      <p class="text"><b class="emphasized">Образовательные и дошкольные учреждения</b> - это важнейшие социальные организации, посетителями которой являются в основном дети и подростки, которые не очень любят дисциплину, а круг мер активного воздействия на них крайне ограничен. Именно в этом и состоит специфика охраны образовательных и дошкольных учреждений.</p>
      <h4 class="text"><u>Охрана образовательных и дошкольных учреждений включает:</u></h4>
      <div class="import">
        <ul>
          <li class="text" v-for="guard in GuardOfEducationalAndPreschoolInstitutions" :key="guard.index">{{guard.name}}</li>
        </ul>
      </div>
      <h6 class="block_two">Особенности охраны образовательных и дошкольных учреждений:</h6>
      <b-row>
        <b-col v-for="feature in GuardOfEducationalInstitutionFeatures" :key="feature.index">
          <ul class="text">
            <li v-for="name_feature in feature.features" :key="name_feature.index">{{name_feature.feature}}</li>
          </ul>
        </b-col>
      </b-row>
      <h6>Комплекс мероприятий охраны учебных заведений:</h6>
      <img class="second_img" src="../../../static/services/guard_of_organizations/scale_1200.jpg" alt="охрана_образовательных_учреждений"/>
      <ul class="text">
        <li v-for="duty in DutiesGuardOfEducationalInstitutionFeatures" :key="duty.index">{{duty.duty}}</li>
      </ul>
      <Tariffs/>
    </b-container>
  </div>
</template>

<script>
    import Tariffs from "../../tariffs";
    export default {
      name: "guard_of_educational_institutions",
      components: {Tariffs},
      data() {
        return {
          name_page: "Охрана образовательных и дошкольных учреждений",
          GuardOfEducationalAndPreschoolInstitutions:[
            {name:"охрана детских садов;"},
            {name:"охрана школ;"},
            {name:"охрана интерната;"},
            {name:"охрана вузов/училищ."},
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

<style scoped >

</style>
