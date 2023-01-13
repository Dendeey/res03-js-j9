import {Field} from "./field.js";

class TextField extends Field
{
    constructor(element)
    {
        super(element);
    }
    
    validate()
    {
        if(this.element.value === "")
        {
            this.element.classList.add("nok");
            this.errors.push("Le champ ${this.#name} ne peut pas être vide");
        }
        
        else
        {
            this.element.classList.add("ok");
        }
    }
}

export {TextField};