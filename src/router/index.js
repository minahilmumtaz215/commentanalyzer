import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/HomePage.vue'
import Youtube from '../views/YoutubePage.vue'
import Reddit from '../views/RedditPage.vue'
import Feedback from '../views/FeedbackPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Homepage },
    { path: '/youtube', name: 'youtube', component: Youtube },
    { path: '/reddit', name: 'reddit', component: Reddit },
    { path: '/feedback', name: 'feedback', component: Feedback },
  ],
})

export default router
