<template>
  <div id="guard_of_medical_institutions" class="page services types_of_guard">
    <Name_page :name_page="name_page"/>
    <b-container>
      <img src="../../../static/services/guard_of_organizations/guard_of_medical_institutions.jpg" alt="охрана_медицинских_учреждений" class="first_img"/>
      <p class="text"><b>Медицинские учреждения</b> - это организации с наличием дорогостоящего оборудования и дефицитных лекарственных препаратов: наркотических, спиртосодержащих и предписанных строго по рецепту врачей. Из-за специализации в медучреждениях проблема безопасности очень актуальна, как и соблюдение режима работы и предупреждение чрезвычайных ситуаций.</p>
      <div class="import">
        <ul>
          <li class="li_text" v-for="guard in GuardOfMedicalInstitutions" :key="guard.index">
          {{guard.name}}
          </li>
        </ul>
      </div>
      <h6 class="block_two">Особенности охраны медучреждений:</h6>
      <b-row>
        <b-col v-for="feature in GuardOfMedicalInstitutionsFeatures" :key="feature.index">
          <ul class="text">
            <li v-for="name_feature in feature.features" :key="name_feature.index">{{name_feature.feature}}</li>
          </ul>
        </b-col>
      </b-row>
      <div class="im_descr">
          <h6>Комплекс мероприятий охраны медицинских организаций:</h6>
        <img src="../../../static/services/guard_of_organizations/hospital.jpg" alt="больница"/>
        <ul class="text">
            <li v-for="duty in DutiesGuardOfMedicalInstitutions" :key="duty.index">{{duty.duty}}</li>
            <ul v-for="duty in DutiesGuardOfMedicalInstitutions" :key="duty.index">
              <li v-for="name_duty in duty.subordination" :key="name_duty.index">
                <i><b>{{name_duty.name_duty}}</b></i>{{name_duty.descr_duty}}
              </li>
            </ul>
          </ul>
      </div>
      <Tarrifs_content/>
    </b-container>
  </div>
</template>

<script>
    import Name_page from "../../../components/secondary_pages/name_page";
    import Tarrifs_content from "../../../components/secondary_pages/tarrifs_content";
    export default {
      name: "guard_of_medical_institutions",
      components: {Tarrifs_content, Name_page},
      data(){
          return{
            name_page: "Охрана медицинских учреждений",
            GuardOfMedicalInstitutions:[
              {name:"охрана поликлиник;"},
              {name:"охрана аптек;"},
              {name:"охрана больниц;"},
              {name:"охрана медицинских центров."},
            ],
            GuardOfMedicalInstitutionsFeatures:[
              {
                features:[
                  {feature:"интенсивная проходимость людей;"},
                  {feature:"масштабы медицинского учреждения;"},
                  {feature:"контрольно-пропускные пункты для персонала и посетителей;"},
                  {feature:"напряженная обстановка на территории медицинского учреждения;"},
                ]
              },
              {
                features: [
                  {feature:"защита информационных ресурсов, медработников и больных;"},
                  {feature:"координация действий со службами экстренной помощи;"},
                  {feature:"охрана территории и автостоянки;"},
                  {feature:"вооруженная/невооруженная охрана."},
                ]
              }
            ],
            DutiesGuardOfMedicalInstitutions:[
              {duty:"активная защита (оборона) организации;",},
              { duty:"меры, направленные на штатный режим в медучреждении:",
                subordination:[
                  {name_duty:"правовые", descr_duty:" - подготовка нормативных документов, инструкций и приказов;"},
                  {name_duty:"технические", descr_duty:" - монтаж и поддержание работы систем безопасности;"},
                  {name_duty:"физические:", descr_duty:" создание КПП (на въезде/выезде) и постовой службы; патрулирование территории и автостоянки; сопровождение пациентов/ценных грузов; контроль за объектом с помощью технических средств систем безопасности; связь с правоохранительными органами; предотвращение правонарушителей.;"},
                  {name_duty:"режимные:", descr_duty:" прием посетителей; пропускная система персонала; мониторинг перемещения автотранспорта/материальных ценностей; организация доступа в кабинеты, склады и хранилища."},
                ]
              },
            ],
          }
      }
    }
</script>

<style scoped>

</style>
