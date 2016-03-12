var PriceCalculator = function(){}

PriceCalculator.calculate = function(descente, person){
	
	switch (descente) {
		case "d1":
		if (person === "p1") {
			return 16;
		} else if (person === "p2") {
			return 14;
		} else {
			return 8;
		}
			break;
		case "d2":
			if (person === "p1") {
				return 22;
			} else if (person === "p2") {
				return 20;
			} else {
				return 11;
			}
			break;
		case "d3":
			if (person === "p1") {
				return 24;
			} else if (person === "p2"){
				return 22;
			} else {
				return 12;
			}
			break;
		case "d4":
			if (person === "p1") {
				return 35;
			} else if (person == "p2") {
				return 30;
			} else {
				return 17.5;
			}
		case "d5":
			if (person === "p1") {
				return 33;
			} else if (person === "p2") {
				return 30;
			} else {
				return 17;
			}
		default:
			return 0;
			break;
	}
}

function updatePrices() {
	var priceElm = document.getElementById("contentPrice");
	var descenteValue = descentList.value;
	var personValue = personList.value;
	priceElm.innerHTML = `${PriceCalculator.calculate(descenteValue, personValue)} €`;
}

descentList.addEventListener("change", updatePrices, false);
personList.addEventListener("change", updatePrices, false);