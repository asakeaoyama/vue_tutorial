<template>
  <footer class="footer">
    <div class="footer-container">
      <p>&copy; 2025 Gabriel's Capability Demonstrations. All rights reserved.</p>
      <ul class="footer-links">
        <li><router-link to="/about">About Me</router-link></li>
        <li><router-link to="/contact">Contact Me</router-link></li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #dedbde;
  color: #2c3e50;
  padding: 0.3rem 1rem;
  width: 100%;
  text-align: center;
  margin: 0;
  justify-content: space-around;
  max-height: 40px;
  align-content: center;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  align-content: center;
}

.footer-links {
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: 0;
  margin: 0;
}

.footer-links a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>