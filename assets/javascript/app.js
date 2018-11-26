// My Variables
var questions = ["Question One", "Question Two", "Question Three", "Question Four"];
var answers = ["Answer One", "Answer Two", "Answer Three", "Answer Four"];

// Set the game up to start
$( document ).ready(function() {
    console.log("Ready!");
    
    $("#answers").mouseover(function(){
        $("#answers").css("background-color", "lightgray");
    });
    $("#answers").mouseleave(function(){
        $("#answers").css("background-color", "");
    });

     $("#questAns").css("visibility", "hidden");
     $("startBtn").css("visibility", "visible");

// Once the start button is pushed
$("#startBtn").click(function(){
    $("#startBtn").css("visibility", "hidden");
    $("#questAns").css("visibility", "visible");

// a question appears
for(i = 0; i < questions.length; i++) {
$("#question").html(questions[i]);
}

// and options for answers
for(i = 0; i < answers.length; i++) {
    $("#answers").html(answers[i]);
    }

//timer starts counting down

// once an answer is choosen

// display correct theme if correct

// disply wrong theme if wrong

// or the timer hits 0

// display the time's out theme

// then go to next question/answer set

// restart timer

// continue until no more questions are left

// display the correct/wrong/time's up answer totals

// display start again button

// if the button is clicked then restart the game.. not the page
});
});