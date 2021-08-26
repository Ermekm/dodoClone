import axios from 'axios'

export default {
    state() {
        return {
            orders: [],
            totalPrice: 0,
            totalOrders: 0,
        }
    },
    mutations: {
        ADD_ORDER(state, payload) {
            const pizzaIndex = state.orders.findIndex(item => item.key === payload.key)
            if (pizzaIndex === -1) {
                state.orders.push(payload)
            } else {
                state.orders[pizzaIndex].amount++;
            }
            state.totalPrice += payload.price
            state.totalOrders++;
        },
        REMOVE_ORDER(state, payload) {
            const pizzaIndex = state.orders.findIndex(item => item.key === payload.key)
            if (state.orders[pizzaIndex].amount > 1) {
                state.orders[pizzaIndex].amount--
            } else {
                state.orders.splice(pizzaIndex, 1)
            }
            state.totalPrice -= payload.price
            state.totalOrders--;
        },
        REMOVE_ORDER_LIST(state, payload) {
            const pizzaIndex = state.orders.findIndex(item => item.key === payload.key)
            state.totalPrice -= payload.price * payload.amount
            state.totalOrders -= payload.amount;
            state.orders.splice(pizzaIndex, 1)
        },
        CLEAR_CART(state) {
            state.orders = []
            state.totalOrders = 0;
            state.totalPrice = 0;
        },
    },
    actions: {
        ADD_ORDER({ commit }, payload) {
            commit('ADD_ORDER', payload)
        },
        REMOVE_ORDER({ commit }, payload) {
            commit('REMOVE_ORDER', payload)
        },
        REMOVE_ORDER_LIST({ commit }, payload) {
            commit('REMOVE_ORDER_LIST', payload)
        },
        CLEAR_CART({ commit }) {
            commit('CLEAR_CART')
        },
        SEND_ORDERS({ commit, state }) {
            axios.post(`https://vue-http-demo-c0f62-default-rtdb.firebaseio.com/orders.json`, state.orders)
                .then(() => {
                    commit('CLEAR_CART')
                })
        }
    },
    getters: {
        ORDERS(state) {
            return state.orders
        },
        TOTAL_PRICE(state) {
            return state.totalPrice
        },
        TOTAL_ORDERS(state) {
            return state.totalOrders
        }
    }
}