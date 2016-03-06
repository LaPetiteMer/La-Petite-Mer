var AdultsPrices = function(descent, person, price){
	this.descent = descent.value;
	this.person = person.value;
	this.price = price;
}

var ChildsPrices = function(){
	
}

AdultsPrices.prototype.calculate = function(){
	   if(this.descent === "d1"){
	   	console.log("test");
		    this.price.innerHTML = "<p>16&#128;</p>";
		}else if(this.descent === "d2"){
			console.log("test1");
		    this.price.innerHTML = "<p>20&#128;</p>";
		}else if(this.descent === "d3" && this.person == "p1"){
			console.log("test2");
		    this.price.innerHTML = "<p>24&#128;</p>";
		}else if(this.descent === "d4" && this.person == "p1"){
		    this.price.innerHTML = "<p>35&#128;</p>";
		}else if(this.descent === "d5" && this.person == "p1"){
		    this.price.innerHTML = "<p>34&#128;</p>";
		}
}
