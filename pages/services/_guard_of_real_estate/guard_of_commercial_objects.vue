<template>
  <div id="guard_of_commercial_objects" class="page services types_of_guard">
    <Name_page :name_page="name_page"/>
    <b-container>
      <img src="../../../static/services/guard_of_real_estate/guard_of_commercial_object.jpg" alt="охрана_коммерческого_объекта" class="first_img"/>
      <p class="text">В охране нуждаются здания, сооружения и иные объекты коммерческой деятельности, безопасность таких объектов - самое важное условие их бесперебойной работы.</p>
      <div class="import" >
          <ul>
            <li v-for="guard in GuardOfCommercialObjects" :key="guard.index"  class="li_text">
              {{guard.name}}
            </li>
          </ul>
      </div>
      <div class="im_descr block_two">
        <h6>Круг обязанностей охранников коммерческих объектов:</h6>
        <img src="../../../static/services/guard_of_real_estate/office.jpg" alt="офис"/>
        <ul class="text">
          <li v-for="name_duty in DutiesGuardOfCommercialObjects" :key="name_duty.index">{{name_duty.duty}}</li>
        </ul>
      </div>
      <Tarrifs_content/>
    </b-container>
  </div>
</template>

<script>
    import Name_page from "../../../components/secondary_pages/name_page";
    import Tarrifs_content from "../../../components/secondary_pages/tarrifs_content";
    export default {
      name: "guard_of_commercial_objects",
      components: {Tarrifs_content, Name_page},
      data() {
        return {
          name_page: "Охрана коммерческих объектов",
          GuardOfCommercialObjects:[
            {name:"охрана банков;"},
            {name:"охрана торговых центров;"},
            {name:"охрана салонов красоты;"},
            {name:"охрана гостиниц и отелей;"},
            {name:"охрана магазинов;"},
            {name:"охрана офисов и бизнес-центров;"},
            {name:"охрана баров, клубов, ресторанов."},
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
