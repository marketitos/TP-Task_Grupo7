import LoadData from "../../interfaces/loadData";
import { CustomFileClass } from "stdio";
import path from "path";
import ListaTareas from "../listaTareas";

export default class LoadDataJSON implements LoadData {
    public async loadTareasIncompletas(): Promise<ListaTareas> {
        let listaTareasIncompletas: ListaTareas = new ListaTareas();
        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("tareasIncompletas.json"), "r");
    
        let itLine = await file.readLine().next();
        let jsonString = "";
    
        while (!itLine.done) {
            const line = itLine.value; 
            jsonString += line;
            itLine = await file.readLine().next();
        }
    
        listaTareasIncompletas = JSON.parse(jsonString);
        file.close();
        
        return listaTareasIncompletas;
    };

    public async loadTareasCompletas(): Promise<ListaTareas> {
        let listaTareasCompletas: ListaTareas = new ListaTareas();
        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("tareasCompletas.json"), "r");
    
        let itLine = await file.readLine().next();
        let jsonString = "";
    
        while (!itLine.done) {
            const line = itLine.value; 
            jsonString += line;
            itLine = await file.readLine().next();
        }
    
        listaTareasCompletas = JSON.parse(jsonString);
        file.close();
        
        return listaTareasCompletas;
    }
}   