import {Form} from "./classes/form.js";
import {Field} from "./classes/field.js";
import {TextField} from "./classes/textfield.js";
import {EmailField} from "./classes/emailfield.js";
import {PasswordField} from "./classes/passwordfield.js";

window.addEventListener("DOMContentLoaded", function(){
    
    let inputName = document.querySelectorAll("#user-information input");
    let count = [];
    for(let i = 0; i < inputName.length; i++)
    {
        count[i].getAttribute("name");
    }
    console.log(count);
    
    let form = new Form();
    let field = new Field();
    let textField = new TextField();
    let emailField = new EmailField();
    let passwordField = new PasswordField();
    
});