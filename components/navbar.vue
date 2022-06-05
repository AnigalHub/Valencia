<template>
  <b-navbar id="Nav" class="navbar-expand-xl sticky-top navbar-dark" toggleable>
    <b-container>
      <b-navbar-brand to="/">
        <component :is="svg"/>
        <span class="name_brand">"{{information.name_company}}"</span>
      </b-navbar-brand>
      <a href="tel:+information.phone" class="telephone"> {{information.phone}} </a>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 172 172"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M34.37313,44.72c-0.44681,0.00712 -0.87331,0.18785 -1.18922,0.50391l-13.76,13.76c-0.67143,0.67171 -0.67143,1.76048 0,2.43219l65.36,65.36c0.67171,0.67143 1.76048,0.67143 2.43219,0l65.36,-65.36c0.67143,-0.67171 0.67143,-1.76048 0,-2.43219l-13.76,-13.76c-0.67171,-0.67143 -1.76048,-0.67143 -2.43219,0l-50.38391,50.38391l-50.38391,-50.38391c-0.32908,-0.32923 -0.77753,-0.51103 -1.24297,-0.50391zM34.4,48.87219l50.38391,50.38391c0.67171,0.67143 1.76048,0.67143 2.43219,0l50.38391,-50.38391l11.32781,11.32781l-62.92781,62.92781l-62.92781,-62.92781zM35.24992,64.48992c-0.3504,0.00007 -0.66573,0.21271 -0.79714,0.53754c-0.13141,0.32483 -0.05262,0.6969 0.19917,0.94059l28.38,28.38c0.21571,0.22464 0.536,0.31512 0.83737,0.23655c0.30136,-0.07857 0.53671,-0.31392 0.61528,-0.61528c0.07857,-0.30136 -0.01191,-0.62166 -0.23655,-0.83737l-28.38,-28.38c-0.16204,-0.16747 -0.38509,-0.26203 -0.61812,-0.26203zM136.7232,64.49328c-0.22319,0.00621 -0.43521,0.09897 -0.59125,0.25867l-41.28,41.28c-0.22464,0.21571 -0.31512,0.536 -0.23655,0.83737c0.07857,0.30136 0.31392,0.53671 0.61528,0.61528c0.30136,0.07857 0.62166,-0.01191 0.83737,-0.23655l41.28,-41.28c0.25309,-0.24743 0.32875,-0.62464 0.19067,-0.95054c-0.13808,-0.3259 -0.46171,-0.53393 -0.81552,-0.52423zM73.08992,102.32992c-0.3504,0.00007 -0.66573,0.21271 -0.79714,0.53754c-0.13141,0.32483 -0.05262,0.6969 0.19917,0.94059l6.02,6.02c0.21571,0.22464 0.536,0.31512 0.83737,0.23655c0.30136,-0.07857 0.53671,-0.31392 0.61528,-0.61528c0.07857,-0.30136 -0.01191,-0.62166 -0.23655,-0.83737l-6.02,-6.02c-0.16204,-0.16747 -0.38509,-0.26203 -0.61812,-0.26203zM83.40992,112.64992c-0.3504,0.00007 -0.66573,0.21271 -0.79714,0.53754c-0.13141,0.32483 -0.05262,0.6969 0.19917,0.94059l2.58,2.58c0.21571,0.22464 0.536,0.31512 0.83737,0.23655c0.30136,-0.07857 0.53671,-0.31392 0.61528,-0.61528c0.07857,-0.30136 -0.01191,-0.62166 -0.23655,-0.83737l-2.58,-2.58c-0.16204,-0.16747 -0.38509,-0.26203 -0.61813,-0.26203z"></path></g></g></svg>
      </b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" class="justify-content-$textCenter:center;" is-nav v-model="isExpanded">
        <b-navbar-nav>
          <b-nav-item to="/company/" active-class="nav-link-active">О нас</b-nav-item>
          <b-dropdown text="Услуги" class="menu" :class="{'nav-link-active': isServicesActive} ">
            <a>
              <b-dropdown-item to="/services/guard_of_organizations" class="menu1" active-class="nav-link-active">Охрана организаций
                <span class="menu_org">
                  <b-dropdown-item to="/services/_guard_of_organizations/guard_of_educational_institutions" active-class="nav-link-active">Охрана образовательных учреждений</b-dropdown-item>
                  <b-dropdown-item  to="/services/_guard_of_organizations/guard_of_medical_institutions" active-class="nav-link-active">Охрана медицинских учреждений</b-dropdown-item>
                  <b-dropdown-item to="/services/_guard_of_organizations/guard_of_municipal_facilities" active-class="nav-link-active">Охрана муниципальных объектов</b-dropdown-item>
                </span>
              </b-dropdown-item>
              <b-dropdown-item to="/services/object_guard" class="menu2" active-class="nav-link-active">Охрана объектов
                <span class="menu_obj">
                  <b-dropdown-item to="/services/_object_guard/guard_of_industrial_facilities" active-class="nav-link-active">Охрана промышленных объектов</b-dropdown-item>
                  <b-dropdown-item to="/services/_object_guard/guard_of_transport_facilities" active-class="nav-link-active">Охрана объектов транспорта</b-dropdown-item>
                </span>
              </b-dropdown-item>
              <b-dropdown-item to="/services/guard_of_real_estate" class="menu3" active-class="nav-link-active">Охрана недвижимости
                <span class="menu_state">
                  <b-dropdown-item to="/services/_guard_of_real_estate/guard_of_commercial_objects" active-class="nav-link-active">Охрана коммерческих объектов</b-dropdown-item>
                  <b-dropdown-item to="/services/_guard_of_real_estate/guard_private_property" active-class="nav-link-active">Охрана частных объектов</b-dropdown-item>
                </span>
              </b-dropdown-item>
              <b-dropdown-item to="/services/bodyguard/" active-class="nav-link-active">Личная охрана</b-dropdown-item>
              <b-dropdown-item to="/services/guard_of_events/" active-class="nav-link-active">Охрана мероприятий </b-dropdown-item>
              <b-dropdown-item to="/services/cargo_escort/" active-class="nav-link-active">Сопровождение грузов</b-dropdown-item>
            </a>
          </b-dropdown>
          <b-nav-item to="/tariffs/" active-class="nav-link-active">Тарифы</b-nav-item>
          <b-nav-item to="/technical_means/" active-class="nav-link-active">Технические средства</b-nav-item>
          <b-nav-item to="/special_equipment/" active-class="nav-link-active">Спецсредства</b-nav-item>
          <b-nav-item to="/licenses/" active-class="nav-link-active">Лицензии</b-nav-item>
          <b-nav-item to="/our_clients/" active-class="nav-link-active">Наши клиенты</b-nav-item>
          <b-nav-item to="/contact/" active-class="nav-link-active">Контакты</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
  import ShieldSVG from "./secondary_pages/shield_svg";
  import Information from "../static/documents/information.json";
  export default {
    name: "navbar",
    data() {
      return {
        information:Information,
        isExpanded: false,
        svg:ShieldSVG
      }
    },
    computed:{
      isServicesActive(){
        return this.$route.fullPath.startsWith("/services/")
      }
    }
  }

