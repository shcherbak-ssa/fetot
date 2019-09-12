<template>
  <div class="fetot-input" :class="status" @click="isActive">
    <input :type="input.type"
           :value="input.value"
           class="input"
           @blur="checkValue"
           @input="setValue">
    <div class="placeholder">{{ input.placeholder }}</div>
    <div class="icon">{{ input.icon }}</div>
    <div class="error">{{ toggleError }}</div>
  </div>
</template>
<script src="./fetot-input.js"></script>
<style src="./fetot-input.scss" lang="scss" scoped></style>