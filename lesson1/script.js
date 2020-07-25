const number0Films = +prompt('Сколько фильмов вы уже посмотрели?','');
 
const personMowieDB = {
    count: number0Films,
    mowies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('На сколько оцените его?','');

      personMowieDB.mowies[a] = b;
      personMowieDB.mowies[c] = d;

      console.log(personMowieDB);
