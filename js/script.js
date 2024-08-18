const apiKey = '7fbe9617807b4724bd9141817241808'; // Your WeatherAPI key
const city = 'Kuala Lumpur';

async function getWeather() {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        
        if (!response.ok) {
            throw new Error(`Error fetching weather data: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);

        // Update your HTML with the fetched weather data
        document.getElementById('temperature').textContent = data.current.temp_c;
        document.getElementById('description').textContent = data.current.condition.text;
        document.getElementById('humidity').textContent = data.current.humidity;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById('error').textContent = 'Unable to load weather data.';
    }
}

getWeather();