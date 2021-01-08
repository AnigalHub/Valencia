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
              src: "14.jpg",
              alt: "Накладка_на_2_розетки",
            },
            {
              src: "17.jpg",
              alt: "Накладка_на_ночник",
            },
            {
              src: "11.jpg",
              alt: "Накладка_на_выключатель",
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
