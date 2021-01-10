<template>
  <div id="technical_means">
    <Navbar/>
    <div id="technical_means_content">
      <div class="place_h1">
        <b-container>
          <h1>Технические средства</h1>
        </b-container>
      </div>
      <b-container>
        <p class="text">
          Технические средства повышают безопасность любого охраняемого объекта. Наша компания занимается монтажом и обслуживанием систем безопасности во время охраны любой вверенной территории.
        </p>
        <p class="text">
          Классификация технических средств охранников компании “ООО Валенсия:
        </p>
        <div class="flex-container">
          <div>
            <b-row>
              <b-col>
                <img src="../static/pogar.jpg">
              </b-col>
              <b-col>
                <h3>Пожарная сигнализация:</h3>
                <ul class="text">
                 <li>датчики задымления и температуры;</li>
                  <li>приемно-контрольный прибор;</li>
                  <li>прибор управления;</li>
                  <li>извещатели;</li>
                  <li>оповещатели.</li>
                </ul>
              </b-col>
            </b-row>
          </div>
          <div>
            <b-row>
              <b-col>
                <img src="../static/control.jpg">
              </b-col>
              <b-col>
                <h3>Технические средства системы контроля управления доступом</h3>
                <ul class="text">
                  <li>электромагнитные замки;</li>
                  <li>автоматические ворота;</li>
                  <li>контроллеры;</li>
                  <li>шлагбаумы;</li>
                  <li>считыватели.</li>
                </ul>
              </b-col>
            </b-row>
          </div>
          <div>
            <b-row>
              <b-col>
                <img src="../static/ohr.png">
              </b-col>
              <b-col>
                <h3>Охранная сигнализация:</h3>
                <ul class="text">
                  <li>контрольная панель;</li>
                  <li>датчики движения;</li>
                  <li>устройство оповещения;</li>
                  <li>ключ отключения;</li>
                  <li>кнопка тревоги.</li>
                </ul>
              </b-col>
            </b-row>
          </div>
          <div>
            <b-row>
              <b-col>
                <img src="../static/knopka.jpg">
              </b-col>
              <b-col>
                <h3>Тревожная сигнализация</h3>
                <ul class="text">
                  <li>контрольная панель;</li>
                  <li>механический ключ разблокировки;</li>
                  <li>тревожная кнопка.</li>
                </ul>
              </b-col>
            </b-row>
          </div>
          <div>
            <b-row>
              <b-col>
                <img src="../static/pult.jpg">
              </b-col>
              <b-col>
                <h3>Технические средства пультовой охраны:</h3>
                <ul class="text">
                  <li>датчики состояния охраняемого объекта;</li>
                  <li>модуль связи с центральным охранным пультом;</li>
                  <li>исполнительные устройства разных конфигураций:звуковые и световые системы, блокировка.</li>
                </ul>
              </b-col>
            </b-row>
          </div>
          <div>
            <b-row>
              <b-col>
                <img src="../static/video.jpg">
              </b-col>
              <b-col>
                <h3>Видеонаблюдение:</h3>
                <ul class="text">
                  <li>камеры;</li>
                  <li>записывающие устройства;</li>
                  <li>блоки преобразования данных;</li>
                  <li>устройства вывода информации для охранника (монитор).</li>
                </ul>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-container>
    </div>
    <Myfooter/>
  </div>
</template>

<script>
    export default {
        name: "technical_means"
    }
</script>

<style scoped lang="scss">
  #technical_means{
    background:linear-gradient( to top , #6d7d90, #bbc4d2, #d0d8e2);
  }
  #technical_means_content{
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
    padding-bottom: 3%;
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
    font-size: 1.55rem !important;
    text-shadow: 0.5px 1px 1px #8094aa;
  }
  .flex-container {
    display: flex;
    flex-wrap: wrap;
  }
  .flex-container > div {
    width: 47%;
    margin: 1% 1.5% 1% 1.5% !important;


    .row .col:first-child{
      padding: 0 !important;
    }
    .row .col:nth-child(2){
      padding: 0 13px !important;
    }
    h3{
      text-align: center;
    }
    img{
      margin-top: 5%;
    }
   ul{
     margin-left: -4%;
   }
  }
</style>
