// Set the game up to start
$(document).ready(function () {
    console.log("Ready!");

    // My Variables
    var questAns = [
        {
            question: "Who run the world?",
            answers: [
                {answer: "Girls.", value: true},
                {answer: "No.", value: false},
                {answer: "No.", value: false},
                {answer: "No.", value: false},
            ],

        },
        {
            question: "Most infamous fight took place here.",
            answers: [
                {answer: "No.", value: false},
                {answer: "Elevator", value: true},
                {answer: "No.", value: false},
                {answer: "No.", value: false},

            ],
        },

        {
            question: "How'd you wake up?",
            answers: [
                {answer: "No.", value: false},
                {answer: "No.", value: false},
                {answer: "Flawless", value: true},
                {answer: "No.", value: false},
            ],
        },
        {
            question: "Who would you do anything for?",
            answers: [
                {answer: "No.", value: false},
                {answer: "No.", value: false},
                {answer: "No.", value: false},
                {answer: "Anything for my mother.", value: true},
            ]
        }

    ];

    $("#questAns").css("visibility", "hidden");
    $("#startBtn").css("visibility", "visible");
    $("#messageArea").css("visibility", "hidden");

    function timer() {
        //timer starts counting down
        var timer2 = "0:30";
        var interval = setInterval(function () {
            var timer = timer2.split(':');
            var minutes = parseInt(timer[0], 10);
            var seconds = parseInt(timer[1], 10);
            --seconds;
            minutes = (seconds < 0) ? --minutes : minutes;
            seconds = (seconds < 0) ? 30 : seconds;
            seconds = (seconds < 10) ? '0' + seconds : seconds;
            $("#countdown").html(minutes + ':' + seconds);
            if (minutes < 0) clearInterval(interval);
            // if the counter hits 0...    
            timer2 = minutes + ':' + seconds;
            if ((seconds <= 0) && (minutes <= 0)) {
                clearInterval(interval);
                // display the time's out theme
                $("#countdown").css("visibility", "hidden");
                $("#answers").css("visibility", "hidden");
                $("#messageArea").css("visibility", "visible");
                $("#time").css("visibility", "hidden");
                $("#question").css("visibility", "hidden");
                $("p").html("You ran out of time!");
            }
        }, 1000);
    }

        // Once the start button is pushed
        $("#startBtn").click(function () {
            $("#startBtn").css("visibility", "hidden");
            $("#questAns").css("visibility", "visible");
    
            // a question appears
          
    
            // and options for answers
            
    
            timer();
    
        });

    // reset the question screen
    function resetQ() {
        $("#countdown").css("visibility", "visible");
        $("#answers").css("visibility", "visible");
        $("#messageArea").css("visibility", "hidden");
        $("#time").css("visibility", "visible");
        $("#question").css("visibility", "visible");
    }
    // if next button is clicked
    $("#nextQuest").click(function () {
        // reset page
        resetQ();
        // a question appears
       
        // and options for answers
      
        // start timer
        timer();
    });

    // if an answer is choosen

    // display correct theme if correct

    // disply wrong theme if wrong

    // if next button is hit

    // restart timer

    // continue until no more questions are left

    // display the correct/wrong/time's up answer totals

    // display start again button

    // if the button is clicked then restart the game.. not the page

});