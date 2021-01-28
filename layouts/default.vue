<template>
  <div>
    <Navbar/>
    <Nuxt/>
    <Myfooter/>
  </div>
</template>

<style scoped lang="scss">
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
<script>
  import Styles from "../components/secondary_pages/styles.scss";
  import Navbar from "../components/navbar";
  import Myfooter from "../components/myfooter";
  export default {
    components: {Myfooter, Navbar}
  }
</script>
