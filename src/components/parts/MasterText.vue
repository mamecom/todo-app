<script>
// TODO: 空白の場合に警告を出すようにしたい。致命的なバグではないため追々修正が必要。

export default {
    props: {
        value: String,
    },
    methods: {
        getInputValue($event) {
            this.$emit("inputValue", $event.target.value);
        },
    },
};
</script>

<template>
    <input type="text" @input="getInputValue" :value="value" />
</template>