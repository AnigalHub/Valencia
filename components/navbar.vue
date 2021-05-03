<template>
  <b-navbar id="Nav" class="navbar-expand-xl sticky-top navbar-dark" toggleable>
    <b-container>
      <b-navbar-brand to="/"  v-bind:class="{active: activeLink === 1}" v-on:click.prevent="activeLink = 1">
        <component :is="svg"/>
        <span class="name_brand">"ООО Валенсия"</span>
        <p class="chop">частное охранное предприятие</p>
      </b-navbar-brand>
      <a href="tel:+7(999)999-99-99" class="telephone">+7(999)999-99-99</a>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  width="35" height="25" viewBox="0 0 172 172" style=" fill:#000000;">
          <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
            <path d="M0,172v-172h172v172z" fill="none"></path>
            <g fill="#ffffff">
              <path d="M34.37313,44.72c-0.44681,0.00712 -0.87331,0.18785 -1.18922,0.50391l-13.76,13.76c-0.67143,0.67171 -0.67143,1.76048 0,2.43219l65.36,65.36c0.67171,0.67143 1.76048,0.67143 2.43219,0l65.36,-65.36c0.67143,-0.67171 0.67143,-1.76048 0,-2.43219l-13.76,-13.76c-0.67171,-0.67143 -1.76048,-0.67143 -2.43219,0l-50.38391,50.38391l-50.38391,-50.38391c-0.32908,-0.32923 -0.77753,-0.51103 -1.24297,-0.50391zM34.4,48.87219l50.38391,50.38391c0.67171,0.67143 1.76048,0.67143 2.43219,0l50.38391,-50.38391l11.32781,11.32781l-62.92781,62.92781l-62.92781,-62.92781zM35.24992,64.48992c-0.3504,0.00007 -0.66573,0.21271 -0.79714,0.53754c-0.13141,0.32483 -0.05262,0.6969 0.19917,0.94059l28.38,28.38c0.21571,0.22464 0.536,0.31512 0.83737,0.23655c0.30136,-0.07857 0.53671,-0.31392 0.61528,-0.61528c0.07857,-0.30136 -0.01191,-0.62166 -0.23655,-0.83737l-28.38,-28.38c-0.16204,-0.16747 -0.38509,-0.26203 -0.61812,-0.26203zM136.7232,64.49328c-0.22319,0.00621 -0.43521,0.09897 -0.59125,0.25867l-41.28,41.28c-0.22464,0.21571 -0.31512,0.536 -0.23655,0.83737c0.07857,0.30136 0.31392,0.53671 0.61528,0.61528c0.30136,0.07857 0.62166,-0.01191 0.83737,-0.23655l41.28,-41.28c0.25309,-0.24743 0.32875,-0.62464 0.19067,-0.95054c-0.13808,-0.3259 -0.46171,-0.53393 -0.81552,-0.52423zM73.08992,102.32992c-0.3504,0.00007 -0.66573,0.21271 -0.79714,0.53754c-0.13141,0.32483 -0.05262,0.6969 0.19917,0.94059l6.02,6.02c0.21571,0.22464 0.536,0.31512 0.83737,0.23655c0.30136,-0.07857 0.53671,-0.31392 0.61528,-0.61528c0.07857,-0.30136 -0.01191,-0.62166 -0.23655,-0.83737l-6.02,-6.02c-0.16204,-0.16747 -0.38509,-0.26203 -0.61812,-0.26203zM83.40992,112.64992c-0.3504,0.00007 -0.66573,0.21271 -0.79714,0.53754c-0.13141,0.32483 -0.05262,0.6969 0.19917,0.94059l2.58,2.58c0.21571,0.22464 0.536,0.31512 0.83737,0.23655c0.30136,-0.07857 0.53671,-0.31392 0.61528,-0.61528c0.07857,-0.30136 -0.01191,-0.62166 -0.23655,-0.83737l-2.58,-2.58c-0.16204,-0.16747 -0.38509,-0.26203 -0.61813,-0.26203z"></path>
            </g>
          </g>
        </svg>
      </b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" class="justify-content-center" is-nav v-model="isExpanded">
        <b-navbar-nav>
          <b-nav-item to="/company" v-bind:class="{active: activeLink === 2}" v-on:click.prevent="activeLink = 2">О нас</b-nav-item>
          <b-nav-item>
          <b-dropdown text="Услуги" class="menu" v-bind:class="{active: activeLink === 3}" v-on:click.prevent="activeLink = 3" >
            <b-dropdown-item to="/services/guard_of_organizations/" class="menu1" v-bind:class="{active: activeLink === 4}" v-on:click.prevent="activeLink = 4">Охрана организаций
              <span class="menu_org">
                <b-dropdown-item id="rr" to="/services/_guard_of_organizations/guard_of_educational_institutions">Охрана образовательных учреждений</b-dropdown-item>
                <b-dropdown-item id="r2" to="/services/_guard_of_organizations/guard_of_medical_institutions">Охрана медицинских учреждений</b-dropdown-item>
                <b-dropdown-item to="/services/_guard_of_organizations/guard_of_municipal_facilities">Охрана муниципальных объектов</b-dropdown-item>
              </span>
            </b-dropdown-item>
            <b-dropdown-item to="/services/object_guard/" class="menu2" v-bind:class="{active: activeLink === 5}" v-on:click.prevent="activeLink = 5">Охрана объектов
              <div class="menu_obj">
                <b-dropdown-item to="/services/_object_guard/guard_of_industrial_facilities">Охрана промышленных объектов</b-dropdown-item>
                <b-dropdown-item to="/services/_object_guard/guard_of_transport_facilities">Охрана объектов транспорта</b-dropdown-item>
              </div>
            </b-dropdown-item>
             <b-dropdown-item to="/services/guard_of_real_estate/" class="menu3" v-bind:class="{active: activeLink === 6}" v-on:click.prevent="activeLink = 6">Охрана недвижимости
               <div class="menu_state">
                 <b-dropdown-item to="/services/_guard_of_real_estate/guard_of_commercial_objects">Охрана коммерческих объектов</b-dropdown-item>
                 <b-dropdown-item to="/services/_guard_of_real_estate/guard_private_property">Охрана частных объектов</b-dropdown-item>
               </div>
              </b-dropdown-item>
              <b-dropdown-item to="/services/bodyguard" v-bind:class="{active: activeLink === 7}" v-on:click.prevent="activeLink = 7">Личная охрана</b-dropdown-item>
              <b-dropdown-item to="/services/guard_of_events" v-bind:class="{active: activeLink === 8}" v-on:click.prevent="activeLink = 8">Охрана мероприятий </b-dropdown-item>
              <b-dropdown-item to="/services/cargo_escort" v-bind:class="{active: activeLink === 9}" v-on:click.prevent="activeLink = 9">Сопровождение грузов</b-dropdown-item>
            </b-dropdown>
          </b-nav-item>
          <b-nav-item to="/tariffs" v-bind:class="{active: activeLink === 10}" v-on:click.prevent="activeLink = 10">Тарифы</b-nav-item>
          <b-nav-item to="/technical_means" v-bind:class="{active: activeLink === 11}" v-on:click.prevent="activeLink = 11">Технические средства</b-nav-item>
          <b-nav-item to="/special_equipment" v-bind:class="{active: activeLink === 12}" v-on:click.prevent="activeLink = 12">Спецсредства</b-nav-item>
          <b-nav-item to="/licenses" v-bind:class="{active: activeLink === 13}" v-on:click.prevent="activeLink = 13">Лицензии</b-nav-item>
          <b-nav-item to="/our_clients" v-bind:class="{active: activeLink === 14}" v-on:click.prevent="activeLink = 14">Наши клиенты</b-nav-item>
          <b-nav-item to="/contact" v-bind:class="{active: activeLink === 15}" v-on:click.prevent="activeLink = 15">Контакты</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
  import ShieldSVG from "./secondary_pages/shield_svg";
  export default {
    name: "navbar",
    data() {
      return {
        isExpanded: false,
        svg:ShieldSVG,
        activeLink: undefined
      }
    },
  }

