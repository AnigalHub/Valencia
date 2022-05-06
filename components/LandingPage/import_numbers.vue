<template>
    <div id="Import_numbers">
      <b-container>
        <div class="flex-container">
          <div v-for="(important_number, index) in important_numbers" :key="index">
            <div class="number">{{important_number.number}}</div>
            <p class="text_Landing_page" v-html="important_number. descr_number"></p>
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
            {number:15, descr_number: "Лет на рынке <br> безопасности",},
            {number:564, descr_number: "Профессиональных сотрудников",},
            {number:50, descr_number: "Благодарностей <br> и рекомендаций",},
            {number:74, descr_number: "Постоянных <br> клиентов",},
          ],
        }
      }
    }
</script>

<style scoped>


</style>
