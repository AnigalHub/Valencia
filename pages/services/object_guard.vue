<template>
  <div id="object_protection" class="page">
      <Name_page :name_page="name_page"/>
      <b-container>
        <b-row>
          <b-col>
            <img src="../../static/377.jpg">
          </b-col>
          <b-col cols="7">
            <p class="text"><span class="emphasized">Охрана объектов </span>- комплексное обеспечение защиты производственного или коммерческого объекта, товарно-материальных ценностей и защиту здоровья сотрудников объекта. Для обеспечения безопасности объекта разрабатывается проект со всеми особенностями и характером деятельности бизнеса и его графиком работы.</p>
            <p class="text"><u>При составлении проекта работы охранников учитывается:</u></p>
            <b-row>
              <b-col v-for="nuance in NuancesOfWork" :key="nuance.index">
                <ul class="text">
                  <li v-for="nuance_name in nuance.nuances" :key="nuance_name.index">{{nuance_name.name}}</li>
                </ul>
              </b-col>
            </b-row>
            <p class="text"><u>Разновидности охраны объектов:</u></p>
            <b-row class="import">
              <b-col v-for="guard in TypesOfGuard" :key="guard.index">
                <div class="li_text">
                  <component :is="guard.svg"/>{{guard.name}}
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <h2>Охрана промышленных объектов</h2>
        <p class="text"><b>Промышленный объект</b> - предприятие, агрегат, участок или цех, используемый для осуществления промышленной деятельности, который относится к категории опасных производственных объектов нашей страны.</p>
        <b-row class="import">
          <b-col v-for="guard in GuardOfIndustrialFacilities" :key="guard.index">
            <div class="li_text" v-for="name in guard.guard">
              <component :is="name.svg"/>{{name.name}}
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="9">
            <p class="text" style="text-align: center"><u>Обязанности сотрудников при охране промышленных объектов:</u></p>
            <b-row>
              <b-col v-for="duty in DutiesGuardOfIndustrialFacilities" :key="duty.index">
                <ul class="text">
                  <li v-for="name_duty in duty.list" :key="name_duty.index">{{name_duty.duty}}</li>
                </ul>
              </b-col>
            </b-row>
            <p class="text">Иные обязанности охранников предусматриваются непосредственно заказчиками.</p>
          </b-col>
          <b-col>
            <img src="../../static/object_33.jpg"><img src="../../static/object_22.jpg">
          </b-col>
        </b-row>
        <h2>Охрана объектов транспорта</h2>
        <p class="text"><b>Объекты транспорта</b>- технологический комплекс, который включает в себя средства обеспечивающие функционирование транспортной инфраструктуры. Для обеспечения безопасности объектов транспорта, комплекс охранных мероприятий прежде всего направлен на защиту работников транспортной инфраструктуры и сохранность передаваемого под охрану имущества.
        </p>
        <b-row class="import">
          <b-col v-for="guard in GuardOfTransportFacilities" :key="guard.index">
            <div class="li_text" v-for="name in guard.guard">
              <component :is="name.svg"/>{{name.name}}
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <img src="../../static/91.jpg"><img src="../../static/object_3.jpg">
          </b-col>
          <b-col cols="9">
            <p class="text" style="text-align: center; padding-top: 2%"><u>Обязанности сотрудников при охране транспортных объектов:</u></p>
            <b-row>
              <b-col v-for="duty in DutiesGuardOfTransportFacilities" :key="duty.index">
                <ul class="text">
                  <li v-for="name_duty in duty.list" :key="name_duty.index">{{name_duty.duty}}</li>
                </ul>
              </b-col>
            </b-row>
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
  import Guard_shieldSVG from "../../components/secondary_pages/sevices_svg/guard_shield_svg";
  import Guard_shield_typesSVG from "../../components/secondary_pages/sevices_svg/guard_shield_types_svg";
    export default {
      name: "object_protection",
      components: {Name_page, Tarrifs_content},
      data() {
        return {
          name_page:"Охрана объектов",
          TypesOfGuard:[
            {name:"Охрана промышленных объектов",svg:Guard_shield_typesSVG},
            {name:"Охрана объектов транспорта",svg:Guard_shield_typesSVG},
          ],
          NuancesOfWork:[
            {nuances:[{name:"площадь вверенной территории;"}, {name:"количество персонала, работающего на объекте;"}, {name:"режим работы объекта;"},]},
            {nuances:[{name:"материальные ценности, хранящиеся на объекте;"}, {name:"изучение оперативной обстановки;"}, {name:"расположения входов/выходов и въездов."},]},
          ],
          GuardOfIndustrialFacilities:[
            {guard: [{name:"Охрана предприятий",svg:Guard_shieldSVG}, {name:"Охрана производства",svg:Guard_shieldSVG},]},
            {guard: [{name:"Охрана заводов",svg:Guard_shieldSVG}, {name:"Охрана строительных объектов",svg:Guard_shieldSVG},]},
            {guard: [{name:"Охрана фабрик",svg:Guard_shieldSVG}, {name:"Охрана складов и складских помещений",svg:Guard_shieldSVG},]},
          ],
          DutiesGuardOfIndustrialFacilities:[
            {
              list:[
               {duty:"защита сотрудников, работающих на промышленном объекте;",},
               {duty:"круглосуточный обход промышленного объекта и окружающей его территории по определенному графику и маршрутам;",},
               {duty:"организация контрольно-пропускной проверки людей и автотранспорта;",},
               {duty:"предотвращения повреждения и хищения имущества;",},
               {duty:"проведение антитеррористических  и антивандальных мероприятий;",},
             ] ,
            },
            {
              list:[
                {duty:"контроль за соблюдением сотрудников техники безопасности;",},
                {duty:"мониторинг объекта с помощью инновационных технических средств;",},
                {duty:"отслеживание ввоза и вывоза ценных материалов и оборудования;",},
                {duty:"оперативное реагирование на внештатные ситуации;",},
                {duty:"обеспечение порядка на территории;",},
                {duty:"ведение учетной документации;",},
                {duty:"сотрудничество с экстренными службами.",},
              ],
            }
          ],
          GuardOfTransportFacilities:[
            {guard: [{name:"Охрана вокзалов",svg:Guard_shieldSVG}, {name:"Охрана железнодорожных объектов",svg:Guard_shieldSVG},]},
            {guard: [{name:"Охрана автосервисов и АЗС",svg:Guard_shieldSVG}, {name:"Охрана гаражных комплексов",svg:Guard_shieldSVG},]},
            {guard: [{name:"Охрана автостоянок",svg:Guard_shieldSVG}, {name:"Охрана аэропортов",svg:Guard_shieldSVG},]},
          ],
          DutiesGuardOfTransportFacilities:[
            {
              list:[
                {duty:"обеспечение высокого уровня защиты персонала и посетителей;",},
                {duty:"контроль пропускного режима посетителей, проверка документов и имущества;",},
                {duty:"досмотр входящих/выходящих граждан при помощи видеонаблюдения и других технологических разработок;",},
                {duty:"мониторинг за въездом-выездом машин и проверка содержимого транспорта;",},
                {duty:"патрулирование вверенного транспортного объекта мобильными группами;",},
              ] ,
            },
            {
              list:[
                {duty:"предотвращение преступлений и выявление злоумышленников;",},
                {duty:"выставление дежурных постов на входах и выходах;",},
                {duty:"сотрудничество с группой быстрого реагирования и правоохранительными органами;",},
                {duty:"оперативное решение проблем при противоправных действиях;",},
                {duty:"ведение отчетности.",},
              ],
            }
          ]
        }
      }
    }
