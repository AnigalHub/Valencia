<template>
  <div id="technical_means" class="page">
    <b-container>
      <h1>{{name_page}}</h1>
      <p class="text">Технические средства повышают безопасность любого охраняемого объекта. Наша компания занимается монтажом и обслуживанием систем безопасности во время охраны любой вверенной территории.</p>
      <h6>Классификация технических средств компании "{{information.name_company}}":</h6>
      <div class="flex-container">
        <div class="beautiful_block" v-for="mean in ClassificationTechnicalMeans" :key="mean.name_technical_means">
          <p class="text emphasized">{{mean.name_technical_means}}</p>
          <b-row>
            <b-col cols="5">
              <img :src="mean.img_src" :alt="mean.img_alt"/>
            </b-col>
            <b-col>
              <ul class="text">
                <li v-for="paragraph in mean.list" :key="paragraph.index">{{paragraph.paragraph}}</li>
              </ul>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
    import Information from "static/documents/information.json"
    export default {
     name: "technical_means",
      data() {
        return {
          information:Information,
          name_page:"Технические средства",
          ClassificationTechnicalMeans:[
            {
              name_technical_means:"Пожарная сигнализация",
              img_src:"../technical_means/fire_alarm.jpg",
              img_alt:"пожарная_сигнализация",
              list:[
                {paragraph:"датчики задымления и температуры;"},
                {paragraph:"приемно-контрольный прибор;"},
                {paragraph:"прибор управления;"},
                {paragraph:"извещатели и оповещатели."},
              ],
            },
            {
              name_technical_means:"Система видеоналюдения",
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
              name_technical_means:"Охранная сигнализация",
              img_src:"../technical_means/guard_alarm.png",
              img_alt:"охранная_сигнализация",
              list:[
                {paragraph:"контрольная панель;"},
                {paragraph:"датчики движения;"},
                {paragraph:"устройство оповещения;"},
                {paragraph:"ключ отключения."},
              ],
            },
            {
              name_technical_means:"Тревожная сигнализация",
              img_src:"../technical_means/alarm_signaling.jpg",
              img_alt:"тревожная_сигнализация",
              list:[
                {paragraph:"контрольная панель;"},
                {paragraph:"механический ключ разблокировки;"},
                {paragraph:"передатчик сигнала;"},
                {paragraph:"тревожная кнопка."},
              ],
            },
            {
              name_technical_means:"Система контроля управления доступом",
              img_src:"../technical_means/access_control.jpg",
              img_alt:"контроль_доступа",
              list:[
                {paragraph:"электромагнитные замки;"},
                {paragraph:"автоматические ворота;"},
                {paragraph:"контроллеры;"},
                {paragraph:"считыватели и шлагбаумы."},
              ],
            },
            {
              name_technical_means:"Технические средства пультовой охраны",
              img_src:"../technical_means/console_guard.jpg",
              img_alt:"пультовая_охрана",
              list:[
                {paragraph:"датчики состояния охраняемого объекта;"},
                {paragraph:"модуль связи с центральным охранным пультом;"},
                {paragraph:"исполнительные устройства."},
              ],
            },

          ]
        }
      }
    }
</script>

<style scoped>

</style>
