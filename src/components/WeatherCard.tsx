import { WiDaySunny } from "react-icons/wi";
import type { WeatherAPIResponse } from "../types/weather";

interface Props {
    data: WeatherAPIResponse;
}

export default function WeatherCard({ data }: Props) {
    return (
        <div className="w-full max-w-sm mx-auto p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl text-white transform transition duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-xl font-bold">{data.name}</h2>
                    <p className="text-sm text-gray-200">
                        {data.weather[0].main}
                    </p>
                </div>
                <WiDaySunny className="text-yellow-300 text-5xl animate-pulse" />
            </div>

            <div className="text-6xl font-bold mb-2">
                {Math.round(data.main.temp)}°C
            </div>
            <p className="text-lg text-gray-200 mb-4 capitalize">
                {data.weather[0].description}
            </p>

            <div className="grid grid-cols-3 gap-2 text-sm text-gray-100">
                <div className="flex flex-col items-center">
                    <span>💧</span>
                    <span>Humidity</span>
                    <span className="font-semibold">{data.main.humidity}%</span>
                </div>
                <div className="flex flex-col items-center">
                    <span>💨</span>
                    <span>Wind</span>
                    <span className="font-semibold">
                        {data.wind.speed} km/h
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <span>🌡️</span>
                    <span>Feels Like</span>
                    <span className="font-semibold">
                        {Math.round(data.main.feels_like)}°C
                    </span>
                </div>
            </div>
        </div>
    );
}
