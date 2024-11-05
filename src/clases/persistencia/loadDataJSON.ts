import { LoadData } from "../../interfaces/loadData";
import { CustomFileClass } from "stdio";
import path from "path";
import { ListaTareas } from "../listaTareas";

/**
 * Clase que permite cargar listas de tareas desde formato JSON.
 */
export class LoadDataJSON implements LoadData {
    /**
     * Devuelve la lista de tareas que se encuentra dentro del archivo 'tareasIncompletas.json'.
     * @returns 
     */
    public async loadTareasIncompletas(): Promise<ListaTareas> {
        let listaTareasIncompletas: ListaTareas = new ListaTareas();
        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("tareasIncompletas.json"), "r");
        let jsonString = "";
    
        for await(const line of file.readLine()) {
            jsonString += line;
        }
        
        file.close();

        listaTareasIncompletas = JSON.parse(jsonString);

        return listaTareasIncompletas;
    };

    /**
     * Devuelve la lista de tareas que se encuentra dentro del archivo 'tareasCompletas.json'.
     * @returns 
     */
    public async loadTareasCompletas(): Promise<ListaTareas> {
        let listaTareasCompletas: ListaTareas = new ListaTareas();
        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("tareasCompletas.json"), "r");
        let jsonString = "";
    
        for await(const line of file.readLine()) {
            jsonString += line;
        }
        
        file.close();

        listaTareasCompletas = JSON.parse(jsonString);

        return listaTareasCompletas;
    }
}   