<template>
  <div id="technical_means" class="page">
      <Name_page :name_page="name_page"/>
      <b-container>
        <p class="text">
          Технические средства повышают безопасность любого охраняемого объекта. Наша компания занимается монтажом и обслуживанием систем безопасности во время охраны любой вверенной территории.
        </p>
        <p class="text">
          Классификация технических средств охранников компании “ООО Валенсия:
        </p>
        <div class="flex-container">
          <b-row v-for="mean in СlassificationTechnicalMeans" :key="index">
            <b-col>
              <img :src="mean.img_src" :alt="mean.img_alt"/>
            </b-col>
            <b-col>
              <h3>{{mean.name_technical_means}}</h3>
              <ul class="text">
                <li v-for="paragraph in mean.list" :key="index">
                  {{paragraph.paragraph}}
                </li>
              </ul>
            </b-col>
          </b-row>
        </div>
      </b-container>
  </div>
</template>

<script>
    import Secondary_pages from "../components/secondary_pages/secondary_pages.scss";
    import Name_page from "../components/secondary_pages/name_page";
    export default {
     name: "technical_means",
     components: {Name_page},
      data() {
        return {
          name_page:"Технические средства",
          СlassificationTechnicalMeans:[
            {
              name_technical_means:"Пожарная сигнализация",
              img_src:"../pogar.jpg",
              img_alt:"пожарная_сигнализация",
              list:[
                {
                  paragraph:"датчики задымления и температуры;"
                },
                {
                  paragraph:"приемно-контрольный прибор;"
                },
                {
                  paragraph:"прибор управления;"
                },
                {
                  paragraph:"извещатели;"
                },
                {
                  paragraph:"оповещатели."
                },
              ],
            },
            {
              name_technical_means:"Система контроля управления доступом",
              img_src:"../control.jpg",
              img_alt:"контроль_доступа",
              list:[
                {
                  paragraph:"электромагнитные замки;"
                },
                {
                  paragraph:"автоматические ворота;"
                },
                {
                  paragraph:"контроллеры;"
                },
                {
                  paragraph:"шлагбаумы;"
                },
                {
                  paragraph:"считыватели."
                },
              ],
            },
            {
              name_technical_means:"Охранная сигнализация",
              img_src:"../ohr.png",
              img_alt:"охранная_сигнализация",
              list:[
                {
                  paragraph:"контрольная панель;"
                },
                {
                  paragraph:"датчики движения;"
                },
                {
                  paragraph:"устройство оповещения;"
                },
                {
                  paragraph:"ключ отключения;"
                },
                {
                  paragraph:"кнопка тревоги."
                },
              ],
            },
            {
              name_technical_means:"Тревожная сигнализация",
              img_src:"../knopka.jpg",
              img_alt:"тревожная_сигнализация",
              list:[
                {
                  paragraph:"контрольная панель;"
                },
                {
                  paragraph:"механический ключ разблокировки;"
                },
                {
                  paragraph:"тревожная кнопка."
                },
              ],
            },
            {
              name_technical_means:"Технические средства пультовой охраны",
              img_src:"../pult.jpg",
              img_alt:"пультовая_охрана",
              list:[
                {
                  paragraph:"датчики состояния охраняемого объекта;"
                },
                {
                  paragraph:"модуль связи с центральным охранным пультом;"
                },
                {
                  paragraph:"исполнительные устройства (звуковые и световые системы, блокировка)"
                },
              ],
            },
            {
              name_technical_means:"Видеоналюдение",
              img_src:"../video.jpg",
              img_alt:"видеонаблюдение",
              list:[
                {
                  paragraph:"камеры;"
                },
                {
                  paragraph:"записывающие устройства;"
                },
                {
                  paragraph:"блоки преобразования данных;"
                },
                {
                  paragraph:"устройства вывода информации(монитор)."
                },
              ],
            },
          ]
        }
      }
    }
</script>

<style scoped lang="scss">
  .row{
    padding-bottom: 3%;
  }
  .flex-container {
    display: flex;
    flex-wrap: wrap;
  }
  .flex-container > .row {
    width: 47%;
    margin: 1% 1.5% 1% 1.5% !important;

    .row .col:first-child{
      padding: 0 !important;
    }
    .row .col:nth-child(2){
      padding: 0 13px !important;
    }
    h3{
      text-align: center;
    }
    img{
      margin-top: 5%;
    }
   ul{
     margin-left: -4%;
   }
  }
</style>
