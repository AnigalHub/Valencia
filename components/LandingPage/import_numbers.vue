<template>
    <div id="Import_numbers">
      <b-row class="number_row">
        <b-col v-for="(important_number, index) in important_numbers" :key="index">
          <div class="number">{{important_number.number}}</div>
          <p class="text">{{important_number. descr_number}}</p>
        </b-col>
      </b-row>
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
                descr_number: "Лет на рынке",
              },
              {
                number:50,
                descr_number: "Благодарностей и рекомендаций",
              },
              {
                number:564,
                descr_number: "Профессиональных сотрудников",
              },
              {
                number:74,
                descr_number: "Постоянных клиентов",
              },
            ],
          }
      }
    }
</script>

<style scoped>
  #Import_numbers{
    padding: 2.5% 0;
  }
  .number{
    font-size:5rem;
    text-align: center;
    font-family: 'Texturina', serif;
    transform: scale(1.45);
    font-weight: 500;
    letter-spacing: -4px;
    margin-top: -5%;
    text-shadow: 2px 2px 2px rgb(15, 37, 56);
    color: #cfdde8;
  }
  .number_row{
    margin-left: 8% !important;
    margin-right: 8% !important;
  }
  .text{
    font-family: 'Viaoda Libre', cursive;
    font-weight: 700;
    transform: scale(1.05);
    margin-top: -5%;
    font-size: 1.35rem;
    text-align: center;
    text-shadow: 1.5px 2px 2px rgb(15, 37, 56);
    color: #cfdde8;
  }
</style>
