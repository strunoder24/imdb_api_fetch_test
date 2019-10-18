<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="info">
			<b-navbar-brand href="#">IMDB fetch</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
						<b-nav-item :to='{name: "home"}'
						            :active='$route.name === "home"'
							>Главная
						</b-nav-item>
					<b-link>
						<b-nav-item :to='{name: "favorite"}'
						            href="#"
						            :active='$route.name === "favorite"'
							>Избранное
						</b-nav-item>
					</b-link>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
    export default {
        data: () => ({}),
        mounted() {

        },
        computed: {},
        methods: {},
        components: {}
    }
</script>