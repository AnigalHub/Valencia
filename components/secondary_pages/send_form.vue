<template>
  <div>
    <form name="sentMessage" id="Form">
      <label for="name">Ваше имя:</label>
      <input v-model="feedback.name" type="text" class="form-control" id="name" name="name" data-validation-required-message="Пожалуйста, введите Ваше имя">
      <label for="phone">Ваш телефон:</label>
      <input v-model="feedback.phone" type="tel" class="form-control" v-mask="'+7 (###) ###-##-##'" id="phone" name="phone" data-validation-required-message="Пожалуйста, введите Номер телефона">
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
