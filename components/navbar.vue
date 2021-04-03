<template>
  <b-navbar id="Nav" class="navbar-expand-xl sticky-top" toggleable>
    <b-container>
      <b-navbar-brand to="/">
        <component :is="svg"/>
        <span class="name_brand">"ООО Валенсия"</span>
        <p class="chop">частное охранное предприятие</p>
      </b-navbar-brand>
      <a href="tel:+7(999)999-99-99" class="telephone">+7(999)999-99-99</a>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             width="35" height="25"
             viewBox="0 0 172 172"
             style=" fill:#000000;">
          <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
            <path d="M0,172v-172h172v172z" fill="none"></path>
            <g fill="#ffffff">
              <path d="M34.37313,44.72c-0.44681,0.00712 -0.87331,0.18785 -1.18922,0.50391l-13.76,13.76c-0.67143,0.67171 -0.67143,1.76048 0,2.43219l65.36,65.36c0.67171,0.67143 1.76048,0.67143 2.43219,0l65.36,-65.36c0.67143,-0.67171 0.67143,-1.76048 0,-2.43219l-13.76,-13.76c-0.67171,-0.67143 -1.76048,-0.67143 -2.43219,0l-50.38391,50.38391l-50.38391,-50.38391c-0.32908,-0.32923 -0.77753,-0.51103 -1.24297,-0.50391zM34.4,48.87219l50.38391,50.38391c0.67171,0.67143 1.76048,0.67143 2.43219,0l50.38391,-50.38391l11.32781,11.32781l-62.92781,62.92781l-62.92781,-62.92781zM35.24992,64.48992c-0.3504,0.00007 -0.66573,0.21271 -0.79714,0.53754c-0.13141,0.32483 -0.05262,0.6969 0.19917,0.94059l28.38,28.38c0.21571,0.22464 0.536,0.31512 0.83737,0.23655c0.30136,-0.07857 0.53671,-0.31392 0.61528,-0.61528c0.07857,-0.30136 -0.01191,-0.62166 -0.23655,-0.83737l-28.38,-28.38c-0.16204,-0.16747 -0.38509,-0.26203 -0.61812,-0.26203zM136.7232,64.49328c-0.22319,0.00621 -0.43521,0.09897 -0.59125,0.25867l-41.28,41.28c-0.22464,0.21571 -0.31512,0.536 -0.23655,0.83737c0.07857,0.30136 0.31392,0.53671 0.61528,0.61528c0.30136,0.07857 0.62166,-0.01191 0.83737,-0.23655l41.28,-41.28c0.25309,-0.24743 0.32875,-0.62464 0.19067,-0.95054c-0.13808,-0.3259 -0.46171,-0.53393 -0.81552,-0.52423zM73.08992,102.32992c-0.3504,0.00007 -0.66573,0.21271 -0.79714,0.53754c-0.13141,0.32483 -0.05262,0.6969 0.19917,0.94059l6.02,6.02c0.21571,0.22464 0.536,0.31512 0.83737,0.23655c0.30136,-0.07857 0.53671,-0.31392 0.61528,-0.61528c0.07857,-0.30136 -0.01191,-0.62166 -0.23655,-0.83737l-6.02,-6.02c-0.16204,-0.16747 -0.38509,-0.26203 -0.61812,-0.26203zM83.40992,112.64992c-0.3504,0.00007 -0.66573,0.21271 -0.79714,0.53754c-0.13141,0.32483 -0.05262,0.6969 0.19917,0.94059l2.58,2.58c0.21571,0.22464 0.536,0.31512 0.83737,0.23655c0.30136,-0.07857 0.53671,-0.31392 0.61528,-0.61528c0.07857,-0.30136 -0.01191,-0.62166 -0.23655,-0.83737l-2.58,-2.58c-0.16204,-0.16747 -0.38509,-0.26203 -0.61813,-0.26203z"></path></g></g></svg>
      </b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" class="justify-content-center" is-nav v-model="isExpanded">
        <b-navbar-nav>
          <b-nav-item id="nav_company" to="/company">О нас</b-nav-item>
          <b-nav-item>
          <b-dropdown text="Услуги" class="menuu" id="mm">
            <b-dropdown-item to="/services/guard_of_organizations/" class="menu1">Охрана организаций
              <span style="top:-.35%" class="menu_org">
                <b-dropdown-item to="/services/_guard_of_organizations/guard_of_educational_institutions">Охрана образовательных учреждений</b-dropdown-item>
                <b-dropdown-item to="/services/_guard_of_organizations/guard_of_medical_institutions">Охрана медицинских учреждений</b-dropdown-item>
                <b-dropdown-item to="/services/_guard_of_organizations/guard_of_municipal_facilities">Охрана муниципальных объектов</b-dropdown-item>
              </span>
            </b-dropdown-item>
            <b-dropdown-item to="/services/object_guard/" class="menu2">Охрана объектов
              <div style="top:1%" class="menu_obj">
                <b-dropdown-item to="/services/_object_guard/guard_of_industrial_facilities">Охрана промышленных объектов</b-dropdown-item>
                <b-dropdown-item to="/services/_object_guard/guard_of_transport_facilities">Охрана объектов транспорта</b-dropdown-item>
              </div>
            </b-dropdown-item>
             <b-dropdown-item to="/services/guard_of_real_estate/" class="menu3">Охрана недвижимости
               <div style="top:4.5%" class="menu_state">
                 <b-dropdown-item to="/services/_guard_of_real_estate/guard_of_commercial_objects">Охрана коммерческих объектов</b-dropdown-item>
                 <b-dropdown-item to="/services/_guard_of_real_estate/guard_private_property">Охрана частных объектов</b-dropdown-item>
               </div>
              </b-dropdown-item>
              <b-dropdown-item to="/services/bodyguard">Личная охрана</b-dropdown-item>
              <b-dropdown-item to="/services/guard_of_events">Охрана мероприятий </b-dropdown-item>
              <b-dropdown-item to="/services/cargo_escort">Сопровождение грузов</b-dropdown-item>
            </b-dropdown>
          </b-nav-item>
          <b-nav-item to="/tariffs" id="tarif">Тарифы</b-nav-item>
          <b-nav-item to="/technical_means">Технические средства</b-nav-item>
          <b-nav-item to="/special_equipment">Спецсредства</b-nav-item>
          <b-nav-item to="/licenses">Лицензии</b-nav-item>
          <b-nav-item to="/our_clients">Наши клиенты</b-nav-item>
          <b-nav-item to="/contact">Контакты</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
  import ShieldSVG from "./secondary_pages/shield_svg";
  export default {
    name: "navbar",
    data(){
      return {
        isExpanded: false,
        svg:ShieldSVG,
      }
    },
  }

