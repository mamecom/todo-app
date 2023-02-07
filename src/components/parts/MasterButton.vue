<template>
    <div>
        <slot>buttonName</slot>
    </div>
</template>

<script>

    export default {
        components: {
        },

        data() {
            return {
            }
        },
        methods: {
            click() {
                this.$emit('click');
            },
            // addTodoClickick() {
            //     this.$emit('click');
            // },
        }
    }
</script>

<style>
</style>