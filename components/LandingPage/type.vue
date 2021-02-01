<template>
  <div class="container-inner">
    <div class="section" v-for="(category, index) in Categories" :key="index">

      <div class="content">
        <router-link :to="category.link">
        <div class="container">
          <h2>{{category.category}}</h2>
          <div class="text1">{{category.descr_category}}</div>
        </div>
        </router-link>
      </div>

      <div class="overlay"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "type",
      data(){
        return{
          Categories:[
            {
              link:"/selection_and_supply_it",
              category:"Информация для клиентов",
              descr_category:"(принципы организации, этапы работы)",
            },
            {
              link:"/laboratory",
              category:"Прайс-лист",
              descr_category:"(цены на наши услуги)",
            },
            {
              link:"/supply",
              category:"Впечатление о работе с нами",
              descr_category:"(благодарственные и рекомендательные письма)",
            },
          ],
        }
      }
    }
</script>

<style scoped lang="scss">
  .container-inner {
    display: flex;
    height: 42vh;
    max-width: 100%;
  }
  .container div{
    text-align: left;
  }
  h2{
  font-family: 'Yeseva One', cursive;
  }
  .section:first-child h2{
    padding-top: 60%;
  }
  .section:nth-child(2) h2{
    padding-top: 122%;
  }
  .section:nth-child(3) h2{
    padding-top: 55%;
  }
  .section {
    flex: 1;
    display: flex;
    align-items: stretch;
    height: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    color: #fff;
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
    font-family: 'Exo 2', sans-serif;
  }
    &:hover h2{
      text-decoration:underline;
    }
    &:hover .container div{
      text-decoration:none !important;
    }
  a:hover{
    color: white;
    font-weight: 600 !important; text-decoration:none !important;
  }
  }
  .section .overlay {
    background-color: rgba(0, 0, 0, 0.4);
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

  .section:hover .overlay
  {
    background-color: rgba(0, 0, 0, 0.05);
  }
  .text1{
    font-family: 'Source Serif Pro', serif !important;
    font-weight: 500;
    letter-spacing: -.5px;
    //text-shadow: 1px 1px 80px #ffffff;
    font-size: 1.35rem;
    line-height: 1.4rem;
    text-align: center;
    color: white;
  }


  @media screen and (max-width: 768px) {
    .container-inner{
      display: flex;
      height: 80vh;
      flex-direction: column;
    }
  }
  @media screen and (min-width:768px) and (max-width: 992px) {
    .container-inner{
      display: flex;
      height: 40vh;
    }
  }
</style>
