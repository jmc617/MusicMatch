$(document).on("turbolinks:load", function(){
    var emailField = document.getElementsByClassName('email-field');
    var passwordField = document.getElementsByClassName('password-field');
    var guestUserBtn = document.getElementsByClassName('guest-user-btn');

    guestUserBtn[0].addEventListener("click", function(){
        emailField[0].value = 'testuser@gmail.com'
        passwordField[0].value =  'jessica' 
    })
})