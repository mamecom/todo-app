<template>
    <!-- <input type="text" @input="getInputValue" :value="value" v-model="inputText"> -->
    <input type="text" @input="getInputValue" :value="value" />
</template>

<script>
export default {
    props: {
        value: String,
    },

    data() {
        return {
            showInputData: "",
        };
    },
    methods: {
        getInputValue($event) {
            this.$emit("inputValue", $event.target.value);
        },
    },
};

</script>