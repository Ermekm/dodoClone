<template>
  <div class="pizza-block__selector">
    <ul>
      <li
        v-for="(item, index) in types"
        :key="index"
        :class="{
          active: index === typeActiveIndex,
          disabled: pizza.types.indexOf(index) === -1,
        }"
        @click="setActiveType(index)"
      >
        {{ item }}
      </li>
    </ul>
    <ul>
      <li
        v-for="(item, index) in sizes"
        :key="index"
        :class="{ active: index === sizeActiveIndex }"
        @click="setActiveSize(index)"
      >
        {{ item }} см
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["pizza"],
  data() {
    return {
      types: ["тонкое", "традиционное"],
      sizes: [26, 30, 40],
      typeActiveIndex: 0,
      sizeActiveIndex: 0,
      properties: {
        type: 0,
        size: 26
      }
    };
  },
  computed: {},
  methods: {
    setActiveType(index) {
      this.typeActiveIndex = index;
      this.properties.type = index;
      this.$emit("setProperties", this.properties);
    },
    setActiveSize(index) {
      this.sizeActiveIndex = index;
      this.properties.size = this.sizes[index]
      this.$emit("setProperties", this.properties);
    },
  },
};
</script>

<style scoped>
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

.pizza-block__selector ul li.disabled {
  opacity: 0.5;
  pointer-events: none;
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
</style>