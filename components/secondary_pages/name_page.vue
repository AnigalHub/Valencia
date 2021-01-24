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

</style>
