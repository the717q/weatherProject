import getWeather from './fetchAPI';

const form = document.querySelector('form');
const names = document.querySelector('#name');
const selectedCountry = document.querySelector('#selectedCountry');
const button = document.querySelector('#button');
const reset = document.querySelector('#reset');
const paragraph = document.querySelectorAll('.paragraph');
const getname = document.querySelector('#getname');
//Submits the form

form.addEventListener('submit', (event) => {
  event.preventDefault();
  getname.insertAdjacentHTML(
    'beforeend',
    `<p class="h4">Thank you ${names.value}</p>`
  );
  //Disables the SUBMIT button and enables the RESET button
  //Fetch the country weather according to the selected value
  getWeather(selectedCountry.value);

  // adds a danger div if the data is not provided
  if (selectedCountry.value === 'Select your city' || !names.value) {
    const div = document.createElement('div');
    div.classList.add('alert');
    div.classList.add('alert-danger');
    div.textContent = 'Please insert all the data';
    form.appendChild(div);
    //remove the child after 5 seconds
    setTimeout(function () {
      div.remove();
    }, 2000);
  }
});

reset.addEventListener('click', () => {
  paragraph.forEach((paragraph) => {
    paragraph.style.display = 'none';
  });
});
