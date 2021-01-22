<template>
  <div id="company" class="page">
    <Name_page :name_page="name_page"/>
      <b-container>
        <b-row>
          <b-col cols="5">
            <img src="../static/company/733.jpg" alt="компания_валенсия">
          </b-col>
          <b-col>
            <p class="text"><span class="emphasized">«ООО Валенсия» </span> - частное охранное предприятие, обеспечивающее комплексную безопасность личности, предпринимательской деятельности, мероприятий, и всех, кто нуждается в охране на всей территории во всех субъектах Российской Федерации.</p>
            <p class="text">Уже 15 лет компания оказывает услуги как вооруженной, так и невооруженной охраны в зависимости от конкретных задач Клиентов. Наш многолетний опыт и высокий уровень знаний позволяют выполнять самые нестандартные решения для Заказчика.</p>
            <p class="text">Мы учитываем все пожелания Заказчика и гарантируем полную безопасность самых важных элементов жизни Клиента: близких, себя, бизнес, автотранспорт.</p>
            <p class="text">В состав компании «ООО Валенсия» входят более 500 сотрудников.</p>
            <p class="text">В настоящее время нам доверяют свою безопасность около 120 клиентов по всей России.</p>
          </b-col>
        </b-row>
        <h6>Основные принципы нашей службы:</h6>
        <div class="flex-container">
          <div class="beautiful_block" v-for="principle in WorkPrinciples" :key="principle.index">
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
        <div><img src="../static/company/33.jpg" alt="охрана"></div>
        </div>
        <h6>Наши специалисты также повышают свой уровень профессиональных навыков в специализированном центре:</h6>
        <ul class="text">
          <li v-for="skill in ProfessionalSkills" :key="skill.index">{{skill.skill}}</li>
        </ul>
        <h6>Как мы работаем?</h6>
        <b-row class="stage">
          <b-col cols="5">
            <img src="../static/company/888.jpg" alt="компания_валенсия">
            <div v-for="stage in StagesOfWorkPart1" :key="stage.index">
              <component :is="stage.svg"/>   <p class="emphasized text">{{stage.index}}. {{stage.name_stage}}</p>
              <p class="text">{{stage.descr_stage}}</p>
            </div>
          </b-col>
          <b-col>
            <div v-for="stage in StagesOfWorkPart2" :key="stage.index">
              <component :is="stage.svg"/>   <p class="emphasized text">{{stage.index}}. {{stage.name_stage}}</p>
              <p class="text">{{stage.descr_stage}}</p>
            </div>
          </b-col>
        </b-row>

      </b-container>
  </div>
</template>

<script>
    import Secondary_pages from "../components/secondary_pages/secondary_pages.scss";
    import Name_page from "../components/secondary_pages/name_page";
    import RequestSVG from "../components/company_svg/request_svg";
    import VisitSVG from "../components/company_svg/visit_svg";
    import PlanSVG from "../components/company_svg/plan_svg";
    import PersonalSVG from "../components/company_svg/personal_svg";
    import ContractSVG from "../components/company_svg/contract_svg";
    import VerificationSVG from "../components/company_svg/verification_svg";
    import LawSVG from "../components/company_svg/law_svg";
    import SpeedSVG from "../components/company_svg/speed_svg";
    import StrengthSVG from "../components/company_svg/strength_svg";
    import ReliabilitySVG from "../components/company_svg/reliability_svg";
    import PartnersSVG from "../components/company_svg/partners_svg";
    export default {
      name: "company",
      components: {Name_page},
      data() {
        return {
          name_page:"О компании",
          WorkPrinciples:[
            {index:1, name_principle:"Законность",svg:LawSVG, descr_principle:"Деятельность компании полностью соответствует законодательству Российской Федерации.",},
            {index:2, name_principle:"Честное партнерство",svg:PartnersSVG, descr_principle:"Все отношения с клиентами основаны на принципах конфиденциальности, взаимного доверия и уважения.",},
            {index:3, name_principle:"Оперативность",svg:SpeedSVG, descr_principle:"Быстрое комплексное решение любых задач, связанных с безопасностью объекта в сжатые сроки.",},
            {index:4, name_principle:"Надежность", svg:ReliabilitySVG,descr_principle:"Работаем на рынке не первый год и знаем все об уязвимостях каждого типа охраняемого объекта.",},
            {index:5, name_principle:"Профессионализм",svg:StrengthSVG, descr_principle:"Огромный штат сотрудников с большим опытом работы, хорошой физической подготовкой и умением владеть оружием.",},
          ],
          ProfessionalSkills:[
            {skill:"Для совершенствования физической формы сотрудники проходят занятия по самообороне и рукопашному бою;",},
            {skill:"С целью повышения качества обращения с личным оружием - специальные скоростные упражнения по навыкам стрельбы из служебного и гражданского оружия;",},
            {skill:"Для улучшения личностных качеств - проходят курсы по техническим, правовым, психологическим и этическим нормам поведения частных охранников.",},
          ],
          StagesOfWorkPart1:[
            {index:1,svg:RequestSVG, name_stage:"Заявка от клиента", descr_stage:"Если Вам необходима охрана, Вы можете позвонить по номеру +7(999)999-99-99 или же отправить форму обратной связи и мы сами перезвоним Вам.",},
            {index:2,svg:VisitSVG, name_stage:"Выезд специалиста", descr_stage:"В удобное для Вас время, на территорию Вашего объекта выезжает специалист нашей компании для обследования объекта на предмет уязвимостей и оценки потенциальных угроз.",},
          ],
          StagesOfWorkPart2:[
            {index:3,svg:PlanSVG, name_stage:"Индивидуальный план на работу", descr_stage:"Учитывая требования клиента, по результатам осмотра территории или опроса Клиента, составляется индивидуальный план на необходимое количество постов и их режима работы. ",},
            {index:4,svg:PersonalSVG, name_stage:"Подбор персонала под конкретный объект", descr_stage:"Исходя из специфики конкретного объекта/личности и прочих определенных условий подбираются сотрудники наиболее ориентированные на выполнение конкретной задачи.",},
            {index:5,svg:ContractSVG, name_stage:"Подписание договора", descr_stage:"По согласованию всех особенностей работы производится расчет и заключается договор на оказание охранных услуг частным охранным предприятием, с описанием подробной концепции обеспечения безопасности охраняемого объекта.",},
            {index:6,svg:VerificationSVG, name_stage:"Проверка работы", descr_stage:"Для контроля качества оказываемых услуг постоянно проводятся как плановые, так и внеплановые проверки персонала для оценки их эффективности. По результатам проверки при необходимости применяются меры по оптимизации охраны.",},
          ]
        }
      }
    }
</script>

<style scoped>

</style>
