<template>
    <div id="Map">
      <iframe :src="address.map"></iframe>
    </div>
</template>

<script>
    import Address from "../../static/documents/address.json";
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
