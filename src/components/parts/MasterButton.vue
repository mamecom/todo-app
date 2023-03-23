<script>
    export default {
        methods: {
            click() {
                this.$emit('click');
            },
        }
    }
</script>

<template>
    <div>
        <slot>buttonName</slot>
    </div>
</template>

<style>
</style>