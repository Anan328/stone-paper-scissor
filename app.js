let choice = document.querySelectorAll(".choice");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let message = document.querySelector("#color");
let compOptions = ["rock","paper","scissor"];
let userScore=0;
let compScore=0;
compChoice = ()=>{
    let index = Math.floor(Math.random()*3);
    return compOptions[index];
}
function update(){
    document.getElementById("user").innerText=userScore;
    document.getElementById("computer").innerText=compScore;
}
function winnerCase1(){
    let choiceStore = compChoice();
    if(choiceStore=="scissor"){
        userScore++;
        update();
        message.innerHTML=`win! your ${rock.getAttribute("id")} beats ${choiceStore}`;
        message.style.backgroundColor="#31CB00";
        console.log(choiceStore);
    }else if(choiceStore=="paper"){
        compScore++;
        update();
        message.innerHTML=`Lose!! ${choiceStore} beats your ${rock.getAttribute("id")}`;
        message.style.backgroundColor="#F34213";
        console.log(choiceStore);
    }else{
        message.innerHTML="Draw!!";
        message.style.backgroundColor="#F7B801";
        console.log(choiceStore);
    }
}
function winnerCase2(){
    let choiceStore = compChoice();
    if(choiceStore=="rock"){
        userScore++;
        update();
        message.innerHTML=`win!! your ${paper.getAttribute("id")} beats ${choiceStore}`;
        message.style.backgroundColor="#31CB00";
        console.log(choiceStore);
    }else if(choiceStore=="scissor"){
        compScore++;
        update();
        message.innerHTML=`Lose!! ${choiceStore} beats your ${paper.getAttribute("id")}`;
        message.style.backgroundColor="#F34213";
        console.log(choiceStore);
    }else{
        message.innerHTML="Draw!!";
        message.style.backgroundColor="#F7B801";
        console.log(choiceStore);
    }
}
function winnerCase3(){
    let choiceStore = compChoice();
    if(choiceStore=="paper"){
        userScore++;
        update();
        message.innerHTML=`win!!, your ${scissor.getAttribute("id")} beats ${choiceStore}`;
        message.style.backgroundColor="#31CB00";
        console.log(choiceStore);
    }else if(choiceStore=="rock"){
        compScore++;
        update();
        message.innerHTML=`Lose!! ${choiceStore} beats your ${scissor.getAttribute("id")}`;
        message.style.backgroundColor="#F34213";
        console.log(choiceStore);
    }else{
        message.innerHTML="Draw!!";
        message.style.backgroundColor="#F7B801";
        console.log(choiceStore);
    }
}
rock.addEventListener("click",()=>{
     winnerCase1();
})
paper.addEventListener("click",()=>{
    winnerCase2();
})
scissor.addEventListener("click",()=>{
    winnerCase3();
})
/*
choice.forEach(
    ()=>{
        if(rockTrigger()){
            winner();
        }
        }
     )
   */  
