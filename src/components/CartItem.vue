<template>
  <div class="cart__item">
    <div class="cart__item-img">
      <img
        class="pizza-block__image"
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
        alt="Pizza"
      />
    </div>
    <div class="cart__item-info">
      <h3>{{ order.name }}</h3>
      <p>{{ types[order.type] }}, {{ order.size }} см.</p>
    </div>
    <div class="cart__item-count">
      <div class="button button--outline button--circle cart__item-count-minus" @click="removeOrder()">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
            fill="#EB5A1E"
          />
          <path
            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
            fill="#EB5A1E"
          />
        </svg>
      </div>
      <b>{{order.amount}}</b>
      <div class="button button--outline button--circle cart__item-count-plus" @click="addOrder()">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
            fill="#EB5A1E"
          />
          <path
            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
            fill="#EB5A1E"
          />
        </svg>
      </div>
    </div>
    <div class="cart__item-price">
      <b>{{order.price}} ₽</b>
    </div>
    <div class="cart__item-remove" @click="removeOrderList()">
      <div class="button button--outline button--circle">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
            fill="#EB5A1E"
          />
          <path
            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
            fill="#EB5A1E"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: ["order"],
  data() {
    return {
      types: ["тонкое", "традиционное"],
    };
  },
  methods: {
      ...mapActions(['ADD_ORDER', 'REMOVE_ORDER', 'REMOVE_ORDER_LIST']),
      addOrder() {
          this.ADD_ORDER(this.order)
      },
      removeOrder() {
          this.REMOVE_ORDER(this.order)
      },
      removeOrderList() {
          this.REMOVE_ORDER_LIST(this.order)
      }
  }
};
</script>

<style scoped>
.cart__item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  border-top: 1px solid #f6f6f6;
  padding-top: 30px;
  margin-top: 30px;
}
.cart__item-img {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 15px;
  width: 10%;
}
.cart__item-img img {
  width: 80px;
  height: 80px;
}
.cart__item-info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 40%;
}
.cart__item-info h3 {
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.01em;
}
.cart__item-info p {
  font-size: 18px;
  color: #8d8d8d;
}
.cart__item-count {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 13%;
}
.cart__item-count-minus svg path:first-of-type {
  display: none;
}
.cart__item-count b {
  font-size: 22px;
}
.cart__item-price {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 33%;
}
.cart__item-price b {
  font-weight: bold;
  font-size: 22px;
  letter-spacing: 0.01em;
}
.cart__item-remove {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  width: 4%;
}
.cart__item-remove .button {
  border-color: #ddd;
}
.cart__item-remove svg {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.cart__item-remove svg path {
  fill: #d0d0d0;
}
.cart__item-remove .button svg {
  width: 11.5px;
  height: 11.5px;
  position: relative;
}
.cart__item-remove .button:hover,
.cart__item-remove .button:active {
  border-color: #2a2a2a;
  background-color: #2a2a2a;
}
</style>