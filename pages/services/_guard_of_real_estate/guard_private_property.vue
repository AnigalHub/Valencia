<template>
  <div id="guard_private_property" class="page">
    <Name_page :name_page="name_page"/>
    <b-container>
      <b-row>
        <b-col>
          <img src="../../../static/988.jpg">
        </b-col>
        <b-col cols="7">
          <p class="text">При охране частных объектов мы учитываем все пожелания наших клиентов, создаем индивидуальную программу охраны под каждый уникальный случай и обеспечиваем максимально возможную сохранность жизни и имущества в рамках конкретной задачи.</p>
              <div class="li_text" v-for="name in GuardPrivateProperty">
                <component :is="name.svg"/>{{name.name}}
              </div>
        </b-col>
      </b-row>
      <b-row class="im_descr">
        <b-col cols="8">
          <h6>Круг обязанностей охранников частных объектов:</h6>
              <ul class="text">
                <li v-for="name_duty in DutiesGuardPrivateProperty" :key="name_duty.index">{{name_duty.duty}}</li>
              </ul>
        </b-col>
        <b-col>
          <img src="../../../static/677.jpg" >
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
        name: "guard_private_property",
      components: {Tarrifs_content, Name_page},
      data(){
        return{
          name_page: "Охрана частных объектов",
          GuardPrivateProperty:[
            {name:"Охрана коттеджей и коттеджных поселков",svg:Guard_shieldSVG},
            {name:"Охрана ТСЖ, жилых комплексов и многоквартирных домов",svg:Guard_shieldSVG},
            {name:"Охрана часных домов и загородных резиденций",svg:Guard_shieldSVG},
            {name:"Охрана дач и дачных поселков",svg:Guard_shieldSVG},
          ],
          DutiesGuardPrivateProperty:[
            {duty:"вооруженная охрана со спецсредствами;",},
            {duty:"защита людей, находящихся в частном объекте, и имущества частного объекта;",},
            {duty:"борьба с грабежом и другими противоправными посягательствами;",},
            {duty:"обустройство КПП и резервного поста для обеспечения непрерывного контроля частной территории;",},
            {duty:"применение комбинированных или альтернативных мер безопасности;",},
            {duty:"быстрое реагирование при возникшей угрозе;",},
            {duty:"патрулирование частного объекта для осмотра здания и прилегающих участков;",},
            {duty:"соблюдение правопорядка на вверенном объекте;",},
            {duty:"контроль прохода и проезда на территорию, а также подтверждение посторонних лиц жильцами частного объекта;",},
            {duty:"своевременное оповещение владельца частного объекта в случае форс-мажора;",},
            {duty:"отслеживание работоспособности систем: водоснабжения, отопления и пожаротушения;",},
            {duty:"оперативное взаимодействие с органами МВД и МЧС при возникновении нештатных ситуаций, угрожающих сохранности имущества или безопасности жизни и здоровья людей;",},
            {duty:"профилактика терроризма.",},
          ]
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
    padding: 10% 0 0 0 !important;
  }
  li{
    padding-bottom: 0.85%;
  }
  .col-4{
    padding: 6% 0 0 0 !important;
  }
  .col .col, .col-9 .col, .import .col{
    padding: 0 5px !important;
  }
  .col-7 .col{
    padding: 0 !important;
  }
  .import ul{
    margin-left: -8%;
  }

</style>

