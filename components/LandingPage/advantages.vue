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
            {name:"квалифицированный штат  сотрудников", svg:StateSVG, link:'/company',},
            {name:"современное инновационное  оборудование", svg:EquipmentSVG, link:'/technical_means',},
            {name:"готовность  работать в  любое время", svg:ClockSVG, link:'/tariffs',},
            {name:"контроль качества  на каждом  этапе работы", svg:QualityControlSVG, link:'/company',},
            {name:"круглосуточная поддержка клиентов 24/7", svg:SupportSVG, link:'/contact',},
            {name:"гибкое  ценнообразование  на любой бюджет",svg:PriceSVG, link:'/tariffs',},
          ]
        }
      }
    }
</script>

<style scoped>

</style>
