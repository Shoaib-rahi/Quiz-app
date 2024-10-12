const quizData = [
    {
        question:"What is the full form of HTML?",
        options:[
            "Hyper Text Markup Language",
            "hyper text markup language",
            "hypertext machine language",
            "hyperlink and text markup language"
        ],
        correct :0,
    },
    {
        question:"which css property is use control the spacing between elemnts",
        options:[
            "margin",
            "padding",
            "border-spacing",
            "letter-spacing"
        ],
        correct:1,
    },
    {
        question:"what is the javascript funtion use to get html id ",
        options:[
            "findelemtbyid",
            "getElementById",
            "selectelement",
            "selecttagId"
        ],
        correct:1
    },
    {
        question:"which html tag is use to order list",
        options:["ul","ul","ol","tr"],
        correct:2
    },
    {
        question:"which tag is use to bold a font in html",
        options:["br","hr","b","li"],
        correct:2
    }
];



const answerElem = document.querySelectorAll(".answer");
let quizsection = document.querySelector(".quiz");

const [questionElem,option_1,option_2,option_3,option_4] = document.querySelectorAll("#question","#option_1","#option_2","#option_3","#option_4");

const submitBtn = document.querySelector("#submit");

let currQuiz = 0;
let score = 0;



const loadQuiz = () => {
    const {question,options} = quizData[currQuiz];
    
    questionElem.innerText = question;
    options.forEach((currOption,index) => (window[`option_${index + 1}`].innerText = currOption))
}





const getselectedOption = () =>{
    // let ans_index;
    // answerElem.forEach((currOptin,index) => {
    //     if(currOptin.checked){
    //         ans_index = index
    //     }
    // });
    // return ans_index
 let answerelement  = Array.from(answerElem)
  return answerelement.findIndex((curroption) => curroption.checked);
}


const deselected = () => {
  return  answerElem.forEach((currelem) => currelem.checked  = false)
}


 submitBtn.addEventListener("click",function(){
    let selectedOptionIndex = getselectedOption();

    if(selectedOptionIndex === quizData[currQuiz].correct){
        score = score + 1;
        console.log(score)
    }
     currQuiz ++;

     if(currQuiz < quizData.length){
        deselected()
        loadQuiz();
     }else{
      quizsection.innerHTML = `<div class="result">
      <h2>Your Score : ${score}/${quizData.length}<span>Correct Answer</span></h2>
      <button class="reload-btn" onclick="location.reload()">Play Game</button></div>`  
     }
 })