$(document).ready(function() {


var score = 0;
var wins = 0;
var losses = 0;
var targetNumber = '';
var value = '';



// The reset function assigns a random target number and random values to all rupees 
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
	score = 000;
	$("h3").html("0");

}

reset();

// this onclick event effects the btn class by adding their values into the player's score.
$(document).on("click", ".btn", function(){
	score += parseInt($(this).attr("value"));
	$("h3").html(score);

	// Conditional increments wins and losses, and resets the game.
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


// $("#instructions-toggle").on("click", function(){
// 	$("#instructions").slideToggle("slow");	
	   

$("#instructions-toggle").on("click", function(){
	$("#instructions").toggle("slow");
});











});