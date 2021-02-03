<template>
  <div id="Advantages">
    <b-container>
      <div class="flex-container">
        <div class="type_guard_beautiful_block" v-for="advantage in Advanatages" :key="advantage.index">
          <router-link :to="advantage.link">
        <component :is="advantage.svg"/>
        <p class="text1" v-html="advantage.name"></p>
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
            Advanatages:[
              {
                name:"квалифицированный <br> штат <br> сотрудников",
                svg:StateSVG,
                link:'/company',
              },
              {
                name:"современное <br> инновационное <br> оборудование",
                svg:EquipmentSVG,
                link:'/technical_means',
              },
              {
                name:"готовность <br>  работать в <br> любое время",
                svg:ClockSVG,
                link:'/tariffs',
              },
              {
                name:"контроль качества <br> на каждом <br> этапе работы",
                svg:QualityControlSVG,
                link:'/company',
              },
              {
                name:"круглосуточная <br>поддержка <br> клиентов 24/7",
                svg:SupportSVG,
                link:'/contact',
              },
              {
                name:"гибкое <br> ценнообразование <br> на любой бюджет",
                svg:PriceSVG,
                link:'/tariffs',
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
    margin-top: 7.5%;
    margin-left: 1%;
    margin-right: 1%;
  }
  .flex-container > div {
    width: 28.5%;
    padding: 0.5%;
    margin: 1.5% 3% 1.25% 0 !important;
    position: relative;
    float: left;
    filter: contrast(120%)brightness(110%);
    background-color: rgba(250, 250, 255,.7);
    border: 2.5px solid rgba(255, 255, 255);
    box-shadow: 0 0 4px white, 3px 3px 3px rgb(21, 44, 64);
    &:hover{
    }
    p{
      margin-bottom: 1rem !important;
    }
  }
  svg{
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 60px !important;
    height: 60px !important;
    margin-top: 5%;
    margin-bottom: 5%;
    border-radius: 10%;
    padding: .5%;
  }
  .text1{
    font-family: 'Yeseva One', cursive;
    font-weight: 600 !important;
    letter-spacing: -.25px;
    transform: scale(1, 1.1);
    text-shadow: -.05px .25px .05px rgb(64, 94, 121);
    font-size: 1.2rem;
    line-height: 1.4rem;
    text-align: center;
    color: rgb(9, 24, 38);
  }

</style>
