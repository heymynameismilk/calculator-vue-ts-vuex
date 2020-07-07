<template>
    <button
            :class="{'calculator__button--zero' : isZero, 'calculator__button--num' : isNum, 'calculator__button--action' : isAction}"
            class="calculator__button">
        {{this.value}}
    </button>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import {Prop} from "vue-property-decorator";

    @Component({
        name: 'CalculatorButton',
    })

    export default class CalculatorButton extends Vue {
        @Prop({default: false, type:Boolean}) isZero!:boolean
        @Prop(String) value!:string
        @Prop({default: false, type:Boolean}) isAction!:boolean
        @Prop({default: false, type:Boolean}) isNum!:boolean
    }
</script>
