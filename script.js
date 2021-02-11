let question = {
    title: 'gato',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
  };
  
  // define the array that stores all questions
  let questions = [
    {
      title: 'gato',
      alternatives: ['dog', 'cat', 'bird', 'fish'],
      correctAnswer: 1
    },
    {
      title: 'ave',
      alternatives: ['mouse', 'hamster', 'lizard', 'bird'],
      correctAnswer: 3
    },
    {
      title: 'rata',
      alternatives: ['cat', 'fish', 'rat', 'shark'],
      correctAnswer: 2
    },
    {
      title: 'mosca',
      alternatives: ['fly', 'puma', 'fish', 'dog'],
      correctAnswer: 0
    }
  ];
  
  let app = {
    start: function() {
      
      this.currPosition = 0;
      this.score = 0; // property to keep track of score
      
      // get alternatives
      let alts = document.querySelectorAll('.alternatives');
    
      alts.forEach((element, index) => {
              
        element.addEventListener('click', () => {
          // check correct answer
          this.checkAnswer(index);
        });
      });
      
      // refresh stats
      this.updateStats();
      
      // show first question
      this.showQuestion(questions[this.currPosition]);
    },
    
    showQuestion: function(q) {
      
      // show question title
      let titleDiv = document.getElementById('title');
      titleDiv.textContent = q.title; 
    
      // show alternatives
      let alts = document.querySelectorAll('.alternatives');
    
      alts.forEach(function(element, index){
        element.textContent = q.alternatives[index];
      });
    },
    
    checkAnswer: function(userSelected) {
      
      let currQuestion = questions[this.currPosition];
      
      if(currQuestion.correctAnswer == userSelected) {
        // correct
        console.log('correct');
        this.score++;
        this.showResult(true);
      }
      else {
        // not correct
        console.log('wrong');
        this.showResult(false);
      }
      
      // refresh stats
      this.updateStats();
      
      // increase position
      this.increasePosition();
      
      // show next question
      this.showQuestion(questions[this.currPosition]);
    },
    
    increasePosition: function() {
      this.currPosition++;
      
      if(this.currPosition == questions.length){
        this.currPosition = 0;
      }
    },
    
    updateStats: function() {
      let scoreDiv = document.getElementById('score');
      scoreDiv.textContent = `Your score: ${this.score}`;
    },
    
    showResult: function(isCorrect) {
      // select the DOM element
      let resultDiv = document.getElementById('result');
      let result = '';
      
      // checks
      if(isCorrect) {
        result = 'Correct Answer!';
      }
      else {
        // get the current question
        let currQuestion = questions[this.currPosition];
        
        // get the correct answer (index)
        let correctAnswerIndex = currQuestion.correctAnswer;
        
        // get correct answer (text)
        let correctAnswerText = currQuestion.alternatives[correctAnswerIndex];
        
        result = `Wrong! Correct answer: ${correctAnswerText}`;
      }
      
      resultDiv.textContent = result;
      
    }
    
  };
  
  // initialize the application
  app.start();