'use strict';
/*
//part 1
document.querySelector(".message");//we need to pass in a selector, like the same selectors we use in css. we would use #message if the selector was an identity, but we use " . " cuz the selector is a class

console.log(document.querySelector(".message"));//this is known as DOM manipulation.

console.log(document.querySelector(".message").textContent);//Remember js reads this chain method from left - right, so the first half is gunna target the element [document.querySelector(".message")] then the second half is gunna show the actual contents of that element [textContent]

//so now we know how to use js to target html

//-------------------------------------------------------

//dom (Document Object Model): structured representation of HTML documents. allows js to access html elements and styles to manipulate them

//the dom is the connection between HTML and js

//dom is a special obj that is the entry point to the DOM, and the dom obj has its own methods

//the first child element is the HTML tags because thats usually the root element in the HTML documents

//so whatever is in the HTML doc, has to be in the DOM

//the DOM methods are not part of vanilla js, they are there own thing called WEB API.

//WEB API are like libaries that browsers impliment(use) and we can use are js code to access that libary. also these libaries are written in js and are available for us to use


//-------------------------------------------------------

document.querySelector(".message").textContent = "Correct number 🎉🍕";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 909;//this an input method


//-------------------------------------------------------

//handling click events

//our code is going to react to something that happens in the DOM

//  addEventListener("name of the type of the event", pass eventHandler function).  yes you have to pass an actual function because a function is a value

//the event handler is the code that's gunna do something when an event happens

document.querySelector(".check").addEventListener("click", function() {

    //const guess = document.querySelector(".guess").value;

    const guess = Number(document.querySelector(".guess").value);

    console.log(guess, typeof guess);//remember when you get a value from an input its gunna be a String. how ever we are gunna have to compare this string with a real number that's randomly generated.

    if(!guess) {//usually when building apps that ask for user input, you want to check if there are any values in the first place. now if you enter nothing you'l get 0 in the console and 0 is a falsy value. so the first scenario is that there is no user input and we need to respond to that

        document.querySelector(".message").textContent = " ⛔️ no number!"

    }

});//so we targeted the button and added a "addEventListener" and then a "Event handler" which is a function

//addEventListener("event name", function expression)

// the function expression is a value at the end of the day

//this code is what will be executed when the event happens

//ALSO we only define the function, we don't call it. it is JS engine that calls this function as soon as the event happens. we are actually passing this function to the event handler behind the scenes


*/
//-------------------------------------------------------
/*
//part 2


//1.💎so we need to add code for when the guess number is too low or too high. and to start this process we need to define what that correct secret number is, otherwise we have nothing to compare our guess number to.

const secretNumber = Math.trunc(Math.random() * 20) + 1; //2.💎we gotta generate a random number like we did with the dice. Math.trunc cuts off the fat with decimals.

let score = 20;//4.💎 this will be used to decrease the score number

document.querySelector(".number").textContent = secretNumber;//3.💎 we are gunn target the "white ?" to display our random number for now. now we can compare the user's guess number with the random number.

document.querySelector(".check").addEventListener("click", function () {

    const guess = Number(document.querySelector(".guess").value);

    // console.log(`the score: ${score}`);//🐼🤔🤷‍
    // console.log(guess, typeof guess);

    if(!guess) {
        document.querySelector(".message").textContent = " ⛔️ no number!"
    }else if(guess === secretNumber) {//3.💎 compare the two numbers and display msg.
        document.querySelector(".message").textContent = "Correct number 🎉";
    }else if(guess > secretNumber) {//3.1💎

        if(score > 1) {//5.1💎 so to fix the score msg

            document.querySelector(".message").textContent = "To HIGH! 📈";

            score--;//4.1💎

            document.querySelector(".score").textContent = score;//4.2💎 this is how we display the decreased score
        }else {
            document.querySelector(".message").textContent = "you LOST the game 💥";
        }
    }else if(guess < secretNumber) {//3.2💎

        if(score > 1) {//5.2💎 so to fix the score msg

            document.querySelector(".message").textContent = "To LOW! 📉";

            score--;//5💎 we needed to write this code outside the dom because if it was inside the dom, our own code/app wouldn't know what the sscore is. so its good practice to store our data/var in our code and to not just rely on the dom to store our code. also a var that is declared on our code is called a "state var" cuz this var is part of the so called "application state". which is basically all of the data that is relevent to the aplication. so we want the data to be avalable in our code and not just in the dom.

            document.querySelector(".score").textContent = score;

        }else {
            document.querySelector(".message").textContent = "you LOST the game 💥";
        }
    }
    // console.log(`the score: ${score}`);//🐼🤔🤷‍
});
// console.log(`the score Again: ${score}`);//🐼🤔🤷‍
// console.log(`the NEW NUMBER is: ${secretNumber}`);
*/
//-------------------------------------------------------
/*
//part 3

//6💎so the dom also includes css styles, and you can use dom manipulation to change styles. so we gunna change the background color to green when they win




let secretNumber = Math.trunc(Math.random() * 20) + 1;//2.🍕 gunna change this to let

let score = 20;

let highScore = 0;//2.💧 starting off.




// document.querySelector(".number").textContent = secretNumber; 7.2💎 we aren't gunna use this anymore cuz we want the secret number to hidden. now the game should work like a real guessing game. give it a try 🎮!!!

document.querySelector(".check").addEventListener("click", function() {

    const guess = Number(document.querySelector(".guess").value);

    console.log(guess, typeof guess);

    //when there is no input
    if(!guess) {

        document.querySelector(".message").textContent = " ⛔️ no number!"

        //when player wins
    }else if(guess === secretNumber) {

        document.querySelector(".message").textContent = "Correct number 🎉";

        document.querySelector("body").style.backgroundColor = "#60b347";//7💎 we are changing color, we target the entire body. Also we use the "=" to set anything to the DOM

        document.querySelector(".number").style.width = "30rem";//7.1💎"30rem" has to be in " ".ALSO dont forget about ". # " identifiers when targeting selectors. you forgot to add "." and this wasnt working🤣. ALSO when you change css with the DOM, your not changing the original CSS file. your actually changing the INLINE CSS that's on the HTML. you can see the css style being changed if you look at the dev tools in chrome. so you wont see these CSS changes in the original HTML file, you'll see them in the dev tools.🤔 I WONDER if the html in the dev tools is the DOM version of the HTML???

        if(score > highScore) {//3.💧compare current score to high score

            highScore = score;//when our score is higher, then it will be re-assigned.

            document.querySelector(".highscore").textContent = highScore;//4.💧setting the highscore.
        }
    }else if(guess > secretNumber) {//when guess is too high

        if(score > 1) {

            document.querySelector(".message").textContent = "To HIGH! 📈";

            score--;

            document.querySelector(".score").textContent = score;
        }else {
            document.querySelector(".message").textContent = "you LOST the game 💥";
        }
    }else if(guess < secretNumber) {//when guess is too low

        if(score > 1) {

            document.querySelector(".message").textContent = "To LOW! 📉";

            score--;

            document.querySelector(".score").textContent = score;
        }else {
            document.querySelector(".message").textContent = "you LOST the game 💥";
        }
    }
});


//bonus: 1.🍕

document.querySelector(".again").addEventListener("click", function() {//Remember this is known as an anonymous/expression function, usually they are assigned to a var. In this case it has no name and isn't assigned to var. so this is just an "anonymous handler function".

    score = 20;//1.2🍕 restore this value and restore the secret number. Since we are re-assigning the value to secretNumber var, it cant be a const var. we dont want to create another var like secretNumber2, we just wanna use what we already have. so we re-assign that value by getting a new secret number

    secretNumber = Math.trunc(Math.random() * 20) + 1;//3🍕 (🤯this will generate a new number without having to reload the entire page, if you reset this page then you won't be able to keep track of the high score. that's why we are reassigning this variable).

    document.querySelector(".message").textContent = "Start guessing...";//4🍕gunna set the msg back to the way it is in the original HTML file

    document.querySelector(".score").textContent = score;//5🍕set the score back

    //document.querySelector(".number").textContent = "?";//6🍕 set the number back to ? (this didn't really change anything)

    document.querySelector(".guess").value = "";//7🍕 set the input to empty

    document.querySelector("body").style.backgroundColor = "#222";

    document.querySelector(".number").style.width = "15rem";

})

//bonus: 2    1.💧 high score

*/
//-------------------------------------------------------

