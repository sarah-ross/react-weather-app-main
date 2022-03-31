import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";
import FormattedDate from "./FormattedDate";
import axios from "axios";

import "./WeatherForm.css";

export default function WeatherForm() {
	const [city, setCity] = useState("");
	const [weather, setWeather] = useState(null);
	const [loaded, setLoaded] = useState(false);

	function displayWeather(response) {
		setWeather({
			coordinates: response.data.coord,
			date: new Date(response.data.dt * 1000),
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
			<form
				className="weatherSearch"
				onSubmit={handleSubmit}>
				<div className="row">
					<div className="col">
						<input
							className="form-control searchBox"
							type="search"
							placeholder="Enter a city..."
							autoFocus="on"
							onChange={updateCity}
						/>
					</div>
					<div className="col">
						<button
							className="btn btn-primary"
							type="submit">
							Search
						</button>
					</div>
				</div>
			</form>
		</div>
	);

	if (loaded) {
		return (
			<div className="WeatherForm">
				{form}
				<div className="container">
					<div className="row">
						<div className="col">
							<h3>
								<span>
									<WeatherIcon
										code={weather.icon}
										alt={weather.description}
										size={58}
									/>
									{Math.round(weather.temperature)}
									<small>ºC</small>
								</span>
							</h3>
						</div>
						<div className="col">
							<ul className="mt-4">
								<li>
									<FormattedDate date={weather.date} />
								</li>
								<li>Humidity: {weather.humidity}%</li>
								<li>Wind: {weather.temperature}km/hr</li>
								<li className="weatherCondition">
									Condition: {weather.description}
								</li>
							</ul>
						</div>
					</div>
				</div>
				<WeatherForecast
					coordinates={weather.coordinates}
				/>
			</div>
		);
	} else {
		return form;
	}
}