</script>

<style scoped lang="scss">
  h2:nth-child(2){
    width: 40%;
  }
  h2:nth-child(6){
    width: 35%;
  }
  .row:first-child{
    padding-bottom: 0.5% !important;
  }
  .row:nth-child(2){
    padding-bottom: 0.05% !important;
  }
  .row:nth-child(3), .row:nth-child(5),.row:nth-child(9){
    ul{
      margin-left: -8%;
    }
  }
  .li_text{
    font-family: 'Vollkorn', serif;
    font-weight: 800;
    letter-spacing: -1px;
    font-size: 1.4rem;
    line-height: 1.6rem;
    text-shadow: 0.25px 0.5px 0.5px rgb(16, 40, 61);
    color: rgb(15, 37, 55);
    list-style-image: url(../../static/icon.png);
    padding-bottom: 0.85%;
  }
  li{
    padding-bottom: 0.85%;
  }
  .row:not(:first-child) .col{
    img:first-child{
      margin-bottom: 5%
    }
    img:nth-child(2){
      margin-bottom: 10%
    }
  }
  .col-4{
    padding: 6% 0 0 0 !important;
  }
  .col-7 .col, .col .col, .import .col{
    padding: 0 5px !important;
  }

  .import ul{
    margin-left: -8%;
  }
  .col-9{
    padding-top: 1%;
    li:before {
      content:"·";
      font-size:80px;
      vertical-align:middle;
      line-height:14px;
    }
    ul{
      list-style-type:none !important;
    }
  }
</style>
