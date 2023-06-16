

// Get the Edit and Save buttons
const editBtn = document.querySelector('.edit-btn');
const saveBtn = document.querySelector('.save-btn');

// Get the Post Title and Post Text elements
const postTitle = document.querySelector('.post-title');
const postText = document.querySelector('.post-text');
const authName = document.querySelector('.post-author')

// Add event listener to Edit button
editBtn.addEventListener('click', () => {
  // Make the post title and post text editable
  postTitle.contentEditable = true;
  postText.contentEditable = true;
  authName.contentEditable = true;


  // Add pink-colored border around the editable elements
  postTitle.style.border = '1px solid pink';
  postText.style.border = '1px solid pink';
  authName.style.border = '1px solid pink';


  // Show the Save button and hide the Edit button
  saveBtn.style.display = 'inline-block';
  editBtn.style.display = 'none';
});

// Add event listener to Save button
saveBtn.addEventListener('click', () => {
  // Make the post title and post text non-editable
  postTitle.contentEditable = false;
  postText.contentEditable = false;
  authName.contentEditable = false;

  // Remove the pink-colored border
  postTitle.style.border = 'none';
  postText.style.border = 'none';
  authName.style.border = 'none';

  // Show the Edit button and hide the Save button
  editBtn.style.display = 'inline-block';
  saveBtn.style.display = 'none';
});

// Get the Like button, Like statement, and initial like count
const likeBtn = document.querySelector('.like-btn');
const likeStatement = document.querySelector('.like-statement');
let likeCount = 0;

// Add event listener to Like button
likeBtn.addEventListener('click', () => {
  likeCount++;

  if (likeCount === 1) {
    likeStatement.textContent = '1 person likes this!';
  } else {
    likeStatement.textContent = `${likeCount} people like this!`;
  }

  // Change the Like button text to "Liked!"
  likeBtn.textContent = 'Liked!';
});

// Get the Comment input and Comment section
const commentInput = document.querySelector('.comment-input');
const commentsSection = document.querySelector('.comments-section');

// Add event listener to Comment button
const commentBtn = document.querySelector('.comment-btn');
commentBtn.addEventListener('click', () => {
  const commentText = commentInput.value;
  if (commentText !== '') {
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.textContent = commentText;
    commentsSection.insertBefore(commentElement, commentsSection.firstChild);
    commentInput.value = '';
  }
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
 
   

