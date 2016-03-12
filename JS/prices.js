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

	   // if(this.descent === "d1"){
	   // 	return 16;
	   //  }else if(this.descent === "d2"){
	   //      console.log("test1");
	   // 	 this.price.innerHTML = "<p>20&#128;</p>";
	   //  }else if(this.descent === "d3" && this.person == "p1"){
	   //      console.log("test2");
	   // 	 this.price.innerHTML = "<p>24&#128;</p>";
	   //  }else if(this.descent === "d4" && this.person == "p1"){
	   // 	 this.price.innerHTML = "<p>35&#128;</p>";
	   //  }else if(this.descent === "d5" && this.person == "p1"){
	   // 	 this.price.innerHTML = "<p>34&#128;</p>";
	   //  }
}
