//File Written By Alberita Ndoj
//Dark Mode 
function myFunction() {
    const button = document.getElementById('themeButton');
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        button.innerHTML = 'Light Theme';
    } else {
        button.innerHTML = 'Dark Theme';
    }
}
//Comment Section 
document.getElementById('addComment').addEventListener('click', function () {
    //acquire the text value
    const commentText = document.getElementById('newComment').value;

    if (commentText.trim() !== "") { 
        // div for comment
        const commentDiv = document.createElement('div');
        commentDiv.textContent = commentText;

        // comment style to the text
        commentDiv.classList.add('comment');

        // Append comments to comment section
        document.getElementById('commentSection').appendChild(commentDiv);

        // New value of text after press
        document.getElementById('newComment').value = "";
    }

//Hover animation on images of the article
var images = document.querySelectorAll('.image-container img');

for(var i = 0; i < images.length; i++) {
    images[i].onmouseover = function() {
        this.style.transform = 'scale(1.5)';
    }
    images[i].onmouseout = function() {
        this.style.transform = 'scale(1)';
    }
}
});

/*Image Animation Of You Might Find Interesting*/
var images = document.querySelectorAll('.image-container2 img');
for(var i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseover', function() {
        this.style.transform = 'rotate(7deg)';
    });
    images[i].addEventListener('mouseout', function() {
        this.style.transform = 'rotate(0deg)';
    });
}

//Go To Top Button
topButton.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

//Carousel 
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

// Show first slide when page loads
window.onload = function() {
    slides[0].style.display = "block";
}

function changeSlide(direction) {
    // Hide current slide
    slides[currentSlide].style.display = "none";
    
    if (direction === 1) { //slide change
        currentSlide = currentSlide + 1;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
    } else {
        currentSlide = currentSlide - 1;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
    }
    
    // show the udated slide
    slides[currentSlide].style.display = "block";
}

//incase of error loadind
var images = document.querySelectorAll('img');
for (var i = 0; i < images.length; i++) {
    images[i].onerror = function() {
        console.log('Error loading ' + this.src);
    };
}

/*Likes and Dislikes Done By Zoe Tsoulfidou*/
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
/*Likes and Dislikes Done By Zoe Tsoulfidou*/