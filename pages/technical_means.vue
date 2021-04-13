<template>
  <div id="technical_means" class="page">
      <Name_page :name_page="name_page"/>
      <b-container>
        <p class="text">Технические средства повышают безопасность любого охраняемого объекта. Наша компания занимается монтажом и обслуживанием систем безопасности во время охраны любой вверенной территории.</p>
        <h6>Классификация технических средств охранников компании “ООО Валенсия:</h6>
        <div class="flex-container">
          <div v-for="mean in СlassificationTechnicalMeans" :key="mean.name_technical_means">
            <img :src="mean.img_src" :alt="mean.img_alt"/>
            <p class="text emphasized">{{mean.name_technical_means}}</p>
            <ul class="text">
              <li v-for="paragraph in mean.list" :key="paragraph.index">
                {{paragraph.paragraph}}
              </li>
            </ul>
          </div>
        </div>
      </b-container>
  </div>
</template>

<script>
    import Name_page from "../components/secondary_pages/name_page";
    export default {
     name: "technical_means",
     components: {Name_page},
      data() {
        return {
          name_page:"Технические средства",
          СlassificationTechnicalMeans:[
            {
              name_technical_means:"Пожарная сигнализация:",
              img_src:"../technical_means/fire_alarm.jpg",
              img_alt:"пожарная_сигнализация",
              list:[
                {paragraph:"датчики задымления и температуры;"},
                {paragraph:"приемно-контрольный прибор;"},
                {paragraph:"прибор управления;"},
                {paragraph:"извещатели;"},
                {paragraph:"оповещатели."},
              ],
            },
            {
              name_technical_means:"Система контроля управления доступом:",
              img_src:"../technical_means/access_control.jpg",
              img_alt:"контроль_доступа",
              list:[
                {paragraph:"электромагнитные замки;"},
                {paragraph:"автоматические ворота;"},
                {paragraph:"контроллеры;"},
                {paragraph:"шлагбаумы;"},
                {paragraph:"считыватели."},
              ],
            },
            {
              name_technical_means:"Охранная сигнализация:",
              img_src:"../technical_means/guard_alarm.png",
              img_alt:"охранная_сигнализация",
              list:[
                {paragraph:"контрольная панель;"},
                {paragraph:"датчики движения;"},
                {paragraph:"устройство оповещения;"},
                {paragraph:"ключ отключения;"},
                {paragraph:"кнопка тревоги."},
              ],
            },
            {
              name_technical_means:"Система видеоналюдения:",
              img_src:"../technical_means/cctv.jpg",
              img_alt:"видеонаблюдение",
              list:[
                {paragraph:"камеры;"},
                {paragraph:"записывающие устройства;"},
                {paragraph:"блоки преобразования данных;"},
                {paragraph:"устройства вывода информации(монитор)."},
              ],
            },
            {
              name_technical_means:"Технические средства пультовой охраны:",
              img_src:"../technical_means/console_guard.jpg",
              img_alt:"пультовая_охрана",
              list:[
                {paragraph:"датчики состояния охраняемого объекта;"},
                {paragraph:"модуль связи с центральным охранным пультом;"},
                {paragraph:"исполнительные устройства."},
              ],
            },
            {
              name_technical_means:"Тревожная сигнализация:",
              img_src:"../technical_means/alarm_signaling.jpg",
              img_alt:"тревожная_сигнализация",
              list:[
                {paragraph:"контрольная панель;"},
                {paragraph:"механический ключ разблокировки;"},
                {paragraph:"тревожная кнопка."},
              ],
            },
          ]
        }
      }
    }
</script>

<style scoped>

</style>
