<template>
  <div class="analysis-container">
    <!-- Remove or comment this out since unused -->
    <!--
    <div class="word-box">
      <h2>Frequent words</h2>
      <ul class="frequent-words-list">
          <li v-for="(entry, index) in words" :key="index">
            {{ entry.word }} ({{ entry.count }})
          </li>
      </ul>
    </div>
    -->

    <div class="sentiment-charts">
      <div class="sentiment-chart positive">
        <WordFrequencyChart 
          v-if="sentimentWords.positive_words.length > 0"
          :words="sentimentWords.positive_words"
          color="#4CAF50"
          title="Positive Words"
        />
        <p v-else class="no-data">No positive words found</p>
      </div>
      
      <div class="sentiment-chart negative">
        <WordFrequencyChart 
          v-if="sentimentWords.negative_words.length > 0"
          :words="sentimentWords.negative_words"
          color="#F44336"
          title="Negative Words"
        />
        <p v-else class="no-data">No negative words found</p>
      </div>
      
      <div class="sentiment-chart neutral">
        <WordFrequencyChart 
          v-if="sentimentWords.neutral_words.length > 0"
          :words="sentimentWords.neutral_words"
          color="#9E9E9E"
          title="Neutral Words"
        />
        <p v-else class="no-data">No neutral words found</p>
      </div>
    </div>
  </div>
</template>

<script>
import WordFrequencyChart from './WordFrequencyChart.vue';

export default {
  components: {
    WordFrequencyChart
  },
  props: {
    sentimentWords: {
      type: Object,
      default: () => ({
        positive_words: [],
        negative_words: [],
        neutral_words: []
      })
    }
  }
};
</script>

<style>
.analysis-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
}

/* Keep .word-box styles if you keep the div but hidden */
.word-box {
  display: none;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.word-box h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}

.frequent-words-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
}

.frequent-words-list li {
  background: #e0e0e0;
  padding: 0.5rem 1rem;
  border-radius: 20px;
}

.sentiment-charts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.sentiment-chart {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.no-data {
  text-align: center;
  color: #777;
  padding: 1rem;
}
</style>
