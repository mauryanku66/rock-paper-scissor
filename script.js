let personScore = 0;
let computerScore = 0;

let choice = document.querySelectorAll(".choice");
let msg = document.querySelector("#message");
let compChoices =  ["rock","paper","scissor"];

let yourscore = document.querySelector(".yourscore");
let comscore = document.querySelector(".compScore");

const finalwin = (gamewin,mychoice,random_gen)=>{
    if (gamewin === true) {
        personScore++;
        yourscore.innerText =personScore;
        msg.innerText = `you win your's ${mychoice} and comp ${random_gen}` ;
        msg.style.backgroundColor ="green"; 
    }
    else if(gamewin ===false){
       computerScore++;
       comscore.innerText = computerScore;
        msg.innerText = `you loose your's ${mychoice} and comp ${random_gen}`;
        msg.style.backgroundColor ="red";
    }

    console.log(gamewin);
   
};
const draw = ()=>{
    msg.innerText ="match was draw";
msg.style.backgroundColor ="#344e41"
}

const computerchoice = (compChoices)=>{
    for (const val of compChoices) { 
   let random =  Math.floor(Math.random()*3);
  
   return compChoices[random];

};

}
const result = (mychoice)=>{
    
    console.log(mychoice);
    let random_gen = computerchoice(compChoices)
    console.log(random_gen);
 gamewin = null;

    if (mychoice === random_gen) {
        draw();
    }
    
    
        

       else if (mychoice ==="rock") {
           if (random_gen === "paper") {
            gamewin = false;
        }
          else {
            gamewin = true;
        }
    }
    else if (mychoice ==="paper") {
        gamewin = random_gen=== "scissor" ? false: true;
    }
    else if (mychoice =="scissor"){
        gamewin = random_gen==="rock"? false: true;
        
    }
    finalwin(gamewin , mychoice, random_gen)


    
 };

 
  
   
choice.forEach((val) => {
    const choices = val.addEventListener("click", ()=>{
         const mychoice = val.getAttribute("id");
         
         result(mychoice);
     });
 }
);
 
