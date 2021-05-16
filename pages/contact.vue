<template>
  <div id="contact" class="page">
    <Name_page :name_page="name_page"/>
    <b-container>
      <b-row class="important_row">
        <b-col>
          <h2>Общество с ограниченной ответственностью частное охранное предприятие "Валенсия"</h2>
          <div class="flex-container">
            <b-row v-for="information in CompanyInformation" :key="information.index">
              <b-col cols="1">
                <component :is="information.svg"/>
              </b-col>
              <b-col>
                <p class="text"><b>{{information.name}}: </b>
                  <a :href="information.link" > {{information.description}} </a>
                </p>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col cols="5">
          <Send_form/>
        </b-col>
      </b-row>
       <div class="map">
          <iframe :src="address.map" title="адрес_компании_Валенсия"></iframe>
       </div>
      </b-container>
  </div>
</template>

<script>
    import Name_page from "../components/secondary_pages/name_page";
    import TelephoneSVG from "../components/contact_svg/telephone_svg";
    import EmailSVG from "../components/contact_svg/email_svg";
    import OpeningHoursSVG from "../components/contact_svg/opening_hours_svg";
    import AddressSVG from "../components/contact_svg/address_svg";
    import Send_form from "../components/secondary_pages/send_form";
    import Address from "static/documents/address.json"
    export default {
      name: "contact",
      components: {Send_form, Name_page},
      data() {
        return {
          address:Address,
          name_page:"Контакты",
          CompanyInformation:[
            {svg:OpeningHoursSVG, name:"Часы работы", description:Address.working_hours,},
            {svg:AddressSVG, name:"Адрес", description:Address.address,},
            {svg:TelephoneSVG, name:"Телефон", description:Address.phone, link:'tel:' + Address.phone},
            {svg:EmailSVG, name:"Email", description:Address.mail, link:'mailto:'+ Address.mail},
          ]
        }
      }
    }
</script>

<style scoped>

</style>
