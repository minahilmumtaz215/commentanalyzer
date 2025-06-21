<template>
  <div>
    <NavbarYoutube />

    <div class="background-container">
      <div class="content">
        <h1>YouTube Comment Analyzer</h1>
        <input v-model="videoURL" placeholder="Enter YouTube video URL" />
        <button @click="analyzeComments" :disabled="loading">
          {{ loading ? 'Analyzing...' : 'Analyze' }}
        </button>
        <p v-if="error">{{ error }}</p>

        <!-- Loader inside content box -->
        <div v-if="loading" class="loading-inside">
          <span class="loader"></span> Analyzing comments...
        </div>
      </div>

      <div v-if="analysisResult" class="results">
        <div class="chart-grid">
          <BarChart
            :data="{
              labels: Object.keys(analysisResult.sentiment_distribution),
              values: Object.values(analysisResult.sentiment_distribution),
              label: 'Sentiment Count',
            }"
          />
          <TopComments :comments="analysisResult.top_comments" />
        </div>
        <FrequentWordsChart :sentimentWords="analysisResult.frequent_words" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavbarYoutube from '@/components/NavbarYoutube.vue'
import FrequentWordsChart from '@/components/FrequentWordsChart.vue'
import TopComments from '@/components/TopComments.vue'
import BarChart from '@/components/BarChart.vue'

const videoURL = ref('')
const error = ref('')
const analysisResult = ref(null)
const loading = ref(false)

const analyzeComments = async () => {
  error.value = ''
  analysisResult.value = null
  loading.value = true

  try {
    const encodedURL = encodeURIComponent(videoURL.value)
    const response = await fetch(`http://127.0.0.1:8000/analyze?video_url=${encodedURL}`)
    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.detail || 'Analysis failed')
    }

    analysisResult.value = result
  } catch (err) {
    error.value = 'Failed to analyze video comments.'
    console.error(err)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.background-container {
  background-image: url('@/assets/youtubebg.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  box-sizing: border-box;
  overflow-x: hidden;
}

.content {
  background-color: rgba(144, 116, 116, 0.48);
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: auto;
  width: 100%;
  position: relative;
}

input {
  padding: 10px;
  margin-right: 10px;
  width: 300px;
}

button {
  padding: 10px 20px;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #888;
  cursor: not-allowed;
}

button:hover:enabled {
  background-color: #cc0000;
}

p {
  margin-top: 15px;
  color: red;
}

.results {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}

.chart-grid {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 30px;
  max-width: 1300px;
  justify-content: center;
  align-items: stretch;
}

@media (min-width: 768px) {
  .chart-grid {
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
  }

  .chart-grid > * {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
  }
}

/* Loader inside content box */
.loading-inside {
  margin-top: 20px;
  font-size: 16px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 3px solid #ccc;
  border-top: 3px solid #ff0000;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 8px;
  vertical-align: middle;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
