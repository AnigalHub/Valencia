<template>
  <div id="contact" class="page">
    <b-container>
      <h1>{{name_page}}</h1>
      <b-row class="important_row">
        <b-col>
          <h2>Частное охранное предприятие «{{information.name_company}}»</h2>
          <div class="flex-container">
            <b-row v-for="company_information in CompanyInformation" :key="information.index">
              <b-col cols="1">
                <component :is="company_information.svg"/>
              </b-col>
              <b-col>
                <p class="text"><b>{{company_information.name}}: </b>
                  <a :href="company_information.link" > {{company_information.description}} </a>
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
          <iframe :src="information.map" title="адрес_компании"></iframe>
       </div>
      </b-container>
  </div>
</template>

<script>
    import TelephoneSVG from "../components/contact_svg/telephone_svg";
    import EmailSVG from "../components/contact_svg/email_svg";
    import OpeningHoursSVG from "../components/contact_svg/opening_hours_svg";
    import AddressSVG from "../components/contact_svg/address_svg";
    import Send_form from "../components/secondary_pages/send_form";
    import Information from "static/documents/information.json"
    export default {
      name: "contact",
      components: {Send_form},
      data() {
        return {
          information:Information,
          name_page:"Контакты",
          CompanyInformation:[
            {svg:OpeningHoursSVG, name:"Часы работы", description:Information.working_hours,},
            {svg:AddressSVG, name:"Адрес", description:Information.address,},
            {svg:TelephoneSVG, name:"Телефон", description:Information.phone, link:'tel:' + Information.phone},
            {svg:EmailSVG, name:"Email", description:Information.mail, link:'mailto:'+ Information.mail},
          ]
        }
      }
    }
</script>

<style scoped>

</style>
