<template>
  <div class="chart-container">
    <h2>Contribution to Sentiment</h2>
    <div class="chart-wrapper">
      <canvas ref="barChartCanvas"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  props: ['data'],
  mounted() {
    const ctx = this.$refs.barChartCanvas;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.data.labels || [
          "Positive", "Neutral", "Negative"
        ],
        datasets: [
          {
            label: this.data.label || 'Sentiment Distribution',
            data: this.data.values || [0, 0, 0, 0, 0],
            backgroundColor: this.data.colors || [
              '#a3e4d7',  // Positive
              '#f1c40f',  // Neutral
              '#f5b7b1',  // Negative
            ],
          }
        ]
      },
      options: {
        indexAxis: 'x',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          title: { display: false }
        },
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              color: '#e0e0e0'
            },
            ticks: {
              color: '#444',
              font: {
                size: 13,
                weight: '500',
                family: 'Segoe UI'
              },
              maxRotation: 0,
              minRotation: 0
            }
          },
          y: {
            grid: { display: false },
            ticks: {
              color: '#444',
              font: {
                size: 12,
                weight: '500',
                family: 'Segoe UI'
              }
            }
          }
        }
      }
    });
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
