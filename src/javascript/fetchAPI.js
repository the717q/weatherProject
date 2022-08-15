import {
  showTemperature,
  weatherConditions,
  lastUpdate,
  cityAndCountry,
} from './functions';

const citycountrys = document.querySelector('#cityandcountry');
const weatherCondition = document.querySelector('#weather-conditions');
const temperaturs = document.querySelector('#temperature');
const lastUpdated = document.querySelector('#last-updated');
//Fetch the data and inserts it info each paragraph

export default function getWeather(city) {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=8f7a4b7b0ad34e3bb8b170021221208&q=${city}&aqi=no
    `
  )
    .then((response) => {
      if (!response.ok) {
        throw Error('There is something fetching this API');
      }
      return response.json();
    })
    .then((data) => {
      weatherCondition.textContent = weatherConditions(
        data.current.condition.text
      );

      temperaturs.textContent = showTemperature(data.current.temp_c);
      citycountrys.textContent = cityAndCountry(
        data.location.name,
        data.location.country
      );
      lastUpdated.textContent = lastUpdate(data.current.last_updated);
    })
    .catch((error) => {
      console.error(error);
    });
}
