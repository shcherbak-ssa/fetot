<template>
  <div class="f-input">
    <div class="ph">E-mail</div>
    <div class="icon">?</div>
    <input type="text"
           class="item"
           v-on:click="isActive"
           v-on:blur="isRemoveFocus">
    <div class="error">I am Error</div>
  </div>
</template>
<script src="./f-input.js"></script>
<style src="./f-input.scss" lang="scss" scoped></style>