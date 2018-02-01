'use strict';

let correctGuesses = 0; // tracking # of correct guesses

// Asking for user's name
const userName = prompt('What is your name?');
console.log('User\'s Name = ' + userName);
alert('Nice to meet you ' + userName + '! My name is Ryan. We will now play a game where I ask you five questions about myself. You can answer with \'yes\' or \'no\'. Good luck!');

// Question 1
function q1 (){
    const answer = prompt('Was I born in Las Vegas?').toLowerCase();
    if (answer === 'no' || answer === 'n'){
        alert('That\'s right ' + userName + ', I was born in Orange, California!');
        correctGuesses++;
    } else if (answer === 'yes' || answer === 'y'){
        alert('Sorry ' + userName + ', but I was born in Orange, California.');
    } else{
        alert('Sorry ' + userName + ', but I didn\'t understand that answer.');
    }
}

// function question(){
//  for (let i = 0; i < 5; i++){
//      const answer = prompt(qString[i]).toLowerCase();
//      if (answer === 'yes' || answer === 'y') {
//          answer = 'y';
//      } else if (answer === 'no' || answer === 'n') {
//          answer = 'n';
//        } else {
//             alert('Sorry ' + userName + ', but I don\'t understand that answer.')
//           }
//      if (ynString[i] === answer){
//          alert('That\'s right ' + userName + correctString[i])
//          correctGuesses++;
//      } else if (ynString[i] !== answer) {
//          alert('That\'s incorrect ' + userName + incorrectString[i]);
// }
// }
// }

// Question 2
function q2 (){
    const favOlives = prompt('Do I like green olives?').toLowerCase();
    console.log(userName + '\'s answer to Question 2 was: ' + favOlives);
    if (favOlives === 'no' || favOlives === 'n'){
        alert('That\'s right ' + userName + ', I only like black olives!');
        correctGuesses++;
    } else if (favOlives === 'yes' || favOlives === 'y'){
        alert('Sorry ' + userName + ', but I only like black olives.');
    } else{
        alert('Sorry ' + userName + ', but I didn\'t understand that answer.');
    }
}

// Question 3
function q3 (){
    const tattoo = prompt('Do I have any tattoos?').toLowerCase();
    console.log(userName + '\'s answer to Question 3 was: ' + tattoo);
    if (tattoo === 'yes' || tattoo === 'y'){
        alert('That\'s right ' + userName + ', I have one tattoo on my arm!');
        correctGuesses++;
    } else if (tattoo === 'no' || tattoo === 'n'){
        alert('Sorry ' + userName + ', but I have one tattoo.');
    } else{
        alert('Sorry ' + userName + ', but I didn\'t understand that answer.');
    }
}

// Question 4
function q4 (){
    const civ = prompt('Is Civilization my favorite computer game?').toLowerCase();
    console.log(userName + '\'s answer to Question 4 was: ' + civ);
    if (civ === 'yes' || civ === 'y'){
        alert('That\'s right ' + userName + ', I\'ve been playing it since I was a kid!');
        correctGuesses++;
    } else if (civ === 'no' || civ === 'n'){
        alert('Sorry ' + userName + ', but that is definitely my favorite computer game.');
    } else{
        alert('Sorry ' + userName + ', but I didn\'t understand that answer.');
    }
}

// Question 5
function q5 (){
    const soccer = prompt('Is Soccer my favorite sport?').toLowerCase();
    console.log(userName + '\'s answer to Question 5 was: ' + soccer);
    if (soccer === 'yes' || soccer === 'y'){
        alert('That\'s right ' + userName + ', that is my favorite sport!');
        correctGuesses++;
    } else if (soccer === 'no' || soccer === 'n'){
        alert('Sorry ' + userName + ', but soccer is my favorite sport.');
    } else{
        alert('Sorry ' + userName + ', but I didn\'t understand that answer.');
    }
}

alert('Now I\'m going to ask you a couple more questions about me. You will have a few tries on each. Good luck!');

// Question 6 (four guesses)
function q6 (){
    for (let i = 0; i < 4; i++){
        const states = parseInt(prompt('How many states have I lived in?'));
        if (states === 3){
            alert('That\'s correct ' + userName + '! I\'ve lived in California, Nevada, and Oregon.');
            correctGuesses++;
            break;
        } else if (i === 3){
            alert('That\'s incorrect. You have no more guesses. Sorry!');
            break;
        }
        if (states < 3){
            alert('That guess is too low ' + userName + ', try again.');
        } else if (states > 3){
            alert('That guess is too high ' + userName + ', try again.');
        }
    }
}

// Question 7 (answers stored in an array, 6 guesses)
function q7 (){
    const techsupport = ['dell', 'adobe', 'shopkeep'];
    for (let i = 0; i < 6; i++){
        const techAns = prompt('Can you guess a company I\'ve done tech support for?').toLowerCase();
        if (techsupport.indexOf(techAns) === -1){
            if (i < 5){
                alert('That\'s incorrect. Please guess again.');
            } else {
                alert('Sorry, that\'s incorrect and you have no more guesses.');
                break;
            }
        } else {
            alert('That\'s correct ' + userName + '! I\'ve worked for Dell, Adobe, and ShopKeep.');
            correctGuesses++;
            break;
        }
    }
}

q1();
q2();
q3();
q4();
q5();
q6();
q7();

// Goodbye message

alert('Thanks for playing ' + userName + '! You got ' + correctGuesses + ' out of 7 questions right. See ya later!');