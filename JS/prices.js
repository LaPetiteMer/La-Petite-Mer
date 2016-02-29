window.addEventListener("load", function(e){

//PRICES 

	var descentList = document.getElementById('descentList');
	var personList = document.getElementById('personList');
	var contentPrices = document.getElementById('contentPrices');

	var adultsPrices = function(){
	    var x = descentList.value;
	    var y = personList.value;
	    if(x === "d1" && y == "p1"){
		    contentPrices.innerHTML = "<p>16&#128;</p>";
		}else if(x === "d2" && y == "p1"){
		    contentPrices.innerHTML = "<p>20&#128;</p>";
		}else if(x === "d3" && y == "p1"){
		    contentPrices.innerHTML = "<p>24&#128;</p>";
		}else if(x === "d4" && y == "p1"){
		    contentPrices.innerHTML = "<p>35&#128;</p>";
		}else if(x === "d5" && y == "p1"){
		    contentPrices.innerHTML = "<p>34&#128;</p>";
		}
	}

	var childsPrices = function(){
	    var x = descentList.value;
	    var y = personList.value;
	    if(x === "d1" && y == "p2"){
	        contentPrices.innerHTML = "<p>8&#128;</p>";
	    }else if(x === "d2" && y == "p2"){
	        contentPrices.innerHTML = "<p>10&#128;</p>";
	    }else if(x === "d3" && y == "p2"){
	        contentPrices.innerHTML = "<p>12&#128;</p>";
	    }else if(x === "d4" && y == "p2"){
	        contentPrices.innerHTML = "<p>17.5&#128;</p>";
	    }else if(x === "d5" && y == "p2"){
	        contentPrices.innerHTML = "<p>17&#128;</p>";
	    }else if(x === "d1" && y == "p3"){
	        contentPrices.innerHTML = "<p>14&#128;</p>";
	    }else if(x === "d2" && y == "p3"){
	        contentPrices.innerHTML = "<p>18&#128;</p>";
	    }else if(x === "d3" && y == "p3"){
	        contentPrices.innerHTML = "<p>20&#128;</p>";
	    }else if(x === "d4" && y == "p3"){
	        contentPrices.innerHTML = "<p>30&#128;</p>";
	    }else if(x === "d5" && y == "p3"){
	        contentPrices.innerHTML = "<p>29&#128;</p>";
	    }
	}

	var descentChange = function(){
	    adultsPrices();
	    childsPrices();
	} 

	var personChange = function(){
	    adultsPrices();
	    childsPrices();
	} 


}, false);