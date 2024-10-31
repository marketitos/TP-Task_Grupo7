import ListaTareas from "./listaTareas";
import Tarea from "./tarea";

export default class MainApp {
    private listaTareas: ListaTareas;
    private tareasCompletas: ListaTareas;

    constructor() {
        this.listaTareas = new ListaTareas();
        this.tareasCompletas = new ListaTareas();
    }

    public addTask(tarea: Tarea): void {
        this.listaTareas.push(tarea);
    }

    public removeTask(tarea: Tarea): Tarea {
        return this.listaTareas.delete(tarea);
    }

    public getTareasIncompletas(): ListaTareas {
        return this.listaTareas;
    }

    public getTareasCompletas(): ListaTareas {
        return this.tareasCompletas;
    }
}