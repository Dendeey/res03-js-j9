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
        
    }
    
    toJSON()
    {
        
    }
}

export {Form};