import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
	function maxTemperature() {
		let temperature = Math.round(props.data.temp.max);
		return `${temperature}º`;
	}

	function minTemperature() {
		let temperature = Math.round(props.data.temp.min);
		return `${temperature}º`;
	}

	function day() {
		let date = new Date(props.data.dt * 1000);
		let day = date.getDay();
		let days = [
			"Sun",
			"Mon",
			"Tue",
			"Wed",
			"Thu",
			"Fri",
			"Sat",
		];
		return days[day];
	}

	function weatherCondition() {
		let weatherCondition =
			props.data.weather[0].description;

		return weatherCondition;
	}

	return (
		<div className="WeatherForecastDay">
			<div className="row">
				<div className="col day">{day()}</div>
			</div>
			<div className="row">
				<div className="col icon">
					<WeatherIcon
						code={props.data.weather[0].icon}
						size={35}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<span className="temperature">
						<strong>{maxTemperature()}</strong>{" "}
						{minTemperature()}
					</span>
					<div className="weatherCondition">
						{weatherCondition()}
					</div>
				</div>
			</div>
		</div>
	);
}
