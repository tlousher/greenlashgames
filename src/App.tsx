import React from "react";
import logo from "./assets/images/logo.svg";
import "./App.css";
import MainLayout from "./layouts/mainLayout/mainLayout";

function App() {
	return (
		<MainLayout>
			<div className="App">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Greenlash Games is on the way!</p>
				<a
					className="App-link"
					href="http://tlousher.itch.io"
					target="_blank"
					rel="noopener noreferrer"
				>
					Itch.io
				</a>
			</div>
		</MainLayout>
	);
}

export default App;
