<template>
    <div id="Feedback">
      <b-container>
        <b-row>
          <b-col cols="6">
           <Send_form/>
          </b-col>
          <b-col>
            <p class="textLandingPage">Оставьте заявку или позвоните по телефону, мы ответим Вам на все интересующие Вас вопросы и представим индивидуальные решения для Вашего объекта.</p>
            <h2>Свяжитесь с нами!</h2>
            <a href="" class="call_telephone">+7(999)999-99-99</a>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
    import Send_form from "../secondary_pages/send_form";
    export default {
      name: "feedback",
      components: {Send_form}
    }
</script>

<style scoped>

</style>
