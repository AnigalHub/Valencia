<template>
  <div id="tariffs" class="page">
    <Name_page :name_page="name_page"/>
    <div id="tariffs_content">
      <b-container>
        <b-row>
          <b-col>
            <b-table class="text" hover :items="items" :fields="fields">
              <template v-slot:cell(econom)="{item}">
                <h4>{{item.econom.name}}</h4>
                <div class="text">{{item.econom.descr_name}}</div>
                <img :src="item.econom.src">
                <p class="text">{{item.econom.descr}}</p>
                <b-row>
                  <b-col cols="2">
                    <component :is="item.econom.svg_2"/>
                  </b-col>
                  <b-col> от {{item.econom.price}} ₽</b-col>
                  <b-col cols="2">
                    <component :is="item.econom.svg"/>
                  </b-col>
                  <b-col>от {{item.econom.price_with_weapon}} ₽</b-col>
                </b-row>
              </template>
            </b-table>
          </b-col>
          <b-col>
            <b-table class="text" hover :items="items2" :fields="fields2">
              <template v-slot:cell(standart)="{item}">
                <img :src="item.standart.src">
                <h4>{{item.standart.name}}</h4>
                <div class="text">{{item.standart.descr_name}}</div>
                <p class="text">{{item.standart.descr}}</p>
                <b-row>
                  <b-col cols="2">
                    <component :is="item.standart.svg_2"/>
                  </b-col>
                  <b-col> от {{item.standart.price}} ₽</b-col>
                  <b-col cols="2">
                    <component :is="item.standart.svg"/>
                  </b-col>
                  <b-col>от {{item.standart.price_with_weapon}} ₽</b-col>
                </b-row>
              </template>
            </b-table>
          </b-col>
          <b-col>
            <b-table class="text" hover :items="items3" :fields="fields3">
              <template v-slot:cell(premium)="{item}">
                <img :src="item.premium.src">
                <h4>{{item.premium.name}}</h4>
                <div class="text">{{item.premium.descr_name}}</div>
                <p class="text">{{item.premium.descr}}</p>
                <b-row>
                  <b-col cols="2">
                    <component :is="item.premium.svg_2"/>
                  </b-col>
                  <b-col> от {{item.premium.price}} ₽</b-col>
                  <b-col cols="2">
                    <component :is="item.premium.svg"/>
                  </b-col>
                  <b-col>от {{item.premium.price_with_weapon}} ₽</b-col>
                </b-row>
              </template>
            </b-table>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
  import Secondary_pages from "../components/secondary_pages/secondary_pages.scss";
  import Weapon_svg from "../components/tariffs_svg/weapon_svg";
  import NoWeapon_svg from "../components/tariffs_svg/no_weapon_svg";
  import Name_page from "../components/secondary_pages/name_page";
    export default {
      name: "tariffs",
      components: {Name_page, Weapon_svg,NoWeapon_svg},
      data() {
        return {
          name_page:"Тарифы",
          fields: [
            { label: "Эконом", key: "econom" },
          ],
          fields2: [
            { label: "Стандарт", key: "standart" },
          ],
          fields3: [
            { label: "Премиум", key: "premium" },
          ],
          items: [
            {
              econom:{
                src:'./security_ohr.jpeg',
                descr:'Сотрудники со среднем телосложением, имеющие разряд не выше 5-го, с опытом работы от 1 года, обученные для выполнения общенаблюдательных функций и обеспечения пропускного режима',
              }
            },
            {
              econom: {
                name:'Вахтовый режим',
                price:65000,
                price_with_weapon:70000,
                svg:Weapon_svg,
                svg_2:NoWeapon_svg,
              }
            },
            {
              econom: {
                name:'Суточный режим',
                descr_name:'(двое через двое)',
                price:85000,
                price_with_weapon:90000,
                svg:Weapon_svg,
                svg_2:NoWeapon_svg,
              }
            },
            {
              econom: {
                name:'Суточный режим',
                descr_name:'(сутки через двое)',
                price:95000,
                price_with_weapon:100000,
                svg:Weapon_svg,
                svg_2:NoWeapon_svg,
              }
            },
            {
              econom: {
                name:'Дневной (ночной) режим',
                descr_name:'(12 часов, ежедневно)',
                price:75000,
                price_with_weapon:80000,
                svg:Weapon_svg,
                svg_2:NoWeapon_svg,
              }
            },
            {
              econom: {
                name:'Дневной (ночной) режим',
                descr_name:'(12 часов,  только рабочие дни)',
                price:70000,
                price_with_weapon:75000,
                svg:Weapon_svg,
                svg_2:NoWeapon_svg,
              }
            },
          ],
          items2: [
            {
              standart:{
                src:'./security_ohr_2.jpg',
                descr:'Сотрудники, обладающие хорошими физическими качествами и спецнавыками, имеющие разряд 5-6, с опытом работы от 3 лет, подготовлены для выполнения контрольно-пропускного режима, работы с техническими средствами '
              }
            },
            {
              standart:{
                name:'Вахтовый режим',
                price:80000,
                price_with_weapon:85000,
                svg:Weapon_svg,
                svg_2:NoWeapon_svg,
              }
            },
            {
              standart:{
                name:'Суточный режим',
                descr_name:'(двое через двое)',
                price:105000,
                price_with_weapon:11000,
                svg:Weapon_svg,
                svg_2:NoWeapon_svg,
              }
            },
            {
              standart:{
                name:'Суточный режим',
                descr_name:'(сутки через двое)',
                price:125000,
                price_with_weapon:130000,
                svg:Weapon_svg,
                svg_2:NoWeapon_svg,
              }
            },
            {
              standart:{
                name:'Дневной (ночной) режим',
                descr_name:'(12 часов, ежедневно)',
                price:85000,
                price_with_weapon:90000,
                svg:Weapon_svg,
                svg_2:NoWeapon_svg,
              }
            },
            {
              standart:{
                name:'Дневной (ночной) режим',
                descr_name:'(12 часов,  только рабочие дни)',
                price:75000,
                price_with_weapon:80000,
                svg:Weapon_svg,
                svg_2:NoWeapon_svg,
              }
            },
          ],
          items3: [
            {
              premium: {
                src:'./security_oht_3.jpg',
                descr: 'Сотрудники, строго до 45-лет, крепкого телосложения и презентабельной внешности, имеющие 6-ой разряд, с опытом работы от 5-лет, обученные для выполнения особо сложных задач'
              }
            },
            {
              premium:{
                name:'Вахтовый режим',
                price:85000,
                price_with_weapon:90000,
                svg:Weapon_svg,
                svg_2:NoWeapon_svg,
              }
            },
            {
              premium:{
                name:'Суточный режим',
                descr_name:'(двое через двое)',
                price:120000,
                price_with_weapon:125000,
                svg:Weapon_svg,
                svg_2:NoWeapon_svg,
              },
            },
            {
              premium:{
                name:'Суточный режим',
                descr_name:'(сутки через двое)',
                price:135000,
                price_with_weapon:140000,
                svg:Weapon_svg,
                svg_2:NoWeapon_svg,
              },
            },
            {
              premium:{
                name:'Дневной (ночной) режим',
                descr_name:'(12 часов, ежедневно)',
                price:100000,
                price_with_weapon:105000,
                svg:Weapon_svg,
                svg_2:NoWeapon_svg,
              }
            },
            {
              premium:{
                name:'Дневной (ночной) режим',
                descr_name:'(12 часов,  только рабочие дни)',
                price:85000,
                price_with_weapon:90000,
                svg:Weapon_svg,
                svg_2:NoWeapon_svg,
              }
            },
          ]
        }
      }
    }
