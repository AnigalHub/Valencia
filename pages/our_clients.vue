<template>
  <div id="our_clients">
    <div id="our_clients_content">
      <div class="place_h1">
        <b-container>
          <h1>Наши клиенты</h1>
        </b-container>
      </div>
      <b-container>
        <p class="text">
          За время существования частного охранного предприятия “ООО Валенсия” были заключены долгосрочные и надежные отношения с различными организациями: государственными учреждениями (детские сады, школы, вузы), бизнес-центрами, ритейлерами, торговыми центрами, букмекерскими конторами, строительными компаниями и т.д.
        </p>
        <h4>Предприятия, которые выбрали наши услуги:</h4>
        <div class="flex-container">
          <div>
            <img src="../static/41.jpg">
            <h5> МОУ ГИМНАЗИЯ № 46</h5>
          </div>
          <div>
            <img src="../static/42.jpg">
            <h5> МОУ СОШ № 25 </h5>
          </div>
          <div>
            <img src="../static/43.jpg">
            <h5> МОУ ШКОЛА № 17</h5>
          </div>
          <div>
            <img src="../static/44.jpg">
            <h5>МОУ ЛИЦЕЙ №12</h5>
          </div>
          <div>
            <img src="../static/46.jpg">
            <h5>АДМИНИСТРАЦИЯ ГОРОДСКОГО ОКРУГА ЛЮБЕРЦЫ</h5>
          </div>
          <div>
            <img src="../static/45.jpg">
            <h5>МДОУ Д/С № 9 "КОСМОС"</h5>
          </div>
          <div>
            <img src="../static/47.jpg">
            <h5>МОУ КАДЕТСКАЯ ШКОЛА</h5>
          </div>
          <div>
            <img src="../static/48.jpg">
            <h5>МОУ ГИМНАЗИЯ № 24</h5>
          </div>
          <div>
            <img src="../static/49.jpg">
            <h5>МДОУ №28 "СОВЕНОК"</h5>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
    export default {
        name: "our_clients"
    }
</script>

<style scoped>
  #our_clients{
    background:linear-gradient( to top , #6d7d90, #bbc4d2, #d0d8e2);
  }
  #our_clients_content{
    padding: 2% 0;
  }
  h1{
    padding-left: 15px;
    font-family: 'Vollkorn', serif;
    font-weight: 600;
  }
  h5{
    font-family: 'Viaoda Libre', cursive;
    padding-top: 2.5%;
    font-weight: 600;
    color: rgb(15, 37, 56);
    letter-spacing: -1.5px;
    text-align: center;
    font-size: 1.3rem !important;
    text-shadow: 0.5px 1px 1px #8094aa;
  }
  .place_h1{
    background: #e8edf5;
    padding: 5px 0;
    margin-bottom: 2%;
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
  .text{
    font-family: 'Vollkorn', serif;
    font-weight: 500;
    letter-spacing: -1px;
    font-size: 1.4rem;
    line-height: 1.5rem;
    text-shadow: 0.25px 0.5px 0.5px rgb(16, 40, 61);
    color:rgb(15, 37, 55);
  }
  .flex-container {
    display: flex;
    flex-wrap: wrap;
  }
  .flex-container > div {
    width: 30%;
    margin: 0 1.5% 1% 1.5% !important;
  }
  img{
    box-shadow: 7px 7px 7px rgb(15, 37, 56);
    width: 100%;
    filter: contrast(110%);
  }
</style>