</script>
<style lang="scss">
  .navbar-brand{
    padding-bottom: 0 !important;
    text-align: center;
    font-family: 'Playfair Display', serif;
    letter-spacing: 0.25px;
    font-weight: 600;
    color: #ffffff !important;
    margin-top: -1%;
  }
  .navbar-expand-xl .navbar-collapse {
    margin-left: 0;
  }
  .dropdown-item{
    letter-spacing: -.45px;
    font-weight: 400 !important;
    color: #ffffff ;
    font-size: 1.3rem;
    background: #040610;
    font-family: "EB Garamond", serif;
    padding-right: 0.7rem !important;
    padding-left: 0.7rem !important;
    &:hover{
      color: #007bff !important;
      background: #040610;
    }
  }
  .dropdown-toggle{
    letter-spacing: -0.45px;
    font-weight: 400 !important;
    color: #ffffff ;
    font-size: 1.35rem !important;
    background: #040610;
    font-family: "EB Garamond", serif;
    padding-right: 0.7rem !important;
    padding-left: 0.7rem !important;
    &:hover{
      color: #007bff !important;
    }
  }
  .menuu:hover .dropdown-toggle{
   color:#007bff !important;
  }
  .btn {
    padding: 0 !important;
    background: transparent !important;
    border: none !important;
    font-size: 1.25rem;
  }
  .dropdown-menu {
    padding: 0 !important;
  }
  @media screen  and (max-width: 1250px) {
    .dropdown-item,.dropdown-toggle{
      font-size: 1.1rem !important;
    }
    .btn-group{
      display: block;
    }
  }
  @media  screen  and (max-width: 1200px)  {
    .menu_org,.menu_obj,.menu_state{
      .dropdown-item::before {
          content: "\25B8";
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: .5em;
        }
    }
  }
  @media  screen  and (min-width: 1200px)  {
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      max-width: 1400px !important;
      max-height: 100%;
    }
    .dropdown-item:hover{
      border-bottom: 2px solid  #007bff;
      border-top: 2px solid  #007bff;
    }
    .nav-link,.telephone{
      height: 1.7em;
      text-align: center;
      display: flex;
      align-items: center;
      padding-right: 0.68rem !important;
      padding-left: 0.68rem !important;
      letter-spacing: -.4px;
    }
    .dropdown-menu {
      border: 2px solid  #007bff;
    }
    .menu_org,.menu_obj,.menu_state{
      display:none;
      position: absolute;
      left: 100%;
      border: 2px solid #007bff;
      &:hover{
        display:block ;
      }
    }
    .menu1:hover .menu_org, .menu2:hover .menu_obj, .menu3:hover .menu_state {
      display:block ;
    }
  }
  @media screen and (min-width:1250px) and (max-width: 1310px) {
    .dropdown-item,.dropdown-toggle{
      font-size: 1.15rem !important;
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }
  }
  @media screen and (min-width:1310px) and (max-width: 1400px) {
    .dropdown-item,.dropdown-toggle{
      padding-right: 0.55rem !important;
      padding-left: 0.55rem !important;
    }
  }
