import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./WeatherForm.css";

export default function WeatherForm() {
	const [city, setCity] = useState("");
	const [weather, setWeather] = useState(null);
	const [loaded, setLoaded] = useState(false);

	function displayWeather(response) {
		setWeather({
			temperature: response.data.main.temp,
			wind: response.data.wind.speed,
			humidity: response.data.main.humidity,
			description: response.data.weather[0].description,
			icon: response.data.weather[0].icon,
		});
		setLoaded(true);
	}

	function handleSubmit(event) {
		event.preventDefault();
		let apiKey = `44123fc256cee17034c82aa49630bbea`;
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(displayWeather);
	}

	function updateCity(event) {
		setCity(event.target.value);
	}

	let form = (
		<div className="WeatherForm">
			<form className="mt-4" onSubmit={handleSubmit}>
				<input
					className="m-3 p-2 searchBox"
					type="search"
					placeholder="Enter a city..."
					onChange={updateCity}
				/>
				<button type="submit" class="btn btn-primary">
					Search
				</button>
			</form>
		</div>
	);

	if (loaded) {
		return (
			<div className="WeatherForm">
				{form}
				<h3>
					<span>
						<WeatherIcon
							code={weather.icon}
							alt={weather.description}
						/>
						{Math.round(weather.temperature)}
						<small>ºC</small>
					</span>
				</h3>
				<ul className="mt-4">
					<li>Humidity: {weather.humidity}%</li>
					<li>Wind: {weather.temperature}km/hr</li>
					<li>Description: {weather.description}</li>
				</ul>
			</div>
		);
	} else {
		return form;
	}
}
