<template>
  <div class="place_form">
    <form name="sentMessage" id="Form" @submit.prevent="SendFeedback">
      <label for="name">Ваше имя:</label>
      <input  type="text" class="form-control" placeholder="ФИО" id="name" name="name" required="" data-validation-required-message="Пожалуйста, введите Ваше имя">
      <label for="phone">Ваше телефон:</label>
      <input  type="tel" class="form-control" placeholder="+7(xxx)xxx-xx-xx" pattern="[+]7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}" id="phone" name="phone" required="" data-validation-required-message="Пожалуйста, введите Номер телефона">
      <label for="mail">Ваш E-mail:</label>
      <input  type="email" class="form-control" placeholder="Электронная почта" id="mail" name="mail" required="" data-validation-required-message="Пожалуйста, введите Ваш электронный адрес">
      <label for="message">Ваше сообщение:</label>
      <textarea class="form-control" placeholder="Опишите ваш запрос" id="message" name="message" required="" data-validation-required-message="Пожалуйста, введите сообщение"></textarea>
      <button type="submit" class="justify-content-end">Отправить сообщение</button>
    </form>
  </div>
</template>

<script>
    export default {
        name: "send_form"
    }
</script>

<style scoped>

</style>
