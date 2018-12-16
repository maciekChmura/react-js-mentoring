export const fetchFromSearch = (searchString, sortingType, searchOption) =>
  fetch(
    `http://react-cdp-api.herokuapp.com/movies?sortBy=${sortingType}&sortOrder=desc&search=${searchString}&searchBy=${searchOption}&limit=12`
  );

export const fetchDefault = limit =>
  fetch(`http://react-cdp-api.herokuapp.com/movies?limit=${limit}`);

export const fetchById = id =>
  fetch(`http://react-cdp-api.herokuapp.com/movies/${id}`);
