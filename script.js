
function question1(){
    const answer1 = document.getElementById("html1").value;
    //console.log(answer1);
    const answer1Display = document.getElementById("question_1_answer");
    //const number1 = document.getElementsByName("skeleton_of_web");
    const number1 = document.querySelector('input[name="skeleton_of_web"]:checked').value;
    if(number1 === answer1){
        answer1Display.innerHTML = "Your answer was correct!";
    } else {
        answer1Display.innerHTML = `Incorrect, the answer was ${answer1}!`;
        console.log(number1);
    }
}

function question2(){
    const answer2 = document.getElementById("css2").value;
    const answer2Display = document.getElementById("question_2_answer");
    const number2 = document.querySelector('input[name="styles_the_web"]:checked').value;
    if(number2 === answer2){
        answer2Display.innerHTML = "Your answer was correct!"
    } else {
        answer2Display.innerHTML = `Incorrect, the answer was ${answer2}!`;
    }
}

function question3(){
    const answer3 = document.getElementById("javascript3").value;
    const answer3Display = document.getElementById("question_3_answer");
    const number3 = document.querySelector('input[name="rip_hair_out"]:checked').value;
    if(number3 === answer3){
        answer3Display.innerHTML = "Your answer was correct!";
    } else {
        answer3Display.innerHTML = `Incorrect, the correct answer is ${answer3}!`;
    }
}

function checkQuestions(){
    question1();
    question2();
    question3();
}












