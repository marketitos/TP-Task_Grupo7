import EditadorDeTareas from "../src/clases/EditadorDeTareas";
import ListaTareas from "../src/clases/listaTareas";
import nodeTarea from "../src/clases/nodeTarea";
import Tarea from "../src/clases/tarea";



describe('EditadorDeTareas TEST', () => {
    let listaTareas: ListaTareas;
    let tarea: Tarea;
    let editador: EditadorDeTareas;
    let Fecha :Date;
    let tareaEditada:nodeTarea;


    beforeEach(() => {
        listaTareas = new ListaTareas();
        Fecha = new Date("2005-01-28");
        tarea = new Tarea("Ir al parque", "ir en bici",Fecha,"Baja", "Pasear", "Temprano");
        editador = new EditadorDeTareas();
        listaTareas.push(tarea);
    });

    test('Editar el título de una tarea existente', () => {
        let nuevoTitulo: string;
        nuevoTitulo="Ir a fumar"
        editador.editTitle(listaTareas,tarea, nuevoTitulo);
        tareaEditada = listaTareas.search(tarea);
        expect(tareaEditada.value.getTitle()).toBe(nuevoTitulo);
        
    });

    test('Editar el descripcion de tarea existente', () => {
        let nuevaDesc: string;
        nuevaDesc="Ir Caminando";
        editador.editDescription(listaTareas,tarea,nuevaDesc);
        tareaEditada = listaTareas.search(tarea);
        expect(tareaEditada.value.getDescription()).toBe(nuevaDesc);
    });
    test('Editar fecha de expiracion de tarea existente', () => {
        let nuevaFecha: Date;
        nuevaFecha=new Date("2007-01-28");
        editador.editExpirationDate(listaTareas,tarea,nuevaFecha)
        tareaEditada = listaTareas.search(tarea);
        expect(tareaEditada.value.getExpirationDate()).toBe(nuevaFecha);
    });

    test('Editar prioridad de tarea existente', () => {
        let nuevaPrio: string;
        nuevaPrio="ALTA";
        editador.editPriority(listaTareas,tarea,nuevaPrio)
        tareaEditada = listaTareas.search(tarea);
        expect(tareaEditada.value.getPriority()).toBe(nuevaPrio);
    });

    test('Editar Categoria de tarea existente', () => {
        let nuevaCategoria: string;
        nuevaCategoria="Trabajo";
        editador.editCategory(listaTareas,tarea,nuevaCategoria)
        tareaEditada = listaTareas.search(tarea);
        expect(tareaEditada.value.getCategory()).toBe(nuevaCategoria);
    });

    test('Editar Tag de tarea existente', () => {
        let nuevoTag: string;
        nuevoTag="Tecnologica";
        editador.editTag(listaTareas,tarea,nuevoTag)
        tareaEditada = listaTareas.search(tarea);
        expect(tareaEditada.value.getTag()).toBe(nuevoTag);
    });

    test('Editar Percentage de tarea existente', () => {
        let nuevoPorcentaje: number;
        nuevoPorcentaje=100;
        editador.editPercentage(listaTareas,tarea,nuevoPorcentaje)
        tareaEditada = listaTareas.search(tarea);
        expect(tareaEditada.value.getPercentage()).toBe(nuevoPorcentaje);
    });



});