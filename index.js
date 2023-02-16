const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false
}
const lastFilm1 = prompt('Один из последних просмотренных фильмов?');
const ratingFilm1 = prompt('На сколько оцените его?');
const lastFilm2 = prompt('Один из последних просмотренных фильмов?');
const ratingFilm2 = prompt('На сколько оцените его?');
personalMovieDB.movies[lastFilm1] = ratingFilm1;
personalMovieDB.movies[lastFilm2] = ratingFilm2;
console.log(personalMovieDB);