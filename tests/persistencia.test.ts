import {ListaTareas} from "../src/clases/listaTareas";
import {Tarea} from "../src/clases/tarea";
import {SaveDataJSON} from "../src/clases/persistencia/saveDataJSON";
import {LoadDataJSON} from "../src/clases/persistencia/loadDataJSON";
import {ClearDataJSON} from "../src/clases/persistencia/clearDataJSON";
import { PRIORIDAD } from "../src/enums/prioridad";

describe('Tests de persistencia', () => {
    let expDate1: Date;
    let expDate2: Date;
    let tarea1: Tarea;
    let tarea2: Tarea;
    let listaTareasIncompletas: ListaTareas;
    let listaTareasCompletas: ListaTareas;
    let expectedList: ListaTareas;
    let saveDataJSON: SaveDataJSON;
    let loadDataJSON: LoadDataJSON;
    let clearDataJSON: ClearDataJSON;
    

    beforeEach(() => {
        expDate1 = new Date(2024, 11, 3);
        expDate2 = new Date(2024, 11, 4);
        tarea1 = new Tarea("Prueba1", "Descripcion1", expDate1, PRIORIDAD.BAJA, "Categoria1", ["Tag1"]);
        tarea2 = new Tarea("Prueba2", "Descripcion2", expDate2, PRIORIDAD.BAJA, "Categoria1", ["Tag1"]);
        listaTareasIncompletas = new ListaTareas();
        listaTareasCompletas = new ListaTareas();
        expectedList = new ListaTareas();
        saveDataJSON = new SaveDataJSON();
        loadDataJSON = new LoadDataJSON();
        clearDataJSON = new ClearDataJSON();
        listaTareasIncompletas.push(tarea1);
        listaTareasCompletas.push(tarea2);
    });

    test('Guardar y cargar lista de tareas incompletas.', async () => {
        clearDataJSON.clearTareasIncompletas();
        saveDataJSON.saveTareaIncompleta(tarea1);

        expectedList = listaTareasIncompletas;
        listaTareasIncompletas = await loadDataJSON.loadTareasIncompletas();
        
        expect(listaTareasIncompletas).toEqual(expectedList);
    });

    test('Guardar y cargar lista de tareas completas.', async () => {
        clearDataJSON.clearTareasCompletas();
        saveDataJSON.saveTareaCompleta(tarea2);

        expectedList = listaTareasCompletas;
        listaTareasCompletas = await loadDataJSON.loadTareasCompletas();
        
        expect(listaTareasCompletas).toEqual(expectedList);
    })
});