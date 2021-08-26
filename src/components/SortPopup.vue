<template>
  <div class="sort">
    <div class="sort__label">
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
          fill="#2C2C2C"
        />
      </svg>
      <b>Сортировка по:</b>
      <span @click="showPopup">{{ popupItems[activeIndex] }}</span>
    </div>
    <div class="sort__popup" v-if="isPopupVisible">
      <ul>
        <li
          v-for="(item, index) in popupItems"
          :key="index"
          :class="{ active: activeIndex === index }"
          @click="setActivePopup(index)"
        >
          {{ item }}
        </li>
        <!-- <li class="active">популярности</li>
        <li>цене</li>
        <li>алфавиту</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPopupVisible: false,
      popupItems: ["популярности", "цене", "алфавиту"],
      activeIndex: 0,
    };
  },
  methods: {
    showPopup() {
      this.isPopupVisible = !this.isPopupVisible;
    },
    setActivePopup(index) {
        this.activeIndex = index;
        this.showPopup()
    }
  },
};
</script>

<style scoped>
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
</style>