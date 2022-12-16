let id = "639cdffe26e681defeed1182";

async function getUserID() {
	await fetch(`http://localhost:9000/api/users/${id}`)
		.then((response) => response.json())
		.then((data) => console.log(data));
}
getUserID();

function getUser() {
	fetch("http://localhost:9000/api/users")
		.then((response) => response.json())
		.then((data) => console.log(data));
}
getUser();
