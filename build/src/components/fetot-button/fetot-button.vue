<template>
  <div class="fetot-button">
    <icon v-if="type === 'icon'" :icon="value"/>
    <div class="txt" v-else>{{ value }}</div>
  </div>
</template>
<script>
	import icon from 'fetot-components/icon.vue'

  export default {
		name: 'fetot-button',
		props: {
			type: String,
			value: String
		},
    components: { icon }
	}
</script>
<style src="./fetot-button.scss" lang="scss" scoped></style>