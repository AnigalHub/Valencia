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
          <Send_form/>
        </b-col>
      </b-row>
       <div class="map">
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
    import Send_form from "../components/secondary_pages/send_form";
    export default {
      name: "contact",
      components: {Send_form, Name_page},
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

<style scoped>

</style>
