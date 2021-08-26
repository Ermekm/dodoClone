<template>
  <div class="content">
    <div class="container container--cart">
      <div class="cart">
        <div class="cart__top">
          <h2 class="content__title">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Корзина
          </h2>
          <div class="cart__clear" @click="clearCart()">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 5H4.16667H17.5"
                stroke="#B6B6B6"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                stroke="#B6B6B6"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.33337 9.16667V14.1667"
                stroke="#B6B6B6"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.6666 9.16667V14.1667"
                stroke="#B6B6B6"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span>Очистить корзину</span>
          </div>
        </div>
        <div class="content__items">
          <cart-item
            v-for="order in ORDERS"
            :key="order"
            :order="order"
          ></cart-item>
        </div>
        <div class="cart__bottom">
          <div class="cart__bottom-details">
            <span>
              Всего пицц: <b>{{ TOTAL_ORDERS }}</b>
            </span>
            <span>
              Сумма заказа: <b>{{ TOTAL_PRICE }} ₽</b>
            </span>
          </div>
          <div class="cart__bottom-buttons">
            <router-link
              to="/"
              class="button button--outline button--add go-back-btn"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 6.93015L6.86175 1"
                  stroke="#D3D3D3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>Вернуться назад</span>
            </router-link>
            <div class="button pay-btn" @click="sendOrders()">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import CartItem from "@/components/CartItem.vue";
export default {
  components: { CartItem },
  computed: {
    ...mapGetters(["ORDERS", "TOTAL_ORDERS", "TOTAL_PRICE"]),
  },
  methods: {
    ...mapActions(["CLEAR_CART", "SEND_ORDERS"]),
    clearCart() {
      this.CLEAR_CART();
    },
    sendOrders() {
      this.SEND_ORDERS();
      this.$router.push('/menu')
    },
  },
};
</script>

<style scoped>
.content {
  padding: 40px 0;
}
.content__title {
  margin: 35px 0;
}
.content__items {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.container {
  width: 90%;
  margin: 0 auto;
}
.container--cart {
  max-width: 820px;
  margin: 90px auto;
}
.container--cart .content__title {
  margin: 0;
}
.cart__top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.cart .content__title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 32px;
}
.cart .content__title svg {
  position: relative;
  top: -2px;
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.cart .content__title svg path {
  stroke: #232323;
  stroke-width: 1.9;
}
.cart__clear {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.cart__clear span {
  display: inline-block;
  margin-left: 7px;
  color: #b6b6b6;
  font-size: 18px;
}
.cart__clear span,
.cart__clear svg,
.cart__clear path {
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
}
.cart__clear:hover svg path {
  stroke: #373737;
}
.cart__clear:hover span {
  color: #373737;
}
.cart__bottom {
  margin: 50px 0;
}
.cart__bottom-details {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.cart__bottom-details span {
  font-size: 22px;
}
.cart__bottom-details span:last-of-type b {
  color: #fe5f1e;
}
.cart__bottom-buttons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-top: 40px;
}
.cart__bottom-buttons .go-back-btn {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 210px;
  border-color: #ddd;
}
.cart__bottom-buttons .go-back-btn span {
  color: #c3c3c3;
  font-weight: 500;
  font-weight: 600;
}
.cart__bottom-buttons .go-back-btn:hover {
  background-color: #111;
  border-color: #111;
}
.cart__bottom-buttons .go-back-btn:hover span {
  color: #f6f6f6;
}
.cart__bottom-buttons .go-back-btn svg {
  margin-right: 12px;
}
.cart__bottom-buttons .go-back-btn svg path {
  fill: transparent;
  stroke-width: 2;
}
.cart__bottom-buttons .pay-btn {
  font-size: 16px;
  font-weight: 600;
  width: 210px;
  padding: 16px;
  text-align: center;
}

.cart__bottom-buttons .pay-btn:hover span, .cart__bottom-buttons .pay-btn:active span{
  color: white;
}

.cart__bottom-buttons .pay-btn:hover {
  background-color: #f24701;
  color: white;
  cursor: pointer;
}
.cart__bottom-buttons .pay-btn:active {
  color: white;
  background-color: #de4101;
  -webkit-transform: translateY(1px);
  transform: translateY(1px);
}
</style>