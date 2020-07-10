// Create an array of the quiz

var questions = [
    {q: "What is the name for the Jewish New Year?",
    o: ["Hanukkah", "Yom Kippur", "Kwanza", "Rosh Hashanah"],
    a: "Rosh Hashanah"},

    {q: "Which one of these characters is not friends with Harry Potter?",
    o: ["Ron Weasley", "Neville Longbottom", "Draco Malfoy", "Hermione Granger"],
    a: "Draco Malfoy"},

    {q: "What is the color of Donald Duck’s bowtie?",
    o: ["Red", "Yellow", "Blue", "White"],
    a: "Red"},

    {q: "Which animal does not appear in the Chinese zodiac?",
    o: ["Dragon", "Rabbit", "Dog", "Hummingbird"],
    a: "Hummingbird"},

    {q: "What does the “D” in “D-Day” stand for?",
    o: ["Dooms", "Dark", "Denmark", "Dunkirk"],
    a: "Dunkirk"},
]

var score = 0;

var timeleft = 75;

var timeEl = document.querySelector(".time");

var timerDisplay = document.querySelector("h5")

function countDown(){
    timeleft--;
   if(timeleft > 0){
      setTimeout(countDown,1000);
   }
   timerDisplay.textContent="Time: "+ timeleft

   if(timeleft === 0 ) {
clearInterval(timerInterval);
window.location.href="highestScore.html"
}
}



function scoreDisplay () {
    var $p = $("<p>");
    $p.attr('style', 'color: light-gray')
    // if () {
    //     $p.text("Correct!")
    // } else {
    //     $p.text("Wrong!")
    // }
    // $("form").append($p)
}


$("#start-quiz").on("click", function(event) {
    event.preventDefault();
    countDown()
    
    for (var i =0; i<questions.length; i++) {
        
        $("#main-container").removeClass( "centerP" ).addClass( "leftP" );
        $("h1").remove();
        $("p").remove();
        $("button").remove();
        $("h2").remove();

        // var questionDisplay = $("#questionDisplay");
        // questionDisplay.text(questions[i].q)
        // console.log(questions[i].q)
        var $h2 = $("<h2>");
        $h2.addClass("h2");
        $h2.text(questions[i].q)
        $("form").append($h2)
        
        for (var j=0; j<4; j++) {
            var buttonInput = questions[i].o[j]
            var $button = $("<button>");
            $button.addClass("btn").text(buttonInput)
            $("form").append($button)

            // $button.click(function() {
            //     if (answer === questions[i].a) {
            //         score += score
            //     } else {
            //         timeleft = timeleft-10
            //     }
            // })
            $("form").append("<br>")
        }

        $("#quiz-form").on("submit", function(event) {
            event.preventDefault();
            var answer = event.target['0'].innerText()
            console.log(answer)
            

            if (answer === questions[i].a) {
                $("#result").text("Woweeee! You got it! WOOO PARTY!");
            } else {
                $("#result").text("Try again!");
            }
            
        });

        clearInterval(timerInterval);
    }

    
    window.location.href="highestScore.html"
    
});



$("#quiz-form").on("submit", function(event) {
    event.preventDefault();
    var $answer = $("#trivia-answer"); 
    var answer = $answer.val();
    
    if (answer === "resig") {
        $("#result").text("Woweeee! You got it! WOOO PARTY!");
    } else {
        $("#result").text("Try again!");
    }
    
});

// var correctCount = 0;
// var wrongCount = 0;
// var unanswerCount = 0;
// var timer = 75;
// var intervalId;
// var userGuess ="";
// var running = false;
// var qCount = options.length;
// var pick;
// var index;
// var newArray = [];
// var holder = [];



// //click start button to start game
// $("#start-quiz").on("click", function () {
// 		$("#start-quiz").hide();
// 		displayQuestion();
// 		runTimer();
// 		for(var i = 0; i < questions.length; i++) {
// 	holder.push(questions[i]);
// }
// 	})
// //timer start
// function runTimer(){
// 	if (!running) {
// 	intervalId = setInterval(decrement, 1000); 
// 	running = true;
// 	}
// }
// //timer countdown
// function decrement() {
// 	$("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
// 	timer --;

// 	//stop timer if reach 0
// 	if (timer === 0) {
// 		unanswerCount++;
// 		stop();
// 		$("#answerblock").html("<p>Time is up! The correct answer is: " + pick.choice[pick.answer] + "</p>");
// 		hidepicture();
// 	}	
// }

// //timer stop
// function stop() {
// 	running = false;
// 	clearInterval(intervalId);
// }
// //randomly pick question in array if not already shown
// //display question and loop though and display possible answers
// function displayQuestion() {
// 	//generate random index in array
// 	index = Math.floor(Math.random()*questions.length);
// 	pick = questions[index];

// //	if (pick.shown) {
// //		//recursive to continue to generate new index until one is chosen that has not shown in this game yet
// //		displayQuestion();
// //	} else {
// //		console.log(pick.question);
// 		//iterate through answer array and display
// 		$("#questionblock").html("<h2>" + pick.question + "</h2>");
// 		for(var i = 0; i < pick.choice.length; i++) {
// 			var userChoice = $("<div>");
// 			userChoice.addClass("answerchoice");
// 			userChoice.html(pick.choice[i]);
// 			//assign array position to it so can check answer
// 			userChoice.attr("data-guessvalue", i);
// 			$("#answerblock").append(userChoice);
// //		}
// }



// //click function to select answer and outcomes
// $(".answerchoice").on("click", function () {
// 	//grab array position from userGuess
// 	userGuess = parseInt($(this).attr("data-guessvalue"));

// 	//correct guess or wrong guess outcomes
// 	if (userGuess === pick.answer) {
// 		stop();
// 		correctCount++;
// 		userGuess="";
// 		$("#answerblock").html("<p>Correct!</p>");
// 		hidepicture();

// 	} else {
// 		stop();
// 		wrongCount++;
// 		userGuess="";
// 		$("#answerblock").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
// 		hidepicture();
// 	}
// })
// }


// function hidepicture () {
// 	$("#answerblock").append("<img src=" + pick.photo + ">");
// 	newArray.push(pick);
// 	options.splice(index,1);

// 	var hidpic = setTimeout(function() {
// 		$("#answerblock").empty();
// 		timer= 20;

// 	//run the score screen if all questions answered
// 	if ((wrongCount + correctCount + unanswerCount) === qCount) {
// 		$("#questionblock").empty();
// 		$("#questionblock").html("<h3>Game Over!  Here's how you did: </h3>");
// 		$("#answerblock").append("<h4> Correct: " + correctCount + "</h4>" );
// 		$("#answerblock").append("<h4> Incorrect: " + wrongCount + "</h4>" );
// 		$("#answerblock").append("<h4> Unanswered: " + unanswerCount + "</h4>" );
// 		$("#reset").show();
// 		correctCount = 0;
// 		wrongCount = 0;
// 		unanswerCount = 0;

// 	} else {
// 		runTimer();
// 		displayQuestion();

// 	}
// 	}, 3000);


// }

// $("#reset").on("click", function() {
// 	$("#reset").hide();
// 	$("#answerblock").empty();
// 	$("#questionblock").empty();
// 	for(var i = 0; i < holder.length; i++) {
// 		options.push(holder[i]);
// 	}
// 	runTimer();
// 	displayQuestion();

// })

// })
