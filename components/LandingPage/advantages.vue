<template>
  <div id="Advantages">
    <b-container>
      <div class="flex-container">
        <div class="type_guard_beautiful_block" v-for="advantage in advantages" :key="advantage.index">
          <router-link :to="advantage.link">
            <component :is="advantage.svg"/>
            <p class="text_Landing_page" v-html="advantage.name"></p>
          </router-link>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
  import StateSVG from "./advantages_svg/state_svg";
  import EquipmentSVG from "./advantages_svg/equipment_svg";
  import QualityControlSVG from "./advantages_svg/quality_control_svg";
  import SupportSVG from "./advantages_svg/support_svg";
  import ClockSVG from "./advantages_svg/clock_svg";
  import PriceSVG from "./advantages_svg/price_svg";
    export default {
      name: "advantages",
      data(){
        return{
          advantages:[
            {name:"квалифицированный <br> штат <br> сотрудников", svg:StateSVG, link:'/company',},
            {name:"современное <br> инновационное <br> оборудование", svg:EquipmentSVG, link:'/technical_means',},
            {name:"готовность <br>  работать в <br> любое время", svg:ClockSVG, link:'/tariffs',},
            {name:"контроль качества <br> на каждом <br> этапе работы", svg:QualityControlSVG, link:'/company',},
            {name:"круглосуточная <br>поддержка <br> клиентов 24/7", svg:SupportSVG, link:'/contact',},
            {name:"гибкое <br> ценнообразование <br> на любой бюджет",svg:PriceSVG, link:'/tariffs',},
          ]
        }
      }
    }
</script>

<style scoped>

</style>
