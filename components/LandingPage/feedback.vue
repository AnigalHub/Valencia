<template>
  <div id="Feedback">
    <b-container>
      <b-row>
        <b-col cols="6">
          <Send_form/>
        </b-col>
        <b-col>
          <p class="text_Landing_page">Оставьте заявку или позвоните по телефону, мы ответим Вам на все интересующие Вас вопросы и представим индивидуальные решения по безопасности для Вашего объекта.</p>
          <h2>Свяжитесь с нами!</h2>
          <a :href="information.phone" class="call_telephone">{{information.phone}}</a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
    import Send_form from "../secondary_pages/send_form";
    import Information from "static/documents/information.json"
    export default {
      name: "feedback",
      components: {Send_form},
      data(){
        return{
          information:Information,
        }
      }
    }
</script>

<style scoped>

</style>
