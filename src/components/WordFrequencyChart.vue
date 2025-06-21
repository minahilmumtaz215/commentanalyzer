<template>
    <div class="chart-container">
      <h2>{{ title }}</h2>
      <div class="chart-wrapper">
        <canvas ref="barChartCanvas"></canvas>
      </div>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  
  export default {
    props: {
      words: {
        type: Array,
        default: () => []
      },
      color: {
        type: String,
        default: '#4CAF50'
      },
      title: {
        type: String,
        default: 'Word Frequency'
      }
    },
    mounted() {
      this.renderChart();
    },
    watch: {
      words() {
        this.renderChart();
      }
    },
    methods: {
  renderChart() {
    const ctx = this.$refs.barChartCanvas;

    // words prop is an array of objects: [{ word: 'happy', count: 5 }, ...]
    // Extract labels and data directly
    const labels = this.words.map(entry => entry.word);
    const data = this.words.map(entry => entry.count);

    // Clear previous chart if it exists
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    this.chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Word Frequency',
          data: data,
          backgroundColor: this.color,
          borderColor: this.color,
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          title: { display: false }
        },
        scales: {
          x: {
            beginAtZero: true,
            grid: { display: false },
            ticks: {
              color: '#444',
              font: {
                size: 12,
                weight: '500'
              }
            }
          },
          y: {
            grid: { display: false },
            ticks: {
              color: '#444',
              font: {
                size: 12,
                weight: '500'
              }
            }
          }
        }
      }
    });
  }
},

    beforeUnmount() {
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }
    }
  };
  </script>
  
  <style scoped>
  .chart-container {
    background: white;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 1000px;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  
  .chart-wrapper {
    flex: 1;
    position: relative;
    height: 100%;
    min-height: 300px;
  }
  
  canvas {
    max-width: 100%;
    height: auto;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  </style>
  