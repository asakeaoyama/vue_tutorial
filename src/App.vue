<script setup>
  import NavBar from "./components/NavBar.vue";
  import Footer from "./components/Footer.vue";

</script>

<template>

  <div class="layout">

    <NavBar />
    <div class="content">
      <router-view />
    </div>

    <Footer />


  </div>
</template>

<style scoped>
.layout {

  min-height: 100vh;
  width: 100%;
  height: 100vh;
}

.content {
  height: fit-content;

  padding: 60px 0 10px 0;
  background: #ffffff;
}

</style>
