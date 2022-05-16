<template>
  <div id="licenses" class="page">
    <b-container>
      <h1>{{name_page}}</h1>
      <p class="text"> Компания <span class="emphasized"> "{{information.name_company}}" </span> обладает всеми необходимыми лицензиями на работу, согласно статье №3 Закона РФ №2487-1 "О частной детективной и охранной деятельности в Российской Федерации".</p>
      <h6>В целях охраны разрешается предоставление видов услуг:</h6>
      <ol class="text">
        <li v-for="type in TypesOfServices" :key="type.index">{{type.type}}</li>
      </ol>
      <h6>Лицензии:</h6>
      <p class="text">Действующие лицензии частного охранного предприятия <span class="emphasized"> "{{information.name_company}}" </span> на право оказания охранных услуг: </p>
      <div class="flex-container">
        <img v-for="(img,index) in Licenses" :src="img.src" :alt="img.alt" :key="index" @click="showModal(img)"/>
      </div>
      <h6>Благодарные и рекомендательные письма:</h6>
      <p class="text">Наивысшей наградой являются благодарные и рекомендательные письма наших Клиентов о частном охранном предприятии <span class="emphasized">"{{information.name_company}}"</span>:</p>
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
  import Information from "static/documents/information.json"
  export default {
    name: "licenses",
    data() {
      return {
        information:Information,
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
<style lang="scss">
  //стили которые переписаны с бутстрапа (переносить отсюда нельзя!!!!!)
  $percent100:100%;
  $fontWeight600:600;
  $fontText:'Lora', serif;
  $none:none;
  $zero: 0;

  //картинка в модальном окне
  .modal-dialog img{
    width: $percent100 !important;
    box-shadow: $none !important;
  }
  //"крестик" (размер) - кнопка закрытия модального окна
  .close {
    font-size: 2rem !important;
    padding: 1rem .5rem !important;
  }
  //заголовок модального окна
  .modal-header{
    padding: .5rem 1.5rem !important;
    font-family: $fontText;
  }
  //контент модального окна
  .modal-content{background: #c5c4c4 !important;}
  //фразы в заголовке модального меню
  .modal-title{font-weight: $fontWeight600;}
  //тело модального окна
  .modal-body {padding: $zero 1rem 1rem 1rem!important;}
  //footer-модального окна
  .modal-footer {display: $none !important;}
  @media (min-width: 992px){
    //ширина модального окна на разных экранах
    .modal-lg, .modal-xl {max-width: 720px !important;}
  }
</style>
