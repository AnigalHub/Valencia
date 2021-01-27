<template>
    <div id="Feedback">
      <b-container>
        <b-row>
          <b-col cols="5">
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
          </b-col>
          <b-col>
            <h2>Свяжитесь с нами!</h2>
            <a href="" class="call_telephone">+7(999)999-99-99</a>
            <p class="text">Оставьте заявку или позвоните по телефону, мы ответим Вам на все интересующие Вас вопросы и представим индивидуальные решения для Вашего объекта.</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
    export default {
        name: "feedback"
    }
</script>

<style scoped>
  #Feedback{
    padding: 2% 0;
    background: url("../../static/LandingPage/55.jpg") 100% 100% no-repeat;
    background-size: 100% 100%;
  }
  h2{
    margin-top: 15%;
    text-decoration: underline;
    text-align: center;
    font-family: 'Viaoda Libre', cursive;
    padding-bottom: 2%;
    text-shadow: 2px 2.5px 2.5px rgb(15, 37, 56);
    color: #cfdde8;
    font-size: 2.8rem;
    background: transparent;
    font-weight: 500;
    letter-spacing: normal;
    padding-left: 0;
  }

  .call_telephone{
    font-size: 3.25rem !important;
    text-align: center;
    transform: scale(1.35);
    display: block;
    font-family: 'Texturina', serif;
    text-shadow: 2px 5px 5px rgb(15, 37, 56);
    color: #cfdde8;
  }

  .text{
    margin-top: 2%;
    font-family: 'Viaoda Libre', cursive;
    font-weight: 500;
    text-shadow: 1px 1px 2px rgb(15, 37, 56);
    font-size: 1.7rem;
    line-height: 2.5rem;
    color: #ffffff;
  }
  .place_form{
    background: rgba(255, 255, 255, 0.35);
  }

</style>
