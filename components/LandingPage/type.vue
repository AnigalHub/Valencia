<template>
    <div id="Type">
      <b-row>
        <b-col v-for="(image, index) in Images" :key="index">
          <img :src="image.src" :alt="image.alt"/>
        </b-col>
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
              link:"/selection_and_supply_it",
              category:"ИТ-Решения"
            },
            {
              link:"/laboratory",
              category:"Лаборатория"
            },
            {
              link:"/supply",
              category:"Поставка ЭКБ и КИ"
            },
          ],
          Images:[
            {
              src: "LandingPage/about_company.jpg",
              alt: "о_компании",
            },
            {
              src: "LandingPage/tariffs.jpg",
              alt: "тарифы_компании",
            },
            {
              src: "LandingPage/thanksgiving_letters.jpg",
              alt: "благодарственные_письма_компании",
            },
          ],
        }
      }
    }
</script>

<style scoped>
  .col{
    padding: 0 !important;
  }
  img{
    filter: brightness(55%) blur(1px);
    min-height: 65px;
    width: 100%;
  }
</style>
