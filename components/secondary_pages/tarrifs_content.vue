<template>
  <div id="tariffs_content" class="block_two">
    <b-container>
      <div class="flex-container">
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
      </div>



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
  .table th{
    background: rgba(8, 22, 33, 0.25) !important;
  }
  .table th, .table td {
    padding: 0.35rem !important;
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
  .flex-container > div {
    width: 48%;
    margin: 0 1% !important;
    &:last-child{
      margin-left: 25% !important;
    }
  }
  img{
    width: 5%;
    margin: 0.5%;
    //border-radius: 50%;
    float: left;
    box-shadow: none;
    //background: rgba(255, 255, 255, 0.85);
    filter: brightness(60%) !important
  }
  svg{
    width: 32px;
    height: 40px;
    float: left;
  }
  p{
    margin-top: 3.5%;
  }
</style>
