<template>
    <div id="Home">
      <div class="in">
        <b-container>
          <b-row>
            <b-col>
              <div class="chopе">
                Безопасность частных лиц и объектов любой сложности  на Высшем уровне!
                <Advantages/>
              </div>
            </b-col>
            <b-col cols="6">
              <img src="../../static/LandingPage/123.png" style="width:78%;padding: 1% 0 5% 0; display: block; margin-left: auto; margin-right: auto">
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
    .chopе{
      font-family: 'Yeseva One', cursive;
      font-size: 2.65rem;
      font-weight: 500;
      letter-spacing: -2px;
      transform: scale(1.2, 1.15);
      color: white;
      padding: 20% 0 0 7%;
      text-shadow: 2px 2px 5px #131212;
      line-height: 3.25rem;
    }
    .col{
      padding: 0 !important;
    }
  }
  .in {
    height: auto;
    background: url(../../static/LandingPage/62.jpg) 100% 100% no-repeat;
    background-size: 100% 100%;
    filter: brightness(75%);
    animation: anim 20s ease-in-out infinite;
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
