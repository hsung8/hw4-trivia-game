# hw4-trivia-game

This is unfinished.
It was too hard to do the code.
I spent 40 hours last week for this but :( no luck..
I am so worried.


# Psuedocode
## HTML 1 (index.html)

1. create an object + array with questions, options, and right answer.

var questions = [
    {
        question: "What is the meaning of life?",
        choice: [food, something, somethingelse, music],
        answers: food
    },
    {

    },
    {

    }
]

var quesetions = [{ q: "question 1", o: [food, sdfdfs], a: djsflkjd}
{}]

questions[0].q
questions[0].o[0]
questions[0].a

var questions = [{q}, {a}, {o]}

questions[0].q
questions[1]
questions[2]

2. create a start page with a start button. 
startQuiz() - addEventLister("click", fucntion( 퀴즈가 시작되는 function))

Call startQuiz() {
    startTimer()?
    function() {
        setTimeout() { 
            (
if() {
    clearInterval();
    finalScreen();
} else {
    clearInterval();
    finalScreen();
}
        ), 1000}
    }
    setTimeout()
    setInterval()
}

3-1. once user click on the start button, startTimer()?
1) timer starts and 
2) questions and selectable options should be displayed on the screen one at a time. # For loop?

3-2. the selectable options should be on a button.
3-3. when the user hover over the option, the button should be in a light color. # jquery - .hover

4. when the user click on the option, the user should be informed whether their selection was right or wrong at the bottom with a line - gray colored text.

showQuestions() {
    for(i = 0; i < questions.length; i++) {
        $(.showQ).text(questions[i].q[0])
        .attr()
        .css()
    }
       
}



5. either 1) when the user finish the quiz in time, or 2) time runs first, the final page should be on the screen.

var correct = 0;
var incorrect = 0;

finalScreen() {
    
    var showAnswers = document.getElementById('#showanswers');
    showAnswers.textContent = correct;

    $('#showAnswers').text(correct);
    $('#showIncorrect).text(incorrect);
}

6. user should be able to type email address and see their score.

7. top left -- view highscores button - linked to the 2nd html.

8. the score should be stored in the local storage. # localStorage.setItem() + local.Storage.getItem() --- ㅁㅏ지막 점수만 스토어.


## (highschore.html)
8. and the page with stored scores.
