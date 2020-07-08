import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        result: '',
        buffer: '',
        loading: false,
        calculator: {
            done: false
        }
    },
    mutations: {
        inputActions(state, value: string) {

            const lastElem = state.result[state.result.length - 1];
            const firstElem = state.result[0];
            const symbols = ['+', '-'];
            let result = state.result.split(/([+-])/);
            result = result.filter(function (entry) {
                return entry.trim() != ''
            })

            switch (value) {
                case '=':

                    if (symbols.includes(lastElem) || symbols.includes(firstElem)) {
                        result = result.filter(function (entry) {
                            return entry.trim() != '+' && entry.trim() != '-'
                        })
                    }
                    if (result.length == 0) {
                        state.calculator.done = true
                        state.result = ''
                        break
                    }

                async function calculate() {
                    try {
                        state.loading = true
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
                            state.calculator.done = true
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
                    if (state.calculator.done) {
                        state.result = ''
                        state.calculator.done = false
                    }
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