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

  // modal
const signupModal = document.getElementById("signup-modal");
const signinModal = document.getElementById("signin-modal");
const signupBtn = document.getElementById("signup-btn");
const signinBtn = document.getElementById("signin-btn");
const closeBtns = document.querySelectorAll(".close");
const modalCloseBtns = document.querySelectorAll(".modal-close");
// the signup link element in the signin modal
const signupLink = document.getElementById("signup-link");

// Function to show the signup modal
function showSignupModal() {
    signupModal.style.display = "block";
}

// Function to show the signin modal
function showSigninModal() {
    signinModal.style.display = "block";
}

function closeModal() {
  signupModal.style.display = "none";
  signinModal.style.display = "none";
}

//  event listeners to the buttons
signupBtn.addEventListener("click", showSignupModal);
signinBtn.addEventListener("click", showSigninModal);
//  event listener to the close buttons
closeBtns.forEach(function (btn) {
  btn.addEventListener("click", closeModal);
});

//  event listener to the modal close buttons
modalCloseBtns.forEach(function (btn) {
  btn.addEventListener("click", closeModal);
});

// event listener to the signup link in the signin modal
signupLink.addEventListener("click", function (e) {
  e.preventDefault();
  closeModal();
  showSignupModal();
});

// Prevent form submission
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
});

document.getElementById("signin-form").addEventListener("submit", function (e) {
  e.preventDefault();
});

  