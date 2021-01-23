<template>
  <div class="place_h1">
    <b-container>
      <h1>{{name_page}}</h1>
    </b-container>
  </div>
</template>

<script>
    export default {
      name: "name_page",
      props:{
        name_page: String
        }
    }
</script>

<style scoped>
  h1{
    padding-left: 15px;
    font-family: 'Vollkorn', serif;
    font-weight: 600;
  }
  .place_h1{
    background: #bcc6d4;
    padding: 5px 0;
    margin-bottom: 2%;
  }
</style>
