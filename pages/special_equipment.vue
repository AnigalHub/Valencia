<template>
  <div id="special_equipment">
    <div id="special_equipment_content">
      <div class="place_h1">
        <b-container>
          <h1>Спецсредства</h1>
        </b-container>
      </div>
      <b-container>
        <b-row>
          <b-col cols="3">
            <img src="../static/special.jpg">
          </b-col>
          <b-col>
            <p class="text">
              Для обеспечения безопасности охраняемого объекта, поддержания правопорядка
              и нейтрализации правонарушителей в
              частном охранном предприятии  “ООО Валенсия” имеются специальные средства индивидуальной
              защиты - особая экипировка и оснащение охранника.
            </p>
            <p class="text">Личный состав частного охранного предприятия “ООО Валенсия” - охранники 5-го и 6-го разряда
              (работа со спецсредствами и оружием).</p>
            <p class="text">Исходя из рисков и угроз, для каждого охраняемого объекта подбирается своя экипировка и средства защиты охраны.</p>
          </b-col>
        </b-row>
        <p class="text">Перечень специальных средств, используемых в частном охранном предприятии “ООО Валенсия”:</p>
        <div class="flex-container">
          <div>
              <h3>Радиостанция</h3>
              <img src="../static/izh-71.png">
            <p class="text">
              Дистанционная связь между охранниками для координации действий и получения инструкций при выполнении служебных задач
            </p>
            </div>
            <div>
              <h3>Служебное и гражданское оружие</h3>
              <img src="../static/pm.jpg">
              <p class="text">Отражения вооруженного нападения на жизнь и здоровье охранника, охраняемого имущества на веренном объекте, а также подача сигнала тревоги (выстрел в воздух)</p>
            </div>
            <div>
              <h3>Наручники</h3>
              <img src="../static/naruchniki.jpg">
              <p class="text">
                Сковывание кистей рук правонарушителей для исключения буйного поведения при сопровождении и ковоировании
              </p>
            </div>
            <div>
              <h3>Металлодетектор</h3>
              <img src="../static/metallodetector.jpg">
              <p class="text"> Обнаружение запрещенных металлических средств к внесению и выносу его на территорию охраняемого объекта</p>
            </div>
          <div>
            <h3>Дубинка (резиновая палка)</h3>
            <img src="../static/dubinka.jpg">
            <p class="text">
              Оборона при угрозе жизни и здоровья охранника и пресечение преступного посягательства на охраняемую территорию.
            </p>
          </div>
            <div>
              <h3>Шлем</h3>
              <img src="../static/kaska.jpg">
              <p class="text">Защита головы охранника от пулевых и осколочных ранений, наносимых правонарушителями различными видами оружия и другими поражающими факторами</p>
            </div>
            <div>
              <h3>Бронежилет</h3>
              <img src="../static/bronigilet.jpg">
              <p class="text">
                Защита  при попадании пули определенного калибра, ножа или заточки в область грудной клетки охранника
              </p>
            </div>
          <div>
            <h3>Фонарь</h3>
            <img src="../static/fonarik.jpg">
            <p class="text">Патрулирование плохо освещенных территорий, обход периметра охраняемого объекта в темное время суток</p>
          </div>
            <div>
              <h3>Газовый балончик</h3>
              <img src="../static/balonchik.png">
              <p class="text">Обезвреживание правонарушителя на время - лишение противника желания продолжать противоправные действия с помощью ирританта </p>
            </div>
            <div>
              <h3>Электрошокер</h3>
              <img src="../static/electroshoker.jpg">
              <p class="text">Активная самооборона, пресечение массовых беспорядков и задержание правонарушитеоей без нанесения увечий</p>
            </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
    export default {
        name: "special_equipment"
    }
</script>

<style scoped lang="scss">
  #special_equipment{
    background:linear-gradient( to top , #6d7d90, #bbc4d2, #d0d8e2);
  }
  #special_equipment_content{
    padding: 2% 0;
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
  .row{
    padding-bottom: 2%;
  }
  .text{
    font-family: 'Vollkorn', serif;
    font-weight: 500;
    letter-spacing: -1px;
    font-size: 1.4rem;
    line-height: 1.5rem;
    text-shadow: 0.25px 0.5px 0.5px rgb(16, 40, 61);
    color:rgb(15, 37, 55);
  }
  img{
    box-shadow: 7px 7px 7px rgb(15, 37, 56);
    width: 100%;
    filter: contrast(95%);
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
  .flex-container {
    display: flex;
    flex-wrap: wrap;
  }
  .flex-container > div {
    width: 22%;
    margin: 1% 1.2% 1% 1.2% !important;
    h3{
      text-align: center;
    }
    img{
      box-shadow: none;
      padding: 15%;
    }
    .text{
      text-align: center;
    }
  }
  .flex-container > div:nth-child(9){
    margin-left: 25.5% !important;
  }
</style>