</script>
<style lang="scss">
  /*все кнопки (кроме кнопки "Услуги" и кнопок в dropdown), номер телефона*/
  .nav-link,.telephone{
    color: white !important;
    font-weight: 400 !important;
  }
  .navbar-dark .navbar-nav .active > .nav-link,
  .navbar-dark .navbar-nav .active > .dropdown-item{
    color: #5091d9 !important;
    font-weight: 800 !important;
  }
  .navbar-dark .navbar-nav .active > .navbar-brand{
    color: white !important;
  }

  /*стили которые переписаны с бутстрапа (переносить отсюда нельзя!!!!!)*/
  /*название компании "Валенсия" в логотипе, надпись "частное охранное предприятие" в логотипе*/
  .name_brand,.chop{
    filter: contrast(120%) brightness(170%);
  }
  /*кнопка "Услуги" (эта в меню единственная кнопка, а не ссылка т к она с dropdown (выпадающим списком) - отключаем дефолтные стили у этой кнопки*/
  .btn{
    padding: 0 !important;
    background: transparent !important;
    border: none !important;
    font-size: 1.25rem;
  }
  /*кнопка "Услуги" (пишем свои стили - переписываем btn)*/
  .dropdown-toggle{
    font-size: 1.35rem !important;
    color: #ffffff;
    background-color: #040610 !important;
    /*при наведении*/
    &:hover{
      color: #007bff !important;
    }
  }
  /*кнопки, которые находятся в drowdown (виды и подвиды охран) - переписываем дефолтный dropdown-item для них (в данном случае - цвета)*/
  .dropdown-item{
    border: 0.05px solid #454444;
    filter: none !important;
    font-size: 1.3rem;
    color: #ffffff ;
    background-color: #040610 !important;
    /*при наведении*/
    &:hover{
      color: #007bff !important;
      background: #040610;
    }
  }
  /*выпадающий блок при нажатии на "Услуги" (dropdown)*/
  .dropdown-menu {
    padding: 0 !important;
    border: none !important;
  }

  /******************АДАПТИВНОСТЬ***************/
  @media screen  and (max-width: 1200px)  {
    /*когда меню становится мобильным (при нажатии на кнопку), то меняются стили для подпунктов охраны ( - ставим треугольник, меняем отступы)*/
    .menu_org,.menu_obj,.menu_state{
      .dropdown-item::before {
          content: "\25B8";
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: .5em;
      }
    }
    /*кнопки, которые находятся в drowdown (виды и подвиды охран) - переписываем дефолтный dropdown-item для них (в данном случае - цвета)*/
    .dropdown-item {
      border: none;
    }
  }
  @media screen  and (max-width: 1250px) {
    /*кнопка "Услуги" и все кнопки в опускающемся dropdown (охрана...)*/
    .dropdown-item,.dropdown-toggle{
      font-size: 1.1rem !important;
      padding: 0.25rem !important;
    }
  }
  @media screen and (min-width:1250px) and (max-width: 1310px) {
    /*кнопка "Услуги" и все кнопки в опускающемся dropdown (охрана...)*/
    .dropdown-item,.dropdown-toggle{
      font-size: 1.12rem !important;
      padding-right: 0.45rem !important;
      padding-left: 0.45rem !important;
    }
  }
  @media screen and (min-width:1310px) and (max-width: 1400px) {
    /*кнопка "Услуги" и все кнопки в опускающемся dropdown (охрана...)*/
    .dropdown-item,.dropdown-toggle{
      padding-right: 0.55rem !important;
      padding-left: 0.55rem !important;
    }
  }
  @media screen  and (min-width: 1200px)  {
    /*максимальная ширина контента меню на больших экранах*/
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      max-width: 1400px !important;
      max-height: 100%;
    }
    /*блоки подвидов охраны*/
    .menu_org,.menu_obj,.menu_state{
      display:none;
      position: absolute;
      left: 100%;
      /*при наведении*/
      &:hover{
        display:block ;
      }
    }
    /*при наведении на определенный вид услуги - показывается блок с определенными подвидами услуг*/
    .menu1:hover .menu_org, .menu2:hover .menu_obj, .menu3:hover .menu_state {
      display:block ;
    }
  }
