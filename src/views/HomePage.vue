<script>
import { CContainer, CRow, CCol } from '@coreui/vue'
import logo from '../assets/logo.png'
import youtube from '../assets/youtube.png'
import reddit from '../assets/reddit.png'
import sentiment from '../assets/sentiment.png'
import analysis from '../assets/analysis.png'
import insights from '../assets/insights.png'

export default {
  setup() {
    return {
      logo,
      youtube,
      reddit,
      sentiment,
      analysis,
      insights,
    }
  },

  components: {
    CContainer,
    CRow,
    CCol,
  },
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

  <section class="home">
    <CContainer>
      <CRow>
        <CCol lg="12">
          <div class="home-content">
            <h1>Welcome to</h1>
            <h1>Comment Analyzer</h1>
            <p>
              Transform YouTube and Reddit comments into valuable insights with sentiment analysis
              to supercharge your engagement!
            </p>
            <div class="buttons">
              <!-- YouTube Button -->
              <router-link to="/youtube" class="btn youtube-btn">
                <img :src="youtube" alt="YouTube Analyzer" />
                <p>YouTube Comment Analyzer</p>
              </router-link>
              <!-- Reddit Button -->
              <router-link to="/reddit" class="btn reddit-btn">
                <img :src="reddit" alt="Reddit Analyzer" />
                <p>Reddit Comment Analyzer</p>
              </router-link>
            </div>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="features">
    <CContainer>
      <CRow>
  <CCol lg="12">
    <h1 style="padding: 20px">Features</h1>
    <div class="card-grid">
      <div class="card">
        <img :src="sentiment" alt="Sentiment Analysis" />
        <h2>Sentiment Analysis</h2>
        <p>
          Understand the emotions behind user comments with precise sentiment detection,
          categorizing them as positive, negative, or neutral.
        </p>
      </div>
      <div class="card">
        <img :src="analysis" alt="Frequent Words" />
        <h2>Frequent Words</h2>
        <p>
          Discover the most commonly used words in positive, negative, and neutral comments.
          This helps uncover common themes, opinions, or trending topics from user feedback.
        </p>
      </div>
      <div class="card">
        <img :src="insights" alt="Top Comments" />
        <h2>Top Comments</h2>
        <p>
          View the most liked or highest-rated comments from YouTube or Reddit posts.
          These highlight the most influential or widely agreed-upon opinions by the community.
        </p>
      </div>
    </div>
  </CCol>
</CRow>

    </CContainer>
  </section>

  <section class="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h1 style="padding: 20px">About Us</h1>
          <p>
            Comment Analyzer is a powerful tool designed to help content creators and businesses
            evaluate user feedback from platforms like YouTube and Reddit. By analyzing comments to
            detect sentiment, categorized as positive, negative, or neutral, and it simplifies the
            process of gauging audience reactions.
          </p>
          <p>
            The platform also provides actionable insights and trends, enabling users to refine
            their content strategies and boost engagement. With Comment Analyzer, user feedback
            becomes a valuable resource for creating impactful and engaging content.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.navbar {
  width: 100vw;
  background: linear-gradient(
    90deg,
    rgb(98, 0, 238) 40%,
    /* Purple dominates the first 60% */ rgb(98, 0, 238) 55%,
    /* Smooth blending zone starts here */ rgb(255, 0, 128) 100% /* Pink takes over by 80% */
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
  color: white;
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
  background: rgba(255, 255, 255, 0.2); /* Semi-transparent hover background */
  color: #ff69b4; /* Light pink hover color */
}

.about {
  background-color: #140836; /* Light background color for contrast */
  text-align: center;
  width: 100vw; /* Full viewport width */
  height: 400px; /* Full viewport height */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center; /* Centers the content */
}

.about .container {
  max-width: 1140px; /* Maximum width for better readability */
  margin: 0 auto; /* Center the container */
}

.about h1 {
  font-size: 36px;
  color: #ffffff; /* Dark text color */
  margin-bottom: 20px;
  text-align: center; /* Center the heading */
}

.about p {
  font-size: 18px;
  line-height: 1.6;
  color: #bebebe; /* Slightly lighter color for the paragraph */
  margin-bottom: 15px;
  text-align: center; /* Center the text */
}

.features {
  width: 100vw;
  background-color: #ffffff;
  padding: 100px 20px 60px; /* ⬅ Top padding increased to clear sticky navbar */
  text-align: center;
  position: relative;
  z-index: 1;
}


.features h1 {
  font-size: 36px;
  color: #000000;
  margin-bottom: 40px;
}

.features .card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  justify-content: center;
}

.features .card {
  background-color: #f9f9f9;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  padding: 30px 20px;
  max-width: 300px;
  flex: 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1; /* below navbar */
}

.features .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}

.features .card img {
  width: 80px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.features .card img:hover {
  transform: scale(1.1);
}

.features .card h2 {
  font-size: 22px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 15px;
}

.features .card p {
  font-size: 16px;
  color: #555555;
  line-height: 1.5;
}

.home-content {
  text-align: center; /* Centers text inside the home-content div */
  display: flex; /* Enables flexbox */
  flex-direction: column; /* Aligns the content vertically */
  justify-content: center; /* Vertically centers the content */
  align-items: center; /* Horizontally centers the content */
  height: 100%; /* Ensures it takes full height within its container */
}

.home {
  width: 100vw; /* Full viewport width */
  height: 100vh; /* Full viewport height */
  background-image: url('@/assets/homebg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center; /* Centers the content */
  color: white;
}

.buttons {
  margin-top: 30px; /* Adds space between the text and buttons */
  display: flex;
  gap: 20px; /* Adds space between the buttons */
}

.home .btn {
  background: transparent; /* White background for buttons */
  border-color: white; /* No border for buttons */
  border-radius: 5px;
  padding: 15px 25px; /* Padding for better button size */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Adds shadow for depth */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition effects */
}

.home .btn img {
  width: 50px; /* Adjust image size */
  height: auto;
  margin-right: 10px; /* Space between image and text */
}

.btn p {
  font-size: 16px;
  font-weight: bold;
  margin: 0; /* Removes margin for the text */
  color: #ffffff; /* Dark text color */
}

.youtube-btn:hover,
.reddit-btn:hover {
  background-color: white;
  transform: scale(1.1); /* Scales the button on hover */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); /* Increases shadow on hover */
}

.youtube-btn:hover p,
.reddit-btn:hover p {
  color: #000000; /* Changes text color to black on hover */
}

.youtube-btn:hover img,
.reddit-btn:hover img {
  opacity: 0.9; /* Slightly reduces image opacity on hover */
}

.navbar-brand img {
  border-radius: 50%;
  margin-right: 10px;
}

.nav-link {
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffc107; /* Change link color on hover */
}
</style>