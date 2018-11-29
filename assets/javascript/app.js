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






    function timesup() {

        $("#countdown").css("visibility", "hidden");
        $("#answers").css("visibility", "hidden");
        $("#messageArea").css("visibility", "visible");
        $("#nextQuest").css("visibility", "visible");
        $("#time").css("visibility", "hidden");
        $("#question").css("visibility", "hidden");
        $("#image").css("visibility", "visible");
        $("#image").html("<img src='" + timeupimg + "'>");

    }

    var questCount = 0;

    // getting the question function
    function getQ() {
debugger;
        $("#nextQuest").css("visibility", "hidden");
        $("#image").css("visibility", "hidden");

        if (questCount <= 7) {
            questCount++;
            resetQarea();
            $("#question").html(questAns[questCount].question);
            console.log(questAns[questCount].question);
            getA();
            myTimer();
            
        }
        if (questCount > 7) {

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
        resetQarea();
        $("#question").html(questAns[questCount].question);
        console.log(questAns[questCount].question);
        getA();
        myTimer();

    });



    // reset the question area
    function resetQarea() {
        $("#countdown").css("visibility", "visible");
        $("#answers").css("visibility", "visible");
        $("#messageArea").css("visibility", "hidden");
        $("#time").css("visibility", "visible");
        $("#question").css("visibility", "visible");
        $("#image").css("visibility", "hidden");
    }


    // if next button is clicked
    $("#nextQuest").click(function () {
        myTimer();
        // a question appears
        getQ();
        // and options for answers
    });


    var rightCount = 0;
    var wrongCount = 0;

    // if an answer is choosen
    $("#answer1, #answer2, #answer3, #answer4").click(function () {


        var chosenBtn = this.id;
        
        if (chosenBtn === rightArr) {
            console.log("Right!")
            rightCount++;
            correct();
            


        }
        else {
            console.log("Wrong!");
            wrongCount++;
            wrong();
            


        }
    });


    // display correct theme if correct
    function correct() {

        var images = (questAns[questCount].img);
        $("#image").css("visibility", "visible");
        $("#countdown").css("visibility", "hidden");
        $("#answers").css("visibility", "hidden");
        $("#time").css("visibility", "hidden");
        $("#question").css("visibility", "hidden");
        $("#image").html("<img src='" + images + "'>");
        $("#area").append("You're Correct!");
        
    };



    // disply wrong theme if wrong
    function wrong() {

        var images = (questAns[questCount].img);
        $("#image").css("visibility", "visible");
        $("#countdown").css("visibility", "hidden");
        $("#answers").css("visibility", "hidden");
        $("#time").css("visibility", "hidden");
        $("#question").css("visibility", "hidden");
        $("#image").html("<img src='" + images + "'>");
        $("area").append("Nope!");

    }

    // display the correct/wrong/time's up answer totals

    // display reset button once questions are done

    // if the button is clicked then restart the game.. not the page

});