</style>
<style scoped lang="scss">

  .container {
    padding: 0 !important;
  }
  .navbar{
    padding: 0 !important;
    background: #040610;
  }
  .name_brand{
    font-family: 'Lobster', cursive;
    letter-spacing: 0.15px;
    margin-left: -7%;
    font-weight: 600 !important;
    color: rgba(255, 255, 255, 0.82);
    font-size: 1.3rem;
    text-shadow: 1px 1px 2px rgb(0, 0, 15);
  }
  svg{
    margin-top: 2.5%;
    margin-left: 1%;
  }
  #shield{
    width:64px;
    height: 64px;
    margin: 1.5% 0;
  }
  .chop{
    font-size: 0.55rem !important;
    margin-top: -13%;
    margin-left: 24%;
    text-align: center;
    margin-bottom: 0.5rem !important;
  }
  .nav-link,.telephone{
    color: #ffffff !important;
    font-weight: 400 !important;
  }
  .nav-link{
    font-size: 1.4rem;
    font-family: "EB Garamond", serif;
  }
  .telephone{
    font-family: 'Vollkorn', serif;
    font-size: 1.35rem;
    &:hover{
      text-shadow: -.15px 1px .15px #97c7e7; text-decoration: underline !important;
    }
  }
  .nav-link:hover {
    color: #007bff !important;
  }
  #nav_company{
    border: none !important;
  }
  @media screen and (max-width: 1250px) {
    .nav-link,.telephone{
      font-size: 1.2rem !important;
      padding-right: 0.425rem !important;
      padding-left: 0.425rem !important;
    }
  }
  @media screen and (min-width:1250px) and (max-width: 1310px) {
    .nav-link,.telephone{
      font-size: 1.25rem ;
      padding-right: 0.475rem !important;
      padding-left: 0.475rem !important;
    }
  }
  @media screen and (min-width:1310px) and (max-width: 1400px) {
    .nav-link,.telephone{
      font-size: 1.3rem;
      padding-right: 0.525rem !important;
      padding-left: 0.525rem !important;
    }
  }
  @media screen and (max-width: 1200px) {
    .navbar-expand-xl .navbar-collapse {
      margin-left: 2%;
    }
    #shield{
      margin-top: -1% !important;
      width:50px;
      height:52px;
    }
    .name_brand{
      font-size: 1.3rem;
      letter-spacing: -0.2px;
    }
    .chop{
      font-size: 0.6rem !important;
      margin-top: -10.2%;
      margin-left: 24%;
      letter-spacing: -.25px !important;
      margin-bottom: 0.5rem !important;
    }
    .telephone{
      display: none;
    }
  }

</style>
