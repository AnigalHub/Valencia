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
          <div>{{address.address}}</div>
        </div>
      </b-container>
    </div>
</template>

<script>
    import Address from "../static/documents/address.json";
    export default {
        name: "myfooter",
      data(){
          return{
            address:Address,
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
  //компонент Footer
  #Myfooter{
    padding: 2% 0;
    background: #05081a;
    .flex-container > div { //стили на одинаковые блоки контейнера (столбики с ссылками)
      width: 20%;
      margin: 0;
      color: white !important;
      text-align: center;
      font-size: 1.42rem;
      letter-spacing: -.25px;
      text-shadow: 0 0 0.15px black;
      font-family: "EB Garamond", serif;
      background: #05081a;
      font-weight: 400;
      a { //ссылки
        color: white !important;
        display: block;
      }
    }
  }

  //АДАПТИВКА
  @media screen and (max-width: 500px) {
    //компонент Footer
    #Myfooter {
      .flex-container { //контейнер, который включает в себя повтор блоков
        margin-top: 5%;
        & > div { //стили на одинаковые блоки контейнера (столбики с ссылками)
          font-size: 1.1rem;
          a{
            font-size: 1.1rem !important;
          }
          width: 50%;
          &:nth-child(5), {//5-ый (блок с адресом)
            width: 100%;
            margin-bottom: 5%;
          }
        }
      }
    }
  }
  @media screen and (min-width:500px) and (max-width: 768px) {
    //компонент Footer
    #Myfooter {
      .flex-container { //контейнер, который включает в себя повтор блоков
        margin: 3.5% 0;
        & > div { //стили на одинаковые блоки контейнера (столбики с ссылками)
          font-size: 1.1rem;
          a{
            font-size: 1.1rem !important;
          }
          width: 33% !important;
          &:nth-child(4), &:nth-child(5), { //4-ый и 5-ый (блок с адресом)
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
        }
      }
    }
  }
  @media screen and (min-width:768px) and (max-width: 992px) {
    //компонент Footer
    #Myfooter{
      .flex-container{ //контейнер, который включает в себя повтор блоков
        margin: 1.5% 0;
        & > div { //стили на одинаковые блоки контейнера (столбики с ссылками)
          width: 33%;
          font-size: 1.2rem;
          a{
            font-size: 1.2rem !important;
          }
          &:nth-child(4), &:nth-child(5), { //4-ый и 5-ый (блок с адресом)
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
        }
      }
    }
  }
  @media screen and (min-width:992px) and (max-width: 1200px) {
    //компонент Footer
    #Myfooter {
      .flex-container > div { //стили на одинаковые блоки контейнера (столбики с ссылками)
        font-size: 1.2rem;
        a{
           font-size: 1.2rem !important;
         }
      }
    }
  }
  @media screen and (min-width:1200px) and (max-width: 1400px) {
    //компонент Footer
    #Myfooter {
      .flex-container > div { //стили на одинаковые блоки контейнера (столбики с ссылками)
        font-size: 1.25rem;
        a{
           font-size: 1.25rem !important;
         }
      }
    }
  }
</style>
