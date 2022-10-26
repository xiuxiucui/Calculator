//your Javascript code here
//declare variables



// give the number button a class name called number

numlist=['0','1','2','3','4','5','6','7','8','9']
let buttonlist=Array.from (document.querySelectorAll("button"));
for(let i of buttonlist){
    if(i.innerText in numlist){
        i.setAttribute('class', 'number');
    }
}

//initialise a tracker to track all the input history




let inputhistory="";
//get the last input of the input history
function getlasinput() {
    if (inputhistory.length == 0) {
        return "";
    }
    else {

        return inputhistory[inputhistory.length - 1]
    }
}

function appendinputhistory(input){
    inputhistory=inputhistory+input
}

// return the displayed number or e inside calcdisplay.
// function getdisplay(){
//     return document.querySelector(".calcdisplay").innerText;
// };
// update the displayed number or e inside calcdisplay.
function formatdisplay(){
    let display1=document.querySelector(".calcdisplay").innerText

    if(display1.length > 3){
    let output = ""
    while (display1.length > 3) {
        output = "," + display1.slice(-3) + output;
        display1 = display1.slice(0, -3)
    }
    output=display1+output;
     document.querySelector(".calcdisplay").innerText=output;
}
}

// to append numbers after the current number
function appenddisplaynumber(inputnum){
    let currentdisplay=document.querySelector(".calcdisplay").innerText;
    let newdisplay=currentdisplay+inputnum
    document.querySelector(".calcdisplay").innerText=newdisplay;

    formatdisplay;
};


let numbuttons=document.querySelectorAll(".number");
for(let i of numbuttons){
    i.addEventListener("click",appenddisplaynumber(i.innerText))
}



//testing part


































//Initialise  m1 and m2 to be 0
let m1number= 0;
let m2number= 0;

//update the value of m1 and m2
function updatem1(number) {
    if (number != "e") {
        m1number = number;
    }
}

function updatem2(number) {
    if (number != "e") {
        m2number = number;
    }
}

//get the value of m1 and m2 and display them on calcdisplay
function getm1() {
    updatedisplay(m1number);
    return m1number;
}

function getm2() {
    updatedisplay(m2number);
    return m2number;
}
