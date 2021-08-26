import axios from 'axios'

export default {
    state: {
        pizzas: [],
        filteredPizzas: []
    },
    mutations: {
        SET_PIZZAS(state, payload) {
            state.pizzas = payload
            state.filteredPizzas = JSON.parse(JSON.stringify(state.pizzas))
        },
        SET_FILTERED_PIZZAS(state, payload) {
            if (payload.category !== null) {
                state.filteredPizzas = state.pizzas.filter((el) => {
                    return el.category === payload.category
                })
            } else {
                state.filteredPizzas = state.pizzas
            }
        }
    },
    actions: {
        GET_PIZZAS({ commit }) {
            axios
                .get('https://vue-http-demo-c0f62-default-rtdb.firebaseio.com/pizzas.json')
                .then((res) => {
                    commit('SET_PIZZAS', res.data)
                })
        },
        SET_FILTERED_PIZZAS(context, payload) {
            context.commit('SET_FILTERED_PIZZAS', payload)
        }
    },
    getters: {
        PIZZAS(state) {
            return state.pizzas
        },
        FILTERED_PIZZAS(state) {
            return state.filteredPizzas
        }
    },
}