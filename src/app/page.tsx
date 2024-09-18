import ClientComponent from "@/components/client-component";

async function fetchApi() {
	console.log("server fetching");
	const response = await fetch("https://example.com/user");
	const json = await response.json();
	console.log(json);
}

export default async function Home() {
	const user = await fetchApi();
	return (
		<div>
			page
			<ClientComponent />
		</div>
	);
}
