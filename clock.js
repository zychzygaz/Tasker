const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function changer() {
	const a = new Date();

	const hours = a.getHours() < 10 ? "0" + a.getHours() : a.getHours();
	const minutes = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
	const seconds = a.getSeconds() < 10 ? "0" + a.getSeconds() : a.getSeconds();

	hour.innerHTML = hours;
	min.innerHTML = minutes;
	sec.innerHTML = seconds;
}

setInterval(changer, 1000);
