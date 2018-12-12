exports.seed = (knex, Promise) => {
  return knex('movies').del()
    .then(function () {
      return knex('movies').insert([
        {
          title: 'Waiting for Guffman',
          director: 'Christopher Guest',
          release_year: 2003,
          rating: 4,
          poster_url: 'https://m.media-amazon.com/images/M/MV5BYWY4OGVjOTctYTViZC00MWQzLWIyNjYtM2JmOWIzZGQwNWYyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,666,1000_AL_.jpg'
        },
        {
          title: 'A Mighty Wind',
          director: 'Christopher Guest',
          release_year: 1996,
          rating: 5,
          poster_url: 'https://m.media-amazon.com/images/M/MV5BMTI5MDAwMTg1OV5BMl5BanBnXkFtZTYwMzg0MDI3._V1_.jpg'
        },
        {
          title: 'This is Spinal Tap',
          director: 'Rob Reiner',
          release_year: 2000,
          rating: 4,
          poster_url: 'https://m.media-amazon.com/images/M/MV5BMTQ2MTIzMzg5Nl5BMl5BanBnXkFtZTgwOTc5NDI1MDE@._V1_.jpg'
        },
        {
          title: 'Best in Show',
          director: 'Christopher Guest',
          release_year: 1996,
          rating: 5,
          poster_url: 'https://m.media-amazon.com/images/M/MV5BMTQ5OTc0NDU1MF5BMl5BanBnXkFtZTYwNzk1OTI3._V1_.jpg'
        },
        {
          title: 'The Princess Bride',
          director: 'Rob Reiner',
          release_year: 1987,
          rating: 5,
          poster_url: 'https://m.media-amazon.com/images/M/MV5BMGM4M2Q5N2MtNThkZS00NTc1LTk1NTItNWEyZjJjNDRmNDk5XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_SY1000_CR0,0,676,1000_AL_.jpg'
        }, 
    ])
  })
}
