// Set the game up to start
$(document).ready(function () {
    console.log("Ready!");



    // My Variables
    var questAns = [
        {
            question: "Who was involved in inventing the FORMAC programming language?",
            answers: [
                { answer: "Girls." },
                { answer: "No.", },
                { answer: "Jean Sammet" },
                { answer: "No.", },
            ],
            img: "assets/images/sammet.jpg",

        },
        {
            question: "The movie 'Hidden Figures' was based off of this woman's life.",
            answers: [
                { answer: "No." },
                { answer: "Elevator" },
                { answer: "Katherine Johnson" },
                { answer: "No." },

            ],
            img: "assets/images/johnson.jpg",
        },

        {
            question: "One of the developers of COBOL and FORMAC.",
            answers: [
                { answer: "No." },
                { answer: "Flawless" },
                { answer: "Kathleen Antonelli" },
                { answer: "No." },
            ],
            img: "assets/images/antonelli.jpg",
        },
        {
            question: "This Navy Admiral was one of the first programmers of the Harvard Markl computer.",
            answers: [
                { answer: "No." },
                { answer: "No." },
                { answer: "Grace Hopper" },
                { answer: "Anything for my mother." },
            ],
            img: "assets/images/hopper.jpg",
        },
        {
            question: "This woman is known for her work on Babbage's proposed mechanical general purpose computer.",
            answers: [
                { answer: "No." },
                { answer: "No." },
                { answer: "Ada Lovelace" },
                { answer: "Anything for my mother." },
            ],
            img: "assets/images/lovelace.jpg",
        },
        {
            question: "She helped improve trafiic lights through code while working as a film star",
            answers: [
                { answer: "No." },
                { answer: "No." },
                { answer: "Hedy Lamarr" },
                { answer: "Anything for my mother." },
            ],
            img: "assets/images/lamarr.jpg",
        },
        {
            question: "Who invented the graphic calculator?",
            answers: [
                { answer: "No." },
                { answer: "No." },
                { answer: "Edith Clarke" },
                { answer: "Anything for my mother." },
            ],
            img: "assets/images/clarke.jpg",
        },
    ];

    var rightArr = "answer3";

    var timeupimg = ["assets/images/timesup.jpg"];



    $("#questAns").css("visibility", "hidden");
    $("#startBtn").css("visibility", "visible");
    $("#messageArea").css("visibility", "hidden");

    startGame();
    //timer starts counting down
    function myTimer() {
        //timer starts counting down
        clearInterval(interval);
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
                timesup();
            }
        }, 1000);
    }





    var timeUpCount = 0;

    function timesup() {
        timeUpCount++;
        ansCount++;
        $("#area").css("visibility", "hidden");
        $("#resetQuest").css("visibility", "hidden");
        $("#countdown").css("visibility", "hidden");
        $("#answers").css("visibility", "hidden");
        $("#messageArea").css("visibility", "visible");
        $("#time").css("visibility", "hidden");
        $("#question").css("visibility", "hidden");
        $("#image").css("visibility", "visible");
        $("#image").html("<img src='" + timeupimg + "'>");
        setTimeout(getQ, 5000);

    }

    var questCount = 0;

    // getting the question function

    function getQ() {
        $("#nextQuest").css("visibility", "hidden");
        $("#image").html(" ");
        $("area").html(" ");

        if (questCount <= 7) {

            resetQarea();
            $("#question").html(questAns[questCount].question);
            console.log(questAns[questCount].question);
            getA();
            questCount++;
            myTimer();

        }
        if (questCount >= 7) {

            // display Game Over theme
            endGame();


        }
    };



    // getting the answers function 
    function getA() {
        $("#answer1").html(questAns[questCount].answers[0].answer);
        $("#answer2").html(questAns[questCount].answers[1].answer);
        $("#answer3").html(questAns[questCount].answers[2].answer);
        $("#answer4").html(questAns[questCount].answers[3].answer);
    }


    // Once the start button is pushed

    function startGame() {
        $("#startBtn").click(function () {
            $("#startBtn").css("visibility", "hidden");
            $("#questAns").css("visibility", "visible");

            //starting question/answer combo
            questCount = 0;

            // a question/answer team appears
            resetQarea();
            $("#question").html(questAns[questCount].question);
            console.log(questAns[questCount].question);
            getQ();
            myTimer();

        });
    };



    // reset the question area
    function resetQarea() {
        $("#area").css("visibility", "hidden");
        $("#countdown").css("visibility", "visible");
        $("#answers").css("visibility", "visible");
        $("#messageArea").css("visibility", "hidden");
        $("#time").css("visibility", "visible");
        $("#question").css("visibility", "visible");
        $("#image").css("visibility", "hidden");
    }





    var rightCount = 0;
    var wrongCount = 0;

    // if an answer is choosen
    $("#answer1, #answer2, #answer3, #answer4").click(function () {


        var chosenBtn = this.id;

        if (chosenBtn === rightArr) {

            rightCount++;
            correct();
            console.log(rightCount);



        }
        else {

            wrongCount++;
            wrong();
            console.log(wrongCount);



        }
    });


    // display correct theme if correct

    var ansCount = 0;

    function correct() {

        var images = (questAns[ansCount].img);
        ansCount++;
        $("#image").css("visibility", "visible");
        $("#area").css("visibility", "visible");
        $("#countdown").css("visibility", "hidden");
        $("#answers").css("visibility", "hidden");
        $("#time").css("visibility", "hidden");
        $("#question").css("visibility", "hidden");
        $("#image").html("<img src='" + images + "'>");
        $("#area").text("You're Correct!");
        setTimeout(getQ, 5000);

    };



    // disply wrong theme if wrong

    function wrong() {

        var images = (questAns[ansCount].img);
        ansCount++;
        $("#image").css("visibility", "visible");
        $("#area").css("visibility", "visible");
        $("#countdown").css("visibility", "hidden");
        $("#answers").css("visibility", "hidden");
        $("#time").css("visibility", "hidden");
        $("#question").css("visibility", "hidden");
        $("#image").html("<img src='" + images + "'>");
        $("#area").text("Nope! She was the correct answer.");
        setTimeout(getQ, 5000);
    }

    // display reset button once questions are done
    // if the button is clicked then restart the game.. not the page
    $("#resetQuest").click(function () {
        startGame();
    });

    function endGame() {
        $("#endScreen").css("visibility", "visible");
        $("#endScreen").html("You've answered all the questions!");
        $("#resetQuest").css("visibility", "visible");
        $("#questAns").css("visibility", "hidden");
        $("#endScreen").append( timeUpCount + " times, the time ran out...but ")
        $("#endScreen").append("You've guessed " + rightCount + " right! ");
        $("#endScreen").append("You also got " + wrongCount + " wrong. ");

        // display the correct/wrong/time's up answer totals


    };

});