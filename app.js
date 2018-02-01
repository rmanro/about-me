'use strict';

let correctGuesses = 0; // tracking # of correct guesses

// Asking for user's name
const userName = prompt('What is your name?');
console.log('User\'s Name = ' + userName);
alert('Nice to meet you ' + userName + '! My name is Ryan. We will now play a game where I ask you five questions about myself. You can answer with \'yes\' or \'no\'. Good luck!');

// Question 1
const hometown = prompt('Was I born in Las Vegas?').toLowerCase();
console.log(userName + '\'s answer to Question 1 was: ' + hometown);
if (hometown === 'no' || hometown === 'n'){
    alert('That\'s right ' + userName + ', I was born in Orange, California!');
    correctGuesses++;
} else if (hometown === 'yes' || hometown === 'y'){
    alert('Sorry ' + userName + ', but I was born in Orange, California.');
} else{
    alert('Sorry ' + userName + ', but I didn\'t understand that answer.');
}

// Question 2
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

// Question 3

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

// Question 4

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

// Question 5

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

alert('Now I\'m going to ask you a couple more questions about me. You will have a few tries on each. Good luck!');

// Question 6 (four guesses)

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
    if (i < 4){
        alert('That\'s incorrect ' + userName + ', try again.');
    }
}

// Question 7 (answers stored in an array, 6 guesses)

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
//IF THE ABOVE CODE IS CONSIDERED CHEATING BECAUSE I USED .INDEXOF, THE BELOW CODE WILL WORK TOO WITHIN THE FOR LOOP STARTING ON LINE 97. I WROTE THIS AFTERWARDS AT HOME WHEN I REALIZED THAT IT MAY BE CONSIDERED A FUNCTION
// if (techAns === techsupport[0]){
//     alert('That\'s correct ' + userName + '! I\'ve worked for Dell, Adobe, and ShopKeep.');
//     correctGuesses++;
//     break;
// }  else if (techAns === techsupport[1]){
//     alert('That\'s correct ' + userName + '! I\'ve worked for Dell, Adobe, and ShopKeep.');
//     correctGuesses++;
//     break;
// } else if (techAns === techsupport[2]){
//     alert('That\'s correct ' + userName + '! I\'ve worked for Dell, Adobe, and ShopKeep.');
//     correctGuesses++;
//     break;
// } else if (i === 5){
//     alert('Sorry, that\'s incorrect and you have no more guesses.');
//     break;
// } else {
//     alert('That\'s incorrect. Please guess again.');
// }


// Goodbye message

alert('Thanks for playing ' + userName + '! You got ' + correctGuesses + ' out of 7 questions right. See ya later!');