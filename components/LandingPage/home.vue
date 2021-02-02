<template>
    <div id="Home">
      <div class="in">
        <b-container>
          <b-row>

            <b-col cols="4">
              <img src="../../static/LandingPage/111.png" style="width:120%;margin-left:-8%;padding: 2% 0 0 0;">
            </b-col>
            <b-col>
              <div class="valencia">Частное охранное предприятие <br> "ООО Валенсия"</div>
              <div class="chopе">

                Безопасность частных лиц и объектов <br> любой сложности  на Высшем уровне!
              </div>
              <Advantages/>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
</template>

<script>
    import Advantages from "./advantages";
    export default {
        name: "home",
      components: {Advantages},
      data(){
        return{

        }
      }
    }
</script>
<style scoped lang="scss">
  #Home{
    .valencia{
      padding: 6% 0 0 7%;
      font-family: 'Lobster', cursive;
      font-size: 3.1rem;
      font-weight: 500;
      letter-spacing: 2px;
      transform: scale(1.2, 1.25);
      color: #65acdc;
      margin-left: -7%;
      text-shadow: -1.2px 5.5px 1.2px rgb(9, 24, 38);
      line-height: 3.25rem;
    }
    .chopе{
      font-family: 'Playfair Display', serif;
      font-size: 2.6rem;
      font-weight: 500;
      letter-spacing: -1.5px;
      transform: scale(1.2, 1.1);
      color: rgba(238, 238, 238, 0.43);
      padding: 8% 0 0 7%;
      margin-left: -8%;
      text-shadow: -2px 2px 2px rgba(91, 142, 177, 0.1),-.5px .5px .5px #6f6c6c;
      filter: contrast(500%);
      line-height: 3.25rem;
    }
    .col{
      padding: 0 !important;
    }
  }
  .in {
    height: auto;
    background: url(../../static/LandingPage/ооо.jpg) 100% 100% no-repeat;
    background-size: 100% 100%;
    filter: brightness(72%);
    animation: anim 60s  ease-out infinite;
  }

  @keyframes anim {
    0% {
      background: url(../../static/LandingPage/666.jpg) no-repeat;
      background-size: 100% 100%;
    }
    50% {
      background: url(../../static/LandingPage/99.jpg) no-repeat;
      background-size: 100% 100%;
    }
    100% {
      background: url(../../static/LandingPage/ооо.jpg) no-repeat;
      background-size: 100% 100%;
    }
  }
</style>
<style scoped>

</style>
