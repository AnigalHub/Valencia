<template>
  <div id="company" class="page">
    <b-container>
      <h1>{{name_page}}</h1>
      <img src="../static/company/walkie_talkie.jpg" alt="охрана(рация)" class="first_img" >
      <p class="text"><span class="emphasized text">"{{information.name_company}}" </span> - частное охранное предприятие, обеспечивающее комплексную безопасность личности, предпринимательской деятельности, мероприятий, и всех, кто нуждается в охране на всей территории во всех субъектах Российской Федерации.</p>
      <p class="text">Уже 15 лет компания оказывает услуги как вооруженной, так и невооруженной охраны в зависимости от конкретных задач Клиентов. Наш многолетний опыт и высокий уровень знаний позволяют выполнять самые нестандартные решения для Заказчика. Мы учитываем все пожелания Заказчика и гарантируем полную безопасность самых важных элементов жизни Клиента: близких, себя, бизнес, автотранспорт. В состав компании <span class="emphasized">"{{information.name_company}}" </span> входят более 500 сотрудников. В настоящее время нам доверяют свою безопасность около 120 клиентов по всей России.</p>
      <h6 class="block_two">Основные принципы нашей службы:</h6>
      <div class="flex-container">
        <div v-for="principle in WorkPrinciples" :key="principle.index">
          <b-row>
            <b-col cols="1">
              <component :is="principle.svg"/>
            </b-col>
            <b-col>
              <p class="emphasized text">{{principle.name_principle}}</p>
              <p class="text">{{principle.descr_principle}}</p>
            </b-col>
          </b-row>
        </div>
      </div>
      <h6>Наши специалисты также повышают свой уровень профессиональных навыков в специализированном центре:</h6>
      <img src="../static/company/shooting.jpg" alt="повышение_квалификации" class="second_img">
      <ul class="text">
        <li v-for="skill in ProfessionalSkills" :key="skill.index">{{skill.skill}}</li>
      </ul>
      <h6 class="block_two">Как мы работаем?</h6>
      <div class="stage">
        <div v-for="stage in StagesOfWork" :key="stage.index">
          <component :is="stage.svg"/>
          <b-row class="text">
            <b-col cols="1">
              <p class="emphasized">{{stage.index}}.</p>
            </b-col>
            <b-col cols="2">
              <p class="emphasized">{{stage.name_stage}}</p>
            </b-col>
            <b-col>
              <p v-html="stage.descr_stage"></p>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
  import LawSVG from "../components/company_svg/law_svg";
    import SpeedSVG from "../components/company_svg/speed_svg";
    import StrengthSVG from "../components/company_svg/strength_svg";
    import ReliabilitySVG from "../components/company_svg/reliability_svg";
    import PartnersSVG from "../components/company_svg/partners_svg";
    import ConfidentialitySVG from "../components/company_svg/confidentiality_svg";
    import Information from "static/documents/information.json"
  export default {
    name: "company",
    data() {
      return {
        name_page:"О компании",
        information:Information,
        WorkPrinciples:[
          {name_principle:"Законность",svg:LawSVG, descr_principle:"Деятельность компании полностью соответствует законодательству Российской Федерации.",},
          {name_principle:"Честное партнерство", svg:PartnersSVG, descr_principle:"Все отношения с клиентами основаны на принципах конфиденциальности, взаимного доверия и уважения.",},
          {name_principle:"Оперативность", svg:SpeedSVG, descr_principle:"Быстрое комплексное решение любых задач, связанных с безопасностью объекта в сжатые сроки.",},
          {name_principle:"Надежность", svg:ReliabilitySVG,descr_principle:"Работаем на рынке не первый год и знаем все об уязвимостях каждого типа охраняемого объекта.",},
          {name_principle:"Конфиденциальность", svg:ConfidentialitySVG, descr_principle:"Неразглашение кофиденциальной информации сотрудниками компании, без согласия Клиента",},
          {name_principle:"Профессионализм", svg:StrengthSVG, descr_principle:"Огромный штат сотрудников с большим опытом работы, хорошой физической подготовкой и умением владеть оружием.",},
        ],
        ProfessionalSkills:[
          {skill:"для совершенствования физической формы сотрудники проходят занятия по самообороне и рукопашному бою;",},
          {skill:"для улучшения личностных качеств - проходят курсы по военной медицине, контрнаружному наблюдению, техническим, правовым, психологическим и этическим нормам поведения частных охранников;",},
          {skill:"с целью повышения качества обращения с личным оружием - специальные скоростные упражнения по навыкам  стрельбы из служебного и гражданского оружия;",},
          {skill:"во время искусственно созданной стрессовой ситации - отрабатываются действия в сложной оперативной обстановке;",},
          {skill:"сдают все нормативы и проходят повторные аттестации и повышение квалификации каждый год.",},
        ],
        StagesOfWork:[
          {index:'01',svg:'', name_stage:"заявка от клиента", descr_stage:"Если Вам необходима охрана, Вы можете позвонить по номеру <a href=tel:" + Information.phone + " >"  + Information.phone +"</a>" + "  или же отправить форму обратной связи и мы сами перезвоним Вам.",},
          {index:'02',svg:'', name_stage:"выезд специалиста", descr_stage:"В удобное для Вас время, на территорию Вашего объекта выезжает специалист нашей компании для обследования объекта на предмет уязвимостей и оценки потенциальных угроз.",},
          {index:'03',svg:'', name_stage:"индивидуальный план на работу", descr_stage:"Учитывая требования клиента, по результатам осмотра территории или опроса Клиента, составляется индивидуальный план на необходимое количество постов и их режима работы.",},
          {index:'04',svg:'', name_stage:"подбор персонала под объект", descr_stage:"Исходя из специфики конкретного объекта/личности и прочих определенных условий подбираются сотрудники наиболее ориентированные на выполнение конкретной задачи.",},
          {index:'05',svg:'', name_stage:"подписание договора", descr_stage:"По согласованию всех особенностей работы производится расчет и заключается договор на оказание охранных услуг частным охранным предприятием, с описанием подробной концепции обеспечения безопасности охраняемого объекта.",},
          {index:'06',svg:'', name_stage:"проверка работы", descr_stage:"Для контроля качества оказываемых услуг постоянно проводятся как плановые, так и внеплановые проверки персонала для оценки их эффективности. По результатам проверки при необходимости применяются меры по оптимизации охраны.",},
        ]
      }
    }
  }
</script>

<style scoped>

</style>
