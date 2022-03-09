//  This version will include a few changes to make the game have more 
//  features that I am still working on.

//  Questions

const Questions = [{
        id: 0,
        q: "Who taught Harry expelliarmus?",
        a:[ {text: "Snape", isCorrect: true, isSelected: false},    
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
    }
]

// Set start
var start = true;

// Iterate
function iterate(id){
    
    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    // Getting the question
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

    var selected = "";

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

    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");

    // Evaluate 
    evaluate[0].addEventListener("click", ()=>{
        if (selected == "true"){
            result[0].innerHTML = "True";
            result[0].stlye.color = "green";
        }
        else {
            result[0].innerHTML = "False";
            result[0].stlye.color = "red    ";
        }
    })
}

if (start){
    iterate("0");
}

// Next button and method
const next = document.getElementsByClassName("next")[0];
var id = 0;

next.addEventListener("click", ()=>{
    start = false;
    if (id<2){
        id++;
        iterate(id);
        console.log(id);
    }
})



