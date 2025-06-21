<template>
  <div class="top-comments-container">
    <h2>Top 5 Comments</h2>
    <table class="comments-table">
      <thead>
        <tr>
          <th>Comment</th>
          <th>Scores</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(comment, index) in topFiveComments" :key="index">
          <td>
            <div class="comment-text">
              <span>{{ comment.text }}</span>
            </div>

            <div v-if="comment.replies?.length" class="replies-section">
              <div class="replies-heading" @click="toggleReplies(index)">
                Replies ({{ comment.replies.length }})
              </div>

              <div v-if="expandedReplies[index]" class="replies-container">
                <div
                  v-for="(reply, rIndex) in comment.replies"
                  :key="rIndex"
                  class="reply"
                >
                  <div class="reply-number">{{ rIndex + 1 }}.</div>
                  <div class="reply-text">{{ reply.text }}</div>
                  <div class="reply-scores">👍 {{ reply.scores }}</div>
                </div>
              </div>
            </div>
          </td>
          <td class="scores">👍 {{ comment.scores }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  comments: {
    type: Array,
    default: () => []
  }
})

const expandedReplies = ref({})

const topFiveComments = computed(() => props.comments.slice(0, 5))

function toggleReplies(index) {
  expandedReplies.value[index] = !expandedReplies.value[index]
}
</script>

<style scoped>
.top-comments-container {
  background-color: #ffffff;
  padding: 24px;
  border-radius: 16px;
  max-width: 1000px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  color: #333;
  margin-bottom: 24px;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}

.comments-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.comments-table th,
.comments-table td {
  border-bottom: 1px solid #e0e0e0;
  padding: 14px;
  font-size: 15px;
  vertical-align: top;
}

.comments-table th {
  background-color: #fafafa;
  font-weight: 600;
  color: #555;
}

.comments-table tr:hover {
  background-color: #f9f9f9;
}

.replies-section {
  margin-top: 10px;
}

.replies-heading {
  font-size: 14px;
  font-weight: 600;
  color: #2a6edc;
  cursor: pointer;
  margin-bottom: 6px;
}

.replies-container {
  max-height: 180px;
  overflow-y: auto;
  padding-left: 16px;
  border-left: 2px solid #eee;
  background-color: #fdfdfd;
  border-radius: 6px;
}

.reply {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  border-bottom: 1px solid #f0f0f0;
  padding: 6px 0;
}

.reply-number {
  font-weight: bold;
  font-size: 14px;
  color: #444;
  width: 20px;
}

.reply-text {
  font-size: 14px;
  color: #444;
  flex: 1;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.reply-scores {
  font-size: 13px;
  color: #888;
  white-space: nowrap;
  margin-left: 8px;
}

.scores {
  font-size: 13px;
  color: #888;
  margin-left: 10px;
  white-space: nowrap;
}
</style>
