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
              }
            ]
          }
      }
    }
</script>

<style scoped>
  #Advantages{
    padding: 2.5% 0;
    height: 23rem;
    background:linear-gradient( to top , #6d7d90, #bbc4d2, #6d7d90);
  }
  .hexagon {
    width: 16rem;
    height: 11rem;
    background: rgba(21, 45, 66, 0.85);
    position: relative;
    float: left;
    margin: 0 0.5rem;
    padding: 0 2rem !important;
    border-right: 3.5px solid #71c2ff;
    border-left: 3.5px solid #71c2ff;
    border-top: 3.5px solid  #71c2ff;
  }
  .hexagon:nth-child(odd){
    margin-top: 4rem !important;
    border-right: 3.5px solid white;
    border-left: 3.5px solid white;
    border-top: 3.5px solid  white;
  }
  .hexagon:nth-child(odd)::before {
    border-top: 34.8675px solid white;
  }
  .hexagon::after {
    content: "";
    position: absolute;
    bottom: -28.8675px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 8rem solid transparent;
    border-right: 8rem solid transparent;
    border-top: 29.8675px solid rgba(21, 45, 66, 0.95);
  }
  .hexagon::before {
    content: "";
    position: absolute;
    bottom: -34.8675px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 8rem solid transparent;
    border-right: 8rem solid transparent;
    border-top: 34.8675px solid #71c2ff;
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
