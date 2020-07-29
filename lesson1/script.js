const number0Films = +prompt('Сколько фильмов вы уже посмотрели?','');
 
const personMowieDB = {
    count: number0Films,
    mowies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из последних просмотренных фильмов?',''),
//       b = prompt('На сколько оцените его?',''),
//       c = prompt('Один из последних просмотренных фильмов?',''),
//       d = prompt('На сколько оцените его?','');

//       personMowieDB.mowies[a] = b;
//       personMowieDB.mowies[c] = d;


      for (let i = 0; i < 2; i++) {
        const c = prompt('Один из последних просмотренных фильмов?',''),
              d = prompt('На сколько оцените его?','');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personMowieDB.mowies[c] = d;
            console.log('done');
        } else {
            console.log('error')
            i--;
        }

      }

      if (personMowieDB.count < 10) {
          console.log('Просмотрено довольно мало фильмов');
      } else if (personMowieDB.count >= 10 && personMowieDB.count <= 30) {
        console.log('Вы классный зритель');
      } else if (personMowieDB.count >= 30) {
          console.log('Вы киноман');
      } else {
          console.log('Произошла ошибка');
      }
      console.log(personMowieDB);
