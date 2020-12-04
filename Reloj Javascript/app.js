



const startTime = () => {
	let hoy = new Date();
	let hr = hoy.getHours();
	let min = hoy.getMinutes();
	let sec = hoy.getSeconds();
	document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;

	document.getElementById("fecha").innerHTML = (hoy.getDate() + "/" + (hoy.getMonth() +1) + "/" + hoy.getFullYear()); 
}



const mainRender = () => {
  startTime();
  window.requestAnimationFrame(mainRender);
}

const init = () => {
  mainRender();
}

init();



