<template>
  <div id="tariffs">
    <Navbar/>
    <div class="padding_h1">
      <div class="place_h1">
        <b-container>
          <h1>Тарифы</h1>
        </b-container>
      </div>
    </div>
    <Tarrifs_content/>
    <Myfooter/>
  </div>
</template>

<script>
  import Navbar from "../components/navbar";
  import Myfooter from "../components/myfooter";
  import Tarrifs_content from "../components/tarrifs/tarrifs_content";

    export default {
        name: "tariffs",
      components: {Tarrifs_content, Myfooter, Navbar},
      data() {
        return {

        }
      }
    }
</script>
<style lang="scss">

</style>
<style scoped lang="scss">
  #tariffs{
    background:linear-gradient( to top , #6d7d90, #bbc4d2, #d0d8e2);
  }
  h1{
    padding-left: 15px;
    font-family: 'Vollkorn', serif;
    font-weight: 600;
  }
  .padding_h1{
    padding-top: 2%;
  }
  .place_h1{
    background: #e8edf5;
    padding: 5px 0;
    margin-bottom: 2%;
  }
  img{
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border-radius: 50%;
  }
  h3{
    font-family: 'Viaoda Libre', cursive;
    padding-bottom: 1%;
    font-weight: 600;
    color: rgb(15, 37, 56);
    letter-spacing: -2.5px;
    text-decoration: underline;
    font-size: 1.6rem !important;
    text-shadow: 0.5px 1px 1px #8094aa;
  }
  h4{
    font-family: 'Vollkorn', serif;
    font-weight: 800 !important;
    color: #09324e;
    display: block;
    padding-bottom: 0.5%;
    margin-bottom: 0 !important;
    text-shadow: 0.5px 0.5px 1px rgb(15, 37, 56);
  }
  .text{
    font-family: 'Vollkorn', serif;
    font-weight: 500; letter-spacing: -1px;
    font-size: 1.4rem;
    line-height: 1.5rem;
    text-shadow: 0.25px 0.5px 0.5px rgb(16, 40, 61);
    color:rgb(15, 37, 56)
  }
  .table .col{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center
  }
  .table .row{
    .col{
      padding: 0 5px !important;
    }
  }
  .col{
    padding: 0 20px !important;
  }
</style>
