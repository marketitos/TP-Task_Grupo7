import ListaTareas from "../clases/listaTareas";

export default interface SaveData {
    saveTareasIncompletas(listaTareas: ListaTareas): void;
    saveTareasCompletas(listaTareas: ListaTareas): void;
}