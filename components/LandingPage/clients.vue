<template>
    <div id="Clients">
      <b-container>
        <h2>Наши клиенты</h2>
        <b-row>
          <b-col>
            <img src="../../static/our_clients/school_25.jpg" alt="моу_сош_25">
          </b-col>
          <b-col>
            <img src="../../static/our_clients/school_17.jpg" alt="моу_школа_17">
          </b-col>
          <b-col>
            <img src="../../static/our_clients/lyubertsy_administration.jpg" alt="администрация_городского_округа_люберцы">
          </b-col>
        </b-row>
      </b-container>

    </div>
</template>

<script>
    export default {
        name: "clients",
    }
</script>

<style scoped>
  #Clients{
    padding: 2.5% 0;
    background:linear-gradient( to bottom, #36506c, #718199,#718199, #36506c);
    filter: brightness(80%);
  }
  h2{
    text-decoration: underline;
    margin-top: 0 !important;
    text-align: center;
    font-family: 'Yeseva One', cursive;
    padding-bottom: 2%;
    text-shadow: 2px 2.5px 2.5px rgb(15, 37, 56);
    color: rgba(255, 255, 255, 0.86);
    font-size: 2.2rem;
    background: transparent;
    font-weight: 500;
    letter-spacing: -.5px;
    padding-left: 0;
  }
  .row{
    margin-bottom: 3% !important;
  }
  img{
    box-shadow: 7px 7px 7px rgb(15, 37, 56);
  }

  img{
    width: 100%;
    filter:  brightness(110%) brightness(75%)!important;
  }
  .col:hover img{
    filter: brightness(100%)!important;
  }
</style>
