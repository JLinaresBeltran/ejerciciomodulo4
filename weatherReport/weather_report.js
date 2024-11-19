function showweatherDetails(event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario

    const city = document.getElementById('city').value; // Obtiene la ciudad ingresada
    const apiKey = '9f008f973fc11675303cceb13844636d'; // Clave API de OpenWeather
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // URL de la API

    // Llama a la API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Inserta los datos del clima en el DOM
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            // Muestra un mensaje de error en el DOM
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

// Asocia el evento al formulario
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);