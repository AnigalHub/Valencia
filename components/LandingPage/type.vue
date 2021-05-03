<template>
  <div class="container-inner" id="Type">
    <router-link :to="category.link" class="section" v-for="(category, index) in Categories" :key="index">
      <div class="content">
        <div class="container">
          <h2>{{category.category}}</h2>
          <div class="text_Landing_page">{{category.descr_category}}</div>
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
              descr_category:"(принципы и этапы работы)",
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

<style scoped>

</style>
