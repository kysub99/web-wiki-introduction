document.addEventListener("DOMContentLoaded", () => {
    const commentInput = document.getElementById("comment");
    const submitButton = document.getElementById("submit");
    const commentList = document.querySelector(".comment-list");

    submitButton.addEventListener("click", () => {
        if (commentInput.value.trim().length < 5) {
            alert("댓글은 5자 이상 입력해야 합니다.");
            return;
        }

        const newComment = document.createElement("li");
        newComment.innerHTML = `
      <div class="comment-item">
        <div class="comment-author">
          <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
          <span>방문자</span>
        </div>
        <div class="comment-content">
          ${commentInput.value}
        </div>
      </div>
    `;

        commentList.appendChild(newComment);
        commentInput.value = ""; // 입력창 초기화
        alert("댓글이 등록되었습니다.");
    });
});
