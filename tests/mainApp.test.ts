import Tarea from "../src/clases/tarea";
import ListaTareas from "../src/clases/listaTareas";
import MainApp from "../src/clases/mainApp";

describe('Tests de la clase mainApp', () => {    
    test('Añadir tarea a la lista de tareas.', () => {
        const mainApp = new MainApp();
        const expDate = new Date(2024, 10, 31);
        const tarea = new Tarea("Prueba", "Descripcion", expDate, "Media", "Categoria", "Tag")
        mainApp.addTask(tarea);
        const listaTareas = mainApp.getTareasIncompletas()
        expect(listaTareas.pop()).toBeInstanceOf(Tarea);
    });

    test('Remover tarea de la lista de tareas', () => {
        const mainApp = new MainApp();
        const expDate = new Date(2024, 10, 31);
        const tarea = new Tarea("Prueba", "Descripcion", expDate, "Media", "Categoria", "Tag")
        mainApp.addTask(tarea);
        expect(mainApp.removeTask(tarea)).toBeInstanceOf(Tarea);
    });

    test('Obtener lista de tareas completas', () => {
        const mainApp = new MainApp();
        expect(mainApp.getTareasCompletas()).toBeInstanceOf(ListaTareas);
    });

    test('Obtener lista de tareas incompletas', () => {
        const mainApp = new MainApp();
        expect(mainApp.getTareasIncompletas()).toBeInstanceOf(ListaTareas);
    })
});
