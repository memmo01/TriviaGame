$(document).ready(function(){

var panel=$("#quiz");
var num = 15;

var questions = [{
	question:"what is marios brothers name?",
	answers: ["luigi","bowser","toad","yoshi"],
	correctAnswer:"luigi",
	image:"assets/images/luigi.PNG"
},{
	question:'who played the mario character in the 1993 movie "super mario bros"',
	answers:["John Candy","Joe Pesci","John Leguizamo","Bob Hoskins"],
	correctAnswer:"Bob Hoskins",
	image:"assets/images/bob.JPG"

},{
	question:"What was mario's original name?",
	answers:["Starboy","Red-Plunger","Maurice","Jumpman"],
	correctAnswer:"Jumpman",
	image:"assets/images/jumpman.GIF"

},
{
	question:"What is nintendo's best selling mario game?",
	answers:["super mario bros","mario kart 7","super mario galaxy","super mario 64"],
	correctAnswer:"super mario bros",
	image:"assets/images/mario1.PNG"

},
{
	question:"where does mario live?",
	answers:["Tokyo","New York City","Mushroom Kingdom","under a bridge"],
	correctAnswer:"Mushroom Kingdom",
	image:"assets/images/mushking.JPG"


}];

var timer;


var game={
	questions:questions,
	currentQuestion:0,
	counter:num,
	correct:0,
	incorrect:0,

	countdown:function(){
		game.counter--;
		$("#timers").html(game.counter);
		if(game.counter === 0){
			console.log("times UP");
			game.timeUp();
		}
	},
	loadQuestion:function(){
		timer=setInterval(game.countdown,1000);
		panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>")
		
		for(var i=0;i<questions[this.currentQuestion].answers.length; i++){
			panel.append("<button class='answer-button' id='button' data-name='"
				+questions[this.currentQuestion].answers[i] + "'>" + 
				questions[this.currentQuestion].answers[i] + "</button>");
		}
	},
	nextQuestion: function(){
		game.counter = num;
		$("#timers").html(game.counter);
		game.currentQuestion++;
		game.loadQuestion();
	},

	timeUp: function(){
		clearInterval(timer);

		$("#timers").html(game.counter);

		panel.html("<h2>Out of time!</h2>");
		panel.append("<h3>The correct answer was: " +questions[this.currentQuestion].correctAnswer);
		panel.append("<img src='" + questions[this.currentQuestion].image + "'/>");
		
		if (game.currentQuestion === questions.length -1){
			setTimeout(game.results, 3 *1000);
		}
		else{
			setTimeout(game.nextQuestion,3*1000);
		}
	},

	results: function(){
		clearInterval(timer);

		panel.html("<h2>All done, heres how you did!</h2>");

$("#timers").html(game.counter);

panel.append("<h3> Correct Answers: " + game.correct + "<h3>");
panel.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
panel.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) +"</h3>");
panel.append("<br><button id='start-over'>Start Over?</button>");
},
	clicked: function(e){
		clearInterval(timer);
		if($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer){
			this.answeredCorrectly();
		}
		else{
			this.answeredIncorrectly();
		}
	},

 	answeredIncorrectly: function(){
 		game.incorrect++;
 		clearInterval(timer);

 		panel.html("<h2>Nope!</h2>");
 		panel.append("<h3> The Correct Answer was: " + questions[game.currentQuestion].correctAnswer+"</h3>");
 		panel.append("<img src='" + questions[game.currentQuestion].image +"'/>");

 		if(game.currentQuestion === questions.length -1){
 			setTimeout(game.results, 3 *1000);
 		}
 		else{
 			setTimeout(game.nextQuestion, 3 * 1000);
 		}
},
	answeredCorrectly: function(){
		clearInterval(timer);
		game.correct++;
		panel.html("<h2>correct</h2>");
		panel.append("<img src='"+questions[game.currentQuestion].image + "'/>");
		
		if(game.currentQuestion === questions.length -1){
			setTimeout(game.results, 3 * 1000);
		}
		else{
			setTimeout(game.nextQuestion,3 * 1000);
		}
	},

	reset: function(){
		this.currentQuestion = 0;
		this.counter = num;
		this.correct =0;
		this.incorrect =0;
		this.loadQuestion();
	}
};

$(document).on("click", "#start-over", function(){
	game.reset();
});
$(document).on("click", ".answer-button", function(e){
	game.clicked(e);
});
$(document).on("click", "#start", function(){

	$("#timer").prepend("<h2>Time remaining: <span id='timers'>15</span> Seconds</h2>");
	$(".infoDisplay").css('background','#FFD972');
	
	game.loadQuestion();
});})
