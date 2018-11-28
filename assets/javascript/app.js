// Set the game up to start
$(document).ready(function () {
    console.log("Ready!");

    // My Variables
    var questAns = [
        {
            question: "Who run the world?",
            answers: [
                { answer: "Girls." },
                { answer: "No.", },
                { answer: "Girls." },
                { answer: "No.", },
            ],

        },
        {
            question: "Most infamous fight took place here.",
            answers: [
                { answer: "No." },
                { answer: "Elevator" },
                { answer: "Elevator" },
                { answer: "No." },

            ],
        },

        {
            question: "How'd you wake up?",
            answers: [
                { answer: "No." },
                { answer: "Flawless" },
                { answer: "Flawless" },
                { answer: "No." },
            ],
        },
        {
            question: "Who would you do anything for?",
            answers: [
                { answer: "No." },
                { answer: "No." },
                { answer: "Anything for my mother." },
                { answer: "Anything for my mother." },
            ]
        }

    ];

    var rightArr = "answer3";


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

    var questCount = 0;

    // getting the question function
    function getQ() {

        if (questCount < 4) {
            resetQarea();
            $("#question").html(questAns[questCount].question);
            console.log(questAns[questCount].question);
            getA();
            timer();
            questCount++;
        }
        if (questCount > 4) {

            // display Game Over theme
            resetQarea();
            $("#nextQuest").css("visibility", "hidden");

        }
    }

    // getting the answers function 
    function getA() {
        $("#answer1").html(questAns[questCount].answers[0].answer);
        $("#answer2").html(questAns[questCount].answers[1].answer);
        $("#answer3").html(questAns[questCount].answers[2].answer);
        $("#answer4").html(questAns[questCount].answers[3].answer);
    }

    // Once the start button is pushed
    $("#startBtn").click(function () {
        $("#startBtn").css("visibility", "hidden");
        $("#questAns").css("visibility", "visible");

        //starting question/answer combo
        questCount = 0;

        // a question/answer team appears
        getQ();

    });


    // reset the question area
    function resetQarea() {
        $("#countdown").css("visibility", "visible");
        $("#answers").css("visibility", "visible");
        $("#messageArea").css("visibility", "hidden");
        $("#time").css("visibility", "visible");
        $("#question").css("visibility", "visible");
    }


    var rightCount = 0;
    var wrongCount = 0;

    // if next button is clicked
    $("#nextQuest").click(function () {
        // a question appears
        getQ();
        // and options for answers
    });

    // if an answer is choosen
    $("#answer1, #answer2, #answer3, #answer4").click(function () {
        var chosenBtn = this.id;
        if (chosenBtn === rightArr) {
            console.log("Right!")
            rightCount++;
        }
        else {
            console.log("Wrong!");
            wrongCount++;
        }
        debugger;
    });

    // display correct theme if correct

    // disply wrong theme if wrong

    // display the correct/wrong/time's up answer totals

    // display reset button

    // if the button is clicked then restart the game.. not the page

});