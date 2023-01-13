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