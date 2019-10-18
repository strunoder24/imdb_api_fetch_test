<template>
	<div class='container'>
		<div v-if='all_films.length'>
			<b-button variant="outline-primary"
			          class='sort-button'
			          v-if='all_sort_direction === "ASC"'
			          @click='all_films_reverse'
			>Сортировать по убыванию
			</b-button>

			<b-button variant="outline-primary"
			          class='sort-button'
			          v-if='all_sort_direction === "DESC"'
			          @click='all_films_reverse'
			>Сортировать по возрастанию
			</b-button>

			<div class='cards-container' v-if='all_films.length'>
				<FilmCard v-for='film in all_films' :film='film' :boah='12' :key='film.imdbID'/>
			</div>
		</div>
		<b-button variant="outline-primary"
		          v-if='!all_films.length'
		          @click='getFilms'
			>Получить 10 фильмов про Бэтмена
		</b-button>
	</div>
</template>

<script>
	import { mapState, mapGetters } from 'vuex';
	import FilmCard from '~c/UI/FilmCard.vue'

    export default {
        computed: {
            ...mapState({
	            all_films: state => state.films.all_films
            }),

	        ...mapGetters([
	            'all_sort_direction'
	        ])
        },

	    methods: {
            getFilms(){
				this.$store.dispatch('get_10_films')
            },

            all_films_reverse(){
                this.$store.commit('all_films_reverse')
            }
	    },

	    components: {
            FilmCard
	    }
    }
</script>