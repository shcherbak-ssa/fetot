<template>
    <div class="input" v-on:click="isActive">
        <div class="ph">E-mail</div>
        <div class="icon">?</div>
        <input type="text"
               class="item"
               v-on:click="isActive"
               v-on:blur="isRemoveFocus">
        <div class="error">I am Error</div>
    </div>
</template>
<script src="./input.js"></script>
<style src="./input.scss" lang="scss" scoped></style>