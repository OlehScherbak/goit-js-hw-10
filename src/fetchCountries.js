function fetchCountries(name) {
  fetch('https://restcountries.com/v3.1/name/${name}')
    .than(response => {
      return response.json();
    })
    .than(countries => {
      console.log(countries);
    })
    .catch(error => {
      console.log(error);
    });
}

export { fetchCountries };
