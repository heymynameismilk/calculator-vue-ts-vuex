import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        result: '',
        buffer: '',
    },
    mutations: {
        inputActions(state, value: string) {
            switch (value) {
                case '=':
                    async function calculate () {

                    }
                    let result = state.result.split(/([+-])/)
                    state.buffer = state.result

                    let sum = parseInt(<string>result.shift(), 10)
                    while(result.length > 1) {
                        let arithmeticSymbol = result.shift();
                        let number = parseInt(<string>result.shift(), 10)

                        switch (arithmeticSymbol) {
                            case '+':
                                sum += number;
                                break
                            case '-':
                                sum -=number;
                                break
                            default:

                        }
                    }
                    state.result = `${sum}`
                    break;
                case 'C':
                    state.buffer = ''
                    state.result = ''
                    break;
                default:

                    // console.log(state.result[state.result.length - 1])
                    state.result += value
            }

        },
    },
    actions: {},
    getters: {
        buffer: state => {
            return state.buffer
        },
        result: state => {
            return state.result
        }
    }
})