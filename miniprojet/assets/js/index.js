import {Form} from "./classes/form.js";
import {Field} from "./classes/field.js";
import {TextField} from "./classes/textfield.js";
import {EmailField} from "./classes/emailfield.js";
import {PasswordField} from "./classes/passwordfield.js";

window.addEventListener("DOMContentLoaded", function()
{
    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm-password");
    
    let firstnameField = new TextField(firstname);
    firstnameField.name = firstname.getAttribute("name");
    let lastnameField = new TextField(lastname);
    lastnameField.name = lastname.getAttribute("name");
    let emailField = new EmailField(email);
    emailField.name = email.getAttribute("name");
    let passwordField = new PasswordField(password);
    passwordField.name = password.getAttribute("name");
    let confirmPasswordField = new PasswordField(confirmPassword);
    confirmPasswordField.name = confirmPassword.getAttribute("name");
    
    console.log(firstnameField);
    console.log(lastnameField);
    console.log(emailField);
    console.log(passwordField);
    console.log(confirmPasswordField);
    
    let form = new Form();
    
    
});