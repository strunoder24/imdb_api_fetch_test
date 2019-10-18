<template>
	<b-card
			:title="film.Title"
			:img-src="film.Poster"
			img-alt="Image"
			img-top
			tag="article"
			style="max-width: 20rem;"
			class="mb-2 card-item"
	>
		<b-card-text>
			<h5 style='color: blue'>Rating is {{ film.float_rating }}/10</h5>

			{{ film.Plot }}
		</b-card-text>

		<b-button variant="danger"
		          v-if='favourite_films_ids.includes(film.imdbID)'
		          @click='delete_from_favourite'
			>Удалить из избранного
		</b-button>
		<b-button variant="primary"
		          v-else
		          @click='add_to_favorite'
			>Добавить в избранное
		</b-button>
	</b-card>
</template>

<script>
	import { mapGetters } from 'vuex';

    export default {
        props: {
            film: {
                type: Object,
            }
        },

	    computed: {
	        ...mapGetters([
	            'favourite_films_ids'
	        ]),
	    },

	    methods: {
            add_to_favorite(){
                this.$store.commit('add_to_favourite', this.film);

                this.$bvToast.toast(`Успешно добавлено в избранное`, {
                    toaster: 'b-toaster-top-center',
                    title: 'Добавлено',
                    autoHideDelay: 2500,
                    appendToast: true
                })
            },

            delete_from_favourite(){
                this.$store.commit('delete_from_favourite', this.film);

                this.$bvToast.toast(`Успешно удалено из избранного`, {
                    toaster: 'b-toaster-top-center',
                    title: 'Удалено',
                    autoHideDelay: 2500,
                    appendToast: false
                });

                this.$emit('deleted')
            }
	    },
    }
</script>

<style lang='scss'>
	.card-item {
		margin: 20px;
	}
</style>