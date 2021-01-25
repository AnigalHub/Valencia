<template>
  <div id="object_guard" class="page services services_with_types">
      <Name_page :name_page="name_page"/>
      <b-container>
        <img src="../../static/services/object_guard/object_guard.jpg" alt="охрана_объектов" class="first_img">
        <p class="text"><span class="emphasized">Охрана объектов </span>- комплексное обеспечение защиты производственного или коммерческого объекта, товарно-материальных ценностей и защиту здоровья сотрудников объекта. Для обеспечения безопасности объекта разрабатывается проект со всеми особенностями и характером деятельности бизнеса и его графиком работы.</p>
        <p class="text"><u>При составлении проекта работы охранников учитывается:</u></p>
        <ul class="text">
          <li v-for="nuance in NuancesOfWork" :key="nuance.index">{{nuance.name}}</li>
        </ul>
        <h6 class="block_two">Разновидности охраны объектов:</h6>
        <div class="flex-container">
          <div class="type_guard_beautiful_block"  v-for="guard in TypesOfGuard" :key="guard.index">
            <component :is="guard.svg"/><span class="li_text">{{guard.name}}</span>
            <b-row>
              <b-col cols="5">
                <img :src="guard.img_src" :alt="guard.img_alt">
              </b-col>
              <b-col>
                <ul class="text">
                  <li v-for="name_guard in guard.list" :key="name_guard.index">{{name_guard.guard}}</li>
                </ul>
              </b-col>
            </b-row>
          </div>
        </div>
        <Tarrifs_content/>
      </b-container>
  </div>
</template>

<script>
  import Secondary_pages from "../../components/secondary_pages/secondary_pages.scss";
  import Tarrifs_content from "../../components/tarrifs/tarrifs_content";
  import Name_page from "../../components/secondary_pages/name_page";
  import Guard_shieldSVG from "../../components/secondary_pages/services_svg/guard_shield_svg";
  import Guard_shield_typesSVG from "../../components/secondary_pages/services_svg/guard_shield_types_svg";
    export default {
      name: "object_guard",
      components: {Name_page, Tarrifs_content},
      data() {
        return {
          name_page:"Охрана объектов",
          NuancesOfWork:[
            {name:"площадь вверенной территории;"},
            {name:"количество персонала, работающего на объекте;"},
            {name:"режим работы объекта;"},
            {name:"материальные ценности, хранящиеся на объекте;"},
            {name:"изучение оперативной обстановки;"},
            {name:"особенности расположения входов/выходов и въездов на территорию."},
          ],
          TypesOfGuard:[
            { name:"Охрана промышленных объектов",
              svg:Guard_shield_typesSVG,
              img_src:"../object_guard/checkpoint.jpg",
              img_alt:"охрана_коммерческих_объектов",
              list:[
                {guard:"Охрана предприятий"},
                {guard:"Охрана производства"},
                {guard:"Охрана заводов"},
                {guard:"Охрана строительных объектов"},
                {guard:"Охрана фабрик"},
                {guard:"Охрана складов и складских помещений"},
              ]
            },
            { name:"Охрана объектов транспорта",
              svg:Guard_shield_typesSVG,
              img_src:"../object_guard/barrier.jpg",
              img_alt:"охрана_частных_объектов",
              list:[
                {guard:"Охрана вокзалов"},
                {guard:"Охрана железнодорожных объектов"},
                {guard:"Охрана автосервисов и АЗС"},
                {guard:"Охрана гаражных комплексов"},
                {guard:"Охрана автостоянок"},
                {guard:"Охрана аэропортов"},
              ]},
          ],
        }
      }
    }
</script>

<style scoped>

</style>
