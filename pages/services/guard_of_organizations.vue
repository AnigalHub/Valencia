<template>
  <div id="guard_of_organizations" class="page">
    <Name_page :name_page="name_page" />
    <b-container>
      <b-row>
        <b-col>
          <img src="../../static/422212508651055_cea3.jpg">
        </b-col>
        <b-col cols="7">
          <p class="text"><span class="emphasized">Охрана организаций</span>предусматривает комплекс мер, направленных на обеспечение безопасности функционирования объекта, сохранности материального имущества, информационной безопасности, защиту жизни и здоровья лиц организации.</p>
          <p class="text"><u>Охрана организаций надежно защитит вас от:</u></p>
          <b-row>
            <b-col v-for="paragraph in DefenceFrom" :key="paragraph.index"> <ul class="text"><li>{{paragraph.paragraph}}</li></ul></b-col>
          </b-row>
          <p class="text"><u>Разновидности охраны организаций:</u></p>
            <div class="import" v-for="guard in TypesOfGuard" :key="guard.index">
              <div class="li_text">
                <component :is="guard.svg"/>{{guard.name}}
              </div>
            </div>
        </b-col>
      </b-row>
      <h2>Охрана образовательных и дошкольных учреждений</h2>
      <p class="text"><b>Образовательные и дошкольные учреждения</b>- это важнейшие социальные организации, посетителями которой являются в основном дети и подростки, которые не очень любят дисциплину, а круг мер активного воздействия на них крайне ограничен. Именно в этом и состоит специфика охраны образовательных и дошкольных учреждений.</p>
      <b-row class="import">
        <b-col v-for="guard in GuardOfEducationalAndPreschoolInstitutions" :key="guard.index">
          <div class="li_text" v-for="name in guard.guard">
            <component :is="name.svg"/>{{name.name}}
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="9">
          <b-row>
            <b-col cols="5">
              <p class="text" ><u>Особенности охраны образовательных и дошкольных учреждений:</u></p>
              <ul class="text">
                <li v-for="feature in GuardOfEducationalFeatures" :key="feature.index">{{feature.feature}}</li>
              </ul>
            </b-col>
            <b-col>
              <p class="text" style="text-align: center"><u>Комплекс мероприятий охраны учебных заведений:</u></p>
              <ul class="text">
                <li v-for="duty in DutiesGuardOfEducationalFeatures" :key="duty.index">{{duty.duty}}</li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <img src="../../static/005.jpg"><img src="../../static/image-5.jpg">
        </b-col>
      </b-row>
      <h2>Охрана медицинских учреждений</h2>
      <p class="text"><b>Медицинские учреждения</b> - это организации с наличием дорогостоящего оборудования и дефицитных лекарственных препаратов: наркотических, спиртосодержащих и предписанных строго по рецепту врачей. Из-за специализации в медучреждениях проблема безопасности очень актуальна, как и соблюдение режима работы и предупреждение чрезвычайных ситуаций.</p>
      <b-row class="import">
        <b-col v-for="guard in GuardOfMedicalInstitutions" :key="guard.index">
          <div class="li_text" v-for="name in guard.guard">
            <component :is="name.svg"/>{{name.name}}
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <img src="../../static/000004.jpg"><img src="../../static/polozhenie-o-videonablyudenii-v-bolnice_2.jpg">
        </b-col>
        <b-col cols="9">
          <b-row>
            <b-col cols="4">
              <p class="text" ><u>Особенности охраны медучреждений:</u></p>
              <ul class="text">
                <li v-for="feature in GuardOfMedicalInstitutionsFeatures" :key="feature.index">{{feature.feature}}</li>
              </ul>
            </b-col>
            <b-col>
              <p class="text" style="text-align: center"><u>Комплекс мероприятий охраны медицинских организаций:</u></p>
              <ul class="text">
                <li v-for="duty in DutiesGuardOfMedicalInstitutions" :key="duty.index">{{duty.duty}}</li>
                <ul v-for="duty in DutiesGuardOfMedicalInstitutions" :key="duty.index">
                  <li v-for="name_duty in duty.subordination" :key="name_duty.index">
                    <i><b>{{name_duty.name_duty}}</b></i>{{name_duty.descr_duty}}
                  </li>
                </ul>
              </ul>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <h2>Охрана муниципальных объектов - госучреждений</h2>
      <p class="text"><b>Муниципальные объекты (госучреждения) </b>- это организации особого назначения, которые выполняют разнообразные задачи некоммерческого характера, для всеобщего блага и развития граждан. Безопасность госучреждений влияет на защищенность информации и имущества, для полного функционирования таких объектов необходима надежная охрана.</p>
      <b-row class="import">
        <b-col v-for="guard in GuardOfMunicipalFacilities" :key="guard.index">
          <div class="li_text" v-for="name in guard.guard">
            <component :is="name.svg"/>{{name.name}}
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="9">
          <b-row>
            <b-col cols="5">
              <p class="text"><u>Особенности охраны госучреждений:</u></p>
              <ul class="text">
                <li v-for="feature in GuardOfMunicipalFacilitiesFeatures" :key="feature.index">{{feature.feature}}</li>
              </ul>
            </b-col>
            <b-col>
              <p class="text" style="text-align: center"><u>Комплекс мероприятий охраны муниципальных объектов:</u></p>
              <ul class="text">
                <li v-for="duty in DutiesGuardOfMunicipalFacilities" :key="duty.index">{{duty.duty}}</li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <img src="../../static/my.jpg"><img src="../../static/344.jpg">
        </b-col>
      </b-row>
      <Tarrifs_content/>
    </b-container>
  </div>
