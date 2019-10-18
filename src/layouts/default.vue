<template>
	<div>
		<HeaderComponent />
		<slot></slot>
		<b-toast id="favourite-toast" title="BootstrapVue" static no-auto-hide>
			Hello, world! This is a toast message.
		</b-toast>
	</div>
</template>

<script>
	import HeaderComponent from '~c/layout/Header.vue'

    export default {
		components: {
		    HeaderComponent
		}
    }
</script>