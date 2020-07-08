import {Component, Prop, Vue} from 'vue-property-decorator';

import styles from './Calculator.scss?module'


@Component
export default class CalculatorCompute extends Vue {

    get myBuffer() {
        return this.$store.getters.buffer
    }

    get myResult() {
        return this.$store.getters.result
    }

    render() {
        return (
            <div class={styles.calculator__compute}>
                <div class={styles.calculator__display}>
                    <div class={styles.calculator__buffer}>{this.myBuffer}</div>
                    <div class={styles.calculator__result}>{this.myResult}</div>
                </div>
            </div>
        )
    }
}