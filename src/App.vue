<template>
    <calculator/>
</template>
<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import Calculator from "./components/Calculator/Calculator.vue";

    @Component({
        components: {Calculator}
    })
    export default class App extends Vue {
    }
</script>

<style scoped>

</style>