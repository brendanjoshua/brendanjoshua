function getWeather() {
    const apiKey = '09ad6606ff7656d9cc3d81f0f280fdc5';
    const city = document.getElementById('cityInput').value.trim() || 'London'; // Default to London if no city is entered
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);  // Log the response to the console for debugging
            if (data.cod === 200) {
                document.querySelector("#weather_city").textContent = data.name || 'N/A';
                document.querySelector("#weather_temperature").textContent = `${data.main.temp}°C` || 'N/A';
                document.querySelector("#weather_condition").textContent = data.weather[0].description || 'N/A';
            } else {
                document.querySelector("#weather_city").textContent = 'City not found';
                document.querySelector("#weather_temperature").textContent = '--';
                document.querySelector("#weather_condition").textContent = '--';
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.querySelector("#weather_city").textContent = 'Error';
            document.querySelector("#weather_temperature").textContent = '--';
            document.querySelector("#weather_condition").textContent = '--';
        });
}
