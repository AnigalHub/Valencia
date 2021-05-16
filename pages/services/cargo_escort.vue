<template>
  <div id="cargo_escort" class="page services">
    <Name_page :name_page="name_page"/>
    <b-container>
       <img src="../../static/services/cargo_escort/cargo_escort.jpg" alt="сопровождение_грузов" class="first_img"/>
       <p class="text"><span class="emphasized"> Сопровождение грузов</span> - особый вид деятельности профессиональной охраны, осуществляющий опытными специалистами, оснащенными всем необходимым оборудованием и средствами защиты сопровождение груза до точки выгрузки, обеспечивая его полную безопасность и сохранность на всем маршруте.</p>
       <h6 class="block_one">Опасности при передвижении груза:</h6>
       <ul class="text">
         <li v-for="danger in DangersWhenDriving" :key="danger.index">{{danger.danger}}</li>
       </ul>
       <h6 class="block_two">Наша компания занимается сопровождением:</h6>
       <img src="../../static/services/cargo_escort/types_of_cargo.jpg" alt="типы_грузов" class="second_img"/>
       <ul class="text varieties">
         <li v-for="type in TypesOfCargo" :key="type.index"><b>{{type.type}}</b>{{type.descr_type}}</li>
       </ul>
       <img src="../../static/services/cargo_escort/guard_cargo.jpg" alt="защита_грузов" class="third_img"/>
       <h6>Структура сопровождения грузов:</h6>
       <ul class="text">
          <li v-for="duty in DutiesCargoEscort" :key="duty.index">{{duty.duty}}</li>
       </ul>
       <Tariffs/>
      </b-container>
  </div>
</template>

<script>
    import Name_page from "../../components/secondary_pages/name_page";
    import Tariffs from "../tariffs";
    export default {
      name: "cargo_escort",
      components: {Tariffs, Name_page},
      data() {
        return {
          name_page: "Сопровождение грузов",
          DangersWhenDriving:[
            {danger:"хищение груза;"},
            {danger:"потеря важных документов на груз;"},
            {danger:"неисправности с транспортом на маршруте;"},
            {danger:"недобросовестная работа экспедитора;"},
            {danger:"нападение дорожных грабителей."},
          ],
          TypesOfCargo:[
            {type:"негабаритных и сверхтяжелых грузов",descr_type:" (промышленное оборудование, установки, спецтехника, медтехника, сельскохозяственная техника, лесозаготовительная техника, транспортные средства и изделия);"},
            {type:"материальных ценностей и ценных грузов",descr_type:" (денежные средства, ювелирные украшения и изделия, драгоценные и полудрагоценные камни, антиквариат, произведения искусства, предметы роскоши);"},
            {type:"опасных грузов",descr_type:" (боеприпасы, гранаты, топливо, краски, кислоты, аэрозоли, растворители, медицинские препараты, химические вещества, некоторые виды удобрений)."},
          ],
          DutiesCargoEscort:[
            {duty:"согласованный план передвижения с Заказчиком;"},
            {duty:"безопасная доставка груза к месту назначения;"},
            {duty:"анализ всех маршрутов и выбор самого безопасного и надежного маршрута с учетом криминогенной ситуации по пути следования, а также разработка запасных маршрутов на случаи форс-мажорных обстоятельств;"},
            {duty:"дистанционный контроль передвижения с помощью специальных технических средств;"},
            {duty:"проверка целостности сопроводительных документов;"},
            {duty:"вооруженная колонна транспорта рядом с грузом;"},
            {duty:"обеспечение безопасности  при погрузке-выгрузке;"},
            {duty:"секретность перевозок, предусмотренная в договоре на работу;"},
            {duty:"быстрое изменение маршрута и другие действия при возникших нештатных ситуациях;"},
            {duty:"отчетность за проведенную работу."},
          ]
        }
      }
    }
</script>

<style scoped>

</style>
