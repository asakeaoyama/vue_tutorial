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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.content {
  height: fit-content;
  flex: 1;
  margin: 0;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

</style>
