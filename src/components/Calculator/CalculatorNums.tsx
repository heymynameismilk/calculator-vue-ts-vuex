import {Component, Prop, Vue} from 'vue-property-decorator';
import CalculatorButton from "@/components/Calculator/CalculatorButton";

import styles from './Calculator.scss?module'

@Component({
    components: {
        CalculatorButton
    }
})
export default class CalculatorNums extends Vue {

    get myLoader() {
        return this.$store.getters.loading
    }

    render() {
        return (
            <div class={styles.calculator__bottom}>
                <div v-show={this.myLoader} class={styles.calculator__loader}>
                    <div class={styles.calculator__icon}/>
                    <div class={styles.calculator__backdrop}/>
                </div>
                <div class={styles.calculator__nums}>
                    <CalculatorButton value={'7'}/>
                    <CalculatorButton value={'8'}/>
                    <CalculatorButton value={'9'}/>
                    <CalculatorButton value={'4'}/>
                    <CalculatorButton value={'5'}/>
                    <CalculatorButton value={'6'}/>
                    <CalculatorButton value={'1'}/>
                    <CalculatorButton value={'2'}/>
                    <CalculatorButton value={'3'}/>
                    <CalculatorButton value={'0'} isZero={true}/>
                </div>
                <div class={styles.calculator__actions}>
                    <CalculatorButton value={'C'} isAction={true}/>
                    <CalculatorButton value={'-'} isAction={true}/>
                    <CalculatorButton value={'+'} isAction={true}/>
                    <CalculatorButton value={'='} isAction={true}/>
                </div>
            </div>
        )
    }
}