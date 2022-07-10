
class Educacion{

    constructor(educacion,titulo){
        this._educacion=educacion;
        this._titulo=titulo;
    }

    get educacion(){
        return this._educacion;
    }

    set educacion(educacion){
        this._educacion=educacion;
    }

    get titulo(){
        return this._titulo;
    }
    
    set titulo(titulo){
        this._titulo=titulo;
    }

}