</script>
<style lang="scss">
  $textCenter:center;
  $shadeOfBlack: black;
  $fontText:'Lora', serif;
  $zero: 0;
  $percent100:100%;
  $fontWeight600:600;
  $none:none;
  $displayBlock:block;
  $colorBodyText: #b1afaf;
  $colorSelection: #a89815;
  $shade: #9a8d20;
  $colorNameCompany:#b8a92a;
  $boxShadowDropdown: 7px 7px 7px -7px rgba(34, 60, 80, .9);
  @media (min-width: 1200px){
    .navbar-expand-xl .navbar-nav .nav-link {
      padding-right: 0.3rem;
      padding-left: 0.3rem;
    }
  }

  //вид меню на большом экране (отступы)
  .navbar-expand-xl .navbar-collapse {margin-left: $zero;}
  #Nav{
    //меню на всех экранах (которое будет и складываться на маленьких экранах и раскрываться на больших)
    box-shadow: $boxShadowDropdown;
    padding: $zero !important;
    background: $shadeOfBlack;
    //меню
    .navbar-nav{width: $percent100 !important;}
    //пункты меню
    .nav-item{
      padding: $zero .55%;
    }
    //все кнопки и номер телефона
    .nav-link,.telephone,.btn-secondary,.dropdown-toggle,.dropdown-item{color: $colorBodyText;}
    //контейнер, в котором находится весь контент меню
    .container {padding: $zero !important;}
    //блок под логотип(svg, название компании, что за компания(чоп)),номер телефона,кнопки меню (все)
    .navbar-brand, .telephone, .nav-link, .dropdown-toggle, .dropdown-item{
      font-family: $fontText;
      font-weight: $fontWeight600 !important;
    }
    //блок под логотип(svg, название компании, что за компания(чоп))
    .navbar-brand{
      padding: .2rem .35rem .15rem ;
      margin-top: -.8%;
      margin-right: .5%;
      //svg-щит
      #navbar_svg{
        width: 50px;
        height: 54px;
        padding: 6% .8% .8%;
      }
      //название компании в логотипе
      .name_brand{
        color: $colorNameCompany;
        text-shadow: 1px 1px 2px #387fac;
        vertical-align: middle;
        font-size: 1.25rem;
        filter: contrast(140%);
      }
    }
    //номер телефона
    .telephone{
      margin-left: -.2%;
      //при наведении
      &:hover{text-decoration: underline;}
    }
    //все кнопки (кроме кнопки "Услуги" и кнопок в dropdown),номер телефона
    .nav-link, .telephone{letter-spacing: -.3px;}
    //активные кнопки
    .nav-link-active{color: $shade !important;}
    //все кнопки (кроме кнопок в dropdown)
    .nav-link, .telephone, .dropdown-toggle{font-size: 1.2rem;}
    //наведение на любую кнопку меню, кнопка "Услуги" - в открытом виде
    .nav-link:hover, .show > .btn-secondary.dropdown-toggle,
    .dropdown-toggle:hover, .dropdown-item:hover, .show > .btn-secondary.dropdown-toggle{color: #1066c1 !important;}
    //кнопка "Услуги" (эта в меню единственная кнопка, а не ссылка т к она с dropdown (выпадающим списком) - отключаем дефолтные стили у этой кнопки
    .btn{
      padding: $zero !important;
      background: transparent !important;
      border: $none !important;
    }
    //кнопка "Услуги" (пишем свои стили - переписываем btn)
    .dropdown-toggle{letter-spacing: -.8px;}
    //выпадающий блок при нажатии на "Услуги" (dropdown)
    .dropdown-menu {
      padding: $zero !important;
      box-shadow: $boxShadowDropdown;
      border: $none !important;
    }
    //кнопки, которые находятся в drowdown (виды и подвиды охран) - переписываем дефолтный dropdown-item для них (в данном случае - цвета)
    .dropdown-item{
      text-shadow: $none;
      font-size: 1.15rem;
      padding: .25rem .3rem !important;
    }
    //все кнопки, которые находятся в dropdown - в том числе и подпункты
    .dropdown-item, .menu_org, .menu_obj, .menu_state{background: $shadeOfBlack !important;}
    //блок с подвидами охраны организаций (образовательные учреждения, медучреждения, госучреждения)
    .menu_org{top: -.35% !important;}
    //блок с подвидами охраны объектов (промышленные объекты, объекты транспорта)
    .menu_obj{top: 16% !important;}
    //блок с подвидами охраны недвижимости (коммерческие объекты, частные объекты)
    .menu_state{top: 32% !important;}
    //блоки подвидов охраны
    .menu_org,.menu_obj,.menu_state{
      box-shadow: $boxShadowDropdown;
      display: $none;
      position: absolute;
      left: $percent100;
    }
    //при наведении на определенный вид услуги - показывается блок с определенными подвидами услуг
    .menu1:hover .menu_org, .menu2:hover .menu_obj, .menu3:hover .menu_state {display:$displayBlock;}
  }

  //*****************АДАПТИВНОСТЬ**************
  @media screen and (max-width: 1200px) {
    #Nav{
      box-shadow: $zero $zero 10px $zero $shadeOfBlack;
      //меню (кнопки все)
      .navbar-nav{margin-left: 3%;}
      //блок под логотип(svg, название компании, что за компания(чоп))
      .navbar-brand{
        //svg-щит
        #navbar_svg{
          width: 42px;
          height: 42px;
        }
        //название компании в логотипе
        .name_brand{font-size: 1rem;}
      }
      //все кнопки(кроме "Услуги" и кнопок в опускающемся dropdown (охрана...)
      .nav-link{padding: .25rem $zero !important;}
      //все кнопки (кроме кнопок в опускающемся dropdown)
      .nav-link,.dropdown-toggle,.dropdown-item{font-size: .9rem !important;}
      //номер телефона, блоки подвидов охраны
      .telephone, .menu_org, .menu_obj, .menu_state{display: $none;}
      //кнопки, которые находятся в drowdown (виды и подвиды охран) - переписываем дефолтный dropdown-item для них (в данном случае - цвета)
      .dropdown-item {
        border: $none !important;
        box-shadow: $none !important;
      }
      //выпадающий блок при нажатии на "Услуги" (dropdown)
      .dropdown-menu{box-shadow: $none;}
      //меню выпадающего списка
      .dropdown{padding: .15rem $zero $zero !important;}
      //кнопки - список - который находится в dropdown
      .btn-group{display: $displayBlock}
    }
  }
  @media screen and (min-width: 1200px) and (max-width: 1265px) {
    #Nav{
      //блок под логотип(svg, название компании, что за компания(чоп))
      .navbar-brand{
        margin-right: $zero !important;
        //svg-щит
        #navbar_svg{
          width: 42px;
          height: 42px;
        }
        //название компании в логотипе
        .name_brand{font-size: 1.1rem;}
      }
      //все кнопки, номер телефона
      .nav-link,.dropdown-item,.telephone,.dropdown-toggle{font-size: 1.1rem !important;}
      //все кнопки(кроме "Услуги" и кнопок в опускающемся dropdown (охрана...)
      .nav-link{padding: $zero .2rem !important;}
    }
  }
  @media screen and (min-width: 1265px) and (max-width: 1300px) {
    #Nav{
      //все кнопки (кроме кнопки "Услуги" и кнопок в dropdown), номер телефона
      .nav-link,.telephone,.dropdown-toggle,.dropdown-item{font-size: 1.1rem !important;}
      //все кнопки (кроме кнопки "Услуги" и кнопок в dropdown), номер телефона
      .nav-link{padding: $zero .35rem !important;}
    }
  }
  @media screen and (min-width: 1300px) and (max-width: 1350px) {
    #Nav{
      //меню (кнопки все)
      .navbar-nav{margin-left: $zero;}
      //все кнопки (кроме кнопки "Услуги" и кнопок в dropdown), номер телефона
      .nav-link{padding: $zero .42rem !important;}
    }
  }
  @media screen and (min-width: 1300px) and (max-width: 1400px) {
    #Nav{
      //все кнопки (кроме кнопки "Услуги" и кнопок в dropdown), номер телефонакнопка "Услуги" и все кнопки в опускающемся dropdown (охрана...)
      .nav-link,.telephone, .dropdown-item,.dropdown-toggle{font-size: 1.12rem !important;}
    }
  }
  @media screen and (min-width: 1250px) and (max-width: 1400px) {
    #Nav{
      //блок под логотип(svg, название компании, что за компания(чоп))
      .navbar-brand{
        //svg-щит
        #navbar_svg{height: 51px;}
      }
    }
  }
  @media screen and (min-width: 1200px) {
    //максимальная ширина контента меню на больших экранах
    .container, .container-lg, .container-md, .container-sm, .container-xl {max-width: 1400px !important;}
    //все кнопки (кроме кнопки "Услуги" и кнопок в dropdown),номер телефона
    .nav-link,.telephone{
      height: 1.7em;
      text-align: $textCenter;
      display: flex;
      align-items: $textCenter;
    }
  }
</style>
<style scoped lang="scss">
  //ссылки
  .navbar a{filter: contrast(140%);}
</style>
