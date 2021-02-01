<template>
  <div id="Advantages">
    <b-container>
      <div class="flex-container">
        <div class="type_guard_beautiful_block" v-for="advantage in Advanatages" :key="advantage.index">
        <component :is="advantage.svg"/>
        <p class="text1" v-html="advantage.name"></p>
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
            Advanatages:[
              {
                name:"квалифицированный штат <br> сотрудников",
                svg:StateSVG,
              },
              {
                name:"современное инновационное оборудование",
                svg:EquipmentSVG,
              },
              {
                name:"готовность <br>  работать в <br> любое время",
                svg:ClockSVG
              },
              {
                name:"контроль качества <br> на каждом <br> этапе работы",
                svg:QualityControlSVG,
              },
              {
                name:"круглосуточная поддержка <br> клиентов 24/7",
                svg:SupportSVG,
              },
              {
                name:"гибкое ценнообразование на любой бюджет",
                svg:PriceSVG
              },
            ]
          }
      }
    }
</script>

<style scoped lang="scss">
  $border_1: #487fa3;
  $border_2:rgba(0, 0, 0, 0.2);
  #Advantages{
    //padding: 2.5% 0;
    height: 15rem;
    //background:linear-gradient( to left top, #304153, #808da0, #304153);
    //filter: brightness(70%);
  }
  .flex-container{
    margin-top: 7%;
  }
  .flex-container > div {
    width: 28%;
    padding: 0.25%;
    margin: 1.5% 2.5% 0.5% 0 !important;
    //height: 11rem;
    //background: rgba(21, 45, 66, 0.75);
    position: relative;
    float: left;
    border-radius: 20px;
    filter: contrast(120%);
    background-color: rgba(250, 250, 255, 0.68);
    color: #4D4B4B;
    border: 1px solid #999999;
    box-shadow: 2px 2px 5px #131212;

  }
  svg{
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 50px !important;
    height: 50px !important;
    margin-top: 3%;

  }
  .text1{
    font-family: 'Source Serif Pro', serif !important;
    font-weight: 600;
    letter-spacing: -1.6px;
    text-shadow: 1px 1px 80px #ffffff;
    font-size: 1.1rem;
    line-height: 1.4rem;
    text-align: center;
    color: rgb(15, 37, 56);
  }

</style>
