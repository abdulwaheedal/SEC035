// OpenWeatherMap API Key
const API_KEY = '0126b46dba7cd6cd9b4ccd81f20f12b5'; // Your provided key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

// DOM Elements
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const currentWeather = document.getElementById('currentWeather');
const forecastContainer = document.getElementById('forecastContainer');
const errorMessage = document.getElementById('errorMessage');

// Fetch current weather
async function fetchCurrentWeather(city) {
    try {
        const response = await fetch(`${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`City not found: ${errorText}`);
        }
        const data = await response.json();
        
        displayCurrentWeather(data);
        errorMessage.style.display = 'none';
        fetchForecast(city); // Fetch forecast after successful current weather fetch
    } catch (error) {
        console.error('Error fetching current weather:', error.message);
        showError();
    }
}

// Fetch 5-day forecast
async function fetchForecast(city) {
    try {
        const response = await fetch(`${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) throw new Error('Forecast not available');
        const data = await response.json();
        
        displayForecast(data);
    } catch (error) {
        console.error('Forecast error:', error);
    }
}

// Display current weather
function displayCurrentWeather(data) {
    const { name, main, weather, wind } = data;
    document.getElementById('cityName').textContent = name;
    document.getElementById('currentTemp').textContent = `Temperature: ${Math.round(main.temp)}°C`;
    document.getElementById('currentDesc').textContent = `Description: ${weather[0].description}`;
    document.getElementById('currentHumidity').textContent = `Humidity: ${main.humidity}%`;
    document.getElementById('currentWind').textContent = `Wind: ${wind.speed} m/s`;
    
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    document.getElementById('currentIcon').style.backgroundImage = `url(${iconUrl})`;
}

// Display 5-day forecast
function displayForecast(data) {
    forecastContainer.innerHTML = '';
    const dailyData = data.list.filter(item => item.dt_txt.includes('12:00:00')); // Midday data
    
    dailyData.slice(0, 5).forEach(day => {
        const date = new Date(day.dt * 1000);
        const card = document.createElement('div');
        card.classList.add('forecast-card');
        
        card.innerHTML = `
            <div class="weather-icon" style="background-image: url(http://openweathermap.org/img/wn/${day.weather[0].icon}.png)"></div>
            <p>${date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
            <p>${Math.round(day.main.temp)}°C</p>
            <p>${day.weather[0].description}</p>
        `;
        
        forecastContainer.appendChild(card);
    });
}

// Show error message
function showError() {
    errorMessage.style.display = 'block';
    currentWeather.style.display = 'none';
    forecastContainer.innerHTML = '';
}

// Event Listeners
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        currentWeather.style.display = 'block';
        fetchCurrentWeather(city);
        cityInput.value = '';
    }
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// Initial load with default city
document.addEventListener('DOMContentLoaded', () => {
    fetchCurrentWeather('London'); // Default city
});