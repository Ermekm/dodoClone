<template>
  <header>
    <div class="header">
      <div class="container">
        <div class="header__logo" @click="routeToHome()">
          <img
            width="38"
            src="../../public/img/pizza-logo.svg"
            alt="Pizza logo"
          />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div class="header__cart">
          <router-link to="/cart" class="button button--cart">
            <span>{{TOTAL_PRICE}} ₽</span>
            <div class="button__delimiter"></div>
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
            <span>{{TOTAL_ORDERS}}</span>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: { ...mapGetters(["TOTAL_PRICE", "TOTAL_ORDERS"]) },
  methods: {
    routeToHome() {
      this.$router.push('/menu')
    }
  }
};
</script>

<style lang='scss' scoped>
.container {
  width: 90%;
  margin: 0 auto;
}

.header {
  border-bottom: 1px solid #f6f6f6;
  padding: 40px 0;
}
.header .container {
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
.header__logo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.header__logo img {
  margin-right: 15px;
}
.header__logo h1 {
  color: #181818;
  font-size: 24px;
  letter-spacing: 1%;
  text-transform: uppercase;
  font-weight: 800;
}
.header__logo p {
  color: #7b7b7b;
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

.button__delimiter {
  width: 1px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.25);
  margin-left: 14px;
  margin-right: 14px;
}

.button--cart {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  line-height: 23px;
  padding: 12px 25px;
}
.button--cart svg {
  margin-right: 8px;
  margin-bottom: 1px;
}
.button--cart span {
  font-weight: 600;
  font-size: 16px;
}
</style>