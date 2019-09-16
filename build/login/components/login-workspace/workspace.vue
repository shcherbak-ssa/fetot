<template>
  <div class="workspace">
    <div class="title">{{ setCurrentTitle }}</div>
    <login-content :currentContent="current" :inputs="inputs"/>
    <div class="link" @click="changeContent">{{ setCurrentLink }}</div>
  </div>
</template>
<script src="./workspace.js"></script>
<style src="./workspace.scss" lang="scss" scoped></style>