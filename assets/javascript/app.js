$(document).ready(function(){

var correct = 0;
var incorrect = 0;
var num = 26;



// $("#complete").html("<img src= Super-Mario.gif>");
	



// $(".start-button").on("click", run);


function run() {
      intervalId = setInterval(decrement, 1000);
    }

     function decrement() {

      //  Decrease number by one.
      num--;

      $("#timer").html("<h2>Time Remaining: " + num + "</h2>");	

      	if(num === 0){
			stop();
			alert("time is up");
			$(".wholePageContainer").html("<p></p> correct answers= " + correct + "<p></p> incorrect answers= " + incorrect);
		$("#losses").html("<p></p> incorrect= " + incorrect);
		$(".done-button").hide();

      	}
  }
  function stop(){
  	clearInterval(intervalId);
  }

run();



	$(".q-one-a-one").on("click", function(){
		$("#questionOneContainer").html("<img src=./assets/images/answerrecorded.jpg height=80px width=100%>");
		correct ++;
		$("#wins").html("correct answer" + correct);
	} )


	$(".q-one-a-two").on("click", function(){
		$("#questionOneContainer").html("<img src=./assets/images/answerrecorded.jpg height=80px width=100%>");
		incorrect ++;
	})

	$(".q-one-a-three").on("click", function(){
		$("#questionOneContainer").html("<img src=./assets/images/answerrecorded.jpg height=80px width=100%>");
		incorrect ++;
	})

	$(".q-one-a-four").on("click", function(){
		$("#questionOneContainer").html("<img src=./assets/images/answerrecorded.jpg height=80px width=100%>");
		incorrect ++;
	})


//this is the second group of questions
$(".q-two-a-one").on("click", function(){
		$("#questionTwoContainer").html("<img src=./assets/images/answerrecorded.jpg height=80px width=100%>");
		incorrect ++;
		$("#wins").html("correct answer");
	} )


	$(".q-two-a-two").on("click", function(){
		$("#questionTwoContainer").html("<img src=./assets/images/answerrecorded.jpg height=80px width=100%>");
		incorrect ++;
	})

	$(".q-two-a-three").on("click", function(){
		$("#questionTwoContainer").html("<img src=./assets/images/answerrecorded.jpg height=80px width=100%>");
		correct ++;
	})

	$(".q-two-a-four").on("click", function(){
		$("#questionTwoContainer").html("<img src=./assets/images/answerrecorded.jpg height=80px width=100%>");
		incorrect ++;
	})

//this is the third gruop of questions
$(".q-three-a-one").on("click", function(){
		$("#questionThreeContainer").html("<img src=./assets/images/answerrecorded.jpg height=80px width=100%>");
		incorrect ++;
		$("#wins").html("correct answer");
	} )


	$(".q-three-a-two").on("click", function(){
		$("#questionThreeContainer").html("<img src=./assets/images/answerrecorded.jpg height=80px width=100%>");
		incorrect ++;
	})

	$(".q-three-a-three").on("click", function(){
		$("#questionThreeContainer").html("<img src=./assets/images/answerrecorded.jpg height=80px width=100%>");
		incorrect ++;
	})

	$(".q-three-a-four").on("click", function(){
		$("#questionThreeContainer").html("<img src=./assets/images/answerrecorded.jpg height=80px width=100%>");
		correct ++;
	})

//this is the fourth group of questions
$(".q-four-a-one").on("click", function(){
		$("#questionFourContainer").html("<img src=./assets/images/answerrecorded.jpg height=80px width=100%>");
		correct ++;
	
	} )

	$(".q-four-a-two").on("click", function(){
		$("#questionFourContainer").html("<img src=./assets/images/answerrecorded.jpg height=80px width=100%>");
		incorrect ++;
	})

	$(".q-four-a-three").on("click", function(){
		$("#questionFourContainer").html("<img src=./assets/images/answerrecorded.jpg height=80px width=100%>");
		incorrect ++;
	})

	$(".q-four-a-four").on("click", function(){
		$("#questionFourContainer").html("<img src=./assets/images/answerrecorded.jpg height=80px width=100%>");
		incorrect ++;
	})

$(".q-five-a-one").on("click", function(){
		$("#questionFiveContainer").html("<img src=./assets/images/answerrecorded.jpg height=80px width=100%>");
		incorrect ++;
	
	} )

	$(".q-five-a-two").on("click", function(){
		$("#questionFiveContainer").html("<img src=./assets/images/answerrecorded.jpg height=80px width=100%>");
		incorrect ++;
	})

	$(".q-five-a-three").on("click", function(){
		$("#questionFiveContainer").html("<img src=./assets/images/answerrecorded.jpg height=80px width=100%>");
		correct ++;
	})

	$(".q-five-a-four").on("click", function(){
		$("#questionFiveContainer").html("<img src=./assets/images/answerrecorded.jpg height=80px width=100%>");
		incorrect ++;
	})

	

	$(".done-button").on("click", function(){

		$(".wholePageContainer").html("<p></p> correct answers= " + correct + "<p></p> incorrect answers= " + incorrect);
		$(".done-button").hide();
		stop();

		
	})


	})