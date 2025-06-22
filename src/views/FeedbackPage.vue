<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      successMessage: '',
      errorMessage: '',
      isLoading: false // Loading state
    }
  },
  methods: {
    async submitForm() {
      this.successMessage = ''
      this.errorMessage = ''
      this.isLoading = true

      try {
        const response = await axios.post('https://commentanalyzer.vercel.app/api/feedback', this.form)

        if (response.status === 201) {
          this.successMessage = 'Feedback submitted successfully!'
          this.form = { name: '', email: '', message: '' }
        } else {
          this.errorMessage = 'Failed to submit feedback.'
        }
      } catch (error) {
        console.error('❌ Error:', error)
        this.errorMessage = 'Something went wrong. Please try again later.'
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<template>
  <section class="navbar">
    <nav>
      <router-link class="navbar-brand" to="/">Comment Analyzer</router-link>
      <ul class="navbar-links">
        <li><router-link to="/youtube">Youtube</router-link></li>
        <li><router-link to="/reddit">Reddit</router-link></li>
        <li><router-link to="/feedback">Contact Us</router-link></li>
      </ul>
    </nav>
  </section>

  <section class="feedback">
    <CContainer>
      <CRow>
        <CCol lg="12">
          <div class="feedback-content">
            <h1>Contact Us</h1>
            <p>
              We'd love to hear from you! Please fill out the form below and we'll get back to you
              soon.
            </p>
            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-group">
                <input
                  v-model="form.name"
                  type="text"
                  name="name"
                  class="input-field"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  v-model="form.email"
                  type="email"
                  name="email"
                  class="input-field"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div class="form-group">
                <textarea
                  v-model="form.message"
                  name="message"
                  class="input-field textarea"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button type="submit" class="submit-btn" :disabled="isLoading">
                {{ isLoading ? 'Sending...' : 'Send Message' }}
              </button>

              <!-- Optional spinner -->
              <div v-if="isLoading" class="spinner"></div>

              <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
              <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
            </form>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </section>
</template>

<style scoped>
.success-message {
  color: green;
  margin-top: 10px;
}

.error-message {
  color: red;
  margin-top: 10px;
}

.loading-text {
  color: white;
  margin-top: 10px;
  font-style: italic;
}

.spinner {
  margin: 10px auto;
  width: 30px;
  height: 30px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid black;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.submit-btn:disabled {
  background-color: #999;
  cursor: not-allowed;
}

.navbar {
  width: 100vw;
  background: linear-gradient(
    90deg,
    rgb(0, 0, 0) 40%,
    rgb(0, 0, 0) 55%,
    rgb(255, 255, 255) 100%
  );
  padding: 10px 20px;
  position: sticky;
  top: 0;
}

.navbar nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar .navbar-brand {
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.navbar .navbar-brand:hover {
  color: white;
  background: none;
}

.navbar .navbar-links {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.navbar .navbar-links a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease, background 0.3s ease;
  padding: 5px 10px;
  border-radius: 5px;
}

.navbar .navbar-links a:hover {
  background: rgba(0, 0, 0, 0.3);
  color: white;
}

.feedback-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.feedback {
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/feedbackbg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.contact-form {
  max-width: 600px;
  width: 100%;
  background-color: rgba(245, 245, 245, 0.5);
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  padding: 12px 15px;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 5px;
  outline: none;
  color: #333;
}

.input-field::placeholder {
  color: #999;
}

.textarea {
  height: 120px;
  resize: none;
}

.input-field:focus {
  border-color: #626262;
  background-color: #f7f7f7;
}

.submit-btn {
  background-color: black;
  color: #fff;
  border: none;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.submit-btn:hover:enabled {
  background-color: white;
  color: black;
}
</style>
