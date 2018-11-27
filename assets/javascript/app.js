// My Variables
var questions = ["Question One", "Question Two", "Question Three", "Question Four"];

var answers = {
    questOne: ["Answer One", "Answer Two", "Answer Three", "Answer Four"],
    questTwo: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    questThree: ["Ans One", "Ans Two", "Ans Three", "Ans Four"],
    questFour: ["Answer One!", "Answer Two!", "Answer Three!", "Answer Four!"]
};

// Set the game up to start
$(document).ready(function () {
    console.log("Ready!");

    $("#questAns").css("visibility", "hidden");
    $("#startBtn").css("visibility", "visible");
    $("#messageArea").css("visibility", "hidden");

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
        var timer2 = "2:00";
        var interval = setInterval(function () {
            var timer = timer2.split(':');
            var minutes = parseInt(timer[0], 10);
            var seconds = parseInt(timer[1], 10);
            --seconds;
            minutes = (seconds < 0) ? --minutes : minutes;
            seconds = (seconds < 0) ? 59 : seconds;
            seconds = (seconds < 10) ? '0' + seconds : seconds;
            $("#countdown").html(minutes + ':' + seconds);
            if (minutes < 0) clearInterval(interval);
        // if the counter hits 0...    
            timer2 = minutes + ':' + seconds;
            if ((seconds <= 0) && (minutes <= 0)){
            clearInterval(interval);
            $("#countdown").html("You ran out of time!");
                $("#answers").css("visibility", "hidden");
                $("#messageArea").css("visibility", "visible");
        }
        }, 1000);

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