<template>
  <div class="fetot-input"
       :class="status"
       @click="isActive">
    <input type="text"
           class="input"
           @blur="checkValue">
    <div class="placeholder">Placeholder</div>
    <div class="icon"></div>
    <div class="error"></div>
  </div>
</template>
<script src="./fetot-input.js"></script>
<style src="./fetot-input.scss" lang="scss" scoped></style>