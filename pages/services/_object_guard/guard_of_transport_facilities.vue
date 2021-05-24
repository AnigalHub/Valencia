<template>
  <div id="guard_of_transport_facilities" class="page services types_of_guard">
    <b-container>
      <h1>{{name_page}}</h1>
      <img src="../../../static/services/object_guard/guard_at_the_post.jpg" alt="охрана_на_посту" class="first_img"/>
      <p class="text">Для обеспечения безопасности объектов транспорта, комплекс охранных мероприятий прежде всего направлен на защиту работников транспортной инфраструктуры и сохранность передаваемого под охрану имущества.
      <h4 class="text"><u>Охрана объектов транспорта включает:</u></h4>
      <div class="import">
        <ul>
          <li class="text" v-for="guard in GuardOfTransportFacilities" :key="guard.index">{{guard.name}}</li>
        </ul>
      </div>
      <div class="im_descr block_two">
        <h6>Круг обязанностей охранников коммерческих объектов:</h6>
        <img src="../../../static/services/object_guard/barrier.jpg" alt="шлагбаум"/>
        <ul class="text">
          <li v-for="name_duty in DutiesGuardOfTransportFacilities" :key="name_duty.index">{{name_duty.duty}}</li>
        </ul>
      </div>
      <Tariffs/>
    </b-container>
  </div>
</template>

<script>
    import Tariffs from "../../tariffs";
    export default {
      name: "guard_of_transport_facilities",
      components: {Tariffs},
      data(){
        return{
          name_page: "Охрана объектов транспорта",
          GuardOfTransportFacilities:[
            {name:"охрана вокзалов;"},
            {name:"охрана автосервисов;"},
            {name:"охрана АЗС;"},
            {name:"охрана аэропортов;"},
            {name:"охрана гаражных комплексов;"},
            {name:"охрана автостоянок и железнодорожных объектов."},

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
