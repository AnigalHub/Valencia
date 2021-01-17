<template>
  <div id="licenses">
    <div id="licenses_content">
      <div class="place_h1">
        <b-container>
          <h1>Лицензии</h1>
        </b-container>
      </div>
      <b-container>
        <p class="text">
          Общество с ограниченной ответственностью частное охранное предприятие
          “Валенсия” обладает всеми необходимыми лицензиями на работу, согласно
          статье №3 Закона РФ №2487-1 "О частной детективной и охранной
          деятельности в Российской Федерации".
        </p>
        <h4>В целях охраны разрешается предоставление следующих видов услуг:</h4>
        <ol class="text">
          <li>Защита жизни и здоровья граждан;</li>
          <li>Охрана объектов и/или имущества (в том числе при его транспортировке);</li>
          <li>Охрана объектов и/или имущества на объектах с осуществлением работ по проектированию, монтажу и эксплуатационному обслуживанию технических средств охраны;</li>
          <li>Консультирование и подготовка рекомендаций клиентам по вопросам правомерной защиты от противоправных посягательств;</li>
          <li>Обеспечение порядка в местах проведения массовых мероприятий;</li>
          <li>Обеспечение внутриобъектового и пропускного режимов на объектах</li>
          <li>Охрана объектов и/или имущества, а также обеспечение внутриобъектового и пропускного режимов на объектах, которые имеют особо важное значение для жизнедеятельности
            и безопасности государства и населения.</li>
        </ol>
        <h3>Лицензии:</h3>
        <p class="text">Действующие лицензии частного охранного предприятия “ООО Валенсия” на право оказания охранных услуг: </p>
        <div class="flex-container">
          <div>
            <img src="../static/l1.jpg">
          </div>
          <div>
            <img src="../static/l2.jpg">
          </div>
          <div>
            <img src="../static/l3.jpg">
          </div>
          <div>
            <img src="../static/l4.jpg">
          </div>
          <div>
            <img src="../static/l5.jpg">
          </div>
          <div>
            <img src="../static/l6.jpg">
          </div>
          <div>
            <img src="../static/l7.jpg">
          </div>
          <div>
            <img src="../static/l8.jpg">
          </div>
          <div>
            <img src="../static/l9.jpg">
          </div>
          <div>
            <img src="../static/l10.jpg">
          </div>
        </div>
        <h3>Благодарные и рекомендательные письма:</h3>
        <p class="text">Наивысшей наградой являются благодарные и рекомендательные письма наших Клиентов о частном охранном предприятии “ООО Валенсия”:</p>
        <div class="flex-container">
          <div>
            <img src="../static/ll1.jpg">
          </div>
          <div>
            <img src="../static/ll2.jpg">
          </div>
          <div>
            <img src="../static/ll3.jpg">
          </div>
          <div>
            <img src="../static/ll4.jpg">
          </div>
          <div>
            <img src="../static/ll5.jpg">
          </div>
          <div>
            <img src="../static/ll6.jpg">
          </div>
          <div>
            <img src="../static/ll7.jpg">
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
    export default {
        name: "licenses"
    }
</script>

<style scoped>
  #licenses{
    background:linear-gradient( to top , #6d7d90, #bbc4d2, #d0d8e2);
  }
  #licenses_content{
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
  .text{
    font-family: 'Vollkorn', serif;
    font-weight: 500;
    letter-spacing: -1px;
    font-size: 1.4rem;
    line-height: 1.5rem;
    text-shadow: 0.25px 0.5px 0.5px rgb(16, 40, 61);
    color:rgb(15, 37, 56);
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
    font-weight: 500;
    text-decoration: underline;
    letter-spacing: -1px;
    padding-bottom: 1%;
    text-shadow: 0.25px 0.5px 0.5px rgb(16, 40, 61);
    color:rgb(15, 37, 56);
  }
  li{
    padding-bottom: 1%;
  }
  .flex-container {
    display: flex;
    flex-wrap: wrap;
  }
  .flex-container > div {
    width: 18%;
    margin: 0 1% 2% 1% !important;
  }
  img{
    box-shadow: 7px 7px 7px rgb(15, 37, 56);
    width: 100%;
    filter: contrast(90%);
  }
</style>
