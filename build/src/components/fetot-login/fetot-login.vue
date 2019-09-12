<template>
  <div class="fetot-login">
    <div class="title">{{ getTitle }}</div>
    <login-form @button-click="submitData" :login="setLoginData"/>
    <div class="link" @click="isLogin = !isLogin">{{ getLink }}</div>
  </div>
</template>
<script src="./fetot-login.js"></script>
<style src="./fetot-login.scss" lang="scss" scoped></style>