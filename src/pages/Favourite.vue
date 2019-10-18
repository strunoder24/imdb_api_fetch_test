<template>
	<div class='container'>
		<div v-if='favourite_films.length'>
			<b-button variant="outline-primary"
			          class='sort-button'
			          v-if='favourite_sort_direction === "ASC"'
			          @click='$store.commit("favourite_films_reverse")'
			>Сортировать по убыванию
			</b-button>

			<b-button variant="outline-primary"
			          class='sort-button'
			          v-if='favourite_sort_direction === "DESC"'
			          @click='$store.commit("favourite_films_reverse")'
			>Сортировать по возрастанию
			</b-button>
			<div class='cards-container'>
				<FilmCard v-for='film in favourite_films'
				          :film='film'
				          @deleted='itemDeleted'
				          :key='film.imdbID'/>
			</div>
		</div>
		<div v-if='!favourite_films.length'>
			<b-alert show variant="primary">
				У вас ещё нету избранных фильмов
			</b-alert>
			<b-button :to='{name: "home"}' variant="primary">
				Добавить фильмы в избранное
			</b-button>
		</div>
	</div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex';
    import FilmCard from '~c/UI/FilmCard.vue';

    export default {
        computed: {
            ...mapState({
                favourite_films: state => state.films.favourite_films
            }),

	        ...mapGetters([
	            'favourite_sort_direction'
	        ])
        },

        methods: {
            getFilms(){
                this.$store.dispatch('get_10_films');
            },

	        itemDeleted(){
                this.$bvToast.toast(`Успешно удалено из избранного`, {
                    toaster: 'b-toaster-top-center',
                    title: 'Удалено',
                    autoHideDelay: 2500,
                    appendToast: false
                });
	        }
        },

        components: {
            FilmCard
        },
    }
</script>