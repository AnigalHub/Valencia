<template>
  <div id="guard_of_industrial_facilities" class="page services types_of_guard">
    <Name_page :name_page="name_page"/>
    <b-container>
      <img src="../../../static/services/object_guard/checkpoint.jpg" alt="контрольно-пропускной_пункт" class="first_img"/>
      <p class="text"><b>Промышленный объект</b> - предприятие, агрегат, участок или цех, используемый для осуществления промышленной деятельности, который относится к категории опасных производственных объектов нашей страны.</p>
      <div class="import">
        <ul>
          <li class="li_text" v-for="guard in GuardOfIndustrialFacilities" :key="guard.index">
            {{guard.name}}
          </li>
        </ul>
      </div>
      <div class="im_descr block_two">
        <h6>Круг обязанностей охранников коммерческих объектов:</h6>
        <img src="../../../static/services/object_guard/object_check_by_cameras.jpg" alt="проверка_объекта_по_камерам"/>
        <ul class="text">
          <li v-for="name_duty in DutiesGuardOfIndustrialFacilities" :key="name_duty.index">{{name_duty.duty}}</li>
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
      name: "guard_of_industrial_facilities",
      components: {Tarrifs_content, Name_page},
      data(){
        return{
          name_page: "Охрана промышленных объектов",
          GuardOfIndustrialFacilities:[
            {name:"охрана предприятий;"},
            {name:"охрана производства;"},
            {name:"охрана строительных объектов;"},
            {name:"охрана фабрик;"},
            {name:"охрана заводов;"},
            {name:"охрана складов."},
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
