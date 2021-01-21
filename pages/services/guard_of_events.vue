<template>
  <div id="guard_of_events" class="page services">
    <Name_page :name_page="name_page"/>
      <b-container>
        <b-row>
          <b-col><img src="../../static/events_1.jpg"></b-col>
          <b-col cols="7">
            <p class="text"><span class="emphasized">Любое массовое скопление людей на мероприятиях </span> - это риск для безопасности участников мероприятия. Вне зависимости общественные это мероприятия, деловые или частные необходимо предоставлять защиту жизни и здоровья участникам и следить за соблюдением порядка на территории и избегать инцидентов.
            </p>
            <h6>Каждое мероприятие уникальное и отличается следующими характеристиками:</h6>
            <ul class="text">
              <li v-for="paragraph in CharacteristicsOfEvents" :key="paragraph.index">{{paragraph.paragraph}}</li>
            </ul>
          </b-col>
        </b-row>
            <h6>Перечень мер по охране мероприятий:</h6>
            <b-row>
              <b-col>
                <ul class="text">
                  <li v-for="duty in DutiesGuardOfEvents" :key="duty.index">{{duty.duty}}</li>
                </ul>
              </b-col>
              <b-col cols="4"><img src="../../static/events_3.jpg"><img src="../../static/events_2.png"></b-col>
            </b-row>
        <Tarrifs_content/>
      </b-container>
  </div>
</template>

<script>
    import Secondary_pages from "../../components/secondary_pages/secondary_pages.scss";
    import Tarrifs_content from "../../components/tarrifs/tarrifs_content";
    import Name_page from "../../components/secondary_pages/name_page";
    export default {
      name: "guard_of_events",
      components: {Name_page, Tarrifs_content},
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
            {duty:"пресечение правонарушения на территории проведения мероприятия (дебош, воровство, порча имущества), а также выведение нарушителей за пределы проведения мероприятия.",},
            {duty:"установление контакта с правоохранительными органами и ГБР на случай непредвиденных ситуаций;",},
            {duty:"проверка пропусков, предусмотренных организаторами мероприятия;",},
            {duty:"мониторинг посетителей в целях предупреждения несанкционированного проноса запрещенных предметов;",},
            {duty:"контроль за имуществом и транспортным средством организаторов и участников мероприятия;",},
            {duty:"организация видеонаблюдения;",},
            {duty:"соблюдение правил пожарной безопасности;",},
            {duty:"и другие меры по желанию Клиента.",},
          ]
        }
      }
    }
</script>

<style scoped>

</style>
