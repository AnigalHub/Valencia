<template>
  <div id="guard_of_industrial_facilities" class="page services types_of_guard">
    <b-container>
      <h1>{{name_page}}</h1>
      <img src="../../../static/services/object_guard/checkpoint.png" alt="контрольно-пропускной_пункт" class="first_img"/>
      <p class="text"><b>Промышленный объект</b> - предприятие, агрегат, участок или цех, используемый для осуществления промышленной деятельности, который относится к категории опасных производственных объектов нашей страны.</p>
      <h4 class="text"><u>Охрана промышленных объектов включает:</u></h4>
      <div class="import">
        <ul>
          <li class="text" v-for="guard in GuardOfIndustrialFacilities" :key="guard.index">{{guard.name}}</li>
        </ul>
      </div>
      <h6 class="block_two">Круг обязанностей охранников коммерческих объектов:</h6>
      <img class="second_img" src="../../../static/services/object_guard/object_check_by_cameras.jpg" alt="проверка_объекта_по_камерам"/>
      <ul class="text">
        <li v-for="name_duty in DutiesGuardOfIndustrialFacilities" :key="name_duty.index">{{name_duty.duty}}</li>
      </ul>
      <Tariffs/>
    </b-container>
  </div>
</template>

<script>
    import Tariffs from "../../tariffs";
    export default {
      name: "guard_of_industrial_facilities",
      components: {Tariffs},
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
