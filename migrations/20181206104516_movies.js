exports.up = (knex, Promise) => {
  return knex.schema.createTable('movies', (movie) => {
     movie.increments('id')
     movie.string('title')
     movie.string('director')
     movie.integer('release_year')
     movie.integer('rating')
     movie.string('poster_url')
  })
}

exports.down = (knex, Promise) =>  {
   return knex.schema.dropTableIfExists('movies')
}
