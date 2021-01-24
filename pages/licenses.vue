<template>
  <div id="licenses" class="page">
    <Name_page :name_page="name_page"/>
      <b-container>
        <p class="text">Общество с ограниченной ответственностью частное охранное предприятие “Валенсия” обладает всеми необходимыми лицензиями на работу, согласно статье №3 Закона РФ №2487-1 "О частной детективной и охранной деятельности в Российской Федерации".</p>
        <h6>В целях охраны разрешается предоставление следующих видов услуг:</h6>
        <ol class="text">
          <li v-for="type in TypesOfServices" :key="type.index">{{type.type}}</li>
        </ol>
        <h4 class="emphasized text">Лицензии:</h4>
        <p class="text">Действующие лицензии частного охранного предприятия “ООО Валенсия” на право оказания охранных услуг: </p>
        <div class="flex-container">
          <img v-for="img in Licenses" :src="img.img_src" :alt="img.img_alt"/>
        </div>
        <h4 class="emphasized text">Благодарные и рекомендательные письма:</h4>
        <p class="text">Наивысшей наградой являются благодарные и рекомендательные письма наших Клиентов о частном охранном предприятии “ООО Валенсия”:</p>
        <div class="flex-container">
          <img v-for="img in ThanksgivingLetters" :src="img.img_src" :alt="img.img_alt"/>
        </div>
      </b-container>
  </div>
</template>

<script>
    import Secondary_pages from "../components/secondary_pages/secondary_pages.scss";
    import Name_page from "../components/secondary_pages/name_page";
    export default {
      name: "licenses",
      components: {Name_page},
      data() {
        return {
          name_page:"Лицензии",
          TypesOfServices:[
            {type:"Защита жизни и здоровья граждан;",},
            {type:"Охрана объектов и/или имущества (в том числе при его транспортировке);",},
            {type:"Охрана объектов и/или имущества на объектах с осуществлением работ по проектированию, монтажу и эксплуатационному обслуживанию технических средств охраны;",},
            {type:"Консультирование и подготовка рекомендаций клиентам по вопросам правомерной защиты от противоправных посягательств;",},
            {type:"Обеспечение порядка в местах проведения массовых мероприятий;",},
            {type:"Обеспечение внутриобъектового и пропускного режимов на объектах;",},
            {type:"Охрана объектов и/или имущества, а также обеспечение внутриобъектового и пропускного режимов на объектах, которые имеют особо важное значение для жизнедеятельности и безопасности государства и населения.",},
          ],
          Licenses:[
            {img_src:"../licenses/l1.jpg", img_alt:"Лицензия_1",},
            {img_src:"../licenses/l2.jpg", img_alt:"Лицензия_2",},
            {img_src:"../licenses/l3.jpg", img_alt:"Лицензия_3",},
            {img_src:"../licenses/l4.jpg", img_alt:"Лицензия_4",},
            {img_src:"../licenses/l5.jpg", img_alt:"Лицензия_5",},
            {img_src:"../licenses/l6.jpg", img_alt:"Лицензия_6",},
            {img_src:"../licenses/l7.jpg", img_alt:"Лицензия_7",},
            {img_src:"../licenses/l8.jpg", img_alt:"Лицензия_8",},
            {img_src:"../licenses/l9.jpg", img_alt:"Лицензия_9",},
            {img_src:"../licenses/l10.jpg", img_alt:"Лицензия_10",},
          ],
          ThanksgivingLetters:[
            {img_src:"../licenses/ll1.jpg", img_alt:"Благодарственное_письмо_1",},
            {img_src:"../licenses/ll2.jpg", img_alt:"Благодарственное_письмо_2",},
            {img_src:"../licenses/ll3.jpg", img_alt:"Благодарственное_письмо_3",},
            {img_src:"../licenses/ll4.jpg", img_alt:"Благодарственное_письмо_4",},
            {img_src:"../licenses/ll5.jpg", img_alt:"Благодарственное_письмо_5",},
            {img_src:"../licenses/ll6.jpg", img_alt:"Благодарственное_письмо_6",},
            {img_src:"../licenses/ll7.jpg", img_alt:"Благодарственное_письмо_7",},
          ]
        }
      }
    }
</script>

<style scoped lang="scss">

</style>
