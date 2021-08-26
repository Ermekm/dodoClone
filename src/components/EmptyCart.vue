<template>
  <div class="content">
    <div class="container container--cart">
      <div class="cart cart--empty">
        <h2>Корзина пустая 😕</h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.<br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src="../../public/img/empty-cart.png" alt="Empty cart" />
        <router-link to="/" class="button button--black">
          <span>Вернуться назад</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
  padding: 40px 0;
}
.container {
  width: 90%;
  margin: 0 auto;
}
.container--cart {
  max-width: 820px;
  margin: 90px auto;
}
.cart--empty {
  margin: 0 auto;
  width: 560px;
  text-align: center;
}
.cart--empty h2 {
  font-size: 32px;
  margin-bottom: 10px;
}
.cart--empty p {
  font-size: 18px;
  line-height: 145.4%;
  letter-spacing: 0.01em;
  color: #777777;
}
.cart--empty img {
  display: block;
  width: 300px;
  margin: 45px auto 60px;
}
.cart--empty .button--black {
  padding: 12px 0 14px;
  width: 230px;
  margin: 0 auto;
  font-weight: 600;
  font-size: 18px;
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
.button--black {
    background-color: #232323;
}
.button--black:hover,
.button--black:active {
  background-color: #3d3d3d;
}
</style>