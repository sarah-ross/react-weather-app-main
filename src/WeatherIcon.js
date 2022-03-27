import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./WeatherIcon.css";

export default function WeatherIcon(props) {
	const codeMapping = {
		"01d": "CLEAR_DAY",
		"01n": "CLEAR_NIGHT",
		"02d": "PARTLY_CLOUDY_DAY",
		"02n": "PARTLY_CLOUDY_NIGHT",
		"03d": "PARTLY_CLOUDY_DAY",
		"03n": "PARTLY_CLOUDLY_NIGHT",
		"04d": "CLOUDY",
		"04n": "CLOUDY",
		"09d": "RAIN",
		"09n": "RAIN",
		"010d": "RAIN",
		"010n": "RAIN",
		"011d": "RAIN",
		"011n": "RAIN",
		"013d": "SNOW",
		"013n": "SNOW",
		"50d": "FOG",
		"50n": "FOG",
	};

	return (
		<div className="WeatherIcon">
			<ReactAnimatedWeather
				icon={codeMapping[props.code]}
				color="rgb(27, 245, 241)"
				size={54}
				animate={true}
			/>
		</div>
	);
}
