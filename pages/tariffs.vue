<template>
  <div id="tariffs" class="page">
    <b-container>
      <h1>{{name_page}}</h1>
      <div class="flex-container">
        <div class="type">
          <h3>Эконом</h3>
          <img src="../static/tariffs/type_1.png" alt="тип_1"/>
          <p class="text ">Сотрудники с хорошим телосложением, имеющие  разряд не выше 5-го, с опытом работы от 1 года, обучены для выполнения общенаблюдательных функций и обеспечения пропускного режима</p>
          <b-table class="text" hover :items="tarrifs.econom" :fields="fields">
            <template v-slot:cell(mode)="{item}">
              <div class="text">{{item.name}}</div>
              <span class="text_descr">{{item.descr_name}}</span>
            </template>
            <template v-slot:cell(unarmed)="{item}">
              <div> от {{item.price_hour}} ₽/час</div>
              <div> от {{item.price}} ₽/мес</div>
            </template>
            <template v-slot:cell(armed)="{item}">
              <div>от {{item.price_hour_with_weapon}} ₽/час </div>
              <div> от {{item.price_with_weapon}} ₽/мес</div>
            </template>
          </b-table>
        </div>
        <div class="type">
          <h3>Стандарт</h3>
          <img src="../static/tariffs/type_2.png" alt="тип_2"/>
          <p class="text ">Сотрудники, со среднем телосложением, имеющие  разряд 5-6, с опытом работы от 3-лет, обучены для выполнения контрольно-пропускного режима и работы с техническими средствами</p>
          <b-table class="text" hover :items="tarrifs.standart" :fields="fields">
            <template v-slot:cell(mode)="{item}">
              <div class="text">{{item.name}}</div>
              <span class="text_descr">{{item.descr_name}}</span>
            </template>
            <template v-slot:cell(unarmed)="{item}">
              <div> от {{item.price_hour}} ₽/час</div>
              <div> от {{item.price}} ₽/мес</div>
            </template>
            <template v-slot:cell(armed)="{item}">
              <div>от {{item.price_hour_with_weapon}} ₽/час </div>
              <div> от {{item.price_with_weapon}} ₽/мес</div>
            </template>
          </b-table>
        </div>
        <div class="type">
          <h3>Премиум</h3>
          <img src="../static/tariffs/type_3.png" alt="тип_3"/>
          <p class="text">Сотрудники, строго до 45-лет, крепкого телосложения и презентабельной внешности, имеющие 6-ой разряд, с опытом работы от 5-лет, обучены для выполнения особо сложных задач</p>
          <b-table class="text" hover :items="tarrifs.premium" :fields="fields">
            <template v-slot:cell(mode)="{item}">
              <div class="text">{{item.name}}</div>
              <span class="text_descr">{{item.descr_name}}</span>
            </template>
            <template v-slot:cell(unarmed)="{item}">
              <div> от {{item.price_hour}} ₽/час</div>
              <div> от {{item.price}} ₽/мес</div>
            </template>
            <template v-slot:cell(armed)="{item}">
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
  import Tarrifs from "static/documents/tarrifs.json"
  export default {
    name: "tariffs",
    data() {
      return {
        name_page:"Тарифы",
        tarrifs:Tarrifs,
        fields: [
          { label: "Режим", key: "mode" },
          { label: "Невооруженная", key: "unarmed" },
          { label: "Вооруженная", key: "armed" },
        ],
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
