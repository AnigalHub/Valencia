<template>
  <div id="tariffs" class="page">
    <Name_page :name_page="name_page"/>
    <b-container>
      <div class="flex-container">
        <div class="type">
          <h3>Эконом</h3>
          <img src="../static/tariffs/type_1.png" alt="тип1"/>
          <p class="text ">Сотрудники с хорошим телосложением, имеющие  разряд не выше 5-го, с опытом работы от 1 года, обучены для выполнения общенаблюдательных функций и обеспечения пропускного режима</p>
          <b-table class="text" hover :items="items" :fields="fields">
            <template v-slot:cell(econom)="{item}">
              <div class="text">{{item.name}}</div>
              <span class="text_descr">{{item.descr_name}}</span>
            </template>
            <template v-slot:cell(tt)="{item}">
              <div> от {{item.price_hour}} ₽/час</div>
              <div> от {{item.price}} ₽/мес</div>
            </template>
            <template v-slot:cell(ttr)="{item}">
              <div>от {{item.price_hour_with_weapon}} ₽/час </div>
              <div> от {{item.price_with_weapon}} ₽/мес</div>
            </template>
          </b-table>
        </div>
        <div class="type">
          <h3>Стандарт</h3>
          <img src="../static/tariffs/type_2.png" alt="тип2"/>
          <p class="text ">Сотрудники, со среднем телосложением, имеющие  разряд 5-6, с опытом работы от 3-лет, обучены для выполнения контрольно-пропускного режима и работы с техническими средствами</p>
          <b-table class="text" hover :items="items2" :fields="fields">
            <template v-slot:cell(econom)="{item}">
              <div class="text">{{item.name}}</div>
              <span class="text_descr">{{item.descr_name}}</span>
            </template>
            <template v-slot:cell(tt)="{item}">
              <div> от {{item.price_hour}} ₽/час</div>
              <div> от {{item.price}} ₽/мес</div>
            </template>
            <template v-slot:cell(ttr)="{item}">
              <div>от {{item.price_hour_with_weapon}} ₽/час </div>
              <div> от {{item.price_with_weapon}} ₽/мес</div>
            </template>
          </b-table>
        </div>
        <div class="type">
          <h3>Премиум</h3>
          <img src="../static/tariffs/type_3.png" alt="тип3"/>
          <p class="text">Сотрудники, строго до 45-лет, крепкого телосложения и презентабельной внешности, имеющие 6-ой разряд, с опытом работы от 5-лет, обучены для выполнения особо сложных задач</p>
          <b-table class="text" hover :items="items3" :fields="fields">
            <template v-slot:cell(econom)="{item}">
              <div class="text">{{item.name}}</div>
              <span class="text_descr">{{item.descr_name}}</span>
            </template>
            <template v-slot:cell(tt)="{item}">
              <div> от {{item.price_hour}} ₽/час</div>
              <div> от {{item.price}} ₽/мес</div>
            </template>
            <template v-slot:cell(ttr)="{item}">
              <div>от {{item.price_hour_with_weapon}} ₽/час </div>
              <div> от {{item.price_with_weapon}} ₽/мес</div>
            </template>
          </b-table>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
  import Name_page from "../components/secondary_pages/name_page";
    export default {
      name: "tariffs",
      components: {Name_page},
      data() {
        return {
          name_page:"Тарифы",
          fields: [
            { label: "Режим", key: "econom" },
            { label: "Невооруженная", key: "tt" },
            { label: "Вооруженная", key: "ttr" },
          ],
          items: [
            {
              name:'Вахтовый',
              descr_name:'(12 ч.)',
              price_hour:130,
              price:65000,
              price_hour_with_weapon:150,
              price_with_weapon:70000,
            },
            {
              name:'Суточный',
              descr_name:'(2/2)',
              price_hour:145,
              price:85000,
              price_hour_with_weapon:165,
              price_with_weapon:90000,
            },
            {
              name:'Суточный',
              descr_name:'(1/2)',
              price_hour:150,
              price:95000,
              price_hour_with_weapon:170,
              price_with_weapon:100000,
            },
            {
              name:'Дневной (ночной)',
              descr_name:'(12 ч., пн-вс)',
              price_hour:140,
              price:75000,
              price_hour_with_weapon:160,
              price_with_weapon:80000,
            },
            {
              name:'Дневной (ночной)',
              descr_name:'(12 ч., пн-пт)',
              price_hour:135,
              price:70000,
              price_hour_with_weapon:155,
              price_with_weapon:75000,
            },
          ],
          items2: [
            {
              name:'Вахтовый',
              descr_name:'(12 ч.)',
              price_hour:140,
              price:80000,
              price_hour_with_weapon:160,
              price_with_weapon:85000,
            },
            {
              name:'Суточный',
              descr_name:'(2/2)',
              price_hour:165,
              price:105000,
              price_hour_with_weapon:185,
              price_with_weapon:11000,
            },
            {
              name:'Суточный',
              descr_name:'(1/2)',
              price_hour:170,
              price:125000,
              price_hour_with_weapon:190,
              price_with_weapon:130000,
            },
            {
              name:'Дневной (ночной)',
              descr_name:'(12 часов, пн-вс)',
              price_hour:145,
              price:85000,
              price_hour_with_weapon:165,
              price_with_weapon:90000,
            },
            {
              name:'Дневной (ночной)',
              descr_name:'(12 часов, пн-пт)',
              price_hour:140,
              price:75000,
              price_hour_with_weapon:160,
              price_with_weapon:80000,
            },
          ],
          items3: [
            {
              name:'Вахтовый',
              descr_name:'(12 ч.)',
              price_hour:145,
              price:85000,
              price_hour_with_weapon:165,
              price_with_weapon:90000,
            },
            {
              name:'Суточный',
              descr_name:'(2/2)',
              price_hour:175,
              price:120000,
              price_hour_with_weapon:195,
              price_with_weapon:125000,
            },
            {
              name:'Суточный',
              descr_name:'(1/2)',
              price_hour:185,
              price:135000,
              price_hour_with_weapon:200,
              price_with_weapon:140000,
            },
            {
              name:'Дневной (ночной)',
              descr_name:'(12 ч., пн-вс)',
              price_hour:165,
              price:100000,
              price_hour_with_weapon:185,
              price_with_weapon:105000,
            },
            {
              name:'Дневной (ночной)',
              descr_name:'(12 часов, пн-пт)',
              price_hour:145,
              price:85000,
              price_hour_with_weapon:165,
              price_with_weapon:90000,
            },
          ]
        }
      }
    }
</script>

<style scoped lang="scss">

</style>
