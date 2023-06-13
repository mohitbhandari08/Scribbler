// the modal elements
const signupModal = document.getElementById("signup-modal");
const signinModal = document.getElementById("signin-modal");
const createPostModal = document.getElementById("create-post-modal");

// the button elements
const signupBtn = document.getElementById("signup-btn");
const signinBtn = document.getElementById("signin-btn");
const createPostBtn = document.getElementById("create-post-btn");

// the close button elements
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

// Function to show the create post modal
function showCreatePostModal() {
    createPostModal.style.display = "block";
}

// Function to close the modals
function closeModal() {
    signupModal.style.display = "none";
    signinModal.style.display = "none";
    createPostModal.style.display = "none";
}

//  event listeners to the buttons
signupBtn.addEventListener("click", showSignupModal);
signinBtn.addEventListener("click", showSigninModal);
createPostBtn.addEventListener("click", showCreatePostModal);

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

document.getElementById("create-post-form").addEventListener("submit", function (e) {
    e.preventDefault();

});
