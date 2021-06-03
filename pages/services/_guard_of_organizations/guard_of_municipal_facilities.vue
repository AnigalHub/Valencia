<template>
  <div id="guard_of_municipal_facilities" class="page services types_of_guard">
    <b-container>
      <h1>{{name_page}}</h1>
      <img src="../../../static/services/guard_of_organizations/gallery.jpg" alt="охрана_муниципальных_объектов" class="first_img"/>
      <p class="text"><b class="emphasized">Муниципальные объекты (госучреждения) </b> - это организации особого назначения, которые выполняют разнообразные задачи некоммерческого характера, для всеобщего блага и развития граждан. Безопасность госучреждений влияет на защищенность информации и имущества, для полного функционирования таких объектов необходима надежная охрана.
      <h4 class="text"><u>Охрана муниципальных объектов (госучреждений) включает:</u></h4>
      <div class="import">
        <ul>
          <li class="text" v-for="guard in GuardOfMunicipalFacilities" :key="guard.index">{{guard.name}}</li>
        </ul>
      </div>
      <h6 class="block_two">Особенности охраны госучреждений:</h6>
      <b-row>
        <b-col v-for="feature in  GuardOfMunicipalFacilitiesFeatures" :key="feature.index">
          <ul class="text">
            <li v-for="name_feature in feature.features" :key="name_feature.index">{{name_feature.feature}}</li>
          </ul>
        </b-col>
      </b-row>
      <h6>Комплекс мероприятий охраны муниципальных объектов:</h6>
      <img class="second_img" src="../../../static/services/guard_of_organizations/guard_of_municipal_facilities.jpg" alt="галлерея"/>
      <ul class="text">
        <li v-for="duty in DutiesGuardOfMunicipalFacilities" :key="duty.index">{{duty.duty}}</li>
      </ul>
      <Tariffs/>
    </b-container>
  </div>
</template>

<script>
    import Tariffs from "../../tariffs";
    export default {
      name: "guard_of_municipal_facilities",
      components: {Tariffs},
      data() {
        return {
          name_page: "Охрана муниципальных объектов - госучреждений",
          GuardOfMunicipalFacilities:[
            {name:"охрана административных зданий;"},
            {name:"охрана библиотек;"},
            {name:"охрана музеев и театров;"},
            {name:"охрана церквей."},
          ],
          GuardOfMunicipalFacilitiesFeatures:[
            {
              features:[
                {feature:"защита имущества, персонала и посетителей;"},
                {feature:"запрет на разглашение конфиценциальной информации;"},
                {feature:"создание охранных постов для мониторинга окружения;"},
              ]
            },
            {
              features:[
                {feature:"охрана здания и прилегающих автостоянок;"},
                {feature:"вооруженная/невооруженная охрана;"},
                {feature:"контрольно-пропускной режим."},
              ]
            }
          ],
          DutiesGuardOfMunicipalFacilities:[
            {duty:"круглосуточный мониторинг территории с помощью специальных технических средств;",},
            {duty:"контроль пропускного режима посетителей, проверка документов;"},
            {duty:"патрулирование охраняемой территории;"},
            {duty:"обеспечение безопасности объекта и паркингов;"},
            {duty:"предотвращение преступлений и выявление правонарушителей;"},
            {duty:"соблюдение общественного порядка на вверенной территории;"},
            {duty:"быстрое реагирование на внештатные ситуации;"},
            {duty:"сотрудничество с местными правоохранительными органами и ГБР;"},
            {duty:"антикриминальные, антивандальные, антитеррористические и противопожарные мероприятий."},
          ]
        }
      }
    }
</script>

<style scoped>

</style>
