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
          <img v-for="(img,index) in Licenses" :src="img.src" :alt="img.alt" :key="index" @click="showModal(img)"/>
        </div>
        <h4 class="emphasized text">Благодарные и рекомендательные письма:</h4>
        <p class="text">Наивысшей наградой являются благодарные и рекомендательные письма наших Клиентов о частном охранном предприятии “ООО Валенсия”:</p>
        <div class="flex-container">
          <img v-for="img in ThanksgivingLetters" :src="img.src" :alt="img.alt" @click="showModal(img)"/>
        </div>
        <b-modal ref="my-modal" id="img" size="lg" centered :title="selectedImages.name">
          <img :src="selectedImages.src" :alt="selectedImages.alt"/>
        </b-modal>
      </b-container>
  </div>
</template>

<script>
    import Name_page from "../components/secondary_pages/name_page";
    export default {
      name: "licenses",
      components: {Name_page},
      data() {
        return {
         selectedImages:{
           src:'',
           alt:'',
          },
          name_page:"Лицензии",
          TypesOfServices:[
            {type:"защита жизни и здоровья граждан;",},
            {type:"охрана объектов и/или имущества (в том числе при его транспортировке);",},
            {type:"охрана объектов и/или имущества на объектах с осуществлением работ по проектированию, монтажу и эксплуатационному обслуживанию технических средств охраны;",},
            {type:"консультирование и подготовка рекомендаций клиентам по вопросам правомерной защиты от противоправных посягательств;",},
            {type:"обеспечение порядка в местах проведения массовых мероприятий;",},
            {type:"обеспечение внутриобъектового и пропускного режимов на объектах;",},
            {type:"охрана объектов и/или имущества, а также обеспечение внутриобъектового и пропускного режимов на объектах, которые имеют особо важное значение для жизнедеятельности и безопасности государства и населения.",},
          ],
          Licenses:[
            {src:"../licenses/license_1.jpg", alt:"Лицензия_1",name:"Лицензия 1",},
            {src:"../licenses/license_2.jpg", alt:"Лицензия_2",name:"Лицензия 2",},
            {src:"../licenses/license_3.jpg", alt:"Лицензия_3",name:"Лицензия 3",},
            {src:"../licenses/license_4.jpg", alt:"Лицензия_4",name:"Лицензия 4",},
            {src:"../licenses/license_5.jpg", alt:"Лицензия_5",name:"Лицензия 5",},
            {src:"../licenses/license_6.jpg", alt:"Лицензия_6",name:"Лицензия 6",},
            {src:"../licenses/license_7.jpg", alt:"Лицензия_7",name:"Лицензия 7",},
            {src:"../licenses/license_8.jpg", alt:"Лицензия_8",name:"Лицензия 8",},
            {src:"../licenses/license_9.jpg", alt:"Лицензия_9",name:"Лицензия 9",},
            {src:"../licenses/license_10.jpg", alt:"Лицензия_10",name:"Лицензия 10",},
          ],
          ThanksgivingLetters:[
            {src:"../licenses/thank_you_letter_1.jpg", alt:"Благодарственное_письмо_1",name:"Благодарственное письмо 1",},
            {src:"../licenses/thank_you_letter_2.jpg", alt:"Благодарственное_письмо_2",name:"Благодарственное письмо 2",},
            {src:"../licenses/thank_you_letter_3.jpg", alt:"Благодарственное_письмо_3",name:"Благодарственное письмо 3",},
            {src:"../licenses/thank_you_letter_4.jpg", alt:"Благодарственное_письмо_4",name:"Благодарственное письмо 4",},
            {src:"../licenses/thank_you_letter_5.jpg", alt:"Благодарственное_письмо_5",name:"Благодарственное письмо 5",},
            {src:"../licenses/thank_you_letter_6.jpg", alt:"Благодарственное_письмо_6",name:"Благодарственное письмо 6",},
            {src:"../licenses/thank_you_letter_7.jpg", alt:"Благодарственное_письмо_7",name:"Благодарственное письмо 7",},
          ]
        }
      },
      methods: {
        showModal(img) {
          this.selectedImages = img;
          this.$refs['my-modal'].show()
        },
      }
    }
</script>
<style>
  .modal-dialog img{ /*картинка в модальном окне*/
    width: 100% !important;
    box-shadow: none !important;
    filter: brightness(80%) contrast(120%)!important;
  }
  .close { /*"крестик" (размер) - кнопка закрытия модального окна*/
    font-size: 2rem !important;
    padding: 1rem .5rem !important;
  }
  .modal-header{ /*заголовок модального окна*/
    padding: 0.5rem 1.5rem !important;
  }
  .modal-body { /*тело модального окна*/
    padding:0 1rem 1rem 1rem!important;
  }
  .modal-footer { /*footer-модального окна*/
    display: none !important;
  }
  @media (min-width: 992px){
    .modal-lg, .modal-xl { /*ширина модального окна на разных экранах*/
      max-width: 720px !important;
    }
  }
</style>
<style scoped lang="scss">

</style>
