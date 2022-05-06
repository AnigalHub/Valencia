<template>
  <div id="Myfooter">
    <b-container>
      <div class="flex-container">
        <div v-for="(page_catalog,index) in catalog_pages" :key="index">
          <div v-for="(value, index) in page_catalog.pages" :key="index">
            <NuxtLink  :to="value.link">{{value.page}}</NuxtLink>
            <br>
          </div>
        </div>
        <div>{{information.address}}</div>
      </div>
    </b-container>
  </div>
</template>

<script>
      import Information from "../static/documents/information.json";
    export default {
      name: "myfooter",
      data(){
        return{
          information:Information,
          catalog_pages:[
            {
              pages:[
                {link: "/company", page: "О нас",},
                {link: "/#Services", page: "Услуги",},
              ],
            },
            {
              pages:[
                {link: "/tariffs", page: "Тарифы",},
                {link: "/technical_means", page: "Технические средства",},
              ],
            },
            {
              pages:[
                {link: "/special_equipment", page: "Спецсрества",},
                {link: "/licenses", page: "Лицензии",},
              ],
            },
            {
              pages:[
                {link: "/our_clients", page: "Наши клиенты",},
                {link: "/contact", page: "Контакты",},
              ],
            },
          ]
        }
      }
    }
</script>

<style scoped lang="scss">
  /*компонент Footer*/
  #Myfooter{
    padding: 2% 0;
    background: #05081a;
    /*стили на одинаковые блоки контейнера (столбики с ссылками)*/
    .flex-container > div {
      width: 20%;
      margin: 0;
      color: white !important;
      text-align: center;
      letter-spacing: -.25px;
      background: #05081a;
      font-weight: 400;
      /*ссылки*/
      a{display: block;}
    }
    /*стили на одинаковые блоки контейнера (столбики с ссылками)*/
    .flex-container > div,a {
      font-size: 1.2rem;
      font-family: "Lora", serif !important;
      color: white !important;
    }
  }

  /************АДАПТИВКА***************/
  @media screen and (max-width: 768px) {
    /*компонент Footer*/
    #Myfooter {
      /*контейнер, который включает в себя повтор блоков*/
      .flex-container {
        margin-top: 5%;
        /*стили на одинаковые блоки контейнера (столбики с ссылками)*/
        & > div {
          width: 50%;
          /*5-ый (блок с адресом)*/
          &:nth-child(5){
            width: 100%;
            margin-bottom: 5%;
          }
        }
      }
    }
  }
  @media screen and (min-width:768px) and (max-width: 992px) {
    /*компонент Footer*/
    #Myfooter{
      /*контейнер, который включает в себя повтор блоков*/
      .flex-container{
        margin: 1.5% 0;
        /*стили на одинаковые блоки контейнера (столбики с ссылками)*/
        & > div {
          width: 33%;
          /*4-ый и 5-ый (блок с адресом)*/
          &:nth-child(4), &:nth-child(5), {
            display: block;
            margin: 0 auto;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1250px) {
    /*компонент Footer*/
    #Myfooter {
      /*стили на одинаковые блоки контейнера (столбики с ссылками)*/
      .flex-container > div,a {font-size: 1.1rem !important;}
    }
  }
  @media screen and (min-width:1250px) and (max-width: 1400px) {
    /*компонент Footer*/
    #Myfooter {
      /*стили на одинаковые блоки контейнера (столбики с ссылками)*/
      .flex-container > div,a {font-size: 1.14rem !important;}
    }
  }
</style>
