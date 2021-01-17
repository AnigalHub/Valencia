<template>
  <div id="tariffs_content">
    <b-container>
      <b-row>
        <b-col>
          <b-table class="text" hover :items="items" :fields="fields">
            <template v-slot:cell(econom)="{item}">
              <h4>{{item.econom.name}}</h4>
              <div class="text">{{item.econom.descr_name}}</div>
              <img :src="item.econom.src">
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
</template>

<script>
  import Weapon_svg from "../tariffs_svg/weapon_svg";
  import NoWeapon_svg from "../tariffs_svg/no_weapon_svg";
    export default {
        name: "tarrifs_content",
      components: {Weapon_svg,NoWeapon_svg},
      data() {
        return {
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

  table {
    width: 100%;
    table-layout: fixed;
    border: none !important;
  }
  table{
    width: 100%;
    border-collapse: separate; /* Способ отображения границы */
    border-spacing: 0 3.5px; /* Расстояние между ячейками */
  }
  .table tbody tr {
    border: 2px solid rgb(15, 37, 56);
    background: #bcc8d7;
    //background: #b5bcc9;
  }
  .table tbody tr:hover {
    background: #ecf1f5;
    cursor: default;
  }
  .table td{
    border: 0.2px solid rgb(26, 60, 88,.6) !important;
    box-shadow: 0.25px 0.25px 0.25px rgb(26, 60, 88,.6);
  }
  .table thead th{
    box-shadow: 1.5px 1.5px 1.5px rgb(15, 37, 56);
    font-family: 'Viaoda Libre', cursive;
    font-weight: 800 !important;
    background: #cfd4de;
    border: 1.8px solid rgb(26, 60, 88,.6);
  }
  .table tr{
    td{
      padding: 0.1rem !important;
    }

    .row{
      margin: 0 9% !important;
    }
  }
  .table th{
    padding: 0.45rem !important;
  }
</style>
<style scoped lang="scss">
  #tariffs_content{
    margin: 0 2%;
  }
  svg{
    width: 40px;
    height: 35px;
  }
  img{
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border-radius: 50%;
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
    color: #09324e;
    display: block;
    padding-bottom: 0.5%;
    margin-bottom: 0 !important;
    text-shadow: 0.9px 1px  rgb(15, 37, 56);
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
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center
  }
  .table .row{
    .col{
      padding: 0 2.5px !important;
    }
  }
  .col{
    padding: 0 15px !important;
  }
  .table tr:not(:first-child){
    p{
      display: none;
    }
  }
</style>
