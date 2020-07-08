import {Component, Prop, Vue} from 'vue-property-decorator';
import CalculatorCompute from './CalculatorCompute';
import CalculatorNums from './CalculatorNums';

import styles from './Calculator.scss?module'

@Component({
    components: {
        CalculatorCompute,
        CalculatorNums
    }
})
export default class Calculator extends Vue {

    render() {
        return (
            <div class={styles.calculator}>
                <div class={styles.calculator__container}>
                    <CalculatorCompute />
                    <CalculatorNums />
                </div>
            </div>
        )
    }
}