//part 4 cleaning stuff  1.🦃



let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (msg) {//4.🦃 creat function for repeated code
    document.querySelector(".message").textContent = msg;
}


document.querySelector(".check").addEventListener("click", function () {

    const guess = Number(document.querySelector(".guess").value);

    console.log(guess, typeof guess);

    //when there is no input
    if(!guess) {

        // document.querySelector(".message").textContent = " ⛔️ no number!"

        displayMessage(" ⛔️ no number!");//5.🦃

        //when player wins
    }else if(guess === secretNumber) {

        // document.querySelector(".message").textContent = "Correct number 🎉";

        displayMessage("Correct number 🎉");//5.1🦃

        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").style.width = "30rem";

        if(score > highScore) {

            highScore = score;

            document.querySelector(".highscore").textContent = highScore;
        }



    //when guess is wrong
    }else if(guess !== secretNumber) {

        if(score > 1) {

            //document.querySelector(".message").textContent = guess > secretNumber ? "To HIGH! 📈" :  "To LOW! 📉";//2.🦃 all of the commented out doe is now a ternary. if the number was too high or low. and a ternery works cuz its an expression that produces a value. that value will be stored in the "textContent"

            displayMessage(guess > secretNumber ? "To HIGH! 📈" :  "To LOW! 📉")//5.2🦃 this is possible because its going to return a string.

            score--;

            document.querySelector(".score").textContent = score;
        }else {
            //document.querySelector(".message").textContent = "you LOST the game 💥";

            displayMessage("you LOST the game 💥");//5.3🦃
        }
    }

    ////3.🦃 comment out code

    //
    // //when guess is too high
    // else if(guess > secretNumber) {
    //
    //     if(score > 1) {
    //
    //         document.querySelector(".message").textContent = "To HIGH! 📈";
    //
    //         score--;
    //
    //         document.querySelector(".score").textContent = score;
    //     }else {
    //         document.querySelector(".message").textContent = "you LOST the game 💥";
    //     }
    //
    //     //when guess is too low
    // }else if(guess < secretNumber) {
    //
    //     if(score > 1) {
    //
    //         document.querySelector(".message").textContent = "To LOW! 📉";
    //
    //         score--;
    //
    //         document.querySelector(".score").textContent = score;
    //
    //     }else {
    //         document.querySelector(".message").textContent = "you LOST the game 💥";
    //     }
    //
    // }


});



document.querySelector(".again").addEventListener("click", function() {

    score = 20;

    secretNumber = Math.trunc(Math.random() * 20) + 1;//3🍕

    // document.querySelector(".message").textContent = "Start guessing...";

    displayMessage("Start guessing...");//5.4🦃

    document.querySelector(".score").textContent = score;

    document.querySelector(".number").textContent = "?";

    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "#222";

    document.querySelector(".number").style.width = "15rem";

});


