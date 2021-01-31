<template>
  <div id="Advantages">
    <b-container>
      <div class="hexagon" v-for="advantage in Advanatages" :key="advantage.index">
        <component :is="advantage.svg"/>
        <p class="text">{{advantage.name}}</p>
      </div>
    </b-container>
  </div>
</template>

<script>
  import StateSVG from "./advantages_svg/state_svg";
  import EquipmentSVG from "./advantages_svg/equipment_svg";
  import QualityControlSVG from "./advantages_svg/quality_control_svg";
  import SupportSVG from "./advantages_svg/support_svg";
  import PriceSVG from "./advantages_svg/price_svg";
    export default {
        name: "advantages",
      data(){
          return{
            Advanatages:[
              {
                name:"квалифицированный штат сотрудников",
                svg:StateSVG,
              },
              {
                name:"современное инновационное оборудование",
                svg:EquipmentSVG,
              },
              {
                name:"контроль качества на каждом этапе работы",
                svg:QualityControlSVG,
              },
              {
                name:"круглосуточная поддержка клиентов 24/7",
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
    padding: 2.5% 0;
    height: 23rem;
    background:linear-gradient( to left top, #304153, #808da0, #304153);
    filter: brightness(70%);
  }
  .hexagon {
    width: 18.5%;
    height: 11rem;
    background: rgba(21, 45, 66, 0.75);
    position: relative;
    float: left;
    margin: 0 0.5rem;
    padding: 0 2rem !important;
    border-radius: 10px;
    border-right: 3px solid $border_1;
    border-left: 3px solid $border_1;
    border-top: 3px solid $border_1;
  }
  .hexagon:nth-child(odd){
    margin-top: 4rem !important;
    border-right: 3px solid $border_2;
    border-left:3px solid $border_2;
    border-top: 3px solid $border_2;
  }
  .hexagon:nth-child(odd)::before {
    border-top: 34.8675px solid $border_2;
  }
  .hexagon:nth-child(odd)::after {
    border-top: 29.8675px solid solid $border_2;
  }
  .hexagon::after {
    content: "";
    position: absolute;
    bottom: -28.8675px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 7.8rem solid transparent;
    border-right: 7.8rem solid transparent;
    border-top: 29.8675px solid rgba(21, 45, 66, 0.95);

  }
  .hexagon::before {
    content: "";
    position: absolute;
    bottom: -34.8675px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 7.8rem solid transparent;
    border-right: 7.8rem solid transparent;
    border-top: 34.8675px solid $border_1;

  }
  svg{
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 75px !important;
    height: 75px !important;
    margin-top: 3%;
  }
  .text{
    font-family: 'Viaoda Libre', cursive;
    font-weight: 500;
    letter-spacing: -1.75px;
    text-shadow: 1px 1px 2px rgb(15, 37, 56);
    font-size: 1.25rem;
    text-align: center;
    color: #ffffff;
  }

</style>
