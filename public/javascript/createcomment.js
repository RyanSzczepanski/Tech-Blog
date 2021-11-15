async function postFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('#body-comment').value.trim();
  
    if (comment_text) {
      const response = await fetch('/api/comments/', {
        method: 'post',
        body: JSON.stringify({
          comment_text,
          post_id: document.querySelector('.comment-form').id
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace(`/post/${document.querySelector('.comment-form').id}`);
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', postFormHandler);
  