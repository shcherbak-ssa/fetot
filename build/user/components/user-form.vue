<template>
  <div class="user-form">
    <div class="main">
      <avatar size="big" :fullname="inputs.fullname.value"/>
      <fetot-input notIcon="true" :input="inputs.fullname"/>
    </div>
    <div class="cont">
      <fetot-input :input="inputs.birthday"/>
      <fetot-input :input="inputs.phone"/>
      <fetot-input :input="inputs.password"/>
      <fetot-button type="text" value="Confirm"/>
    </div>
  </div>
</template>

<script>
  import avatar from 'fetot-components/avatar.vue';
  import fetotInput from 'fetot-components/fetot-input.vue';
  import fetotButton from 'fetot-components/fetot-button.vue';

  import userData from './src/user-form-data.json';

	export default {
		name: 'user-form',
    data() {
			return {
				inputs: userData.inputs
      }
    },
    components: {
			'avatar': avatar,
			'fetot-input': fetotInput,
      'fetot-button': fetotButton
    }
	}
</script>

<style lang="scss" scoped>
  @import 'fetot-src-scss';

  .user-form {
    .main {
      display: flex;
      margin-bottom: 20px;

      .ava {
        flex-shrink: 0;
        margin-right: 10px;
      }
      .fetot-input {
        margin: 10px 0 0;

        .icon {
          display: none;
        }
      }
    }
    .cont {
      @include flex-center-column;
    }
  }
</style>