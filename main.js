const countriesUrl = 'https://restcountries.com/v3/all';



fetch(countriesUrl)
  .then(response => response.json())
  .then(countries => {
    const countriesDropdown = document.getElementById('countries');

    countries.forEach(country => {
      if (country.name.common) {
        const option = document.createElement('option');
        option.value = country.name.common;
        option.textContent = country.name.common;
        countriesDropdown.appendChild(option);
      }
    });
  })
  .catch(error => {
    console.error('Erro ao obter dados de países:', error.message);
  });



const apiKey = '676537b4cf5e8b546a1f2b75e2082509'; // Substitua pela sua chave da API do OpenWeatherMap
const countriesDropdown = document.getElementById('countries');
const weatherInfoElement = document.getElementById('weather-info');

countriesDropdown.addEventListener('change', () => {
  const selectedCountry = countriesDropdown.value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCountry}&appid=${apiKey}&units=imperial`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(weatherData => {
      const temperature = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;

      const weatherInfo = `
        Previsão do tempo em ${selectedCountry}:<br>
        Temperatura: ${temperature}°F<br>
        Condição climática: ${weatherDescription}
      `;

      weatherInfoElement.innerHTML = weatherInfo;
    })
    .catch(error => {
      console.error('Erro ao obter dados de previsão do tempo:', error.message);
      weatherInfoElement.innerHTML = 'Erro ao obter dados de previsão do tempo.';
    });
});
