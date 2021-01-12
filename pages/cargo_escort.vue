<template>
  <div id="cargo_escort">
    <Navbar/>
    <div id="cargo_escort_content">
      <div class="place_h1">
        <b-container>
          <h1>Сопровождение грузов</h1>
        </b-container>
      </div>
      <b-container>
        <b-row>
          <b-col>
            <img src="../static/escort_1.jpg">
          </b-col>
          <b-col cols="7">
            <p class="text">
              <span class="name"> Сопровождение грузов</span> - особый вид деятельности профессиональной охраны, осуществляющий опытными специалистами, оснащенными всем необходимым оборудованием и средствами защиты сопровождение груза до точки выгрузки, обеспечивая его полную безопасность и сохранность на всем маршруте.
            </p>
            <p class="text">
              <u> Опасности при передвижении груза:</u>
            </p>
            <ul class="text">
             <li>потеря важных документов;</li>
              <li>кража имущества;</li>
              <li>вымогательство;</li>
              <li>хищение груза;</li>
              <li>неисправности с транспортом на маршруте;</li>
              <li>недобросовестная работа экспедитора;</li>
              <li>нападение дорожных грабителей.</li>
            </ul>
          </b-col>
        </b-row>
            <p class="text"><u>Наша компания занимается сопровождением:</u></p>
            <ul class="text">
              <li>негабаритных и сверхтяжелых грузов (оборудование, установки, спецтехника, транспортные средства);</li>
              <li>материальных ценностей и ценных грузов (денежные средства, ювелирные украшения, драгоценные и полудрагоценные камни);</li>
              <li>опасных грузов(боеприпасы, гранаты, топливо, краски, растворители, медицинские препараты, химические вещества);</li>
              <li>специальных товаров.</li>
            </ul>
      <b-row>
        <b-col>
          <p class="text"> <u>Структура сопровождения грузов:</u></p>
          <ul class="text">
            <li>согласованный план передвижения с Заказчиком;</li>
            <li>безопасная доставка груза к месту назначения;</li>
            <li>анализ всех маршрутов и выбор самого безопасного и надежного маршрута с учетом
            криминогенной ситуации по пути следования, а также разработка запасных маршрутов
            на случаи форс-мажорных обстоятельств;</li>
            <li>дистанционный контроль передвижения с помощью специальных технических средств;
            <li>проверка целостности сопроводительных документов;</li>
            <li>вооруженная колонна транспорта рядом с грузом;</li>
            <li>обеспечение безопасности  при погрузке-выгрузке;</li>
            <li>секретность перевозок (маршрута, времени начала движения, остановок в пути),
            предусмотренная в договоре на работу;</li>
            <li>быстрое изменение маршрута и другие действия при возникших нештатных ситуациях;
            <li>отчетность за проведенную работу.</li>
          </ul>
        </b-col>
        <b-col cols="4">
          <img src="../static/escort_2.jpg">
        </b-col>
      </b-row>
       <Tarrifs_content/>
      </b-container>
    </div>
    <Myfooter/>
  </div>
</template>

<script>
    import Tarrifs_content from "../components/tarrifs/tarrifs_content";
    export default {
        name: "cargo_escort",
      components: {Tarrifs_content},
    }
</script>

<style lang="scss">

</style>
<style scoped lang="scss">
  #cargo_escort{
    background:linear-gradient( to top , #6d7d90, #bbc4d2, #d0d8e2);
  }
  #cargo_escort_content{
    padding: 2% 0;
  }
  h1{
    padding-left: 15px;
    font-family: 'Vollkorn', serif;
    font-weight: 600;
  }
  .place_h1{
    background: #e8edf5;
    padding: 5px 0;
    margin-bottom: 2%;
  }
  .row{
    padding-bottom: 2%;
  }
  .name{
    font-family: 'Viaoda Libre', cursive;
    font-weight: 800 !important;
    color: #09324e;
    letter-spacing: 1px;
    text-shadow: 0.5px 0.5px 1px rgb(15, 37, 56);
  }
  .text{
    font-family: 'Vollkorn', serif;
    font-weight: 500;
    letter-spacing: -1px;
    font-size: 1.4rem;
    line-height: 1.5rem;
    text-shadow: 0.25px 0.5px 0.5px rgb(16, 40, 61);
    color:rgb(15, 37, 55);
  }
  img{
    box-shadow: 7px 7px 7px rgb(15, 37, 56);
    width: 100%;
    filter: contrast(120%);
  }
  li{
    padding-bottom: 0.8%;
  }
  .col-4{
    padding-top: 4.5%;
  }

</style>
