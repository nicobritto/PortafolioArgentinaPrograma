//proyectos

class Proyecto{
    constructor(proyecto,tarea){
        this._proyecto=proyecto;
        this._tarea=tarea;

    }


    get proyecto(){
        return this._proyecto;
    }
    set proyecto(proyecto){
        this._proyecto=proyecto;
    }

    get tarea(){
        return this.tarea;
    }
    set tarea(tarea){
        this._tarea=tarea;
    }
}