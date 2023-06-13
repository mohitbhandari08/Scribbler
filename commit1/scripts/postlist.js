// Function to handle delete post button click
function handleDeletePost() {
    const deleteIcons = document.querySelectorAll('.delete-icon');
    const modal = document.getElementById('delete-modal');
    const btnYes = document.querySelector('.btn-yes');
    const btnNo = document.querySelector('.btn-no');
  
    deleteIcons.forEach((icon) => {
      icon.addEventListener('click', () => {
        modal.style.display = 'flex';
      });
    });
  
    btnYes.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    btnNo.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
  
  // Wait for the DOM content to load
  document.addEventListener('DOMContentLoaded', () => {
    handleDeletePost();
  });
  