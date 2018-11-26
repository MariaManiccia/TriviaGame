// My Variables
var questions = ["Question One", "Question Two", "Question Three", "Question Four"];

var answers = {
    questOne : ["Answer One", "Answer Two", "Answer Three", "Answer Four"],
    questTwo : ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    questThree : ["Ans One", "Ans Two", "Ans Three", "Ans Four"],
    questFour : ["Answer One!", "Answer Two!", "Answer Three!", "Answer Four!"]};

// Set the game up to start
$(document).ready(function () {
    console.log("Ready!");

    $("#questAns").css("visibility", "hidden");
    $("startBtn").css("visibility", "visible");

    // Once the start button is pushed
    $("#startBtn").click(function () {
        $("#startBtn").css("visibility", "hidden");
        $("#questAns").css("visibility", "visible");

        // a question appears
        $("#question").text(questions[0]);
         
        // and options for answers
        $("#answers1").text(answers.questOne[0]);
        $("#answers2").text(answers.questOne[1]);
        $("#answers3").text(answers.questOne[2]);
        $("#answers4").text(answers.questOne[3]);

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