
function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	let userInputR = document.getElementById("radius").value;
	let volume = document.getElementById("volume");
	
	if(isNaN(userInputR) || userInputR<0){
		volume.value = NaN;
		return;
	}
	let r = parseFloat(userInputR);
	let v = 4/3*(Math.PI)*(r**3);
	volume.value = v.toFixed(4);
} 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
