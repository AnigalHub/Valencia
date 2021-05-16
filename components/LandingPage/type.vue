<template>
  <div class="container-inner" id="Type">
  <b-row>
      <router-link :to="category.link" class="col" v-for="(category, index) in Categories" :key="index">
        <img :src="category.img_src">
        <div class="container">
          <h2>{{category.category}}</h2>
          <div class="text_Landing_page">{{category.descr_category}}</div>
        </div>
      </router-link>
    </b-row>
  </div>
</template>

<script>
    export default {
        name: "type",
      data(){
        return{
          Categories:[
            {
              img_src:"Landing_page/22.jpg",
              link:"/company/",
              category:"Информация для клиентов",
              descr_category:"(принципы и этапы работы)",
            },
            {
              img_src:"Landing_page/222.jpg",
              link:"/tariffs/",
              category:"Прайс-лист на все виды услуг",
              descr_category:"(актуальные цены по тарифам)",
            },
            {
              img_src:"Landing_page/2222.jpg",
              link:"/licenses/",
              category:"Впечатление о работе с нами",
              descr_category:"(благодарности и рекомендации)",
            },
          ],
        }
      }
    }
</script>

<style scoped>

</style>
