import LoadData from "../../interfaces/loadData";
import { CustomFileClass } from "stdio";
import path from "path";
import ListaTareas from "../listaTareas";

export default class LoadDataJSON implements LoadData {
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