import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const searchInput = document.querySelector('#search-box');
searchInput.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry(evt) {
  const searchedName = evt.target.value.trim();
  if (searchedName === '') {
    return;
  }

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
}

function createMarkupCountry(countries) {
  Notiflix.Notify.info('Found searched country');
}
