import ListaTareas from "../clases/listaTareas";

export default interface LoadData {
    loadTareasIncompletas(): Promise<ListaTareas>;
    loadTareasCompletas(): Promise<ListaTareas>;
}