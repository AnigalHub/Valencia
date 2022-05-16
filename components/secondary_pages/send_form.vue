<template>
  <div>
    <form name="sentMessage" id="Form">
      <label for="name">Ваше имя:</label>
      <input v-model="feedback.name" class="form-control" id="name"  data-validation-required-message="Пожалуйста, введите Ваше имя">
      <label for="phone">Ваш телефон:</label>
      <input v-model="feedback.phone" class="form-control" v-mask="'+7 (###) ###-##-##'" id="phone"  data-validation-required-message="Пожалуйста, введите Номер телефона">
      <p class="text_descr" style="text-align: center;">
        <input type="checkbox" class="checkbox"/>Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
      </p>
      <button type="submit" :disabled="buttonDisabled">Отправить заявку</button>
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
        }
      }
    },
    computed:{
      buttonDisabled(){
        if (this.feedback.name && this.feedback.phone) {
          return false;
        }
        return true;
      },
    },
  }
</script>

<style scoped>

</style>
