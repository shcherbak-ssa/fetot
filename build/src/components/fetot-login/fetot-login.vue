<template>
  <div class="fetot-login">
    <div class="title">{{ getTitle }}</div>
    <div class="content">
      <login-form @button-click="submitData" :show="!isContinue" :login="setLoginData"/>
      <check-email-message :show="isContinue" :mail="login.inputs.mail.value"/>
    </div>
    <div class="link" @click="changeContent">{{ getLink }}</div>
  </div>
</template>
<script src="./fetot-login.js"></script>
<style src="./fetot-login.scss" lang="scss" scoped></style>