<template>
    <div id="Home">
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
      >
        <b-carousel-slide
          img-src="1.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="4.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="2.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </div>
</template>

<script>
    export default {
        name: "home",
      data(){
        return{

        }
      }
    }
</script>
<style>
  .img-fluid {
    height: 93vh !important;

  }
  .w-100{
    filter: brightness(50%) blur(1px) !important;

  }
</style>
<style scoped>

</style>
