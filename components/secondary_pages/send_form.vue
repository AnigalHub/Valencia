<template>
  <div class="place_form">
    <form name="sentMessage" id="Form" @submit.prevent="SendFeedback">
      <label for="name">Ваше имя:</label>
      <input v-model="feedback.name" type="text" class="form-control" placeholder="ФИО" id="name" name="name" required="" data-validation-required-message="Пожалуйста, введите Ваше имя">
      <label for="phone">Ваш телефон:</label>
      <input v-model="feedback.phone" type="tel" class="form-control" placeholder="+7(xxx)xxx-xx-xx" pattern="[+]7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}" id="phone" name="phone" required="" data-validation-required-message="Пожалуйста, введите Номер телефона">
      <p class="text_descr" style="text-align: center;font-weight: bold">
        <input type="checkbox" class="checkbox"/>
       Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p>
      <button type="submit" class="justify-content-end">Отправить заявку</button>
    </form>
  </div>
</template>

<script>
    export default {
      name: "send_form",
      data(){
        return {
          feedback:{
            name: '',
            phone: '',
            email: '',
            message: '',
          }
        }
      },
    }
</script>

<style scoped>

</style>
