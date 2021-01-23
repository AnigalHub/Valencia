<template>
  <div id="guard_of_transport_facilities" class="page services types_of_guard">
    <Name_page :name_page="name_page"/>
    <b-container>
      <b-row>
        <b-col>
          <img src="../../../static/services/object_guard/91.jpg">
        </b-col>
        <b-col cols="7">
          <p class="text">Для обеспечения безопасности объектов транспорта, комплекс охранных мероприятий прежде всего направлен на защиту работников транспортной инфраструктуры и сохранность передаваемого под охрану имущества.
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
          <img src="../../../static/services/object_guard/object_3.jpg" >
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

<style scoped>

</style>
