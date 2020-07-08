import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        result: '',
        buffer: '',
        loading: false,
    },
    mutations: {
        inputActions(state, value: string) {

            let lastElem = state.result[state.result.length - 1]
            const symbols = ['+', '-']
            let result = state.result.split(/([+-])/)

            switch (value) {
                case '=':
                    state.loading = true

                async function calculate() {
                    try {
                        await setTimeout(function () {

                            state.buffer = state.result

                            let sum = parseInt(<string>result.shift(), 10)
                            while (result.length > 1) {
                                let arithmeticSymbol = result.shift();
                                let number = parseInt(<string>result.shift(), 10)

                                switch (arithmeticSymbol) {
                                    case '+':
                                        sum += number;
                                        break
                                    case '-':
                                        sum -= number;
                                        break
                                    default:
                                        break
                                }
                            }
                            state.result = `${sum}`
                            if (symbols.includes(lastElem)) {
                                state.result = 'Ошибка'
                            }
                            state.loading = false
                        }, 2000)
                    } catch (e) {
                        console.error(e)
                    }
                }

                    calculate().then(function () {
                        return Promise.resolve();
                    })
                    break;
                case 'C':
                    state.buffer = ''
                    state.result = ''
                    break;
                default:

                    if (symbols.includes(value) && symbols.includes(lastElem)) {
                        state.result = state.result.slice(0, -1) + value
                    } else {
                        state.result += value
                    }
            }

        },
    },
    getters: {
        buffer: state => {
            return state.buffer
        },
        result: state => {
            return state.result
        },
        loading: state => {
            return state.loading
        }
    }
})