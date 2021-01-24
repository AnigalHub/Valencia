<template>
  <div id="guard_private_property" class="page services types_of_guard">
    <Name_page :name_page="name_page"/>
    <b-container>
      <img src="../../../static/services/guard_of_real_estate/988.jpg" class="first_img">
        <p class="text">При охране частных объектов мы учитываем все пожелания наших клиентов, создаем индивидуальную программу охраны под каждый уникальный случай и обеспечиваем максимально возможную сохранность жизни и имущества в рамках конкретной задачи.</p>
        <div class="import">
          <div class="li_text" v-for="name in GuardPrivateProperty">
            <component :is="name.svg"/>{{name.name}}
          </div>
        </div>
      <b-row class="im_descr block_two">
        <b-col cols="8">
          <h6>Круг обязанностей охранников частных объектов:</h6>
              <ul class="text">
                <li v-for="name_duty in DutiesGuardPrivateProperty" :key="name_duty.index">{{name_duty.duty}}</li>
              </ul>
        </b-col>
        <b-col>
          <img src="../../../static/services/guard_of_real_estate/677.jpg" >
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
        name: "guard_private_property",
      components: {Tarrifs_content, Name_page},
      data(){
        return{
          name_page: "Охрана частных объектов",
          GuardPrivateProperty:[
            {name:"Охрана коттеджей и коттеджных поселков",svg:Guard_shieldSVG},
            {name:"Охрана жилых комплексов и многоквартирных домов",svg:Guard_shieldSVG},
            {name:"Охрана часных домов и загородных резиденций",svg:Guard_shieldSVG},
            {name:"Охрана дач и дачных поселков",svg:Guard_shieldSVG},
          ],
          DutiesGuardPrivateProperty:[
            {duty:"вооруженная охрана со спецсредствами;",},
            {duty:"защита людей, находящихся в частном объекте, и имущества частного объекта;",},
            {duty:"борьба с грабежом и другими противоправными посягательствами;",},
            {duty:"обустройство КПП и резервного поста для обеспечения непрерывного контроля частной территории;",},
            {duty:"применение комбинированных или альтернативных мер безопасности;",},
            {duty:"быстрое реагирование при возникшей угрозе;",},
            {duty:"патрулирование частного объекта для осмотра здания и прилегающих участков;",},
            {duty:"соблюдение правопорядка на вверенном объекте;",},
            {duty:"контроль прохода и проезда на территорию, а также подтверждение посторонних лиц жильцами частного объекта;",},
            {duty:"своевременное оповещение владельца частного объекта в случае форс-мажора;",},
            {duty:"отслеживание работоспособности систем: водоснабжения, отопления и пожаротушения;",},
            {duty:"оперативное взаимодействие с органами МВД и МЧС при возникновении нештатных ситуаций, угрожающих сохранности имущества или безопасности жизни и здоровья людей;",},
            {duty:"профилактика терроризма.",},
          ]
        }
      }
    }
</script>

<style scoped>

</style>

