let currentSlide = 0;
const slideEls = document.getElementsByClassName("slide");
console.log (slideEls);
slideEls[currentSlide].style.display="block";

const nextButton = document.getElementById("next");

const nextSlide = function() {
    slideEls[currentSlide].style.display = "none";
    currentSlide ++;
    if(currentSlide > slideEls.length -1 ){
        currentSlide = 0;
    }
    slideEls[currentSlide].style.display = "block";
}
nextButton.addEventListener("click", nextSlide);

const previousButton = document.getElementById("previous");

const previousSlide = function(){
    slideEls[currentSlide].style.display = "none";
    currentSlide --;
    if(currentSlide <0 ){
        currentSlide = slideEls.length-1;
    }
    slideEls[currentSlide].style.display = "block";
}
previousButton.addEventListener("click", previousSlide);

const questions = [
  {
    question:"Faking Breakup: Why did Chloe and Tyler break up?",
    options:["Money", "Trust", "Family", "Careers"],
    answer: 1,
  },
  {
    question:"Surprise pregnancy : Who is rumored to be the father of Riley Anders' child?",
    options:["Julian Chase", "Elliot Hayes", "Mars Belmonte", "Kai Lenoir"],
    answer: 1,
  },

  {
    question:"Secret Feud: What caused tensions between Lila Monroe and Scarlett Vega?",
    options:["Over-the-top costumes", "A delayed album release", " A fight during an awards show", "A disagreement over song lyrics"],
    answer: 0,
  },
  {
    question:"Luxury Wedding: Why did Chase Wilder and Lana Hart call off their wedding?",
    options:["Prenup", "Work", " Ex", "Venue"],
    answer: 0,
  },
  {
    question:"Haunted Mansion: What is Ethan Greer's reason for buying The Whispering Manor?",
    options:["Novel", "Resell", "Party", "Show"],
    answer: 0,
  },

];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");

function loadQuestion() {
  const questionData = questions[currentQuestionIndex];
  quizContainer.innerHTML= `
    <div class = "question">${questionData.question}</div>
    <div class = "options">
    ${questionData.options
      .map(
        (option,index)=>
        `<button type= "button" onclick = "checkAnswer(${index})">${option}</button>`  
      )
      .join("")}
    </div>  
    `;

}
function checkAnswer(selectedIndex) {
  if (selectedIndex === questions [currentQuestionIndex].answer) {
    score++;
  }
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length) {
    loadQuestion();
  }else {
    showResult();
  }
}
function showResult(){
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";
  resultContainer.textContent = `You scored ${score} out of ${questions.length}!`;

}
loadQuestion();

function addComment() {
  const commentText = document.getElementById('commentText').value;
  if (commentText.trim() === '') {
      alert('Comment cannot be empty!');
      return;
  }

  const commentsList = document.getElementById('commentsList');
  const newComment = document.createElement('li');
  newComment.textContent = commentText;
  commentsList.appendChild(newComment);

  // Clear the textarea after adding the comment
  document.getElementById('commentText').value = '';
}

/*Dark Mode Button */

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
} 
document.addEventListener('DOMContentLoaded', () => {
  const likeButtons = document.querySelectorAll('.like-btn');
  const dislikeButtons = document.querySelectorAll('.dislike-btn');
  const likeCounts = document.querySelectorAll('.like-count');
  const dislikeCounts = document.querySelectorAll('.dislike-count');

  // Set random counts on page load
  dislikeCounts.forEach(count => {
      const dislikeCount = Math.floor(Math.random() * 100);
      count.textContent = dislikeCount;
  });

  likeCounts.forEach((count, index) => {
      const dislikeCount = parseInt(dislikeCounts[index].textContent);
      const likeCount = Math.floor(Math.random() * 100) + dislikeCount;
      count.textContent = likeCount;
  });

  likeButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
          const likeCount = likeCounts[index];
          const dislikeButton = dislikeButtons[index];
          const dislikeCount = dislikeCounts[index];

          if (btn.classList.contains('reaction-active')) {
              likeCount.textContent = parseInt(likeCount.textContent) - 1;
              btn.classList.remove('reaction-active');
          } else {
              likeCount.textContent = parseInt(likeCount.textContent) + 1;
              btn.classList.add('reaction-active');
              if (dislikeButton.classList.contains('reaction-active')) {
                  dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1;
                  dislikeButton.classList.remove('reaction-active');
              }
          }
      });
  });

  dislikeButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
          const dislikeCount = dislikeCounts[index];
          const likeButton = likeButtons[index];
          const likeCount = likeCounts[index];

          if (btn.classList.contains('reaction-active')) {
              dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1;
              btn.classList.remove('reaction-active');
          } else {
              dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
              btn.classList.add('reaction-active');
              if (likeButton.classList.contains('reaction-active')) {
                  likeCount.textContent = parseInt(likeCount.textContent) - 1;
                  likeButton.classList.remove('reaction-active');
              }
          }
      });
  });
});