</style>
<style scoped lang="scss">
  /*svg-щит*/
  #shield{filter: contrast(120%) brightness(130%);}
  /*вид меню на большом экране (отступы)*/
  .navbar-expand-xl .navbar-collapse {margin-left: 0;}
  /*меню на всех экранах (которое будет и складываться на маленьких экранах и раскрываться на больших)*/
  .navbar{
    padding: 0 !important;
    background: #040610;
  }
  /*контейнер, в котором находится весь контент меню*/
  .container {padding: 0 !important;}
  /*блок под логотип(svg, название компании, что за компания(чоп))*/
  .navbar-brand{
    padding-bottom: 0 !important;
    text-align: center;
    font-family: 'Playfair Display', serif;
    letter-spacing: 0.25px;
    font-weight: 600;
    color: #ffffff !important;
    margin-top: -1%;
  }
  /*название компании "Валенсия" в логотипе*/
  .name_brand{
    font-family: 'Lobster', cursive;
    letter-spacing: 0.15px;
    margin-left: -4%;
    font-weight: 600 !important;
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.3rem;
  }
  /*svg (щит и кнопка collapse - на которую на маленьких экранах нажимаем, чтобы увидеть меню)*/
  svg{
    margin-top: 2.5%;
    margin-left: 1%;
  }
  /*svg-щит*/
  #shield{
    width:64px;
    height: 64px;
    margin: 1.5% 0;
  }
  /*надпись "частное охранное предприятие" в логотипе*/
  .chop{
    font-size: 0.55rem !important;
    margin-top: -13%;
    margin-left: 24%;
    text-align: center;
    margin-bottom: 0.5rem !important;
  }
  /*кнопки, которые находятся в drowdown (виды и подвиды охран) - добавляем в дефолтный dropdown-item для них (в данном случае - отступы, шрифт)*/
  .dropdown-item{
    letter-spacing: -.45px;
    font-weight: 400 !important;
    font-family: "EB Garamond", serif;
    padding-right: 0.7rem !important;
    padding-left: 0.7rem !important;
  }
  /*кнопка "Услуги" (пишем свои стили -добавляем в btn)*/
  .dropdown-toggle{
    letter-spacing: -0.45px;
    font-weight: 400 !important;
    font-family: "EB Garamond", serif;
    padding-right: 0.7rem !important;
    padding-left: 0.7rem !important;
  }
  /*все кнопки (кроме кнопки "Услуги" и кнопок в dropdown)*/
  .nav-link{
    font-size: 1.4rem;
    font-family: "EB Garamond", serif;
    &:hover{color: #007bff !important;}
  }
  /*номер телефона*/
  .telephone{
    font-family: 'Vollkorn', serif;
    font-size: 1.35rem;
    &:hover{text-shadow: -.15px 1px .15px #97c7e7; text-decoration: underline !important;}
  }
  /*блок с подвидами охраны организаций (образовательные учреждения, медучреждения, госучреждения)*/
  .menu_org{top: -.35% !important;}
  /*блок с подвидами охраны объектов (промышленные объекты, объекты транспорта)*/
  .menu_obj{top:17% !important;}
  /*блок с подвидами охраны недвижимости (коммерческие объекты, частные объекты)*/
  .menu_state{top:33% !important;}

  /*******************АДАПТИВНОСТЬ***********************/
  @media screen and (max-width: 1200px) {
    /*вид меню на экране когда меню через кнопку видно (отступы)*/
    .navbar-expand-xl .navbar-collapse {margin-left: 2%;}
    /*svg-щит*/
    #shield{
      margin-top: 1.5% !important;
      margin-bottom: 0 !important;
      width:52px;
      height:52px;
      filter: contrast(120%) brightness(170%);
    }
    /*название компании "Валенсия" в логотипе*/
    .name_brand{
      font-size: 1.3rem;
      letter-spacing: -0.2px;
      filter: contrast(120%) brightness(170%) !important;
    }
    /*надпись "частное охранное предприятие" в логотипе*/
    .chop{
      font-size: 0.6rem !important;
      margin-top: -10.2%;
      margin-left: 24%;
      letter-spacing: -.25px !important;
      margin-bottom: 0.5rem !important;
    }
    /*номер телефона*/
    .telephone{display: none;}
  }
  @media screen and (min-width: 1200px)  {
    /* все кнопки (кроме кнопки "Услуги" и кнопок в dropdown), номер телефона*/
    .nav-link,.telephone{
      height: 1.7em;
      text-align: center;
      display: flex;
      align-items: center;
      padding-right: 0.68rem !important;
      padding-left: 0.68rem !important;
      letter-spacing: -.4px;
    }
  }
  @media screen and (max-width: 1250px) {
    /*все кнопки (кроме кнопки "Услуги" и кнопок в dropdown), номер телефона*/
    .nav-link,.telephone{
      font-size: 1.2rem !important;
      padding-right: 0.425rem !important;
      padding-left: 0.425rem !important;
    }
    /*кнопки*/
    .btn-group{display: block;}
  }
  @media screen and (min-width:1250px) and (max-width: 1310px) {
    /*все кнопки (кроме кнопки "Услуги" и кнопок в dropdown), номер телефона*/
    .nav-link,.telephone{
      font-size: 1.25rem ;
      padding-right: 0.475rem !important;
      padding-left: 0.475rem !important;
    }
  }
  @media screen and (min-width:1310px) and (max-width: 1400px) {
    /*все кнопки (кроме кнопки "Услуги" и кнопок в dropdown), номер телефона*/
    .nav-link,.telephone{
      font-size: 1.25rem;
      padding-right: 0.525rem !important;
      padding-left: 0.525rem !important;
    }
  }
</style>
