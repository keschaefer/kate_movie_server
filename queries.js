const database = require("./database-connections")

module.exports = {
   listAll(){
      return database("movies")
   },

   addMovie(movie) {
      return database("movies").insert(movie).returning('*')
   },

   deleteMovie(id) {
      return database("movies").where({id: id}).delete()
   },

   changeMovie(id, movie) {
      return database("movies").where({id: id}).update(movie).returning("*")
   }
}