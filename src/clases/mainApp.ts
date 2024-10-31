import ListaTareas from "./listaTareas";
import Tarea from "./tarea";

export default class MainApp {
    private listaTareas: ListaTareas;
    private tareasCompletas: ListaTareas;

    constructor() {
        this.listaTareas = new ListaTareas();
        this.tareasCompletas = new ListaTareas();
    }

    public addTask(title: string, desc: string, expDate: Date, prio: string, category: string, tag: string): void {
        const tarea = new Tarea(title, desc, expDate, prio, category, tag);
        this.listaTareas.push(tarea);
    }

    public removeTask(tarea: Tarea) {
        this.listaTareas.delete(tarea);
    }

    public getTareasIncompletas(): ListaTareas {
        return this.listaTareas;
    }

    public getTareasCompletas(): ListaTareas {
        return this.tareasCompletas;
    }
}