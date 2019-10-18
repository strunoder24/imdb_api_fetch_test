import { film_ids, apikey } from '~/config/imdbApi'
import axios from 'axios'

const state = {
    all_films: [],
    favourite_films: []
};

const getters = {
    favourite_films_ids: state => {
        return state.favourite_films.map(film => {
            return film.imdbID
        })
    },

    all_sort_direction: state => {
        let first_item_rating = state.all_films[0].float_rating;
        let last_item_rating = state.all_films[state.all_films.length -1].float_rating;

        if (first_item_rating > last_item_rating) {
            return 'DESC'
        } else {
            return 'ASC'
        }
    },

    favourite_sort_direction: state => {
        let first_item_rating = state.favourite_films[0].float_rating;
        let last_item_rating = state.favourite_films[state.favourite_films.length -1].float_rating;

        if (first_item_rating > last_item_rating) {
            return 'DESC'
        } else {
            return 'ASC'
        }
    }
};

const mutations = {
    all_films_reverse(state) {
        state.all_films = state.all_films.reverse();
    },

    favourite_films_reverse(state) {
        state.favourite_films = state.favourite_films.reverse();
    },

    add_to_all_films(state, films){
        state.all_films = films;
    },

    add_to_favourite(state, film){
        state.favourite_films.push(film)
    },

    delete_from_favourite(state, film_to_delete){
        state.favourite_films = state.favourite_films.filter(film => {
            return film.imdbID !== film_to_delete.imdbID
        })
    }
};

const actions = {
    get_10_films({dispatch}){
        let unsorted_films = [];

        film_ids.forEach((id, index) => {
            let config = {
                params: {
                    apikey,
                    i: id
                }
            };
            
            axios.get('', config).then(({data}) => {
                unsorted_films.push(data);

                if (index === 9) {
                    dispatch('order_10_films', unsorted_films);
                }
            });
        });
    },

    order_10_films({state, commit}, unordered_films) {
        let films = unordered_films.slice();

        // Добавляю читаемый рейтинг к фильмам
        films.forEach(film => {
            // пример ответа http://www.omdbapi.com/?i=tt3896198&apikey=757ea4f2
            film['float_rating'] = parseFloat(film.Ratings[0].Value.split('/')[0])
        });

        //Сортирую фильмы по читаемому рейтингу
        films.sort(function (a, b) {
            if (a.float_rating > b.float_rating) {
                return -1;
            }
            if (a.float_rating < b.float_rating) {
                return 1;
            }
            return 0;
        });

        commit('add_to_all_films', films);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}