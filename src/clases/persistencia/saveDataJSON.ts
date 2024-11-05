import { SaveData } from "../../interfaces/saveData";
import { CustomFileClass } from "stdio";
import path from "path";
import { ListaTareas } from "../listaTareas";

/**
 * Clase que permite guardar listas de tareas en formato JSON.
 */
export class SaveDataJSON implements SaveData {
    /**
     * Guarda una lista de tareas en el archivo 'tareasIncompletas.json'.
     * @param listaTareas lista a guardar.
     */
    public saveTareasIncompletas(listaTareas: ListaTareas): void {
        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("tareasIncompletas.json"), "w");
        file.writeToFile(JSON.stringify(listaTareas));
        file.close();
    };

    /**
     * Guarda una lista de tareas en el archivo 'tareasCompletas.json'.
     * @param listaTareas lista a guardar.
     */
    public saveTareasCompletas(listaTareas: ListaTareas): void {
        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("tareasCompletas.json"), "w");
        file.writeToFile(JSON.stringify(listaTareas));
        file.close();
    }
}   