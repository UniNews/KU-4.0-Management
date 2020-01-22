<template>
  <div>
    <Header />
    <div class="pageFullHeight">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/partials/Foorter";
import Header from "./components/partials/Header";

export default {
  name: "app",
  components: { Footer, Header }
};
</script>

<style>
.pageFullHeight {
  height: 100vh;
}
.fullHeight {
  height: 100%;
}
</style>