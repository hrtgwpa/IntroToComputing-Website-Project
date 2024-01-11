const hamburger = document.querySelector('.header .navbar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .navbar .nav-list ul');
const menu_item= document.querySelectorAll('.header .navbar .nav-list ul li a');
const header= document.querySelector('.header.container');


hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position>250){
        header.style.backgroundColor = "#333";
    }
    else{
        header.style.backgroundColor = 'transparent';
    }
})

menu_item.forEach(item=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
})
function showFeedback() {
    // Check if the name, email, and message fields are empty
    var nameField = document.getElementById('name');
    var emailField = document.getElementById('email');
    var messageField = document.getElementById('message');

    if (nameField.value.trim() === '' || emailField.value.trim() === '' || messageField.value.trim() === '') {
      alert('Error: Please fill in all fields before submitting.');
      return false; // Prevent the form from submitting
    }

    // Display success message
    alert('Form submitted! We will return to you shortly...'); // Change this message as needed

    window.location.reload(true); }