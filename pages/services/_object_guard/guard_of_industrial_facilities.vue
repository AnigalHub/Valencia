<template>
  <div id="guard_of_industrial_facilities" class="page services types_of_guard">
    <Name_page :name_page="name_page"/>
    <b-container>
      <img src="../../../static/services/object_guard/object_22.jpg" class="first_img">
      <p class="text"><b>Промышленный объект</b> - предприятие, агрегат, участок или цех, используемый для осуществления промышленной деятельности, который относится к категории опасных производственных объектов нашей страны.</p>
      <div class="import">
        <div class="li_text" v-for="guard in GuardOfIndustrialFacilities" :key="guard.index">
          <component :is="guard.svg"/>{{guard.name}}
        </div>
      </div>
      <b-row class="im_descr block_two">
        <b-col cols="8">
          <h6>Круг обязанностей охранников коммерческих объектов:</h6>
          <ul class="text">
            <li v-for="name_duty in DutiesGuardOfIndustrialFacilities" :key="name_duty.index">{{name_duty.duty}}</li>
          </ul>
        </b-col>
        <b-col>
          <img src="../../../static/services/object_guard/object_33.jpg" >
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
            {name:"Охрана строительных объектов",svg:Guard_shieldSVG},
            {name:"Охрана фабрик",svg:Guard_shieldSVG},
            {name:"Охрана заводов",svg:Guard_shieldSVG},
            {name:"Охрана складов",svg:Guard_shieldSVG},
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

<style scoped>

</style>
