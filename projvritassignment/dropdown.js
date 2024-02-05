document.addEventListener('DOMContentLoaded',function(){
const countryInput = document.getElementById('countryInput');
const countryList = document.getElementById('countryList');

const countries = ["USA", "UK", "Canada", "Australia", ]; // Add more countries as needed

countryInput.addEventListener('focus', showCountryMenu);
countryInput.addEventListener('input', filterCountries);

function showCountryMenu() {
  populateCountryList(countries);
}

function filterCountries() {
  const filterValue = countryInput.value.toUpperCase();
  const filteredCountries = countries.filter(country => country.toUpperCase().includes(filterValue));
  
  populateCountryList(filteredCountries);
}

function populateCountryList(countryArray) {
  countryList.innerHTML = '';

  countryArray.forEach(country => {
    const listItem = document.createElement('li');
    listItem.textContent = country;
    listItem.addEventListener('click', () => {
      countryInput.value = country;
      countryList.innerHTML = ''; // Clear the list after selection
    });
    countryList.appendChild(listItem);
  });
}
});