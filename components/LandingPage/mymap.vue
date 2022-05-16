<template>
  <div id="Map">
    <iframe :src="information.map" title="адрес_компании"></iframe>
  </div>
</template>

<script>
    import Information from "../../static/documents/information.json";
    export default {
      name: "mymap",
      data() {
        return {
          information: Information,
        }
      }
    }
</script>

<style scoped>

</style>
