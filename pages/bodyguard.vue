<template>
  <div id="bodyguard">
    <div id="bodyguard_content">
      <div class="place_h1">
        <b-container>
          <h1>Личная охрана</h1>
        </b-container>
      </div>
      <b-container>
        <b-row>
          <b-col>
            <img src="../static/bodyguard.jpg">
          </b-col>
          <b-col cols="7">
            <p class="text">
              <span class="name"> Личная охрана </span> - профессиональная охрана, обеспечивающая безопасность жизни и здоровья Клиента и конфиденциальность информации.
            </p>
            <p class="text">
              Охранники личной охраны - настоящие профессионалы своего дела, прошедшие полную систему подготовки и жесткий отбор до собеседования с клиентом.
            </p>
            <p class="text">
              <u> Режимы работы личной охраны:</u>
            </p>
            <ul class="text">
              <li>Единовременное сопровождение Клиента на важные переговоры, мероприятия;</li>
              <li>Ежедневная охрана по установленному графику (индивидуальная договоренность с клиентом);</li>
              <li>Почасовая охрана - присутствие личного охранника на небольшой отрезок времени;</li>
              <li>Круглосуточная охрана - сопровождение Клиента 24/7.</li>
            </ul>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="text" ><u>Разновидности личной охраны:</u></p>
            <ul class="text">
              <li>  <span class="name">Персональный охранник </span>- опытный охранник, целью которого стоит постоянная или временная защита жизни и здоровья Клиента;</li>
              <li>  <span class="name">Водитель-охранник </span>- квалифицированный охранник с водительскими правами, который занимается организацией  максимально безопасных
              маршрутов передвижения для Клиента и обеспечивающий неприкосновенность во время поездки;</li>
              <li><span class="name">Охрана для детей </span>- профессиональный охранник со знаниями детской психологии, обеспечивающий безопасность ребенку (детям);</li>
              <li><span class="name">VIP-охрана</span> - охрана представительной внешности, занимающаяся безопасностью VIP-персоны.</li>
            </ul>
          </b-col>
          <b-col cols="3">
            <img src="../static/bodyguard_2.jpg">
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="4">
            <img src="../static/bodyguard_3.jpg">
          </b-col>
          <b-col>
            <p class="text"> <u>Обязанности личной охраны:</u></p>
            <ul class="text">
              <li>охрана Клиента, личных вещей, автомобиля и гостей;</li>
              <li>умение быть незаметными, корректными и вежливыми;</li>
              <li>владение всеми приемами обороны и  видами оружия, умение вести точный огонь на поражение;</li>
              <li>исследование и проверка мест постоянного пребывания Клиента;</li>
              <li>постоянный мониторинг ситуации;</li>
              <li>изучение окружения Клиента;</li>
              <li>сопровождение Клиента на мероприятия / работу / деловые встречи и в иные организации;</li>
              <li>своевременное устранение потенциальных угроз (выявление подслушивающих и взрывных устройств, блокировка мест, где готовится покушение и т.д.);</li>
              <li>сопровождение во время пеших передвижениях и автосопровождение;</li>
              <li>незамедлительная реакция во время нештатных ситуаций;</li>
            </ul>
          </b-col>
        </b-row>
      <Tarrifs_content/>
      </b-container>
    </div>
  </div>
</template>

<script>
  import Tarrifs_content from "../components/tarrifs/tarrifs_content";
    export default {
        name: "bodyguard",
      components: {Tarrifs_content},
    }
</script>

<style scoped lang="scss">
  #bodyguard{
    background:linear-gradient( to top , #6d7d90, #bbc4d2, #d0d8e2);
  }
  #bodyguard_content{
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
  .row:first-child{
    padding-bottom: 3% !important;
  }
  .row:nth-child(2){
    padding-bottom: 0.05% !important;
  }
  .row{
    padding-bottom: 2%;
  }
  .name{
    font-family: 'Viaoda Libre', cursive;
    font-weight: 800 !important;
    letter-spacing: -1.5px;
    color: #09324e;
    text-shadow: 0.5px 0.5px 1px rgb(15, 37, 56);
  }
  .text{
    font-family: 'Vollkorn', serif;
    font-weight: 500;
    letter-spacing: -1px;
    font-size: 1.4rem;
    line-height: 1.6rem;
    text-shadow: 0.25px 0.5px 0.5px rgb(16, 40, 61);
    color:rgb(15, 37, 55);
  }
  img{
    box-shadow: 7px 7px 7px rgb(15, 37, 56);
    width: 100%;
    filter: contrast(110%);
  }
  li{
    padding-bottom: 0.95%;
  }
  .col-4{
    padding: 6% 0 0 0 !important;
  }
</style>
