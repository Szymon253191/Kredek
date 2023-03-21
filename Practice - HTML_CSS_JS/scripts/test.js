function checkAnswers() {
    var form = document.querySelector('form');
    var q1 = form.q1.value;
    var q2 = form.q2.value;
    var q3 = form.q3.value;
    var result = '';
  
    if (q1 === 'yes' && q2 === 'yes' && q3 === 'no') {
      result = 'YES! We want you in our team!';
      document.getElementById('result').className = 'correct';
    } else {
      result = 'Sorry but you don\'t meet our requirements.';
      document.getElementById('result').className = 'incorrect';
    }
  
    // Set a cookie with the quiz result
    document.cookie = 'quiz_result=' + result;
  
    // Redirect to the next page
    window.location.href = 'apply.html';
  }