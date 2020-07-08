import {Component, Prop, Vue} from 'vue-property-decorator';

import styles from './Calculator.scss?module'

@Component
export default class CalculatorButton extends Vue {
    @Prop() isZero!: boolean
    @Prop() value!: string
    @Prop() isAction!: boolean

    inputActions() {
        this.$store.commit('inputActions', this.value)
    }

    render() {
        return (
            <button onclick={this.inputActions} class={`${styles.calculator__button} ${(this.isZero) ? styles.calculator__buttonZero : ''}`}>{this.value}</button>
        )
    }
}