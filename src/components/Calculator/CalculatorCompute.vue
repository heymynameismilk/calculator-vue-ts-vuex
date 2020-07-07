<template>
    <div class='calculator__compute'>
        <input class='calculator__buffer'
               :value="this.buffer"
               type="text"
               readonly
        >
        <input class='calculator__result'
               type="text"
               :value="`${this.total != 0 ? '= ' : ''}` + this.total"
               readonly

        >
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from "vue-class-component";
    import {Prop} from "vue-property-decorator";

    @Component
    export default class CalculatorCompute extends Vue {
        @Prop({type:String, default: ''}) buffer!: string
        @Prop({type:String, default: '0'}) total!: string

        inputNumber({target}:{target:HTMLInputElement}):void {
            const targetNum = target.textContent!.trim();
        }
    }
</script>
