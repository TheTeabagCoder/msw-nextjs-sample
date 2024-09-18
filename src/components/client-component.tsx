"use client";
import { useEffect } from "react";

const getUser = async () => {
	console.log("client-side fetching");
	const response = await fetch("https://example.com/user");
	const json = await response.json();
	console.log(json);
};

export default function ClientComponent() {
	useEffect(() => {
		getUser();
	}, []);

	return <div>client component</div>;
}
