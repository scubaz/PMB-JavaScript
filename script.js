let answers = {};

/**
 * This function is called when the user clicks a button.  Takes in the question number and the answer to that question.  Five questions total, if the questionNumber is 5 (the last question), then the game is over.
If you add additional questions then you will need to update the if statement below!
 */
function answerQuestion(questionNumber, answer) {
    answers[`q${questionNumber}`] = answer;
    document.getElementById(`q${questionNumber}`).style.display = 'none';
    if (questionNumber < 5) {
        document.getElementById(`q${questionNumber + 1}`).style.display = 'block';
    } else {
        makeGuess();
    }
}
/**
 * This function is called when all of the questions have been answered.  It will determine the vehicle type based on the answers given.  Add your own.  For example what if the user drives an electric scooter?
 */
function makeGuess() {
    let guessText = '';
    if (answers.q1 && answers.q2 && !answers.q3) {
        guessText = 'You probably drive an electric car!';
    } else if (answers.q1 && !answers.q2 && answers.q3) {
        guessText = 'You probably drive a truck or an SUV!';
    } else if (answers.q4 && !answers.q2 && !answers.q5) {
        guessText = 'You probably drive a motorcycle!';
    } else if (answers.q4 && answers.q5) {
        guessText = 'You probably ride a bicycle!';
    } else {
        guessText = "Hmm, I couldn't quite guess your vehicle. Maybe it's something unique!";
    }
    document.getElementById('guess').innerText = guessText;
    document.getElementById('result').style.display = 'block';
}
