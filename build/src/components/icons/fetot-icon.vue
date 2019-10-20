<template>
  <div class="fetot-icon" :class="setIconName"></div>
</template>

<script>
	export default {
		name: 'fetot-icon',
    props: {
			icon: String
    },
    computed: {

    }
	}
</script>

<style lang="scss">
  @import 'fetot-src-scss';


</style>