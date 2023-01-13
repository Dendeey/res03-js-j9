class Field
{
    #element;
    #errors;
    #name;
    
    constructor(element)
    {
        this.#element = element;
        this.#errors = [];
        
    }
    
    get element()
    {
        return this.#element;
    }
    
    get errors()
    {
        return this.#errors;
    }
    
    get name()
    {
        return this.#name;
    }
    
    set element(element)
    {
        this.#element = element;
    }
    
    set errors(errors)
    {
        this.#errors = errors;
    }
    
    set name(name)
    {
        this.#name = name;
    }
    
    serialize()
    {
        
    }
}

export {Field};