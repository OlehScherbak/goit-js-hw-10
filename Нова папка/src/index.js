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
  const markup = countries
    .map(({ flags, name }) => {
      return `
        <li class="country__preview"">
            <img
                class="country__flags__preview"
                src="${flags.svg}"
                alt="${description}"
            />
            <span>${name}</span>
        </li>`;
    })
    .join('');
  document.body.insertAdjacentHTML('beforeend', markup);
}

function createMarkupCountry(countries) {
  Notiflix.Notify.info('Found searched country');
  // const markup = countryArray.map(country => {
  //   const { flags, name, capital, population, languages } = country;

  //   const itemEl = document.createElement('div');
  //   itemEl.classList.add('country-header');
  //   const flagEl = document.createElement('img');
  //   flagEl.classList.add('country-flag');
  //   flagEl.src = flags.svg;
  //   flagEl.alt = 'flag';
  //   flagEl.width = '60';
  //   const nameEl = document.createElement('h1');
  //   nameEl.textContent = name;

  //   const bForCapital = document.createElement('b');
  //   bForCapital.textContent = 'Capital: ';
  //   const capitalEl = document.createElement('p');
  //   capitalEl.textContent = `${capital}`;
  //   capitalEl.prepend(bForCapital);

  //   const bForPopulation = document.createElement('b');
  //   bForPopulation.textContent = 'Population: ';
  //   const populationEl = document.createElement('p');
  //   populationEl.textContent = `${population}`;
  //   populationEl.prepend(bForPopulation);

  //   const bForlanguages = document.createElement('b');
  //   bForlanguages.textContent = 'Languages: ';
  //   const languagesEl = document.createElement('p');
  //   languagesEl.textContent = `${languages
  //     .map(language => language.name)
  //     .join(', ')}`;
  //   languagesEl.prepend(bForlanguages);

  //   itemEl.append(flagEl, nameEl);

  //   return refs.countryInfo.append(
  //     itemEl,
  //     capitalEl,
  //     populationEl,
  //     languagesEl
  //   );
  // });
}
