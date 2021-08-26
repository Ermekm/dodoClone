import { createStore } from 'vuex'

import store from '@/store/store.js'
import menu from '@/store/menu.js'

export default createStore({
  modules: {
    store: store,
    menu: menu
  }
})
