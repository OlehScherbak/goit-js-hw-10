function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3/name/${name}?fields=name.official,capital,population,flags,languages`
  ).then(response => {
    return response.json();
  });
  // .then(countries => {
  //   console.log(countries);
  // })
  // .catch(error => {
  //   console.log(error);
  // })
}

export { fetchCountries };
