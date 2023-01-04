import React, { useEffect } from "react";
import useSWR from "swr";
import "./App.css";

const fetcher = (url: string) =>
	fetch(url, {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			mode: "no-cors",
		},
	})
		.then((r) => r.json())
		.catch((error) => {
			console.error(error);
		});

function Profile() {
	// const { data } = useSWR("data.json", fetcher, { suspense: true });
	const { data } = useSWR("http://0.0.0.0:8000/", fetcher, {
		suspense: true,
	});

	// console.log(data);
	return <>hello,{JSON.stringify(data)}</>;
}

function App() {
	return (
		<div className="App">
			<h1>Hello World</h1>
			<Profile />
		</div>
	);
}

export default App;
