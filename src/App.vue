<template>
    <main-header/>
    <main-body/>
    <router-view/>
</template>

<script>
import MainHeader from './components/pages/MainHeader.vue'
import MainBody from './components/pages/MainBody.vue'

export default {
  components: {
    MainHeader,
    MainBody,
  }
}

</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

.done {
  text-decoration: line-through;
}
</style>