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

//timer


var timeCount = 30;

function  myTimer() {
debugger;
    timeCount--;
    $('#countdown').html(timeCount);
    if (timeCount <= 0) {
        clearInterval(timer);
        timesup();
    }
}







    var timeUpCount = 0;

    function timesup() {
        timeUpCount++;
        ansCount++;
        timer = 30;
        timeCount = 30;
        $("#area").css("visibility", "hidden");
        $("#resetQuest").css("visibility", "hidden");
        $("#countdown").css("visibility", "hidden");
        $("#answers").css("visibility", "hidden");
        $("#messageArea").css("visibility", "visible");
        $("#time").css("visibility", "hidden");
        $("#question").css("visibility", "hidden");
        $("#image").css("visibility", "visible");
        $("#image").html("<img src='" + timeupimg + "'>");
        if (questCount <= 7) {
            setTimeout(getQ, 5000);
        };
        if (questCount >= 8) {
            setTimeout(endGame, 5000);
        }

    }

    var questCount = 0;

    // getting the question function

    function getQ() {
        $('#countdown').html("<span id='counter'>30</span>");
        $("#nextQuest").css("visibility", "hidden");
        $("#image").html(" ");
        $("area").html(" ");
        if (questCount <= 7) {
            
            resetQarea();
            $("#question").html(questAns[questCount].question);
            console.log(questAns[questCount].question);
            getA();
            questCount++;

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
            $("#endScreen").css("visibility", "hidden");
            timer =30;
            timeCount = 30;

            //starting question/answer combo
            questCount = 0;

            // a question/answer team appears
            $("#question").html(questAns[questCount].question);
            console.log(questAns[questCount].question);
            getQ();

        });
    }



    // reset the question area
    function resetQarea() {
        timer = setInterval(myTimer, 1000);
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

        clearInterval(timer);
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
        timer = 30;
        timeCount = 30;
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
        timer = 30;
        timeCount = 30;
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
        $("#resetQuest").css("visibility", "hidden");
        $("#questAns").css("visibility", "visible");
        $("#endScreen").css("visibility", "hidden");
        $("#question").css("visibility", "visible");
        $("#time").css("visibility", "visible");
        $("#countdown").css("visibility", "visible");
        $("#answers").css("visibility", "visible");
        $("#messageArea").css("visibility", "visible");
        

        //starting question/answer combo
        questCount = 0;

        // a question/answer team appears
        $("#question").html(questAns[questCount].question);
        console.log(questAns[questCount].question);
        getQ();
    
    });


    function endGame() {
        timer = 0;
        timeCoount = 0;
        $("#image").css("visibility", "hidden");
        $("#endScreen").css("visibility", "visible");
        $("#endScreen").html("<h3>You've answered all the questions!</h3>");
        $("#resetQuest").css("visibility", "visible");
        $("#questAns").css("visibility", "hidden");
        $("#endScreen").html("<h2>" + timeUpCount + " times, the time ran out...but</h2> ")
        $("#endScreen").append("<h2> you've guessed " + rightCount + " right!</h2>");
        $("#endScreen").append("<h2>You also got " + wrongCount + " wrong. </h2>");


    };

});