<template>
    <div id="Import_numbers">
      <b-container>
        <div class="flex-container">
          <div v-for="(important_number, index) in important_numbers" :key="index">
            <div class="number">{{important_number.number}}</div>
            <p class="text1" v-html="important_number. descr_number"></p>
          </div>
        </div>
      </b-container>
    </div>
</template>

<script>
    export default {
        name: "import_numbers",
      data(){
          return{
            important_numbers:[
              {
                number:15,
                descr_number: "Лет на рынке <br> безопасности",
              },
              {
                number:564,
                descr_number: "Профессиональных сотрудников",
              },
              {
                number:50,
                descr_number: "Благодарностей и рекомендаций",
              },
              {
                number:74,
                descr_number: "Постоянных <br> клиентов",
              },
            ],
          }
      }
    }
</script>

<style scoped>

  .number{
    font-size:5rem;
    text-align: center;
    font-family: 'Vollkorn', serif;
    font-weight: 400;
    text-shadow: 2px 2px 2px rgb(15, 37, 56);
    transform: scale(1.35);
    letter-spacing: -4px;
    margin-top: -5%;
    color: white;
  }
  .flex-container{
    margin-left: 8% !important;
    margin-right: 8% !important;
  }
  .flex-container > div {
    width: 20%;
    padding: 0.25%;
    margin: 1.5% 1% 0.5% 1% !important;
  }
  .text1{
    font-family: 'Source Serif Pro', serif;
    line-height: 1.4rem;
    transform: scale(1.05);
    margin-top: -5%;
    font-size: 1.35rem;
    text-align: center;
    font-weight: 600;
    letter-spacing: -1px;
    text-shadow: 0 2.5px 0  rgb(15, 37, 56) !important;
    color: white;
  }
</style>
