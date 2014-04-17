
function clickImage(choice){
	// console.log("clickImage excuted!");
	// console.log(choice);
	var number = Math.floor(Math.random() * 3);
	// console.log(number);
	var computer = ["rock","paper","scissor"];
	var result = getResult(choice, computer[number]);
	if(result == 0){
		console.log("Tie.");
	}
	else if(result == 1){
		console.log("You win.");
	}
	else{
		console.log("You lose.");
	}

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