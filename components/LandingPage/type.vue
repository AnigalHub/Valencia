<template>
  <div class="container-inner" id="Type">
    <router-link :to="category.link" class="section" v-for="(category, index) in Categories" :key="index">
      <div class="content">
        <div class="container">
          <h2>{{category.category}}</h2>
          <div class="text1">{{category.descr_category}}</div>
        </div>
      </div>
      <div class="overlay"></div>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "type",
      data(){
        return{
          Categories:[
            {
              link:"/company/",
              category:"Информация для клиентов",
              descr_category:"(принципы организации, этапы работы)",
            },
            {
              link:"/tariffs/",
              category:"Прайс-лист на все виды услуг",
              descr_category:"(актуальные цены по тарифам)",
            },
            {
              link:"/licenses/",
              category:"Впечатление о работе с нами",
              descr_category:"(благодарности и рекомендации)",
            },
          ],
        }
      }
    }
</script>

<style scoped lang="scss">
  #Type {
    display: flex;
    height: 40vh;
    max-width: 100%;
  }

  .container div{
    text-align: left;
    position: absolute;
    left: 2%;
    bottom: 3%;
  }

  h2{
    position: absolute;
    left: 2%;
    bottom: 10%;
    font-size: 2rem !important;
    font-family: 'Yeseva One', cursive !important;
    text-align: left !important;
    color: white;
  }
  .text1{
    font-family: 'Source Serif Pro', serif !important;
    font-weight: 500;
    letter-spacing: -.5px;
    font-size: 1.35rem;
    line-height: 1.4rem;
    text-align: center;
    color: white;
  }
  @media screen and (max-width: 500px) {
    #Type{
      display: flex;
      height: 80vh;
      flex-direction: column;
      h2{
        font-size: 1.2rem !important;
        letter-spacing: -1px;
        left: 1.5%;
        padding-left: 2% !important;
      }
      .text1{
        letter-spacing: -1.5px;
        font-size: 1.15rem;
        padding-left: 2%;
      }
    }
  }
  @media screen and (min-width:500px) and (max-width: 768px) {
    #Type{
      height: 25vh;
      flex-direction: row !important;
      h2{
        font-size: 1.3rem !important;
        left: 0;
        letter-spacing: -1.2px;
        bottom: 22%;
        padding-left: 2% !important;
      }
      .text1{
        letter-spacing: -1.5px;
        font-size: 1.15rem;
        padding-left: 2%;
      }
      .container div{
        left: 0;
        bottom: 1%;
      }
    }
  }
  @media screen and (min-width:768px) and (max-width: 992px) {
    #Type{
      height: 25vh;
      h2{
        font-size: 1.3rem !important;
        left: 0;
        letter-spacing: -1.2px;
        bottom: 12%;
        padding-left: 2% !important;
      }
      .text1{
        letter-spacing: -1.5px;
        font-size: 1.15rem;
        padding-left: 2%;
      }
      .container div{
        left: 0;
        bottom: 1%;
      }
    }
  }
  @media screen and (min-width:992px) and (max-width: 1200px) {
    #Type{
      height: 30vh;
      h2{
        font-size: 1.35rem !important;
        letter-spacing: -1.2px;
        left: 1.5%;
      }
      .text1{
        letter-spacing: -1.5px;
        font-size: 1.3rem;
      }
    }
  }
  @media screen and (min-width:1200px) and (max-width: 1400px) {
    #Type{
      height: 35vh;
      h2{
        font-size: 1.6rem !important;
      }
    }
  }
  @media screen and (min-width:1400px) and (max-width: 1600px) {
    #Type{
      h2{
        font-size: 1.8rem !important;
      }
    }
  }

  .section {
    flex: 1;
    display: flex;
    align-items: stretch;
    height: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    color: #fff !important;
    transition: flex .4s ease;
    position: relative;
    filter: brightness(60%);
  }
  .section:first-child{
    background: url(../../static/LandingPage/about_company.jpg) ;
    background-size: 100% 100%;
  }
  .section:nth-child(2){
    background: url(../../static/LandingPage/tariffs.jpg);
    background-size: 100% 100%;
  }
  .section:last-child{
    background: url(../../static/LandingPage/thanksgiving_letters.jpg);
    background-size: 100% 100%;
  }
  .section {
    a{
      color: white;
      text-decoration:none !important;
      font-family: 'Exo 2', sans-serif;
    }
    a:hover{
      color: white;
      font-weight: 600 !important;
      text-decoration:none !important;
    }
    &:hover h2{
      text-decoration:underline;
    }
    &:hover .text1{
      text-decoration:none !important;
    }
  }
  .section .overlay {
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    position: absolute;
    transition: background-color .8s ease;
  }
  .section .content {
    z-index: 1;
    text-shadow: #000000 3px 3px  5px;
    text-align: left;
  }

  .section:hover .overlay {background-color: rgba(0, 0, 0, 0.05);}


</style>
