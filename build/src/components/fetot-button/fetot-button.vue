<template>
  <div class="fetot-button" :class="types"
       @click="$emit('button-click')">{{ name }}</div>
</template>
<script src="./fetot-button.js"></script>
<style src="./fetot-button.scss" lang="scss" scoped></style>