console.log(`
********************class for Movie*******************

`);
class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}
let casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log("with PG rating");
console.log(casinoRoyale);
casinoRoyale = new Movie("Casino Royale", "Eon Productions");
console.log("without PG rating");
console.log(casinoRoyale);
