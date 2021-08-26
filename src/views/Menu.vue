<template>
  <div class="content">
    <div class="container">
      <div class="content__top">
        <menu-categories></menu-categories>
        <sort-popup></sort-popup>
      </div>
      <h2 class="content__title">Все пиццы</h2>
      <div class="content__items">
        <menu-pizza-item
          v-for="item in FILTERED_PIZZAS"
          :key="item.id"
          :item="item"
        ></menu-pizza-item>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MenuCategories from '../components/MenuCategories.vue';
import MenuPizzaItem from "../components/MenuPizzaItem.vue";
import SortPopup from "../components/SortPopup.vue";
export default {
  components: { MenuPizzaItem, SortPopup, MenuCategories },
  computed: {
    ...mapGetters(["PIZZAS", "FILTERED_PIZZAS"]),
  },
};
</script>

<style scoped>
.container {
  width: 90%;
  margin: 0 auto;
}

.content {
  padding: 40px 0;
}
.content__title {
  margin: 35px 0;
}
.content__items {
  /* display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  grid-gap: 30px;
}
.content__top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.categories ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.categories ul li {
  background-color: #f9f9f9;
  padding: 13px 30px;
  border-radius: 30px;
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;
  -webkit-transition: background-color 0.1s ease-in-out;
  transition: background-color 0.1s ease-in-out;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.categories ul li:hover {
  background-color: #f4f4f4;
}
.categories ul li:active {
  background-color: #ececec;
}
.categories ul li.active {
  background-color: #282828;
  color: #fff;
}
.sort {
  position: relative;
}
.sort__label {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.sort__label svg {
  margin-right: 8px;
}
.sort__label b {
  margin-right: 8px;
}
.sort__label span {
  color: #fe5f1e;
  border-bottom: 1px dashed #fe5f1e;
  cursor: pointer;
}
.sort__popup {
  position: absolute;
  right: 0;
  margin-top: 15px;
  background: #ffffff;
  -webkit-box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  overflow: hidden;
  padding: 10px 0;
  width: 160px;
}
.sort__popup ul {
  overflow: hidden;
}
.sort__popup ul li {
  padding: 12px 20px;
  cursor: pointer;
}
.sort__popup ul li.active,
.sort__popup ul li:hover {
  background: rgba(254, 95, 30, 0.05);
}
.sort__popup ul li.active {
  font-weight: bold;
  color: #fe5f1e;
}

.pizza-block {
  width: 280px;
  text-align: center;
  margin-bottom: 65px;
}
.pizza-block:not(:nth-of-type(4n)) {
  margin-right: 35px;
}
.pizza-block__image {
  width: 260px;
}
.pizza-block__title {
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 1%;
  margin-bottom: 20px;
}
.pizza-block__selector {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background-color: #f3f3f3;
  border-radius: 10px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 6px;
}
.pizza-block__selector ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.pizza-block__selector ul:first-of-type {
  margin-bottom: 6px;
}
.pizza-block__selector ul li {
  padding: 8px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.pizza-block__selector ul li.active {
  background: #ffffff;
  -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  cursor: auto;
}
.pizza-block__bottom {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-top: 20px;
}
.pizza-block__price {
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.015em;
}
/*.button {
    display: inline-block;
    background-color: #fe5f1e;
    border-radius: 30px;
    padding: 10px 20px;
    min-width: 100px;
    text-align: center;
    cursor: pointer;
    -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
    border: 1px solid transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.button,
.button span {
    color: #fff;
}

.button i,
.button span,
.button path,
.button svg {
    -webkit-transition: all 0.15s ease-in-out;
    transition: all 0.15s ease-in-out;
}
.button:hover {
    background-color: #f24701;
}
.button:active {
    background-color: #de4101;
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
}
.button--outline {
    background-color: #fff;
    border-color: #fe5f1e;
}

.button--outline,
.button--outline span {
    color: #fe5f1e;
}
.button--outline svg path {
    fill: #fe5f1e;
}
.button--outline:hover {
    background-color: #fe5f1e;
}
.button--outline:hover,
.button--outline:hover span {
    color: #fff;
}
.button--outline:hover svg path {
    fill: #fff;
}
.button--outline:active {
    background-color: #f24701;
}
.button--add svg {
    margin-right: 2px;
}
.button--add span {
    font-weight: 600;
    font-size: 16px;
}
.button--add:hover i {
    background-color: #fff;
    color: #fe5f1e;
}
.button--add i {
    display: inline-block;
    border-radius: 30px;
    background-color: #fe5f1e;
    color: #fff;
    font-weight: 600;
    width: 22px;
    height: 22px;
    font-style: normal;
    font-size: 13px;
    line-height: 22px;
    position: relative;
    top: -1px;
    left: 3px;
} */
</style>