<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">Gabriel's</div>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/personal-statement">Personal Statement</router-link></li>
        <li><router-link to="/demonstrations">Demonstrations</router-link></li>
        <li><router-link to="/dataset-contributions">Dataset Contributions</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: #2c3e50;
  margin: 0;
  padding: 0.75rem 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
}

.logo {
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
}

.nav-links {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>
