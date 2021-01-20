<template>
  <div id="guard_of_transport_facilities" class="page">
    <Name_page :name_page="name_page"/>
    <b-container>
      <b-row>
        <b-col>
          <img src="../../../static/91.jpg">
        </b-col>
        <b-col cols="7">
          <p class="text"><b>Промышленный объект</b> - предприятие, агрегат, участок или цех, используемый для осуществления промышленной деятельности, который относится к категории опасных производственных объектов нашей страны.</p>
          <div class="import">
            <div class="li_text" v-for="guard in GuardOfTransportFacilities" :key="guard.index">
              <component :is="guard.svg"/>{{guard.name}}
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="im_descr">
        <b-col cols="8">
          <h6>Круг обязанностей охранников коммерческих объектов:</h6>
          <ul class="text">
            <li v-for="name_duty in DutiesGuardOfTransportFacilities" :key="name_duty.index">{{name_duty.duty}}</li>
          </ul>
        </b-col>
        <b-col>
          <img src="../../../static/object_3.jpg" >
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
      name: "guard_of_transport_facilities",
      components: {Tarrifs_content, Name_page},
      data(){
        return{
          name_page: "Охрана объектов транспорта",
          GuardOfTransportFacilities:[
            {name:"Охрана вокзалов",svg:Guard_shieldSVG},
            {name:"Охрана железнодорожных объектов",svg:Guard_shieldSVG},
            {name:"Охрана автосервисов и АЗС",svg:Guard_shieldSVG},
            {name:"Охрана гаражных комплексов",svg:Guard_shieldSVG},
            {name:"Охрана автостоянок",svg:Guard_shieldSVG},
            {name:"Охрана аэропортов",svg:Guard_shieldSVG},
          ],
          DutiesGuardOfTransportFacilities:[
            {duty:"обеспечение высокого уровня защиты персонала и посетителей;",},
            {duty:"контроль пропускного режима посетителей, проверка документов и имущества;",},
            {duty:"досмотр входящих/выходящих граждан при помощи видеонаблюдения и других технологических разработок;",},
            {duty:"мониторинг за въездом-выездом машин и проверка содержимого транспорта;",},
            {duty:"патрулирование вверенного транспортного объекта мобильными группами;",},
            {duty:"предотвращение преступлений и выявление злоумышленников;",},
            {duty:"выставление дежурных постов на входах и выходах;",},
            {duty:"сотрудничество с группой быстрого реагирования и правоохранительными органами;",},
            {duty:"оперативное решение проблем при противоправных действиях;",},
            {duty:"ведение отчетности.",},
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
