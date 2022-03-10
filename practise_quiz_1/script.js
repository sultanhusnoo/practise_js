//  This version will include a few changes to make the game have more 
//  features that I am still working on.

//  Questions
const Questions = [{
        id: 0,
        q: "Who taught Harry expelliarmus?",
        a:[ {text: "Snape", isCorrect: true},    
            {text: "Lockart", isCorrect: false},
            {text: "Umbridge", isCorrect: false},
            {text: "Trelawney", isCorrect: false}]
    },
    {
        id: 1,
        q: "Who beat the chess set of McGonagal?",
        a:[ {text: "Harry", isCorrect: false},    
            {text: "Ron", isCorrect: true},
            {text: "Hermione", isCorrect: false},
            {text: "Malfoy", isCorrect: false}]
    },
    {
        id: 2,
        q: "Who opened the Chamber?",
        a:[ {text: "Peeves", isCorrect: false},    
            {text: "Myrtle", isCorrect: false},
            {text: "Tom", isCorrect: true },
            {text: "Ginny", isCorrect: false}]
    },
    {
        id: 3,
        q: "What is the first horcrux destroyed?",
        a:[ {text: "Locket", isCorrect: false},    
            {text: "Harry", isCorrect: false},
            {text: "Cup", isCorrect: false},
            {text: "Diary", isCorrect: true}]
    }
]

// Set start - indicates that this is the first iteration
var start = true;

//  Variables used for score-keeping
let user_score = 0;
let number_of_q = 0;

// Iterate
function iterate(id){

    var evaluated = false;

    //  Getting the section for score display
    var score = document.getElementById("score");
    score.innerHTML = user_score + " / " + number_of_q;

    //  Getting the result display section
    var result = document.getElementById("result");
    result.innerHTML = "----";

    //  Getting the question
    const question = document.getElementById("question");

    //  Setting the question text
    question.innerText = (parseInt(id)+1) + ". " + Questions[id].q;

    // Getting the options
    const opt1 = document.getElementById('opt1');
    const opt2 = document.getElementById('opt2');
    const opt3 = document.getElementById('opt3');
    const opt4 = document.getElementById('opt4');

    // Providing option texts
    opt1.innerText = Questions[id].a[0].text;
    opt2.innerText = Questions[id].a[1].text;
    opt3.innerText = Questions[id].a[2].text;
    opt4.innerText = Questions[id].a[3].text;

    // Prividing the true or false value to the options
    opt1.value = Questions[id].a[0].isCorrect;
    opt2.value = Questions[id].a[1].isCorrect;
    opt3.value = Questions[id].a[2].isCorrect;
    opt4.value = Questions[id].a[3].isCorrect;

    var selected = false;

    // Show selection for opt1
    opt1.addEventListener("click", ()=>{
        opt1.style.backgroundColor = "lightgoldenrodyellow";
        opt2.style.backgroundColor = "lightskyblue";
        opt3.style.backgroundColor = "lightskyblue";
        opt4.style.backgroundColor = "lightskyblue";
        selected = opt1.value;
    })

    // Show selection for opt2
    opt2.addEventListener("click", ()=>{
        opt1.style.backgroundColor = "lightskyblue";
        opt2.style.backgroundColor = "lightgoldenrodyellow";
        opt3.style.backgroundColor = "lightskyblue";
        opt4.style.backgroundColor = "lightskyblue";
        selected = opt2.value;
    })

    // Show selection for opt3
    opt3.addEventListener("click", ()=>{
        opt1.style.backgroundColor = "lightskyblue";
        opt2.style.backgroundColor = "lightskyblue";
        opt3.style.backgroundColor = "lightgoldenrodyellow";
        opt4.style.backgroundColor = "lightskyblue";
        selected = opt3.value;
    })

    // Show selection for opt4
    opt4.addEventListener("click", ()=>{
        opt1.style.backgroundColor = "lightskyblue";
        opt2.style.backgroundColor = "lightskyblue";
        opt3.style.backgroundColor = "lightskyblue";
        opt4.style.backgroundColor = "lightgoldenrodyellow";
        selected = opt4.value;
    })

    // Grabbing the evaluate button and evaluating result
    const evaluate = document.getElementById("evaluate");

    evaluate.addEventListener("click", function(){
        if ((selected == "true")&(evaluated==false)){
            evaluated = true;
            result.innerHTML = "TRUE";
            user_score++;
            console.log(user_score);
            score.innerHTML = String(user_score).concat(" / ", String(number_of_q));
        }
        else if (selected == "false"){
            result.innerHTML = "False";
            evaluated = true;
        }
    })
    
}

if (start){
    number_of_q = Object.keys(Questions).length;
    iterate("0");
}

// Next button and method
const next = document.getElementById("next");
var id = 0;

next.addEventListener("click", function(){
    start = false;
    if (id < (number_of_q - 1))
    {
        id++;
        iterate(id);
        
        //  Clear user selection
        opt1.style.backgroundColor = "lightskyblue";
        opt2.style.backgroundColor = "lightskyblue";
        opt3.style.backgroundColor = "lightskyblue";
        opt4.style.backgroundColor = "lightskyblue";
    }
    else if (id == (number_of_q-1)){
        alert("Quiz Ended. Your score is " + String(user_score) +" over " + String(number_of_q))
    }
})
