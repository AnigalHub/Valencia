<template>
  <div id="guard_of_industrial_facilities" class="page">
    <Name_page :name_page="name_page"/>
    <b-container>
      <b-row>
        <b-col>
          <img src="../../../static/object_22.jpg">
        </b-col>
        <b-col cols="7">
          <p class="text"><b>Промышленный объект</b> - предприятие, агрегат, участок или цех, используемый для осуществления промышленной деятельности, который относится к категории опасных производственных объектов нашей страны.</p>
          <div class="import">
            <div class="li_text" v-for="guard in GuardOfIndustrialFacilities" :key="guard.index">
                <component :is="guard.svg"/>{{guard.name}}
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="im_descr">
        <b-col cols="8">
          <h6>Круг обязанностей охранников коммерческих объектов:</h6>
          <ul class="text">
            <li v-for="name_duty in DutiesGuardOfIndustrialFacilities" :key="name_duty.index">{{name_duty.duty}}</li>
          </ul>
        </b-col>
        <b-col>
          <img src="../../../static/object_33.jpg" >
        </b-col>
      </b-row>
      <Tarrifs_content/>
    </b-container>
  </div>
</template>

<script>
    import Name_page from "../../../components/secondary_pages/name_page";
    import Guard_shieldSVG from "../../../components/secondary_pages/services_svg/guard_shield_svg";
    import Tarrifs_content from "../../../components/tarrifs/tarrifs_content";
    export default {
      name: "guard_of_industrial_facilities",
      components: {Tarrifs_content, Name_page},
      data(){
        return{
          name_page: "Охрана промышленных объектов",
          GuardOfIndustrialFacilities:[
            {name:"Охрана предприятий",svg:Guard_shieldSVG},
            {name:"Охрана производства",svg:Guard_shieldSVG},
            {name:"Охрана заводов",svg:Guard_shieldSVG},
            {name:"Охрана строительных объектов",svg:Guard_shieldSVG},
            {name:"Охрана фабрик",svg:Guard_shieldSVG},
            {name:"Охрана складов и складских помещений",svg:Guard_shieldSVG},
          ],
          DutiesGuardOfIndustrialFacilities:[
            {duty:"защита сотрудников, работающих на промышленном объекте;",},
            {duty:"круглосуточный обход промышленного объекта и окружающей его территории по графику;",},
            {duty:"организация контрольно-пропускной проверки людей и автотранспорта;",},
            {duty:"предотвращения повреждения и хищения имущества;",},
            {duty:"проведение антитеррористических  и антивандальных мероприятий;",},
            {duty:"контроль за соблюдением сотрудников техники безопасности;",},
            {duty:"мониторинг объекта с помощью инновационных технических средств;",},
            {duty:"отслеживание ввоза и вывоза ценных материалов и оборудования;",},
            {duty:"оперативное реагирование на внештатные ситуации;",},
            {duty:"обеспечение порядка на территории;",},
            {duty:"ведение учетной документации;",},
            {duty:"сотрудничество с экстренными службами.",},
          ],
        }
      }
    }
</script>

<style scoped lang="scss">
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
