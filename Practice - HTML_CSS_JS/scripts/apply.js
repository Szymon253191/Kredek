window.onload = function() {
    var cookieArray = document.cookie.split(';');
    var quizResult = '';
    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();
        if (cookie.indexOf('quiz_result=') === 0) {
            quizResult = cookie.substring('quiz_result='.length, cookie.length);
            break;
        }
    }

    var messageElement = document.getElementById('message');
    if (quizResult === 'YES! We want you in our team!') {
        messageElement.innerHTML = 'Congratulations! You meet our requirements. <br> Mail to: dontMailThatSeriously@mail.site';
        messageElement.className = 'correct';
    } else {
        messageElement.innerHTML = 'Sorry, you don\'t meet our requirements.';
        messageElement.className = 'incorrect';
    }
};