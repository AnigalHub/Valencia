<template>
  <div id="tariffs">
    <Navbar/>
    <div id="tariffs_content">
      <div class="place_h1">
        <b-container>
          <h1>Тарифы</h1>
        </b-container>
      </div>
      <b-container>
        <b-row>
          <b-col>
            <b-table class="text" hover :items="items" :fields="fields">
            <template v-slot:cell(econom)="{item}">
              <h4>{{item.econom.name}}</h4>
              <div class="text">{{item.econom.descr_name}}</div>
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
    <Myfooter/>
  </div>
</template>

<script>
  import Navbar from "../components/navbar";
  import Myfooter from "../components/myfooter";
  import Weapon_svg from "../components/tariffs_svg/weapon_svg";
  import NoWeapon_svg from "../components/tariffs_svg/no_weapon_svg";
    export default {
        name: "tariffs",
      components: {Myfooter, Navbar,Weapon_svg,NoWeapon_svg},
      data() {
        return {
          // Note `isActive` is left out and will not appear in the rendered table
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
              standart: {
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
          ]
          ,
          items3: [
            {
              premium: {
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
    border-spacing: 0 3px; /* Расстояние между ячейками */
  }
  .table td,  .table th {
    border: 2px solid #ffffff;
    background: #e8edf5;
    box-shadow: 1.5px 1.5px 1.5px rgb(15, 37, 56);
  }
  .table thead th{
    box-shadow: 3px 3px 3px rgb(15, 37, 56);
    font-family: 'Viaoda Libre', cursive;
    font-weight: 800 !important;
    background: #ffffff;
  }
  .table tbody tr:first-child {

    text-align: left;
    height: 10rem;
    td{
      padding: 0.4rem;
    }
    .row{
      display: none;
    }
    p{
      margin-bottom: 0 !important;
    }
  }
  .table tr:not(:first-child){
    td{
      padding: 0.25rem !important;
    }
    p{
      display: none;
    }
    .row{
      margin: 0 7% !important;
    }
  }
</style>
<style scoped lang="scss">
  #tariffs{
    background:linear-gradient( to top , #6d7d90, #bbc4d2, #d0d8e2);
  }
  h1{
    padding-left: 15px;
    font-family: 'Vollkorn', serif;
    font-weight: 600;
  }
  .place_h1{
    background: #e8edf5;
    padding: 5px 0;
    margin-bottom: 2%;
  }
  #tariffs_content{
    padding: 2% 0;
  }
  h3{
    font-family: 'Viaoda Libre', cursive;
    padding-bottom: 1%;
    font-weight: 600;
    color: rgb(15, 37, 56);
    letter-spacing: -2.5px;
    text-decoration: underline;
    font-size: 1.6rem !important;
    text-shadow: 0.5px 1px 1px #8094aa;
  }
  h4{
    font-family: 'Vollkorn', serif;
    font-weight: 800 !important;
    color: #09324e;
    display: block;
    padding-bottom: 0.5%;
    margin-bottom: 0 !important;
    text-shadow: 0.5px 0.5px 1px rgb(15, 37, 56);
  }
  .text{
    font-family: 'Vollkorn', serif;
    font-weight: 500; letter-spacing: -1px;
    font-size: 1.4rem;
    line-height: 1.5rem;
    text-shadow: 0.25px 0.5px 0.5px rgb(16, 40, 61);
    color:rgb(15, 37, 56)
  }
  .table .col{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center
  }
  .row{
    .col{
      padding: 0 10px !important;
    }
  }
</style>