</template>

<script>
    import Secondary_pages from "../../components/secondary_pages/secondary_pages.scss";
    import Name_page from "../../components/secondary_pages/name_page";
    import Tarrifs_content from "../../components/tarrifs/tarrifs_content";
    import Guard_shield_typesSVG from "../../components/secondary_pages/sevices_svg/guard_shield_types_svg";
    import Guard_shieldSVG from "../../components/secondary_pages/sevices_svg/guard_shield_svg";
    export default {
      name: "guard_of_organizations",
      components: {Tarrifs_content, Name_page},
      data() {
        return {
          name_page: "Охрана организаций",
          DefenceFrom:[
            {paragraph:"незаконного проникновения;",},
            {paragraph:"утечки информации, кражи имущества;",},
            {paragraph:"противоправных действий.",}
          ],
          TypesOfGuard:[
            {name:"Охрана образовательных и дошкольных учреждений",svg:Guard_shield_typesSVG},
            {name:"Охрана медицинских учреждений",svg:Guard_shield_typesSVG},
            {name:"Охрана муниципальных объектов - госучреждений",svg:Guard_shield_typesSVG},
          ],
          GuardOfEducationalAndPreschoolInstitutions:[
            {guard: [{name:"Охрана детских садов",svg:Guard_shieldSVG}, {name:"Охрана школ",svg:Guard_shieldSVG},]},
            {guard: [{name:"Охрана интерната",svg:Guard_shieldSVG}, {name:"Охрана вузов/училищ",svg:Guard_shieldSVG},]},
          ],
          GuardOfEducationalFeatures:[
            {feature:"запрет на оружие;"},
            {feature:"защита жизни и здоровья воспитанников;"},
            {feature:"пресечение конфликтов;"},
            {feature:"большая проходимость взрослых на территорию;"},
            {feature:"электронные пропуски и видеонаблюдение для отслеживания посещения;"},
            {feature:"большое число вносимых сумок и пакетов посетителями учреждения;"},
            {feature:"транспортные средства на территории учебного заведения."},
          ],
          DutiesGuardOfEducationalFeatures:[
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
          GuardOfMedicalInstitutions:[
            {guard: [{name:"Охрана поликлиник",svg:Guard_shieldSVG}, {name:"Охрана аптек",svg:Guard_shieldSVG},]},
            {guard: [{name:"Охрана больниц",svg:Guard_shieldSVG}, {name:"Охрана медицинских центров",svg:Guard_shieldSVG},]},
          ],
          GuardOfMedicalInstitutionsFeatures:[
            {feature:"интенсивная проходимость людей;"},
            {feature:"масштабы медицинского учреждения;"},
            {feature:"напряженная обстановка;"},
            {feature:"контрольно-пропускные пункты;"},
            {feature:"защита информационных ресурсов, медработников и больных;"},
            {feature:"координация действий со службами экстренной помощи;"},
            {feature:"охрана территории и автостоянки;"},
            {feature:"вооруженная/невооруженная охрана."},
          ],
          DutiesGuardOfMedicalInstitutions:[
            {duty:"активная защита (оборона) организации;",},
            { duty:"меры, направленные на штатный режим в медучреждении:",
              subordination:[
                {name_duty:"правовые", descr_duty:" - подготовка нормативных документов, договоров, инструкций и приказов;"},
                {name_duty:"технические", descr_duty:" - монтаж и поддержание работы систем безопасности;"},
                {name_duty:"физические:", descr_duty:" создание КПП (на въезде/выезде) и постовой службы; патрулирование территории и автостоянки; сопровождение пациентов/ценных грузов; контроль за объектом с помощью технических средств систем безопасности; связь с правоохранительными органами; предотвращение правонарушителей.;"},
                {name_duty:"режимные:", descr_duty:" прием посетителей; пропускная система персонала; мониторинг перемещения автотранспорта/материальных ценностей; организация доступа в кабинеты, склады и хранилища."},
              ]
            },
          ],
          GuardOfMunicipalFacilities:[
            {guard: [{name:"Охрана административных зданий",svg:Guard_shieldSVG}, {name:"Охрана музеев и театров",svg:Guard_shieldSVG},]},
            {guard: [{name:"Охрана библиотек",svg:Guard_shieldSVG}, {name:"Охрана церквей",svg:Guard_shieldSVG},]},
          ],
          GuardOfMunicipalFacilitiesFeatures:[
            {feature:"защита имущества, персонала и посетителей;"},
            {feature:"запрет разглашения информации;"},
            {feature:"создание охранных постов для мониторинга окружения;"},
            {feature:"охрана здания и прилегающих автостоянок;"},
            {feature:"вооруженная/невооруженная охрана;"},
            {feature:"контрольно-пропускной режим;"},
            {feature:"программа для контроля рабочего времени."},
          ],
          DutiesGuardOfMunicipalFacilities:[
            {duty:"круглосуточный мониторинг и патрулирование территории;"},
            {duty:"обеспечение безопасности объекта и паркингов;"},
            {duty:"контроль пропускного режима посетителей, проверка документов;"},
            {duty:"соблюдение общественного порядка;"},
            {duty:"быстрое реагирование на внештатные ситуации;"},
            {duty:"сотрудничество с местными правоохранительными органами и с группой быстрого реагирования;"},
            {duty:"антикриминальные, антивандальныей, антитеррористическиех и противопожарные мероприятий."},
          ]
        }
      }
    }
</script>

<style scoped lang="scss">
  h2:nth-child(2){
    width: 55%;
  }
  h2:nth-child(6){
    width: 35%;
  }
  h2:nth-child(10){
    width: 50%;
  }
  .row:not(:first-child) .col{
    img:first-child{
      margin-bottom: 5%
    }
    img:nth-child(2){
      margin-bottom: 10%
    }
  }
  .col-4 {
    flex: 0 0 34% !important;
    max-width: 34% !important;
    padding: 0 2.5px !important;
  }
  .row:first-child{
    padding-bottom: 0.5% !important;
  }
  .row:nth-child(3){
    padding-bottom: 0 !important;
  }
  .row:nth-child(4){
    padding-bottom: 1%;
  }
  .li_text{
    font-family: 'Vollkorn', serif;
    font-weight: 800;
    letter-spacing: -1px;
    font-size: 1.4rem;
    line-height: 1.6rem;
    text-shadow: 0.25px 0.5px 0.5px rgb(16, 40, 61);
    color: rgb(15, 37, 55);
    list-style-image: url(../../static/icon.png);
    padding-bottom: 0.85%;
  }
  li{
    padding-bottom: 0.85%;
  }
  .import:first-child{
    .col{
      padding: 0 5px !important;
    }
  }
  .col-2{
    padding: 0 !important;
  }
</style>
