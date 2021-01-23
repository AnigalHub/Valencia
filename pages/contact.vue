<template>
  <div id="contact" class="page">
    <Name_page :name_page="name_page"/>
    <b-container>
      <b-row class="important_row">
        <b-col>
          <h2>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ ЧАСТНОЕ ОХРАННОЕ ПРЕДПРИЯТИЕ "ВАЛЕНСИЯ"</h2>
          <b-row v-for="information in CompanyInformation" :key="information.index">
            <b-col cols="1">
              <component :is="information.svg"/>
            </b-col>
            <b-col>
              <p class="text"><b>{{information.name}}:</b>{{information.description}}</p>
            </b-col>
          </b-row>
        </b-col>
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
      </b-row>
       <div class="feature map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8997.279426882762!2d37.87389096693673!3d55.68342660596789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab623148677f3%3A0xdecc2cd8ad0aba7b!2z0YPQuy4g0JrRgNCw0YHQvdCw0Y8sIDEsINCb0Y7QsdC10YDRhtGLLCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCAxNDAwMDA!5e0!3m2!1sru!2sru!4v1609692951081!5m2!1sru!2sru" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
       </div>
      </b-container>
  </div>
</template>

<script>
    import Secondary_pages from "../components/secondary_pages/secondary_pages.scss";
    import Name_page from "../components/secondary_pages/name_page";
    import TelephoneSVG from "../components/contact_svg/telephone_svg";
    import EmailSVG from "../components/contact_svg/email_svg";
    import OpeningHoursSVG from "../components/contact_svg/opening_hours_svg";
    import UndergroundSVG from "../components/contact_svg/underground_svg";
    import AddressSVG from "../components/contact_svg/address_svg";
    export default {
      name: "contact",
      components: {Name_page},
      data() {
        return {
          name_page:"Контакты",
          CompanyInformation:[
            {svg:TelephoneSVG, name:"Телефон", description:" +7(999)999-99-99",},
            {svg:EmailSVG, name:"Email", description:" valencia@yandex.ru",},
            {svg:OpeningHoursSVG, name:"Часы работы", description:" Пн.-Пт., 9:00-18:00",},
            {svg:UndergroundSVG, name:"Метро", description:" Жулебино, Котельники",},
            {svg:AddressSVG, name:"Адрес", description:" Московская обл., г. Люберцы, улица Красная, 1, этаж 8, комната 24",},
          ]
        }
      }
    }
</script>

<style scoped lang="scss">
  .row{
    padding-bottom: 2%;
  }
  .col .row{
    padding-bottom: 1%;
  }
  .col .col{
    height: 55px;
    display: flex;
    align-items: center
  }
  svg{
    width: 50px;
    height: 50px;
  }
  label{
    font-weight: 800;
    font-size: 1.25rem;
    text-shadow: 0.5px 0.5px 1px white;
    color: rgb(15, 37, 56);
  }
  .place_form{
    background: #e8edf5;
    padding: 3%;
    border-radius: 10px;
    box-shadow: 7px 7px 7px rgb(15, 37, 56);
    margin-top: 1.5%;
  }
  .col-5{
    padding-right: 2.5%;
  }
  input{
    padding: 20px 10px;
    min-height: 1.2rem;
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
    height: 13vh !important;
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
  .feature.map {
    box-shadow: 7px 7px 7px rgb(15, 37, 56);
    iframe {
      filter: opacity(75%) brightness(95%) contrast(110%);
      min-height: 500px;
      height: auto;
      width:100% !important;
      border:0;

      box-shadow: none !important;
    }
  }
</style>
