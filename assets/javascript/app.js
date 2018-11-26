// Set the game up to start
$( document ).ready(function() {
    console.log("Ready!");
     $("#questAns").css("visibility", "hidden");
     $("startBtn").css("visibility", "visible");

// Once the start button is pushed
$("#startBtn").click(function(){
    $("#startBtn").css("visibility", "hidden");
    $("#questAns").css("visibility", "visible");


// a question appears

// and options for answers

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