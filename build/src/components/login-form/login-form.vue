<template>
  <div class="login-form" :class="checkState">
    <fetot-input :input="login.inputs.mail"/>
    <fetot-input :input="login.inputs.password" v-if="login.isLogin"/>
    <fetot-button @button-click="$emit('button-click')" :name="login.button"/>
  </div>
</template>
<script src="./login-form.js"></script>
<style src="./login-form.scss" lang="scss" scoped></style>