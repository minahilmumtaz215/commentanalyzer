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
      errorMessage: ''
    }
  },
  methods: {
    async submitForm() {
      this.successMessage = ''
      this.errorMessage = ''

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
              <button type="submit" class="submit-btn">Send Message</button>
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

.navbar {
  width: 100vw;
  background: linear-gradient(
    90deg,
    rgb(0, 0, 0) 40%,
    /* Purple dominates the first 60% */ rgb(0, 0, 0) 55%,
    /* Smooth blending zone starts here */ rgb(255, 255, 255) 100% /* Pink takes over by 80% */
  ); /* Gradient Background */
  padding: 10px 20px; /* Spacing for the navbar */
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
  color: white; /* White text for the brand */
  text-decoration: none;
}

.navbar .navbar-brand:hover {
  color: white; /* Keep the color white on hover */
  background: none; /* No background change */
}

.navbar .navbar-links {
  list-style: none; /* Remove bullets */
  display: flex;
  gap: 20px; /* Spacing between links */
  margin: 0;
  padding: 0;
}

.navbar .navbar-links a {
  color: white; /* White text for links */
  text-decoration: none; /* Remove underline */
  font-size: 16px;
  transition: color 0.3s ease, background 0.3s ease;
  padding: 5px 10px; /* Add padding for hover background */
  border-radius: 5px; /* Rounded hover background */
}

.navbar .navbar-links a:hover {
  background: rgba(0, 0, 0, 0.3); /* Light black hover background */
  color: white; /* White text on hover */
}

.feedback-content {
  text-align: center; /* Centers the text */
  display: flex; /* Enables flexbox for alignment */
  flex-direction: column; /* Aligns elements vertically */
  justify-content: center; /* Centers the content vertically */
  align-items: center; /* Centers the content horizontally */
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

/* Contact Form Styles */
.contact-form {
  max-width: 600px;
  width: 100%;
  background-color: rgba(245, 245, 245, 0.5); /* Semi-transparent white */
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.form-group {
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  padding: 12px 15px;
  font-size: 1rem;
  border: 2px solid #fff; /* Orange border */
  border-radius: 5px;
  outline: none;
  color: #333;
}

.input-field::placeholder {
  color: #999;
}

.textarea {
  height: 120px; /* Larger height for textarea */
  resize: none; /* Disable resizing */
}

.input-field:focus {
  border-color: #626262; /* Highlighted border color */
  background-color: #f7f7f7; /* Subtle orange background */
}

/* Submit Button */
.submit-btn {
  background-color: black; /* Orange button */
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

.submit-btn:hover {
  background-color: white; /* Darker orange on hover */
  color: black;
}
</style>