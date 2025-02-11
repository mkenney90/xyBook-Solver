// This is a hypothetical program for a hypothetical problem
// Definitely don't do this.

const radioButtons = document.querySelectorAll('input[type="radio"]');
let index = 0;
function clickNextButton() {
	if (index < radioButtons.length) {
		radioButtons[index].click();
		index++;
		setTimeout(clickNextButton, 300);
		// adjust delay as needed
	}
}
clickNextButton();
// CLICK ALL 2X SPEED BOXES //////////////////////////////////
const x2Buttons = document.querySelectorAll('input[type="checkbox"]');
let index2 = 0;
function clickNextBox() {
	if (index2 < x2Buttons.length) {
		x2Buttons[index2].click();
		index2++;
		setTimeout(clickNextBox, 300);
		// adjust delay as needed
	}
}
clickNextBox();
// CLICK ALL START BUTTONS //////////////////////////////////
const startButtons = document.querySelectorAll(
	'button[aria-label="Start"]'
);
console.log("hello")
let index3 = 0;
function clickNextStartButton() {
	if (index3 < startButtons.length) {
		startButtons[index3].click();
		index3++;
		setTimeout(clickNextStartButton, 300);
		// adjust delay as needed
	}
}
clickNextStartButton();
// CLICK ALL PLAY BUTTONS //////////////////////////////////
function clickNextPlayButton() {
	setTimeout(clickNextPlayButton, 100);
	let playButtons = document.querySelectorAll('button[aria-label="Play"]');
	let index4 = 0;
	if (index4 < playButtons.length) {
		playButtons[index4].click();
		index4++;
		setTimeout(clickNextPlayButton, 300);
		// adjust delay as needed
	}
	let pauseButtons = document.querySelectorAll('button[aria-label="Pause"]');
	if (pauseButtons.length != 0) {
		clickNextPlayButton;
	}
}
clickNextPlayButton();
// CLICK ALL SHOW ANSWER BUTTONS //////////////////////////////////
let index5 = 0;
function clickNextShowAnswerButton() {
	setTimeout(clickNextShowAnswerButton, 100);
	let showAnswerButtons = document.querySelectorAll(
		'button.zb-button.secondary.show-answer-button'
	);
	if (index5 < showAnswerButtons.length) {
		showAnswerButtons[index5].click();
		setTimeout(showAnswerButtons[index5].click(), 200);
		// adjust delay as needed 
        index5++; 
        setTimeout(clickNextShowAnswerButton, 300);
		// adjust delay as needed
	}
}
clickNextShowAnswerButton();
//FIND AND ENTER SHORT ANSWERS IN TEXT AREAS ////////////////////
let index6 = 0;
function enterShortAnswers() {
    let shortAnswerQuestions = document.querySelectorAll(
        'div.question-set-question.short-answer-question'
    );
    if (index6 < shortAnswerQuestions.length) {
        var shortAnswerInput = shortAnswerQuestions[index6].querySelector('textarea');
        var shortAnswerSolution = shortAnswerQuestions[index6].querySelector('span.forfeit-answer').innerHTML.trim();
        shortAnswerInput.value = shortAnswerSolution;
        index6 ++;
        setTimeout(enterShortAnswers, 300);
    }
}
setTimeout(enterShortAnswers, 600);
// FIND INCORRECT ANSWERS AND TRY AGAIN UNTIL CORRECT //////////
function findCorrectAnswers() {
    // find all mc questions with "incorrect" answers
    let multipleChoiceQuestions = document.querySelectorAll(
        'div.question-set-question.multiple-choice-question:has(div.incorrect)'
    );
    let index7 = 0;
    
    while (index7 < multipleChoiceQuestions.length) {
        let multipleChoiceOptions = multipleChoiceQuestions[index7].querySelectorAll('div.zb-radio-button input[type="radio"]');
        var randChoice = Math.floor(Math.random() * multipleChoiceOptions.length);
        multipleChoiceOptions[randChoice].click();
        index7 ++;
    }
    setTimeout(findCorrectAnswers, 300);
}
findCorrectAnswers();