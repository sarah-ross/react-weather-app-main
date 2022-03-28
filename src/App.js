import React from "react";
import WeatherForm from "./WeatherForm";

import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="card mt-5">
				<h1>
					<span>React</span> Weather App
				</h1>
				<WeatherForm />
				<br />
			</div>
			<footer className="m-2">
				Open-source code by
				<a
					href="https://www.sarah-codes.com/"
					className="portfolioLink">
					{" "}
					Sarah Ross
				</a>{" "}
				available on{" "}
				<a
					href="https://github.com/sarah-ross/react-weather-app"
					className="githubLink">
					GitHub 👩‍💻
				</a>
			</footer>
		</div>
	);
}
