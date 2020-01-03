/*
PROGRAM LOGIC: 
MISSION: On the correct keystrokes, redirect the user to a different page.
AUTHOR: Kareem El Assad

The program listens to the user's first 10 keystrokes and stores them in an array called codeInput.
If codeInput == codeConstant then the user is redirected to a different webpage.
*/

// //Records key pressed by user
// function recordKey(key){
//     for(i = 0; i < n-1; i++){
//         codeInput[i] = key;
//         break;
//     }
// }
// console.log(codeConstant)

// document.addEventListener("keypress",function(){
//         recordKey(event.key);
//         codeInput[i] = event.key;
        
//         console.log(event.key);
//         console.log(codeInput);
// });


const codeConstant = ["l","o","v","e"]; //array of N elements where N = 4 elements, 0->3

n =  codeConstant.length; 

document.addEventListener('DOMContentLoaded', () =>{
    'use strict';

    let buffer = [];
    let checker = false;

    document.addEventListener("keydown", event => {
        //if we only want letters and numbers
        // const charList = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const key = event.key.toLowerCase();
        
        // Only interested in letters not Space or Enter
        // if(charList.indexOf(key)=== -1) return;
        
        //4 is the maximum length it could be 
        if(buffer.length == 4){
            // if (codeConstant == buffer) {   
            //     checker = true;
            // }
            // if (checker == true) {
            //     alert("Yee have matched the sequence!");
            //     window.location.replace("redirectPage.html");
            // } 
            if (JSON.stringify(codeConstant) === JSON.stringify(buffer)) {
                console.log('They are equal!');
                window.location.replace("redirectPage.html");
            }
            buffer = []; 
        }
        buffer.push(key);

        console.log(buffer);
       
    });
    
    
});


