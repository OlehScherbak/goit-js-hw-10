import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const searchInput = document.querySelector('#search-box');
const countriesList = document.querySelector('.country-list');
const countryCard = document.querySelector('.country-info');
searchInput.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry(evt) {
  const searchedName = evt.target.value.trim();
  if (searchedName === '') {
    return;
  }

  clearResultMurkup();

  fetchCountries(searchedName)
    .then(countries => {
      if (countries.length > 10) {
        return Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      if (countries.length >= 2 && countries.length <= 10) {
        return createMarkupPriview(countries);
      }
      if (countries.length === 1) {
        return createMarkupCountry(countries);
      }
    })
    .catch(() => {
      return Notiflix.Notify.failure(
        'Oops, there is no country with that name'
      );
    });
}

function createMarkupPriview(countries) {
  Notiflix.Notify.info('Found 2-10 countries');
  const countriesListMarkup = countries
    .map(({ flags, name }) => {
      return `
<li class="country-item">
    <img class="country-flag" src="${flags[0]}" alt="flag of ${name.official}" width="30" height="20"/>
    <h4 class="country-name">${name.official}</h4>
</li>
`;
    })
    .join('');
  countriesList.insertAdjacentHTML('beforeend', countriesListMarkup);
}

function createMarkupCountry(countries) {
  Notiflix.Notify.info('Found searched country');
}

function clearResultMurkup() {
  countriesList.innerHTML = '';
  countryCard.innerHTML = '';
}
