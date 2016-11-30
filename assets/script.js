

// Crystal collector
// 1. create variables for targetNumber, score, buttons 1-4,wins, losses 
// 2. select a targetNumber from an array. options(math.floowmathrandom()*options.length)
// 3. create a pointsAdded function that can work for all 4 crystals. 
// pass in the relevant button info to make the function work.

// -create an onclick function using jquery. the function will add the 
// "crystal value(reference data, including the calculator game code)" 
// to score (score+=crystalValue)

// 3. add conditional if TargetNumber == score alert(winner)
// else if score > targeNumber then alert (loser) update wins or losses respectively.
// 4. reset score choose new targetNumber from array
// 5. also need to reassign values to the crystals
// - to reassign button value create a funtion using jQuery that reassigns value, 
// and call the functions in the reset.






$(document).ready(function() {
	console.log("huzzah!");


// 1. create variables for targetNumber, score, buttons 1-4,wins, losses 
var options = ["39","40","41","42", "43", "44", "45"];
var targetNumber = "";
var score = 0;
var wins = 0;
var losses = 0;



// Computer selects a random number for 

targetNumber = options[Math.floor(Math.random() * options.length)];
$("#targetNumber").html(targetNumber)



// 3. create a pointsAdded function that can work for all 4 crystals. 
// pass in the relevant button info to make the function work.

// -create an onclick function using jquery. the function will add the 
// "crystal value(reference data, including the calculator game code)" 
// to score (score+=crystalValue)

// function buttonClick(button){
	$(document).on("click", ".btn", function(){
		score = score + parseInt($(this).attr("value"));
		$("h3").html(score);

		if(score == targetNumber){
			alert("winner!");

		}else if (score > targetNumber){
			alert("loser!");
		}



	
	});

// };








// 4. add conditional if TargetNumber == score alert(winner)
// else if score > targeNumber then alert (loser) update wins or losses respectively.


// 5. also need to reassign values to the crystals
// - to reassign button value create a funtion using jQuery that reassigns value, 
// and call the functions in the reset.















});