'use strict';

let correctGuesses = 0; // tracking # of correct guesses

// Asking for user's name
const userName = prompt('What is your name?');
console.log('User\'s Name = ' + userName);

//Arrays for questions 1-5:
const qString = ['Was I born in Las Vegas?','Do I like green olives?','Do I have any tattoos?','Is Civilization my favorite computer game?','Is Soccer my favorite sport?'];
const ynString = ['n','n','y','y','y'];
const correctString = [', I was born in Orange, California.', ', I only like black olives.', ', I have one tattoo on my arm.', ', I\'ve been playing it since I was a kid!', ', that is my favorite sport!' ];
const incorrectString = [', I was born in Orange, California', ', but I only like black olives.', ', but I do have a tattoo on my arm.', ', Civilization is definitely my favorite game.', ', soccer is definitely my favorite sport.'];

// function for Questions 1-5
function ynQuestions(){
    alert('Nice to meet you ' + userName + '! My name is Ryan. We will now play a game where I ask you five Yes/No questions about myself. Good luck!');
    for (let i = 0; i < 5; i++){
        let answer = prompt(qString[i]).toLowerCase();
        let gibberish = false;
        if (answer === 'yes' || answer === 'y') {
            answer = 'y';
        } else if (answer === 'no' || answer === 'n') {
            answer = 'n';
        } else {
            gibberish = true;
            alert('Sorry, but I don\'t understand that answer. Please try again.');
            i--;
        }
        if (ynString[i] === answer){
            alert('That\'s right ' + userName + correctString[i]);
            correctGuesses++;
        } else if (gibberish === false) {
            alert('That\'s incorrect ' + userName + incorrectString[i]);
        }
    }
}

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

ynQuestions();
alert('Now I\'m going to ask you a couple more questions about me. You will have a few tries on each. Good luck!');
q6();
q7();
alert('Thanks for playing ' + userName + '! You got ' + correctGuesses + ' out of 7 questions right. See ya later!');