<template>
    <div class="card">
        <p class="cardName">
            <slot>cardName</slot>
        </p>
    </div>
</template>

<script>
</script>

<style>
    .cardName {
        font-size: 24px;
    }
    .card {
      display: block;
      padding: 12px 28px;
      background-color: #FFF;
      width: 350px;
      height: 450px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35));
    }
</style>