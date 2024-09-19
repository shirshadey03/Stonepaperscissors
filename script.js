let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const scoreuser=document.querySelector("#userscore");
const scorecomp=document.querySelector("#compscore");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");//It will take the id of the div which was clicked.
        console.log("The choice was Clicked.",userchoice);
        playgame(userchoice);
    });
});
const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
}
const gamedraw=()=>{
    console.log("The game was tied");
    msg.innerText="Match tied.";
    msg.style.backgroundColor="grey";
}
const showwinner=(userwin)=>{
    if (userwin){
        userscore++;
        scoreuser.innerText=userscore;
        console.log("User win.");
        msg.innerText="User Wins.";
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        scorecomp.innerText=compscore;
        console.log("Comp win.");
        msg.innerText="Computer Wins.";
        msg.style.backgroundColor="red";
    }
}

const playgame=(userchoice)=>{
    console.log("User choice = ",userchoice);
    const compchoice=gencompchoice();
    console.log("Comp choice = ",compchoice);
    if(userchoice === compchoice){
        gamedraw();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"? false:true;//if comp choice is paper then only the user will win else the statement after ? will execute and userwin = false
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissors"? false:true;
        }else{
            userwin=compchoice==="rock"? false:true;
        }
        showwinner(userwin);
    }
}