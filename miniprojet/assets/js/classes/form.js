class Form
{
    #fields;
    #submitted;
    
    constructor()
    {
        this.#fields = [];
    }
    
    get submitted()
    {
        return this.#submitted;
    }
    
    set fields(fields)
    {
        this.#fields = fields;
    }
    
    addField(field)
    {
        this.#fields.push(field);
    }
    
    submit()
    {
        
    }
    
    validate()
    {
        for(let i = 0; i < this.#fields.length; i++)
        {
            this.#fields[i].validate();
            console.log("Form envoyé")
        }
    }
    
    toJSON()
    {
        
    }
}

export {Form};