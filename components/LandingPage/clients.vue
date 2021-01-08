<template>
    <div id="Clients">
      <b-container>
        <h2>Наши клиенты</h2>
        <b-row>
          <b-col>
            <img src="../../static/41.jpg">
          </b-col>
          <b-col>
            <img src="../../static/42.jpg">
          </b-col>
          <b-col>
            <img src="../../static/43.jpg">
          </b-col>
        </b-row>
      </b-container>

    </div>
</template>

<script>
    export default {
        name: "clients"
    }
</script>

<style scoped>
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
