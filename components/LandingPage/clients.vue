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
  h2{
    margin-top: 0;
    text-align: center;
    font-family: 'Viaoda Libre', cursive;
    padding-bottom: 2%;
    text-shadow: 2px 2.5px 2.5px rgb(15, 37, 56);
    color: #cfdde8;
    font-size: 2.25rem;
    background: transparent;
    font-weight: 500;
    letter-spacing: normal;
    padding-left: 0;
  }

  #Clients{
    padding: 2.5% 0;
    background:linear-gradient( to top left, #304355, #768c9e,#304355);
  }
  .row{
    margin-bottom: 3% !important;
  }
  img{
    box-shadow: 7px 7px 7px rgb(15, 37, 56);
  }

  img{
    width: 100%;
    filter: contrast(110%);
  }
  .col:hover img{
    filter: contrast(130%);
  }
</style>
