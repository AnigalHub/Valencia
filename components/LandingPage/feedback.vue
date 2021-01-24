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
  label{
    font-weight: 800;
    font-size: 1.25rem;
    text-shadow: 0.5px 0.5px 1px white;
    color: rgb(15, 37, 56);
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
    padding: 3%;
    border-radius: 10px;
    box-shadow: 7px 7px 7px rgb(15, 37, 56);
    margin-top: 1.5%;
  }
  input{
    padding: 20px 10px;
    min-height: 1.5rem;
    margin-bottom: 1%;
  }
  input,textarea{
    background: #cfdde8;
    box-shadow: 2px 2px 2px rgb(15, 37, 56);
    font-weight: 700;
  }
  input:hover, textarea:hover{
    box-shadow: 7px 7px 7px rgb(15, 37, 56);
  }
  textarea{
    height: 15vh !important;
  }
  button{
    display: block;
    margin: 3% auto 0 auto;
    padding:  2%;
    font-weight: 600;
    font-family: "Tenor Sans", sans-serif;
    font-size: 1.1rem;
    border-width: 2px 0;
    border-style: solid none;
    border-color: rgb(15, 37, 56) rgb(15, 37, 56) rgb(15, 37, 56);
    border-radius: 6px;
    background:radial-gradient(#acb1c2, #afb3cb, rgba(64, 107, 139, 0.65));
    box-shadow: 2px 2px 2px rgb(15, 37, 56);
    transition: 0.2s;
  }
  button:hover { background: linear-gradient(#eee0d7, #eee0d7) #d6c8bf; }
  button:active { background: linear-gradient(#b6a89f, #eee0d7) #d6c8bf; }
</style>
