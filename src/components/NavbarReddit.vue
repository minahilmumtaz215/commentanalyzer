<template>
  <nav class="navbar">
    <div class="nav-items">
      <div class="title" @click="$router.push('/')"><strong>Comment Analyzer</strong></div>
      <router-link class="nav-link" to="/youtube">Youtube</router-link>
      <router-link class="nav-link" to="/reddit">Reddit</router-link>
      <router-link class="nav-link" to="/feedback">Contact Us</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarReddit',
}
</script>

<style scoped>
.navbar {
  width: 100vw;
  height: 60px;
  background: linear-gradient(
    to right,
    #ff4500 0%,      /* Reddit Orange */
rgb(251, 96, 40) 40%,     /* Lighter Orange */
rgb(234, 101, 24) 75%,     /* Very light pink */
rgb(240, 196, 159) 95%      /* White */
  );
  display: flex;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 999;
  font-family: 'Calibri', sans-serif;
}

.nav-items {
  display: flex;
  align-items: center;
  gap: 25px;
}

.title {
  color: white;
  font-weight: bold;
  font-size: 23px;
  cursor: pointer;
}

.nav-link {
  color: white;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.nav-link:hover {
  opacity: 0.8;
}

</style>
