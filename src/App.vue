<template>
  <div class="wrapper">
    <the-header></the-header>
    <main>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TheHeader from "@/components/TheHeader.vue";
export default {
  components: { TheHeader },
  methods: {
    ...mapActions(["GET_PIZZAS", "SET_FILTERED_PIZZAS"]),
  },
  mounted() {
    // this.GET_PIZZAS().then(this.SET_FILTERED_PIZZAS({ category: 1 }));
    this.GET_PIZZAS();
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Proxima Nova";
  src: url("../public/fonts/ProximaNova-Black.eot");
  src: local("../public/fonts/Proxima Nova Black"), local("ProximaNova-Black"),
    url("../public/fonts/ProximaNova-Black.eot?#iefix")
      format("embedded-opentype"),
    url("../public/fonts/ProximaNova-Black.woff") format("woff"),
    url("../public/fonts/ProximaNova-Black.ttf") format("truetype");
  font-weight: 900;
  font-style: normal;
}
@font-face {
  font-family: "Proxima Nova";
  src: url("../public/fonts/ProximaNova-Bold.eot");
  src: local("../public/fonts/Proxima Nova Bold"), local("ProximaNova-Bold"),
    url("../public/fonts/ProximaNova-Bold.eot?#iefix")
      format("embedded-opentype"),
    url("../public/fonts/ProximaNova-Bold.woff") format("woff"),
    url("../public/fonts/ProximaNova-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: "Proxima Nova";
  src: url("../public/fonts/ProximaNova-Regular.eot");
  src: local("../public/fonts/Proxima Nova Regular"),
    local("ProximaNova-Regular"),
    url("../public/fonts/ProximaNova-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("../public/fonts/ProximaNova-Regular.woff") format("woff"),
    url("../public/fonts/ProximaNova-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Proxima Nova";
  src: url("../public/fonts/ProximaNova-Extrabld.eot");
  src: local("../public/fonts/Proxima Nova Extrabold"),
    local("ProximaNova-Extrabld"),
    url("../public/fonts/ProximaNova-Extrabld.eot?#iefix")
      format("embedded-opentype"),
    url("../public/fonts/ProximaNova-Extrabld.woff") format("woff"),
    url("../public/fonts/ProximaNova-Extrabld.ttf") format("truetype");
  font-weight: 800;
  font-style: normal;
}
* {
  padding: 0;
  margin: 0;
  list-style: none;
  outline: none;
  font-family: "Proxima Nova", Roboto, system-ui, Tahoma, sans-serif;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #232323;
  background-color: #ffdf8c;
}
a,
span,
p,
b,
h1,
h2,
h3,
h4,
h5 {
  color: #232323;
}
h1 {
  font-size: 48px;
}
h2 {
  font-weight: 600;
  font-size: 28px;
  line-height: 30px;
}
a {
  text-decoration: none;
}
.wrapper {
  width: calc(100vw - 100px);
  height: 100%;
  background-color: #fff;
  margin: 50px auto;
  border-radius: 10px;
  max-width: 1400px;
}
</style>
