import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecast, setForecast] = useState(null);

	function handleResponse(response) {
		setForecast(response.data.daily);
		setLoaded(true);
	}

	if (loaded) {
		return (
			<div className="WeatherForecast">
				<div className="row">
					<WeatherForecastDay data={forecast[0]} />
				</div>
			</div>
		);
	} else {
		let apiKey = `44123fc256cee17034c82aa49630bbea`;
		let longtitude = props.coordinates.lon;
		let latitude = props.coordinates.lat;
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;

		axios.get(apiUrl).then(handleResponse);

		return null;
	}
}
