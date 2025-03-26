//Howdy hey, the comments are back

function totalcost() { //Create functions with parameters liters and cost
  
  let cost = document.getElementById("cost").value; // get value from number input labeled "cost"
  let liters = document.getElementById("liters").value; //same thing but from number input labled "liters"

	cost = parseFloat(cost); // convert cost (string) into float
	liters = parseFloat(liters);// conver liters (string) into float
	
	document.getElementById("total").innerHTML = liters * cost; 
	//^^ Replace paragraph labled 'total' with Liters multiplied by cost
}
