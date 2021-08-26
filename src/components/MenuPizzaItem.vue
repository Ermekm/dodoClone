<template>
  <div class="pizza-block">
    <img
      class="pizza-block__image"
      src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
      alt="Pizza"
    />
    <h4 class="pizza-block__title">{{ item.name }}</h4>
    <pizza-block-selector
      @setProperties="setProperties($event)"
      :pizza="item"
    ></pizza-block-selector>
    <div class="pizza-block__bottom">
      <div class="pizza-block__price">от 395 ₽</div>
      <div class="button button--outline button--add" @click="addOrder()">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
            fill="white"
          />
        </svg>
        <span>Добавить</span>
        <i v-if="counter !== 0">{{ counter }}</i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PizzaBlockSelector from "./PizzaBlockSelector.vue";

export default {
  components: { PizzaBlockSelector },
  props: ["item"],
  data() {
    return {
      counter: 0,
      pizzaType: 0,
      pizzaSize: 26,
    };
  },
  methods: {
    ...mapActions(["ADD_ORDER"]),
    setProperties(properties) {
      this.pizzaType = properties.type;
      this.pizzaSize = properties.size;
    },
    addOrder() {
      this.counter++;
      const newOrder = {
        key: "" + this.item.id + this.pizzaType + this.pizzaSize,
        id: this.item.id,
        type: this.pizzaType,
        size: this.pizzaSize,
        amount: 1,
        price: this.item.price,
        name: this.item.name
      };
      this.ADD_ORDER(newOrder);
    },
  },
};
</script>

<style scoped>
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
/* .pizza-block__selector {
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
} */
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

.button {
  display: inline-block;
  background-color: #fe5f1e;
  border-radius: 30px;
  padding: 10px 20px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  -webkit-transition: background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
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
}
</style>