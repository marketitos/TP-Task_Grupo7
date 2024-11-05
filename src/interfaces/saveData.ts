import { ListaTareas } from "../clases/listaTareas";

/**
 * Firma de los metodos para guardar datos.
 */
export interface SaveData {
    saveTareasIncompletas(listaTareas: ListaTareas): void;
    saveTareasCompletas(listaTareas: ListaTareas): void;
}