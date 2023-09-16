const screen=document.querySelector(".screen");
const buttons=document.querySelectorAll("button");
const specialChars=["%","/","*","-","+","="];
let answer="";

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>calculate(e.target.dataset.value))
});

const calculate=(value)=>{
    if(value==="=" && value!==""){
        answer=eval(answer.replace("%" , "/100"))
    }
    else if(value==="DEL"){
        answer=answer.toString().slice(0,-1)
    }
    else if(value==="AC"){
        answer=""
    }
    else{
        if(answer==="" && specialChars.includes(value)) return;
        answer+=value
    }
    screen.value=answer;
}