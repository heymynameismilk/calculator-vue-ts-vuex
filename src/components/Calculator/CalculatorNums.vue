<template>
    <div class='calculator__bottom'>
        <div class='calculator__nums'>
           <calculator-button :isNum="true" value="1"/>
           <calculator-button :isNum="true" value="2"/>
           <calculator-button :isNum="true" value="3"/>
           <calculator-button :isNum="true" value="4"/>
           <calculator-button :isNum="true" value="5"/>
           <calculator-button :isNum="true" value="6"/>
           <calculator-button :isNum="true" value="7"/>
           <calculator-button :isNum="true" value="8"/>
           <calculator-button :isNum="true" value="9"/>
           <calculator-button :isNum="true" value="0" :isZero="true" />
        </div>
        <div class='calculator__actions'>
            <calculator-button :isAction="true" value="C"/>
            <calculator-button :isAction="true" value="+"/>
            <calculator-button :isAction="true" value="-"/>
            <calculator-button :isAction="true" value="="/>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import CalculatorButton from "./CalculatorButton.vue";

    @Component({
        name: 'CalculatorNums',
        components: {CalculatorNums, CalculatorButton}
    })
    export default class CalculatorNums extends Vue {
    }
</script>
