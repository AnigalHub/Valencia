<template>
  <div id="tariffs" class="page">
    <Name_page :name_page="name_page"/>
    <b-container>

      <b-row>
        <b-col>
          <h6>Эконом</h6>
          <b-table class="text" hover :items="items" :fields="fields">
            <template v-slot:cell(econom)="{item}">
              <h4>{{item.name}}</h4>
              <span class="text_descr">{{item.descr_name}}</span>
            </template>
            <template v-slot:cell(tt)="{item}">
              <div> от {{item.price}} ₽/час</div>
              <div> от {{item.price}} ₽/мес</div>
            </template>
            <template v-slot:cell(ttr)="{item}">
              <div>от {{item.price_with_weapon}} ₽/час </div>
              <div> от {{item.price}} ₽/мес</div>
            </template>
          </b-table>
        </b-col>
        <b-col cols="3">
          <img src="../static/tariffs/type_1.png" style="width: 70%;margin-bottom: 1%; border-radius: 45%; filter: brightness(88%) !important;">
          <p class="text">
            Сотрудники с хорошим телосложением, имеющие  разряд не выше 5-го, с опытом работы от 1 года, обучены для выполнения общенаблюдательных функций и обеспечения пропускного режима
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h6>Стандарт</h6>
          <b-table class="text" hover :items="items2" :fields="fields">
        <template v-slot:cell(econom)="{item}">
          <h4>{{item.name}}</h4>
          <span class="text_descr">{{item.descr_name}}</span>
        </template>
        <template v-slot:cell(tt)="{item}">
          <div> от {{item.price}} ₽/час</div>
          <div> от {{item.price}} ₽/мес</div>
        </template>
        <template v-slot:cell(ttr)="{item}">
          <div>от {{item.price_with_weapon}} ₽/час </div>
          <div> от {{item.price}} ₽/мес</div>
        </template>
      </b-table>
        </b-col>
        <b-col cols="3">
        <img src="../static/tariffs/type_2.png" style="width: 70%;margin-bottom: 1%; border-radius: 45%; filter: brightness(88%) !important;">
        <p class="text">
          Сотрудники, со среднем телосложением, имеющие  разряд 5-6, с опытом работы от 3-лет, обучены для выполнения контрольно-пропускного режима и работы с техническими средствами
        </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h6>Премиум</h6>
          <b-table class="text" hover :items="items3" :fields="fields">
            <template v-slot:cell(econom)="{item}">
              <h4>{{item.name}}</h4>
              <span class="text_descr">{{item.descr_name}}</span>
            </template>
            <template v-slot:cell(tt)="{item}">
              <div> от {{item.price}} ₽/час</div>
              <div> от {{item.price}} ₽/мес</div>
            </template>
            <template v-slot:cell(ttr)="{item}">
              <div>от {{item.price_with_weapon}} ₽/час </div>
              <div> от {{item.price}} ₽/мес</div>
            </template>
          </b-table>
        </b-col>
        <b-col cols="3">
          <img src="../static/tariffs/type_3.png" style="width: 70%;margin-bottom: 1%; border-radius: 45%; filter: brightness(88%) !important;">
          <p class="text">
            Сотрудники, строго до 45-лет, крепкого телосложения и презентабельной внешности, имеющие 6-ой разряд охраны, с опытом работы от 5-лет, обучены для выполнения особо сложных задач
           </p>
        </b-col>
      </b-row>
    </b-container>
    <!--<div id="tariffs_content">
      <b-container>
        <b-row>
          <b-col>
            <b-table class="text" hover :items="items" :fields="fields">
              <template v-slot:cell(econom)="{item}">
                <img :src="item.econom.src" :alt="item.econom.alt">
                <h4>{{item.econom.name}}</h4>
                <div class="text_descr">{{item.econom.descr_name}}</div>
                <p class="text">{{item.econom.descr}}</p>
                <b-row>
                  <b-col cols="1">
                    <component :is="item.econom.svg_2"/>
                  </b-col>
                  <b-col class="text">
                    от {{item.econom.price}} ₽/мес
                  </b-col>
                  <b-col cols="1">
                    <component :is="item.econom.svg"/>
                  </b-col>
                  <b-col class="text">
                    от {{item.econom.price_with_weapon}} ₽/мес
                  </b-col>
                </b-row>
              </template>
            </b-table>
          </b-col>
          <b-col>
            <b-table class="text" hover :items="items2" :fields="fields2">
              <template v-slot:cell(standart)="{item}">
                <img :src="item.standart.src" :alt="item.standart.alt">
                <h4>{{item.standart.name}}</h4>
                <div class="text_descr">{{item.standart.descr_name}}</div>
                <p class="text">{{item.standart.descr}}</p>
                <b-row>
                  <b-col cols="1">
                    <component :is="item.standart.svg_2"/>
                  </b-col>
                  <b-col class="text"> от {{item.standart.price}} ₽/мес</b-col>
                  <b-col cols="1">
                    <component :is="item.standart.svg"/>
                  </b-col>
                  <b-col class="text">от {{item.standart.price_with_weapon}} ₽/мес</b-col>
                </b-row>
              </template>
            </b-table>
          </b-col>
          <b-col>
            <b-table class="text" hover :items="items3" :fields="fields3">
              <template v-slot:cell(premium)="{item}">
                <img :src="item.premium.src" :alt="item.premium.alt">
                <h4>{{item.premium.name}}</h4>
                <div class="text_descr">{{item.premium.descr_name}}</div>
                <p class="text">{{item.premium.descr}}</p>
                <b-row>
                  <b-col cols="1">
                    <component :is="item.premium.svg_2"/>
                  </b-col>
                  <b-col class="text"> от {{item.premium.price}} ₽/мес</b-col>
                  <b-col cols="1">
                    <component :is="item.premium.svg"/>
                  </b-col>
                  <b-col class="text">от {{item.premium.price_with_weapon}} ₽/мес</b-col>
                </b-row>
              </template>
            </b-table>
          </b-col>
        </b-row>
      </b-container>
    </div> -->
  </div>
