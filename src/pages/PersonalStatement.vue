<script setup lang="ts">
import selfie from '@/assets/images/selfie.jpg'
</script>

<template>
  <div class="title">
    <h1>Personal Information</h1>
  </div>
  <br>
  <div class="info">
    <h3>Gabriel Lin</h3>
    <p>Email: <a href="mailto:aoyama07240316@gmail.com">aoyama07240316@gmail.com</a></p>
  </div>
  <br>
  <div class="up_area">
    <img class="headshot" :src="selfie" alt="me">
    <div class="key_value">
      <h3 style="font-style: italic; font-weight: bold; font-size: 2rem">Key Values</h3>
      <li>Programming & Development: Proficient in Java and Python with experience in Object-Oriented Programming and Amazon AWS deployment.</li>
      <li>Machine Learning & AI: Developed image recognition models and fine-tuned language models for medical applications</li>
      <li>Data Analysis & Networking: Skilled in data collection through web scraping; knowledgeable in OSI model and network protocols.</li>
      <li>Proficiency in English: Advanced(IELTS 7.5, C1 Level [Oct, 2024])</li>
    </div>
  </div>
  <br>
  <div class="statement">
    <div class="section">
      <h2>Education</h2>
      <p><strong>National Kaohsiung Normal University</strong><br/>
        No. 62, Shenzhong Rd., Yanchao Dist., Kaohsiung City 824, Taiwan<br/>
        B.Eng. in Software Engineering and Management<br/>
        ▪ GPA 3.73 / 4.0</p>
    </div>
    <div class="section">
      <h2>Work Experiences</h2>

      <p class="organization">Institute for Information Industry</p>
      <p class="job-title">Project Assistant (Intern)</p>
      <ul>
        <li>Tested various RCNN models and algorithms to identify the most efficient ones for iOS deployment, assessing stability and performance.</li>
        <li>Developed an iPadOS application using Swift, integrating CoreML to enable a fracture detection model for use in mobile devices, facilitating physician diagnostics.</li>
        <li>Converted a pre-trained torch.nn model to CoreML and successfully deployed it on an iPad.</li>
      </ul>

      <p><em>LLMs Fine-Tuning Project</em></p>
      <ul>
        <li>Evaluated the stability and response accuracy of several large language models, including Qwen, LLaMA 2, LLaMA 3, and Gemma, specifically in the context of Chinese language processing.</li>
        <li>Developed a web scraper to gather Chinese medical knowledge from various healthcare websites, creating a dialogue-mode dataset.</li>
        <li>Modified the LLaMA-Factory tool to fine-tune selected language models using the organized dataset, optimizing parameters such as learning rate, epochs, and quantization rate.</li>
      </ul>

      <p class="organization">Apple Buds, Inc.</p>
      <p class="job-title">Lecturer</p>
      <ul>
        <li>Instructed students in programming languages including Python, JavaScript, and HTML, fostering a solid understanding of coding concepts.</li>
        <li>Developed and implemented engaging lesson plans and hands-on activities to enhance student learning and retention.</li>
        <li>Assisted students in preparing for relevant certifications, providing guidance and resources to help them achieve their goals.</li>
      </ul>
    </div>

    <div class="section">
      <h2>Research and Projects</h2>

      <p><strong>Capstone Project</strong><br/>
        Fundamental Implementation of Convolutional Neural Network</p>
      <ul>
        <li>Collaborated with a team to develop a convolutional neural network (CNN) from the ground up, focusing on foundational algorithms and concepts rather than relying on established AI frameworks.</li>
        <li>Implemented key components of CNNs, including padding, striding, convolution, neural network architecture, forward propagation, and back-propagation.</li>
        <li>Gained practical insights into adjusting parameters such as stride, padding, epochs, and learning rate for future image recognition projects.</li>
      </ul>

      <p><strong>Web Development Project</strong><br/>
        Dear Reader Web Project with Amazon Web Services (AWS)</p>
      <ul>
        <li>Deployed the web application on AWS EC2, leveraging cloud infrastructure for enhanced scalability and reliability.</li>
        <li>Integrated AWS RDS to establish a relational database, optimizing data management and access for the application.</li>
        <li>Developed expertise in full-stack web development and AWS server architecture.</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.info {
  visibility: visible;
  width: 100%;
  padding: 1rem;
  position: relative;
  background-color: #f9f9f9;
  color: #333;
  font-size: 1.3rem;
  text-align: left;
}
.headshot {
  max-width: 35%;
  height: auto;
  box-sizing: border-box;
}
.up_area {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 64px; /* adjust for sticky navbar height */
  padding: 1rem;
  background-color: #f9f9f9;
  color: #333;
  position: relative;
  max-height: 1000px;
}
.key_value {
  width: 60%;
  font-size: 1.3rem;
  word-wrap: break-word;
}
.statement {
  visibility: visible;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  padding: 1rem;
  max-width: 1200px;
  background-color: #f9f9f9;
  color: #333;
  font-size: 1.3rem;
}
ul {
  padding-left: 1.5rem;
}
.job-title {
  font-weight: bold;
  margin-top: 0.5rem;
}
.organization {
  font-style: italic;
}
.section {
  margin-bottom: 2rem;
}
h3 {
  font-size: 1.7rem;
}

</style>