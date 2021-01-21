<template>
  <div id="guard_of_municipal_facilities" class="page services types_of_guard">
    <Name_page :name_page="name_page"/>
    <b-container>
      <b-row>
        <b-col>
          <img src="../../../static/344.jpg">
        </b-col>
        <b-col cols="7">
          <p class="text"><b>Медицинские учреждения</b> - это организации с наличием дорогостоящего оборудования и дефицитных лекарственных препаратов: наркотических, спиртосодержащих и предписанных строго по рецепту врачей. Из-за специализации в медучреждениях проблема безопасности очень актуальна, как и соблюдение режима работы и предупреждение чрезвычайных ситуаций.</p>
          <div class="import">
            <div class="li_text" v-for="guard in GuardOfMunicipalFacilities" :key="guard.index">
              <component :is="guard.svg"/>{{guard.name}}
            </div>
          </div>
        </b-col>
      </b-row>
      <h6>Особенности охраны госучреждений:</h6>
      <b-row>
        <b-col v-for="feature in  GuardOfMunicipalFacilitiesFeatures" :key="feature.index">
          <ul class="text">
            <li v-for="name_feature in feature.features" :key="name_feature.index">{{name_feature.feature}}</li>
          </ul>
        </b-col>
      </b-row>
      <b-row class="im_descr">
        <b-col cols="8">
          <h6>Комплекс мероприятий охраны муниципальных объектов:</h6>
          <ul class="text">
            <li v-for="duty in DutiesGuardOfMunicipalFacilities" :key="duty.index">{{duty.duty}}</li>
          </ul>
        </b-col>
        <b-col>
          <img src="../../../static/my.jpg" >
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
      name: "guard_of_municipal_facilities",
      components: {Tarrifs_content, Name_page},
      data() {
        return {
          name_page: "Охрана муниципальных объектов - госучреждений",
          GuardOfMunicipalFacilities:[
            {name:"Охрана административных зданий",svg:Guard_shieldSVG},
            {name:"Охрана музеев и театров",svg:Guard_shieldSVG},
            {name:"Охрана библиотек",svg:Guard_shieldSVG},
            {name:"Охрана церквей",svg:Guard_shieldSVG},
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
