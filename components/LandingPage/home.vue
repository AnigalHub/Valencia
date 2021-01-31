<template>
    <div id="Home">
      <div class="in">
        <b-container>
          <b-row>
            <b-col>
              <div class="company_information">

                <div class="chop_valencia">
                 Частное охранное предприятие

                  «ООО Валенсия»

                </div>
                <div class="chopе" >
                  Безопасность частных лиц и объектов любой сложности  на Высшем уровне!
                </div>
                <b-button style="margin-right:15% ">О компании</b-button>
                <b-button>Прайс-лист</b-button>
              </div>
            </b-col>
            <b-col cols="5">
              <img src="../../static/LandingPage/123.png" style="width:105%;padding-top: 2%;margin-left: 3%;box-shadow: 1.1px 1.1px 2px #05273E,
                 -2px 2px 0px #05273E,
                 -3px 3px 0px #0d2534;">
            </b-col>
          </b-row>
        </b-container>

      </div>
    </div>
</template>

<script>
    export default {
        name: "home",
      data(){
        return{

        }
      }
    }
</script>
<style scoped lang="scss">
  #Home{

    .chop_valencia{
      font-size: 3.15rem;
      font-family: 'Vollkorn', serif;
      letter-spacing: -1px;
      font-weight: 600 !important;
      transform: scale(1.2, 1.3);
      padding-left: 7%;
      //color: #ffffff;
      color: #98bdd9;
      color: white;
      padding-top: 15%;
      text-shadow: 1.5px 1.5px 2px #05273E,
                 -2.2px 2.2px 0px #05273E,
                 -3.2px 3.2px 0px #0d2534;
      line-height: 4rem;
    }
    .chopе{
      font-size: 2.75rem;
      font-family: 'Vollkorn', serif;
      font-style: italic;
      letter-spacing: -1.6px;
      font-weight: 600 !important;
      transform: scale(1.2, 1.2);
      padding-left: 7%;
      //color: #ffffff;
      color: #93cbf6;
      padding-top: 12.5%;
      text-shadow: 2px 2px 0 #05273E;
      //-1px 1px 0px white,
      //-2px 2px 0px #0d2534;
      line-height: 3rem;
    }
    .btn{
      margin-top: 12%;
      font-size: 1.8rem;
      padding: 0.95% 2%!important;
      font-family: 'Vollkorn', serif;
      letter-spacing: -1px;
      font-weight: 500 !important;
      transform: scale(1.4, 1.3);
      //color: #ffffff;
      color: white;
      text-shadow: -1.8px 1.8px 0px #05273E;
      line-height: 3rem;
      border: 1px solid rgba(0,0,0,0.5) !important;
      border-bottom: 3px solid rgba(0,0,0,0.5);
      border-radius: 3px;
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.5), /* Exterior Shadow */
      inset 0 1px rgba(255,255,255,0.3), /* Top light Line */
      inset 0 10px rgba(255,255,255,0.2), /* Top Light Shadow */
      inset 0 10px 20px rgba(255,255,255,0.25), /* Sides Light Shadow */
      inset 0 -15px 30px rgba(0,0,0,0.3); /* Dark Background */
      -webkit-box-shadow: 0 2px 8px rgba(0,0,0,0.5),
      inset 0 1px rgba(255,255,255,0.3),
      inset 0 10px rgba(255,255,255,0.2),
      inset 0 10px 20px rgba(255,255,255,0.25),
      inset 0 -15px 30px rgba(0,0,0,0.3);
      -moz-box-shadow: 0 2px 8px rgba(0,0,0,0.5),
      inset 0 1px rgba(255,255,255,0.3),
      inset 0 10px rgba(255,255,255,0.2),
      inset 0 10px 20px rgba(255,255,255,0.25),
      inset 0 -15px 30px rgba(0,0,0,0.3);
      background: rgba(172, 189, 222, 0.4) !important;
    }

    .col{
      padding: 0 !important;
    }
    .col-5{
      padding-left: 5%;
    }
    .row{
      //padding-top: 10% !important;
    }
  }
  .in {
    height: 95vh;
    background: url(../../static/LandingPage/62.jpg) 100% 100% no-repeat;
    background-size: 100% 100%;
    filter: brightness(65%);
    animation: anim 20s ease-in-out infinite;
  }
  .company_information{
    //padding-top: 22%;
  }

  @keyframes anim {
    0% {
      background: url(../../static/LandingPage/666.jpg) no-repeat;
      background-size: 100% 100%;
    }
    25% {
      background: url(../../static/LandingPage/62.jpg) no-repeat;
      background-size: 100% 100%;
    }
    50% {
      background: url(../../static/LandingPage/666.jpg) no-repeat;
      background-size: 100% 100%;
    }
    100% {
      background: url(../../static/LandingPage/62.jpg) no-repeat;
      background-size: 100% 100%;
    }
  }
</style>
<style scoped>

</style>
