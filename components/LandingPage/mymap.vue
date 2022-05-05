<template>
  <div id="Map">
    <iframe :src="address.map" title="адрес_компании"></iframe>
  </div>
</template>

<script>
    import Address from "../../static/documents/information.json";
    export default {
      name: "mymap",
      data() {
        return {
          address: Address,
        }
      }
    }
</script>

<style scoped>

</style>
