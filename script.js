let btn=document.querySelectorAll('.btn');
let reset=document.querySelector('#Reset');

let turnO="X"
const winpattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,8],[2,4,6],[3,4,5],[6,7,8]];


btn.forEach( (button)=> {
    button.addEventListener('click',()=>{
        console.log("Button was click");
        if(turnO=='O'){
             button.innerText='O'
             turnO='X'
        }else{
             button.innerText='X'
             turnO='O'
        }
        let b=button.disabled=true
        checkWinner()
    })
});

reset.addEventListener('click',resetGame)

//This funstion check for winner
function checkWinner(){
    for(pattern of winpattern){
      let pos1val=btn[pattern[0]].innerText;
        let pos2val=btn[pattern[1]].innerText;
        let pos3val=btn[pattern[2]].innerText
        if(pos1val!=='' && pos2val!=='' && pos3val!==''){            
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("winner",pos1val)
                disable()
                
            }
        }
    }
}

//Reset game
let resetGame=()=>{
    turnO='X'
    for(let box of btn){
        box.disabled=false
        box.innerText=''
    }
}
//Drow function


// This funstion help disable all button after winning any person
let disable=()=>{
    btn.forEach((button)=>{
        button.disabled=true
    })
}


// console.log(pattern[0],pattern[1],pattern[2])
 // console.log(btn[pattern[0]].innerText,btn[pattern[1]].innerText,btn[pattern[2]].innerText)
