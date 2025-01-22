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

/*comment section*/
function addComment() {
    const commentInput = document.getElementById("commentInput"); // Get the input box
    const commentsDiv = document.getElementById("comments"); // Get the div to display comments

    const userComment = commentInput.value.trim(); // Get user input and trim extra spaces

    if (userComment) { // Ensure the comment is not empty
        const newComment = document.createElement("div"); // Create a new div for the comment
        newComment.textContent = userComment; // Add the text to the new comment div
        newComment.style.margin = "10px 0"; // Optional styling
        newComment.style.padding = "10px";
        newComment.style.borderRadius = "8px";
        newComment.style.backgroundColor = "#f0f0f0";

        commentsDiv.appendChild(newComment); // Append the new comment to the comments section

        commentInput.value = ""; // Clear the input box
    } else {
        alert("Please write something before submitting!"); // Alert if input is empty
    }
}

/*Dark Mode Butoon*/
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}


// Footer stuff
document.addEventListener('DOMContentLoaded', function() {
    const subscribeBox = document.querySelector('.footer-section.subscribe');
    
    subscribeBox.addEventListener('mouseenter', function() {
        subscribeBox.classList.add('hovered'); // Add the "hovered" class on mouse enter
    });

    subscribeBox.addEventListener('mouseleave', function() {
        subscribeBox.classList.remove('hovered'); // Remove the "hovered" class on mouse leave
    });
});

  //Hamburger stuff
  const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('open');
});