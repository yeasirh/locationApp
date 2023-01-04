import { Suspense, useState, useCallback, useEffect } from "react";
import useSWR from "swr";
import "./App.css";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
	width: "400px",
	height: "400px",
};

const center = {
	lat: -3.745,
	lng: -38.523,
};

const fetcher = (url: string) =>
	fetch(url)
		.then((r) => r.json())
		.catch((error) => {
			console.error(error);
			throw new Error("Fetch failed");
		});

const MapComp = () => {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.REACT_APP_PLACES_API_KEY
			? process.env.REACT_APP_PLACES_API_KEY
			: "",
	});
	const [map, setMap] = useState(null);

	const onLoad = useCallback(function callback(map: any) {
		// This is just an example of getting and using the map instance!!! don't just blindly copy!
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);

		setMap(map);
	}, []);

	const onUnmount = useCallback(function callback(map: any) {
		setMap(null);
	}, []);

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={10}
			onLoad={onLoad}
			onUnmount={onUnmount}
		></GoogleMap>
	) : (
		<></>
	);
};

function Profile() {
	const [placeId, setPlaceId] = useState("");
	const { data: places } = useSWR("http://0.0.0.0:8000/", fetcher, {
		suspense: true,
	});

	const [placesDetails, setPlacesDetails] = useState<any>([]);

	const { data: placeDetails } = useSWR(
		placeId === ""
			? null
			: `${process.env.REACT_APP_PLACES_API_URL}?place_id=${placeId}&key=${process.env.REACT_APP_PLACES_API_KEY}`,
		fetcher,
		{
			suspense: true,
		}
	);

	useEffect(() => {
		if (placeDetails) setPlacesDetails([...placesDetails, [placeDetails]]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [placeDetails]);

	console.log(placesDetails);

	return (
		<ul>
			{JSON.parse(places).map((d: any, index: any) => (
				<li
					key={index}
					onClick={() => {
						setPlaceId(d.place_id);
						console.log(placeDetails);
					}}
				>
					Name:{d.place_name}
				</li>
			))}
		</ul>
	);
}

function App() {
	return (
		<div className="App">
			<h1>Hello World</h1>
			<Suspense fallback={<h3>Loading posts...</h3>}>
				<Profile />
			</Suspense>
			<MapComp />
		</div>
	);
}

export default App;
