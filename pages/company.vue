<template>
  <div id="company" class="page">
    <Name_page :name_page="name_page"/>
      <b-container>
        <img src="../static/company/Khakasia.jpg" alt="охрана" class="first_img" >
        <p class="text"><span class="emphasized text">"ООО Валенсия" </span> - частное охранное предприятие, обеспечивающее комплексную безопасность личности, предпринимательской деятельности, мероприятий, и всех, кто нуждается в охране на всей территории во всех субъектах Российской Федерации.</p>
        <p class="text">Уже 15 лет компания оказывает услуги как вооруженной, так и невооруженной охраны в зависимости от конкретных задач Клиентов. Наш многолетний опыт и высокий уровень знаний позволяют выполнять самые нестандартные решения для Заказчика.</p>
        <p class="text">Мы учитываем все пожелания Заказчика и гарантируем полную безопасность самых важных элементов жизни Клиента: близких, себя, бизнес, автотранспорт.</p>
        <p class="text">В состав компании «ООО Валенсия» входят более 500 сотрудников.</p>
        <p class="text">В настоящее время нам доверяют свою безопасность около 120 клиентов по всей России.</p>
        <h6 class="block_two">Основные принципы нашей службы:</h6>
        <div class="flex-container">
          <div v-for="principle in WorkPrinciples" :key="principle.index">
            <b-row>
              <b-col cols="2">
                <component :is="principle.svg"/>
              </b-col>
              <b-col>
                <p class="emphasized text">{{principle.index}}. {{principle.name_principle}}</p>
                <p class="text">{{principle.descr_principle}}</p>
              </b-col>
            </b-row>
          </div>
        </div>
        <h6>Наши специалисты также повышают свой уровень профессиональных навыков в специализированном центре:</h6>
        <img src="../static/company/company_3.jpg" alt="охрана_пост" class="second_img">
        <ul class="text">
          <li v-for="skill in ProfessionalSkills" :key="skill.index">{{skill.skill}}</li>
        </ul>
        <h6 class="block_two">Как мы работаем?</h6>
        <b-row class="stage">
          <b-col cols="5">
            <div v-for="stage in StagesOfWorkPart1" :key="stage.index">
              <component :is="stage.svg"/>
              <p class="emphasized text">{{stage.index}}. {{stage.name_stage}}</p>
              <p class="text" v-html="stage.descr_stage"></p>
            </div>
          </b-col>
          <b-col>
            <div v-for="stage in StagesOfWorkPart2" :key="stage.index">
              <component :is="stage.svg"/>
              <p class="emphasized text">{{stage.index}}. {{stage.name_stage}}</p>
              <p class="text">{{stage.descr_stage}}</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
  </div>
</template>

<script>
    import Name_page from "../components/secondary_pages/name_page";
    import LawSVG from "../components/company_svg/law_svg";
    import SpeedSVG from "../components/company_svg/speed_svg";
    import StrengthSVG from "../components/company_svg/strength_svg";
    import ReliabilitySVG from "../components/company_svg/reliability_svg";
    import PartnersSVG from "../components/company_svg/partners_svg";
    import ConfidentialitySVG from "../components/company_svg/confidentiality_svg";
    import Address from "static/documents/address.json"
    export default {
      name: "company",
      components: {Name_page},
      data() {
        return {
          name_page:"О компании",
          address:Address,
          WorkPrinciples:[
            {index:1, name_principle:"законность",svg:LawSVG, descr_principle:"Деятельность компании полностью соответствует законодательству Российской Федерации.",},
            {index:2, name_principle:"честное партнерство",svg:PartnersSVG, descr_principle:"Все отношения с клиентами основаны на принципах конфиденциальности, взаимного доверия и уважения.",},
            {index:3, name_principle:"оперативность",svg:SpeedSVG, descr_principle:"Быстрое комплексное решение любых задач, связанных с безопасностью объекта в сжатые сроки.",},
            {index:4, name_principle:"надежность", svg:ReliabilitySVG,descr_principle:"Работаем на рынке не первый год и знаем все об уязвимостях каждого типа охраняемого объекта.",},
            {index:5, name_principle:"конфиденциальность",svg:ConfidentialitySVG, descr_principle:"Неразглашение кофиденциальной информации сотрудниками компании, без согласия Клиента",},
            {index:6, name_principle:"профессионализм",svg:StrengthSVG, descr_principle:"Огромный штат сотрудников с большим опытом работы, хорошой физической подготовкой и умением владеть оружием.",},
          ],
          ProfessionalSkills:[
            {skill:"для совершенствования физической формы сотрудники проходят занятия по самообороне и рукопашному бою;",},
            {skill:"с целью повышения качества обращения с личным оружием - специальные скоростные упражнения по навыкам стрельбы из служебного и гражданского оружия;",},
            {skill:"для улучшения личностных качеств - проходят курсы по техническим, правовым, психологическим и этическим нормам поведения частных охранников.",},
          ],
          StagesOfWorkPart1:[
            {index:1,svg:'', name_stage:"заявка от клиента", descr_stage:"Если Вам необходима охрана, Вы можете позвонить по номеру <a href=tel:" + Address.phone + " >"  + Address.phone +"</a>" + "  или же отправить форму обратной связи и мы сами перезвоним Вам.",},
            {index:2,svg:'', name_stage:"выезд специалиста", descr_stage:"В удобное для Вас время, на территорию Вашего объекта выезжает специалист нашей компании для обследования объекта на предмет уязвимостей и оценки потенциальных угроз.",},
            {index:3,svg:'', name_stage:"индивидуальный план на работу", descr_stage:"Учитывая требования клиента, по результатам осмотра территории или опроса Клиента, составляется индивидуальный план на необходимое количество постов и их режима работы.",},
          ],
          StagesOfWorkPart2:[
            {index:4,svg:'', name_stage:"подбор персонала под конкретный объект", descr_stage:"Исходя из специфики конкретного объекта/личности и прочих определенных условий подбираются сотрудники наиболее ориентированные на выполнение конкретной задачи.",},
            {index:5,svg:'', name_stage:"подписание договора", descr_stage:"По согласованию всех особенностей работы производится расчет и заключается договор на оказание охранных услуг частным охранным предприятием, с описанием подробной концепции обеспечения безопасности охраняемого объекта.",},
            {index:6,svg:'', name_stage:"проверка работы", descr_stage:"Для контроля качества оказываемых услуг постоянно проводятся как плановые, так и внеплановые проверки персонала для оценки их эффективности. По результатам проверки при необходимости применяются меры по оптимизации охраны.",},
          ]
        }
      }
    }
</script>

<style scoped>

</style>
