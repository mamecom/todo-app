<template>
    <header class= "mb-auto">
        <nav class= "navbar navbar-expand navbar-dark bg-dark justify-content-between">
            <span class= "navbar-brand mb-0 h1">{{ title }}</span>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "MainHeader",
        data() {
            return {
            title: "Todo管理"
            }
        }
    }
</script>

<style>
    .mb-auto {
        background-color: #FAAB78;
        padding: 20px;
    }
</style>