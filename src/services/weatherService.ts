import type { WeatherAPIResponse } from "../types/weather";
import type { ForecastAPIResponse } from "../types/forecast";

const API_KEY = "ae1e276e65fe73ba725c6e50a28556a5"; //
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function fetchCurrentWeather(city: string) {
    const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("City not found");
    }

    const data: WeatherAPIResponse = await response.json();
    return data;
}

export async function fetchForecast(city: string) {
    const url = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("City not found");
    }

    const data: ForecastAPIResponse = await response.json();
    return data;
}