</script>
<style lang="scss">
  .table tr, .table th {
    text-align: center;
  }
  .table tr{
    padding: 0.5rem !important;
  }
  table {
    width: 100%;
    table-layout: fixed;
    border: none !important;
  }
  table{
    width: 100%;
    border-collapse: separate; /* Способ отображения границы */
    border-spacing: 0 4px; /* Расстояние между ячейками */
  }
  .table tbody tr {
    border: 2px solid #ffffff;
    background: #ecf1f5;
  }
  .table tbody tr:hover {
    background: #ecf1f5;
    cursor: default;
  }

  .table thead th{
    box-shadow: 2px 2px 2px rgb(15, 37, 56);
    font-family: 'Viaoda Libre', cursive;
    font-weight: 800 !important;
    background: #b5bcc9;
    border: 1.8px solid rgb(26, 60, 88,.6);
  }

  .table tbody tr:first-child {
    td{
      padding: 0.4rem;
    }
    p{
      margin-bottom: 0 !important;
    }
  }
  .table tr:not(:first-child){
    td{
      padding: 0.25rem !important;
    }

    .row{
      margin: 0 7% !important;
    }
  }
</style>
<style scoped lang="scss">
  img{
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border-radius: 50%;
    box-shadow: none;
  }
  h4{
    font-weight: 800;
    display: block;
    padding-bottom: 0.5%;
    margin-bottom: 0;
  }
  .table .col{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center
  }
  .table .row{
    .col{
      padding: 0 5px !important;
    }
  }
  .col{
    padding: 0 20px !important;
  }
  .table .row{
    .col{
      padding: 0 5px !important;
    }
  }
  .col{
    padding: 0 20px !important;
  }
  .table tbody tr:first-child {
    .row{
      display: none;
    }
  }
  .table tr:not(:first-child){
    p{
      display: none;
    }
  }
  .table tbody tr:first-child {
    p{
    height: 9.5rem !important;
    text-align: left;
    }
  }
</style>
