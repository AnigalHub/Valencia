<template>
  <div id="guard_of_events" class="page services types_of_guard">
    <Name_page :name_page="name_page"/>
      <b-container>
         <img src="../../static/services/guard_of_events/guard_of_events.jpg" class="first_img" alt="охрана_мероприятий"/>
        <p class="text"><span class="emphasized">Любое массовое скопление людей на мероприятиях </span> - это риск для безопасности участников мероприятия. Вне зависимости общественные это мероприятия, деловые или частные необходимо предоставлять защиту жизни и здоровья участникам и следить за соблюдением порядка на территории и избегать инцидентов.</p>
        <h6 class="block_one">Каждое мероприятие уникальное и отличается следующими характеристиками:</h6>
        <ul class="text">
          <li v-for="paragraph in CharacteristicsOfEvents" :key="paragraph.index">{{paragraph.paragraph}}</li>
        </ul>
        <div class="im_descr block_two">
          <h6>Перечень мер по охране мероприятий:</h6>
          <img src="../../static/services/guard_of_events/concert_guard.png" alt="охрана_концерта"/>
          <ul class="text">
            <li v-for="duty in DutiesGuardOfEvents" :key="duty.index">{{duty.duty}}</li>
          </ul>
        </div>
        <Tariffs/>
      </b-container>
  </div>
</template>

<script>
    import Name_page from "../../components/secondary_pages/name_page";
    import Tariffs from "../tariffs";
    export default {
      name: "guard_of_events",
      components: {Tariffs, Name_page},
      data() {
        return {
          name_page: "Охрана мероприятий",
          CharacteristicsOfEvents:[
            {paragraph:"численность присутствующих людей;",},
            {paragraph:"время и место проведения мероприятия;",},
            {paragraph:"количество контрольно-пропускных пунктов.",},
          ],
          DutiesGuardOfEvents:[
            {duty:"вооруженная/невооруженная охрана со спецсредствами;",},
            {duty:"осмотр и зачистка территории перед мероприятием (обследование различных углублений, ниш, мусорных урн, шкафов и ящиков, а также подарков участникам мероприятий на выявление взрывчатых средств, горючих предметов, отравляющих и наркотических веществ);",},
            {duty:"формирование четкого плана действий на все время мероприятия;",},
            {duty:"предотвращение посягательств на организаторов и посетителей мероприятия;",},
            {duty:"пресечение правонарушения на территории проведения мероприятия (дебош, воровство, порча имущества), а также выведение нарушителей за пределы проведения мероприятия;",},
            {duty:"установление контакта с правоохранительными органами и ГБР на случай непредвиденных ситуаций;",},
            {duty:"проверка пропусков, предусмотренных организаторами мероприятия;",},
            {duty:"организация видеонаблюдения и мониторинг посетителей в целях предупреждения несанкционированного проноса запрещенных предметов;",},
            {duty:"соблюдение правил пожарной безопасности;",},
            {duty:"и другие меры по желанию Клиента.",},
          ]
        }
      }
    }
</script>

<style scoped>

</style>
