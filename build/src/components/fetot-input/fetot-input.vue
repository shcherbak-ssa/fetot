<template>
  <div class="fetot-input" :class="states" @click="isActive">
    <input class="input"
           :type="input.type" :value="input.value"
           @blur="isBlur" @input="setValue">
    <div class="placeholder">{{ input.placeholder }}</div>
    <div class="icon">{{ input.icon }}</div>
    <div class="error">{{ toggleError }}</div>
  </div>
</template>
<script src="./fetot-input.js"></script>
<style src="./fetot-input.scss" lang="scss" scoped></style>