import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import { fetchCurrentWeather, fetchForecast } from "./services/weatherService";
import type { WeatherAPIResponse } from "./types/weather";
import type { ForecastAPIResponse } from "./types/forecast";

function App() {
    const [weather, setWeather] = useState<WeatherAPIResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [forecast, setForecast] = useState<ForecastAPIResponse | null>(null);

    const handleCitySearch = async (city: string) => {
        try {
            setError(null);
            const current = await fetchCurrentWeather(city);
            const forecastData = await fetchForecast(city);
            setWeather(current);
            setForecast(forecastData);
            console.log(forecast)
        } catch (err) {
            setError("City not found 😓");
            setWeather(null);
            setForecast(null);
            console.log(err);
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex flex-col items-center justify-center p-4">
            <SearchBar onSearch={handleCitySearch} />

            {error && (
                <div className="text-red-300 font-semibold mb-4">{error}</div>
            )}

            {weather && <WeatherCard data={weather} />}
        </div>
    );
}

export default App;
