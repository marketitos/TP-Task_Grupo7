import SaveData from "../../interfaces/saveData";
import { CustomFileClass } from "stdio";
import path from "path";
import ListaTareas from "../listaTareas";

export default class SaveDataJSON implements SaveData {
    public saveTareasIncompletas(listaTareas: ListaTareas): void {
        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("tareasIncompletas.json"), "w");
        file.writeToFile(JSON.stringify(listaTareas));
        file.close();
    };

    public saveTareasCompletas(listaTareas: ListaTareas): void {
        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("tareasCompletas.json"), "w");
        file.writeToFile(JSON.stringify(listaTareas));
        file.close();
    }
}   