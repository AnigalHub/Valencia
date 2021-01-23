<template>
  <div id="guard_of_commercial_objects" class="page services types_of_guard">
    <Name_page :name_page="name_page"/>
    <b-container>
      <b-row>
        <b-col>
          <img src="../../../static/services/guard_of_real_estate/133.jpg">
        </b-col>
        <b-col cols="7">
          <p class="text">В охране нуждаются здания, сооружения и иные объекты коммерческой деятельности, безопасность таких объектов - самое важное условие их бесперебойной работы.</p>
          <b-row class="import">
            <b-col v-for="guard in GuardOfCommercialObjects" :key="guard.index">
              <div class="li_text" v-for="name in guard.guard">
                <component :is="name.svg"/>{{name.name}}
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="im_descr">
        <b-col cols="8">
          <h6>Круг обязанностей охранников коммерческих объектов:</h6>
          <ul class="text">
            <li v-for="name_duty in DutiesGuardOfCommercialObjects" :key="name_duty.index">{{name_duty.duty}}</li>
          </ul>
        </b-col>
        <b-col>
         <img src="../../../static/services/guard_of_real_estate/121.jpg" >
        </b-col>
      </b-row>
      <Tarrifs_content/>
    </b-container>
  </div>
</template>

<script>
    import Name_page from "../../../components/secondary_pages/name_page";
    import Guard_shieldSVG from "../../../components/secondary_pages/services_svg/guard_shield_svg";
    import Tarrifs_content from "../../../components/tarrifs/tarrifs_content";
    export default {
      name: "guard_of_commercial_objects",
      components: {Tarrifs_content, Name_page},
      data() {
        return {
          name_page: "Охрана коммерческих объектов",
          GuardOfCommercialObjects:[
            {guard: [{name:"Охрана букмекерских контор",svg:Guard_shieldSVG}, {name:"Охрана банков",svg:Guard_shieldSVG}, {name:"Охрана ресторанов и баров",svg:Guard_shieldSVG},{name:"Охрана торговых центров",svg:Guard_shieldSVG}, {name:"Охрана офисов и бизнес-центров",svg:Guard_shieldSVG},]},
            {guard: [{name:"Охрана салонов красоты",svg:Guard_shieldSVG}, {name:"Охрана гостиниц и отелей",svg:Guard_shieldSVG}, {name:"Охрана ночных клубов",svg:Guard_shieldSVG},{name:"Охрана магазинов и супермаркетов",svg:Guard_shieldSVG},{name:"Охрана санаториев и домов отдыха",svg:Guard_shieldSVG},]},
          ],
          DutiesGuardOfCommercialObjects:[
            {duty:"защита полной сохранности имущества коммерческой недвижимости, жизни и здоровья людей, а также посетителей объекта;",},
            {duty:"выставление внутренних постов охраны для контроля за входами-выходами;",},
            {duty:"регулярные обходы мобильными группами по периметру территории;",},
            {duty:"мониторинг за помещениями коммерческой недвижимости при помощи видеонаблюдения, позволяющий вовремя реагировать на возникающие конфликтные ситуации;",},
            {duty:"поддержание общественного порядка внутри здания;",},
            {duty:"заблаговременное выявление в толпе подозрительных личностей;",},
            {duty:"борьба с корпоративным шпионажем;",},
            {duty:"проведение антикриминальных, антивандальный, антитеррористических и противопожарных мероприятий;",},
            {duty:"своевременное реагирование на любые чрезвычайные ситуации;",},
            {duty:"контроль за персоналом и посетителями с досмотром личных вещей на предмет хищения;",},
            {duty:"при незаконных действиях на территории коммерческой недвижимости вызов ГБР;",},
            {duty:"индивидуальные обязанности в зависимости от специфики коммерческого объекта (личная охрана, запрет на алкоголь, пропускной режим, фейс-контроль и т.д.)",},
          ],
        }
      }
    }
</script>

<style scoped lang="scss">


</style>
