const form = document.getElementById("quiz-form");

form.addEventListener('submit',(event) => {

    deleteAllCookies();

    event.preventDefault();
    const answers = ['b','c'];

    for (let i = 1; i <= 2; i++){
        const question = 'question' + i;
        const answer = form[question].value;
        let answerNr = "answer" + i;

        if(answer === answers[i-1]){
            document.cookie = answerNr + "=correct";
        } else {
            document.cookie = answerNr + "=incorrect";
        }
        console.log(document.cookie);
    }

    window.location.href = "statistics.html";
});

function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
}