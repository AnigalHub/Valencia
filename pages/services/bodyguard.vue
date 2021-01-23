<template>
  <div id="bodyguard" class="page services">
    <Name_page :name_page="name_page"/>
      <b-container>
        <b-row>
          <b-col><img src="../../static/services/bodyguard/bodyguard.jpg"></b-col>
          <b-col cols="7">
            <p class="text"><span class="emphasized">Личная охрана</span> - профессиональная охрана, обеспечивающая безопасность жизни и здоровья Клиента и конфиденциальность информации.</p>
            <p class="text">Охранники личной охраны - настоящие профессионалы своего дела, прошедшие полную систему подготовки и жесткий отбор до собеседования с клиентом.</p>
            <h6>Режимы работы личной охраны:</h6>
            <ul class="text">
              <li v-for="mode in Modes" :key="mode.index">{{mode.mode}}</li>
            </ul>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <h6>Разновидности личной охраны:</h6>
            <ul class="text">
              <li v-for="bodyguard in TypesBodyguard" :key="bodyguard.index"><i><b>{{bodyguard.name}}</b></i> - {{bodyguard.descr}}</li>
            </ul>
          </b-col>
          <b-col cols="3">
            <img src="../../static/services/bodyguard/bodyguard_2.jpg">
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="4">
            <img src="../../static/services/bodyguard/bodyguard_3.jpg">
          </b-col>
          <b-col>
            <h6>Обязанности личной охраны:</h6>
            <ul class="text">
              <li v-for="name_duty in DutiesBodyguard" :key="name_duty.index">{{name_duty.duty}}</li>
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
      name: "bodyguard",
      components: {Name_page, Tarrifs_content},
      data() {
        return {
          name_page: "Личная охрана",
          Modes:[
            {mode:"Единовременное сопровождение Клиента на важные переговоры, мероприятия;",},
            {mode:"Ежедневная охрана по установленному графику (индивидуальная договоренность с клиентом);",},
            {mode:"Почасовая охрана - присутствие личного охранника на небольшой отрезок времени;",},
            {mode:"Круглосуточная охрана - сопровождение Клиента 24/7.",},
          ],
          TypesBodyguard:[
            {name:"Персональный охранник", descr:"опытный охранник, целью которого стоит постоянная или временная защита жизни и здоровья Клиента;",},
            {name:"Водитель-охранник", descr:"квалифицированный охранник с водительскими правами, который занимается организацией  максимально безопасных маршрутов передвижения для Клиента и обеспечивающий неприкосновенность во время поездки;",},
            {name:"Охрана для детей", descr:"профессиональный охранник со знаниями детской психологии, обеспечивающий безопасность ребенку (детям);",},
            {name:"VIP-охрана", descr:"охрана представительной внешности, занимающаяся безопасностью VIP-персоны.",},
          ],
          DutiesBodyguard:[
            {duty:"охрана Клиента, личных вещей, автомобиля и гостей;",},
            {duty:"умение быть незаметными, корректными и вежливыми;",},
            {duty:"владение всеми приемами обороны и  видами оружия, умение вести точный огонь на поражение;",},
            {duty:"исследование и проверка мест постоянного пребывания Клиента;",},
            {duty:"постоянный мониторинг ситуации;",},
            {duty:"изучение окружения Клиента;",},
            {duty:"сопровождение Клиента на мероприятия/работу/деловые встречи и в иные организации;",},
            {duty:"своевременное устранение потенциальных угроз (выявление подслушивающих и взрывных устройств, блокировка мест, где готовится покушение и т.д.);",},
            {duty:"сопровождение во время пеших передвижениях и автосопровождение;",},
            {duty:"незамедлительная реакция во время нештатных ситуаций.",},
          ]
        }
      }
    }
</script>

<style scoped>

</style>
