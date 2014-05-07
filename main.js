var winCount = 0;
var loseCount = 0;

function clickImage(choice){
	// console.log("clickImage excuted!");
	// console.log(choice);
	var number = Math.floor(Math.random() * 3);
	// console.log(number);
	var computer = ["rock","paper","scissor"];
	var result = getResult(choice, computer[number]);
	var resultString = "";
	if(result == 0){
		console.log("Tie.");
		resultString = "Tie";
	}
	else if(result == 1){
		console.log("You win.");
		resultString = "You win";
		winCount += 1;
		$('#ava-win').text("Win : " + winCount);
	}
	else{
		console.log("You lose.");
		resultString = "You lose";
		loseCount += 1;
		$('#ava-lose').text("Lose : " + loseCount);
	}

	$('#ava-humimg').attr("src",choice+".png");
	$('#ava-cpuimg').attr("src",computer[number]+".png");
	$('#result').text(resultString);
	$('#myModal').modal('show');

}

function getResult(player, computer){
	if(player == "rock"){
		if(computer == "rock")
			return 0;
		else if(computer == "scissor")
			return 1;
		else if(computer == "paper")
			return -1;
	}
	else if(player == "paper"){
		if(computer == "rock")
			return 1;
		else if(computer == "scissor")
			return -1;
		else if(computer == "paper")
			return 0;
	}
	else{
		if(computer == "rock")
			return -1;
		else if(computer == "scissor")
			return 0;
		else if(computer == "paper")
			return 1;
	}
}

$(document).ready(function(){
	console.log("ready");
});