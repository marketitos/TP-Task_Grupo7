import { ListaTareas } from "../clases/listaTareas";

/**
 * Firma de los metodos para cargar datos.
 */
export interface LoadData {
    loadTareasIncompletas(): Promise<ListaTareas>;
    loadTareasCompletas(): Promise<ListaTareas>;
}