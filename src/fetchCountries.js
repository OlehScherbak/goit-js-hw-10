function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3/name/${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      clearPreviousInfo();
      throw new Error(response.status);
    }

    return response.json();
  });
}

export { fetchCountries };
