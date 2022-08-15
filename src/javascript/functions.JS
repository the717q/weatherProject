export { showTemperature, weatherConditions, lastUpdate, cityAndCountry };

// Each function provides a funtionality that is added into the DOM

function showTemperature(temperature) {
  return `Its currently ${temperature} degrees celsius.`;
}

function weatherConditions(conditions) {
  return `The weather its ${conditions} in your city.`;
}

function lastUpdate(update) {
  return `the weather was updated in ${update}.`;
}

function cityAndCountry(city, country) {
  return `Seems like you live in ${city}, city of ${country}.`;
}

function upperCase(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
