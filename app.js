'use strict';

// Asking for user's name
const userName = prompt('What is your name?');
console.log('User\'s Name = ' + userName);
alert('Nice to meet you ' + userName + '! My name is Ryan. We will now play a game where I ask you five questions about myself. You can answer with \'yes\' or \'no\'. Good luck!');

// Question 1
const hometown = prompt('Was I born in Las Vegas?');
console.log(userName + '\'s answer to Question 1 was: ' + hometown);
if (hometown.toLowerCase() === 'no'){
    alert('That\'s right ' + userName + ', I was born in Orange, California!');
} else if (hometown.toLowerCase() === 'n'){
    alert('That\'s right ' + userName + ', I was born in Orange, California!');
} else if (hometown.toLowerCase() === 'yes'){
    alert('Sorry ' + userName + ', but I was born in Orange, California.');
} else if (hometown.toLowerCase() === 'y'){
    alert('Sorry ' + userName + ', but I was born in Orange, California.');
} else{
    alert('Sorry ' + userName + ', but I didn\'t understand that answer.');
}

// Question 2
const favOlives = prompt('Do I like green olives?');
console.log(userName + '\'s answer to Question 2 was: ' + favOlives);
if (favOlives.toLowerCase() === 'no'){
    alert('That\'s right ' + userName + ', I only like black olives!');
} else if (favOlives.toLowerCase() === 'n'){
    alert('That\'s right ' + userName + ', I only like black olives!');
} else if (favOlives.toLowerCase() === 'yes'){
    alert('Sorry ' + userName + ', but I only like black olives.');
} else if (favOlives.toLowerCase() === 'y'){
    alert('Sorry ' + userName + ', but I only like black olives');
} else{
    alert('Sorry ' + userName + ', but I didn\'t understand that answer.');
}

// Question 3

const tattoo = prompt('Do I have any tattoos?');
console.log(userName + '\'s answer to Question 3 was: ' + tattoo);
if (tattoo.toLowerCase() === 'yes'){
    alert('That\'s right ' + userName + ', I have one tattoo on my arm!');
} else if (tattoo.toLowerCase() === 'y'){
    alert('That\'s right ' + userName + ', I have one tattoo on my arm!');
} else if (tattoo.toLowerCase() === 'no'){
    alert('Sorry ' + userName + ', but I have one tattoo.');
} else if (tattoo.toLowerCase() === 'n'){
    alert('Sorry ' + userName + ', but I have one tattoo.');
} else{
    alert('Sorry ' + userName + ', but I didn\'t understand that answer.');
}

// Question 4

const civ = prompt('Is Civilization my favorite computer game?');
console.log(userName + '\'s answer to Question 4 was: ' + civ);
if (civ.toLowerCase() === 'yes'){
    alert('That\'s right ' + userName + ', I\'ve been playing it since I was a kid!');
} else if (civ.toLowerCase() === 'y'){
    alert('That\'s right ' + userName + ', I\'ve been playing it since I was a kid!');
} else if (civ.toLowerCase() === 'no'){
    alert('Sorry ' + userName + ', but that is definitely my favorite computer game.');
} else if (civ.toLowerCase() === 'n'){
    alert('Sorry ' + userName + ', but that is definitely my favorite computer game.');
} else{
    alert('Sorry ' + userName + ', but I didn\'t understand that answer.');
}

// Question 5

const soccer = prompt('Is Soccer my favorite sport?');
console.log(userName + '\'s answer to Question 5 was: ' + soccer);
if (soccer.toLowerCase() === 'yes'){
    alert('That\'s right ' + userName + ', that is my favorite sport!');
} else if (soccer.toLowerCase() === 'y'){
    alert('That\'s right ' + userName + ', that is my favorite sport!');
} else if (soccer.toLowerCase() === 'no'){
    alert('Sorry ' + userName + ', but soccer is my favorite sport.');
} else if (soccer.toLowerCase() === 'n'){
    alert('Sorry ' + userName + ', but soccer is my favorite sport.');
} else{
    alert('Sorry ' + userName + ', but I didn\'t understand that answer.');
}

// Goodbye message

alert('Thanks for playing ' + userName + '! See ya later!');