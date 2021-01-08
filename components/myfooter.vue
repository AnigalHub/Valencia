<template>
    <div id="Myfooter">
      <b-container>
        <b-row>
          <b-col v-for="(page_catalog,index) in catalog_pages" :key="index">
            <div v-for="(value, index) in page_catalog.pages" :key="index">
              <router-link  :to="value.link">{{value.page}}</router-link>
              <br>
            </div>
          </b-col>
          <b-col>
            <a href="">   Московская область, город Люберцы, Красная улица, дом 1, этаж 8, комната 24</a>

          </b-col>
        </b-row>
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
                  {
                    link: "",
                    page: "О нас",
                  },
                  {
                    link: "",
                    page: "Услуги",
                  },
                ],
              },
              {
                pages:[
                  {
                    link: "",
                    page: "Тарифы",
                  },
                  {
                    link: "",
                    page: "Технические средства",
                  },
                ],
              },
              {
                pages:[
                  {
                    link: "",
                    page: "Спецсрества",
                  },
                  {
                    link: "",
                    page: "Лицензии",
                  },
                ],
              },
              {
                pages:[
                  {
                    link: "",
                    page: "Наши клиенты",
                  },
                  {
                    link: "",
                    page: "Контакты",
                  },
                ],
              },
            ]
          }
      }
    }
</script>

<style scoped>
  #Myfooter{
    padding: 2% 0;
     background: #05081a;

  }
  a{
    color: white;
    display: block;
    text-align: center;
    text-shadow: 1px 1px 2px rgb(15, 37, 56);
    font-size: 1.25rem;
    font-family: 'Viaoda Libre', cursive;
  }
</style>
