fetch('http://localhost:3000/api/users/favorites/new',
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      movie_id: 123,
      user_id: 123,
      title: 'title',
      poster_path: 'posterPath',
      release_date: 'releaseDate',
      vote_average: 123,
      overview: 'overview',
    }),
  })
  .then(response => response.json())
  .then(payload => console.log(payload));