</template>

<script>
  import Weapon_svg from "../components/tariffs_svg/weapon_svg";
  import NoWeapon_svg from "../components/tariffs_svg/no_weapon_svg";
  import Name_page from "../components/secondary_pages/name_page";
    export default {
      name: "tariffs",
      components: {Name_page, Weapon_svg,NoWeapon_svg},
      data() {
        return {
          name_page:"Тарифы",
          fields: [{ label: "Режим работы", key: "econom" },
            { label: "Невооруженная", key: "tt" },
            { label: "Вооруженная", key: "ttr" },],
          items: [
            {
              name:'Вахтовый режим',
              descr_name:'(смена 12 часов)',
              price:65000,
              price_with_weapon:70000,
            },
            {
              name:'Суточный режим',
              descr_name:'(двое через двое)',
              price:85000,
              price_with_weapon:90000,
            },
            {
              name:'Суточный режим',
              descr_name:'(сутки через двое)',
              price:95000,
              price_with_weapon:100000,
            },
            {
              name:'Дневной (ночной) режим',
              descr_name:'(12 часов, ежедневно)',
              price:75000,
              price_with_weapon:80000,
            },
            {
              name:'Дневной (ночной) режим',
              descr_name:'(12 часов,  только рабочие дни)',
              price:70000,
              price_with_weapon:75000,
            },
          ],
          items2: [
            {
              name:'Вахтовый режим',
              descr_name:'(смена 12 часов)',
              price:80000,
              price_with_weapon:85000,
            },
            {
              name:'Суточный режим',
              descr_name:'(двое через двое)',
              price:105000,
              price_with_weapon:11000,
            },
            {
              name:'Суточный режим',
              descr_name:'(сутки через двое)',
              price:125000,
              price_with_weapon:130000,
            },
            {
              name:'Дневной (ночной) режим',
              descr_name:'(12 часов, ежедневно)',
              price:85000,
              price_with_weapon:90000,
            },
            {
              name:'Дневной (ночной) режим',
              descr_name:'(12 часов,  только рабочие дни)',
              price:75000,
              price_with_weapon:80000,
            },
          ],
          items3: [
            {
              name:'Вахтовый режим',
              descr_name:'(смена 12 часов)',
              price:85000,
              price_with_weapon:90000,
            },
            {
              name:'Суточный режим',
              descr_name:'(двое через двое)',
              price:120000,
              price_with_weapon:125000,
            },
            {
              name:'Суточный режим',
              descr_name:'(сутки через двое)',
              price:135000,
              price_with_weapon:140000,
            },
            {
              name:'Дневной (ночной) режим',
              descr_name:'(12 часов, ежедневно)',
              price:100000,
              price_with_weapon:105000,
            },
            {
              name:'Дневной (ночной) режим',
              descr_name:'(12 часов,  только рабочие дни)',
              price:85000,
              price_with_weapon:90000,
            },
          ]
        }
      }
    }
</script>
<style>
  table{
    background: rgba(219, 205, 205, 0.1);
    box-shadow: 0 0 3px 1px #0f2538;

  }
  .table th{
    background: rgba(8, 22, 33, 0.25) !important;
  }
  .table th, .table td {
    padding: 0.45rem !important;
    border: 1px solid rgba(250, 250, 250, 0.23) !important;
    box-shadow: 0 0 1px 1px #0f2538;
  }
  th,tr td:nth-child(2),tr td:nth-child(3){
    text-align: center !important;
  }
</style>
<style scoped lang="scss">
  h6{
    text-align: center;
  }
  img{
    margin-left: auto;
    margin-right: auto;
    display: block;
    //margin-bottom: 5%;
    //border-radius: 50%;
    box-shadow: none;
    //background: rgba(255, 255, 255, 0.85);
    filter: brightness(60%) !important
  }
  svg{
    width: 32px;
    height: 40px;
    float: left;
  }
  .row{
    margin-bottom: 2% !important;
  }
  p{
    font-weight: 800 !important;
  }
  .col-3{
    padding: 0 5px !important;
    text-align: center;
    background: rgba(238, 224, 224, 0.1);
    border: 1px solid rgba(250, 250, 250, 0.43) !important;
    box-shadow: 0 0 3px 2px #1a4971;
  }
  .col{
    padding: 0 2rem 0 0 !important;
  }
</style>
