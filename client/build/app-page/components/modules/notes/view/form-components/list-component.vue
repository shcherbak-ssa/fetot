<template>
  <input-container :data="setInputContainerData">

  </input-container>
</template>

<script>
	export default {
		name: 'list-component',
    computed: {
	    setInputContainerData() {
		    const self = this;
		    return {
			    icon: '&#xE824;',
			    placeholder: 'Paragraph',
			    isActive: self.isActive,
			    hasValue: self.hasValue
		    }
	    }
    }
	}
</script>

<style lang="scss" scoped>
  @import '$fetot-scss';

  .list-component {
    padding: 10px 10px 10px 30px;
  }
</style>