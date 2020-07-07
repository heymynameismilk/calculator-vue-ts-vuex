<template>
    <div class="box">
        <div class='calculator'>
            <div class='calculator__container'>
                <calculator-compute/>
                <calculator-nums/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import CalculatorNums from "./CalculatorNums.vue";
    import CalculatorCompute from "./CalculatorCompute.vue";

    import './Calculator.scss'

    @Component({
        name: 'Calculator',
        components: {CalculatorCompute, CalculatorNums}
    })
    export default class Calculator extends Vue {

    }
</script>

