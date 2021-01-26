<template>
  <div id="cargo_escort" class="page services">
    <Name_page :name_page="name_page"/>
      <b-container>
       <img src="../../static/services/cargo_escort/cargo_escort.jpg" alt="сопровождение грузов" class="first_img">
        <p class="text"><span class="emphasized"> Сопровождение грузов</span> - особый вид деятельности профессиональной охраны, осуществляющий опытными специалистами, оснащенными всем необходимым оборудованием и средствами защиты сопровождение груза до точки выгрузки, обеспечивая его полную безопасность и сохранность на всем маршруте.</p>
        <h6 class="block_two">Опасности при передвижении груза:</h6>
        <ul class="text">
          <li v-for="danger in DangersWhenDriving" :key="danger.index">{{danger.danger}}</li>
        </ul>
        <b-row class="block_two">
          <b-col>
            <h6>Наша компания занимается сопровождением:</h6>
            <ul class="text">
              <li v-for="type in TypesOfCargo" :key="type.index"><i><b>{{type.type}}</b></i>{{type.descr_type}}</li>
            </ul>
          </b-col>
          <b-col cols="3"><img src="../../static/services/cargo_escort/types_of_cargo.jpg" alt="типы_грузов"></b-col>
        </b-row>
        <b-row>
          <b-col cols="4"><img src="../../static/services/cargo_escort/guard_cargo.jpg" alt="защита_грузов"></b-col>
          <b-col>
            <h6>Структура сопровождения грузов:</h6>
            <ul class="text">
              <li v-for="duty in DutiesCargoEscort" :key="duty.index">{{duty.duty}}</li>
            </ul>
          </b-col>
        </b-row>
        <Tarrifs_content/>
      </b-container>
  </div>
</template>

<script>
    import Secondary_pages from "../../components/secondary_pages/secondary_pages.scss";
    import Tarrifs_content from "../../components/tarrifs/tarrifs_content";
    import Name_page from "../../components/secondary_pages/name_page";
    export default {
      name: "cargo_escort",
      components: {Name_page, Tarrifs_content},
      data() {
        return {
          name_page: "Сопровождение грузов",
          DangersWhenDriving:[
            {danger:"потеря важных документов;"},
            {danger:"кража имущества;"},
            {danger:"вымогательство;"},
            {danger:"хищение груза;"},
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
            {duty:"секретность перевозок (маршрута, времени начала движения, остановок в пути), предусмотренная в договоре на работу;"},
            {duty:"быстрое изменение маршрута и другие действия при возникших нештатных ситуациях;"},
            {duty:"отчетность за проведенную работу."},
          ]
        }
      }
    }
</script>

<style scoped>

</style>
