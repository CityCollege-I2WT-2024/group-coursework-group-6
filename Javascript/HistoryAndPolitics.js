/*Comment Section*/

function addComment() {
    const commentInput = document.getElementById("commentInput"); 
    const comments = document.getElementById("comments"); 

    const userComment = commentInput.value.trim();

    if (userComment) {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment"; 
        commentDiv.textContent = userComment; 
        comments.appendChild(commentDiv);

        commentInput.value = "";
    } else {
        alert("Please write a comment before submitting."); 
    }
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
