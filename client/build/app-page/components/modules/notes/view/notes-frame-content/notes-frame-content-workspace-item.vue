<template>
  <div class="notes-frame-content-workspace-item">
    <paragraph-component v-if="type === 'paragraph'" :text="data"></paragraph-component>
  </div>
</template>

<script>
	import paragraphComponent from '../form-components/paragraph-component.vue';
	import trueType from '$fetot-services/true-type';

	export default {
		name: 'notes-frame-content-workspace-item',
    data() {
			return {
				type: '',
        data: ''
      }
    },
    props: {
			item: [Array, String]
    },
		components: {
			'paragraph-component': paragraphComponent
		},
    beforeMount() {
			switch( trueType.get(this.item) ) {
				case 'String':
					this.type = this.item[0] === 'p' ? 'paragraph' : '';
					this.data = this.item.slice(1);
					break;
        case 'Array':
        	this.type = this.item[0] ? 'num-list' : 'mark-list';
        	if( this.type === 'num-list' ) this.item.shift();

        	this.data = this.item;
			}
    }
	}
</script>

<style lang="scss" scoped></style>