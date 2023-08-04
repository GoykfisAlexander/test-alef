<template>
  <AppHeader />
  <router-view class="content" />
  <AppFooter />
</template>

<script>
import AppHeader from "@/layouts/AppHeader.vue";
import AppFooter from "@/layouts/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
<style>
body {
  margin: 0;
  height: 100vh;
}
#app {
  height: 100%;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
}
.content {
  height: 100%;
  display: grid;
  grid-auto-rows: max-content;
  align-items: center;
  width: 45%;
  margin: 14px auto;
  gap: 10px;
}
</style>
