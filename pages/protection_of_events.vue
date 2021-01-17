<template>
  <div id="protection_of_events">
    <div id="protection_of_events_content">
      <div class="place_h1">
        <b-container>
          <h1>Охрана мероприятий</h1>
        </b-container>
      </div>
      <b-container>
        <b-row>
          <b-col>
            <img src="../static/events_1.jpg">
          </b-col>
          <b-col cols="7">
            <p class="text">
              Любое массовое скопление людей на мероприятиях - это риск для безопасности участников мероприятия.
            </p>
            <p class="text">
              Вне зависимости общественные это мероприятия (ярмарки, концерты, фестивали, банкеты), деловые (конференции, семинары и бизнес-форумы)
              или частные (закрытые вечеринки, VIP-праздники) необходимо предоставлять защиту жизни и здоровья участникам
              и следить за соблюдением порядка на территории и избегать инцидентов.
            </p>
            <p class="text">
             <u>Каждое мероприятие уникальное и отличается следующими характеристиками:</u>
            </p>
            <ul class="text">
              <li>численность присутствующих людей;</li>
              <li>время и место проведения мероприятия;</li>
              <li>количество контрольно-пропускных пунктов.</li>
            </ul>
          </b-col>
        </b-row>
            <p class="text">
              <u>Перечень мер по охране мероприятий:</u>
            </p>
            <b-row>
              <b-col>
                <ul class="text">
                <li> вооруженная / невооруженная охрана со спецсредствами (газовые баллончики, дубинки, металлодетекторы, электрошокеры, наручники, фонарики);</li>
                <li>осмотр и зачистка территории перед мероприятием (обследование различных углублений, ниш, мусорных урн, шкафов и
                  ящиков, а также подарков участникам мероприятий на выявление взрывчатых средств, горючих предметов, отравляющих и наркотических веществ и т.д.);</li>
                <li> формирование четкого плана действий на все время мероприятия;</li>
                <li> предотвращение посягательств на организаторов и посетителей мероприятия;</li>
                  <li>пресечение правонарушения на территории проведения мероприятия (дебош, воровство, порча имущества), а также выведение нарушителей за пределы проведения мероприятия;</li>

                </ul>
              </b-col>
              <b-col cols="4">
                <img src="../static/events_3.jpg">
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="4">
                <img src="../static/events_2.png">
              </b-col>
              <b-col>
                <ul class="text"><li>установление контакта с правоохранительными органами на случай непредвиденных ситуаций;</li>
                <li>проверка пропусков, предусмотренных организаторами мероприятия;</li>
                <li> мониторинг посетителей в целях предупреждения несанкционированного проноса запрещенных предметов;</li>
                <li> контроль за имуществом и транспортным средством организаторов и участников мероприятия;</li>
                <li> организация видеонаблюдения;</li>
                <li>соблюдение правил пожарной безопасности;</li>
                <li>и другие меры по желанию Клиента.</li>
                </ul>
              </b-col>
            </b-row>

        <Tarrifs_content/>
      </b-container>
    </div>
  </div>
</template>

<script>
    import Tarrifs_content from "../components/tarrifs/tarrifs_content";
    export default {
        name: "protection_of_events",
      components: {Tarrifs_content}
    }
</script>

<style scoped>
  #protection_of_events{
    background:linear-gradient( to top , #6d7d90, #bbc4d2, #d0d8e2);
  }
  #protection_of_events_content{
    padding: 2% 0;
  }
  h1{
    padding-left: 15px;
    font-family: 'Vollkorn', serif;
    font-weight: 600;
  }
  .place_h1{
    background: #e8edf5;
    padding: 5px 0;
    margin-bottom: 2%;
  }
  .row:first-child{
    padding-bottom: 2% !important;
  }
  .row:nth-child(3){
    padding-bottom: 2% !important;
  }
  .row:nth-child(4){
    padding-bottom: 2%;
  }
  .text{
    font-family: 'Vollkorn', serif;
    font-weight: 500;
    letter-spacing: -1px;
    font-size: 1.4rem;
    line-height: 1.6rem;
    text-shadow: 0.25px 0.5px 0.5px rgb(16, 40, 61);
    color:rgb(15, 37, 55);
  }
  img{
    box-shadow: 7px 7px 7px rgb(15, 37, 56);
    width: 100%;
    filter: contrast(120%);
  }
  li{
    padding-bottom: 0.95%;
  }

</style>
