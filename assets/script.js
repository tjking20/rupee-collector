

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


var score = 0;
var wins = 0;
var losses = 0;
var targetNumber = '';
var value = '';



// Computer selects a random target number adn values for the buttons for----------- 
function reset(){
	function randomOption(){
		targetNumber = Math.floor(Math.random() * (120-19)+19);
		$("#targetNumber").html(targetNumber);
	}

	function randomVal(btn){
		value = Math.floor(Math.random() * (10 - 1) + 1);
		$(btn).val(value);
	}
	randomOption();
	randomVal("#button1");
	randomVal("#button2");
	randomVal("#button3");
	randomVal("#button4");
	score=0
	$("h3").html("0");

}
reset();



	$(document).on("click", ".btn", function(){
		score += parseInt($(this).attr("value"));
		$("h3").html(score);

		// Conditional increments wins and losses, and reset values

		if(score == targetNumber){
			wins++;
			$("#wins").html("Wins: " + wins);
			reset();



		}else if (score > targetNumber){
			losses++;
			$("#losses").html("Losses: " + losses);
			reset();
		}



	
	});















});