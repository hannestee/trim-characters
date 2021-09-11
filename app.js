let textBox = document.querySelector('#text-area');
let formOne = document.querySelector('#form-1');
let notifications = document.querySelector('#notifications');
const resetButton = document.querySelector('#reset');

function solution(message, K=14) {
    let wordArray = message.split(' ');
    let newWordString = '';
    let sentenceLength = 0;
    for (let i = 0; i < wordArray.length; i++){
        let word = wordArray[i];
        if (sentenceLength + word.length === K) {
            newWordString += word;
            break;
        } else if (sentenceLength + word.length + 1 > K) {
            break;
        } else {
            sentenceLength += word.length + 1;
            newWordString += word + ' ';
        }
    }
    return newWordString.trim();
}

function notificationTimeOut() {
    setTimeout( () => {
        notifications.classList.remove('fade');
        notifications.innerHTML = 'notification';
        notifications.style.visibility = 'hidden';
    }, 2000)
}

formOne.addEventListener('submit', function(e) {
    e.preventDefault();
    let charAmount = parseInt(document.querySelector('#character-amount').value);
    notifications.classList.add('fade');
    textBox.value = solution(textBox.value, charAmount);
    notifications.innerHTML = `Message trimmed to ${charAmount} characters`;
    notifications.style.visibility = 'visible';
    notificationTimeOut();
})

resetButton.addEventListener('click', function(e) {
    e.preventDefault();
    notifications.innerHTML = 'Message cleared';
    notifications.style.visibility = 'visible';
    notifications.classList.add('fade');
    textBox.value = '';
    notificationTimeOut();
})