<template>
  <div class="content">
    <fetot-title>
      {{ content.title }}
    </fetot-title>
    <keep-alive>
      <component :is="changeContent"></component>
    </keep-alive>
    <fetot-link>
      <span class="link">
        {{ content.link }}
      </span>
    </fetot-link>
  </div>
</template>

<script>
	import fetotTitle from 'fetot-components/elements/fetot-title.vue';
	import fetotLink from 'fetot-components/elements/fetot-link.vue';

	export default {
		name: 'content',
    props: {
			content: Object,
      inputs: Object
    },
    components: {
	    'fetot-title': fetotTitle,
	    'fetot-link': fetotLink
    },
    computed: {
			changeContent() {

      }
    }
	}
</script>

<style lang="scss" scoped>

</style>