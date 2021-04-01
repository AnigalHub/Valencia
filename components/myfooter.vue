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
          <div>Московская обл., г. Люберцы, Красная ул., дом 1, этаж 8, комната 24</div>
        </div>
      </b-container>
    </div>
</template>

<script>
    export default {
        name: "myfooter",
      data(){
          return{
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
  #Myfooter{
    padding: 2% 0;
    background: #05081a;
  }
  .flex-container > div {
    width: 20%;
    margin: 0;
  }
  div{
    color: white !important;
    text-align: center;
    font-size: 1.42rem;
    font-family: "EB Garamond", serif;
    background: #05081a;
    font-weight: 600;
  }
  a{
    color: white !important;
    display: block;
  }
  @media screen and (max-width: 500px) {
    .flex-container{margin-top: 5%;}
    .flex-container > div {
      width: 50%;
      &:nth-child(5),{
        width: 100%;
        margin-bottom: 5%;
      }
    }
    div{
      font-size: 1rem;
    }
  }
  @media screen and (min-width:500px) and (max-width: 768px) {
    .flex-container{margin: 3.5% 0;}
    .flex-container > div {
      width: 33% !important;
      &:nth-child(4),&:nth-child(5),{
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }
    div{
      font-size: 1.1rem;
    }
  }
  @media screen and (min-width:768px) and (max-width: 992px) {
    .flex-container{margin: 1.5% 0;}
    .flex-container > div {
      width: 33%;
      &:nth-child(4),&:nth-child(5),{
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }
    div{
      font-size: 1.2rem;
    }
  }
  @media screen and (min-width:992px) and (max-width: 1200px) {
    div{
      font-size: 1.2rem;
    }
  }
  @media screen and (min-width:1200px) and (max-width: 1400px) {
    div{
      font-size: 1.3rem;
    }
  }
</style>
