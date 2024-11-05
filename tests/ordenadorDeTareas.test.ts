import {ListaTareas} from "../src/clases/listaTareas";
import {Tarea} from "../src/clases/tarea";
import {OrdenadorDeTareas} from "../src/clases/ordenadorDeTareas"
import { PRIORIDAD } from "../src/enums/prioridad";

describe ("Prueba del Ordenador de Tareas", () =>{
    let lista: ListaTareas;
    let tarea1: Tarea;
    let tarea2: Tarea;
    let tarea3: Tarea;
    let tarea4: Tarea;
    let tarea5: Tarea;
    let expdate1: Date;
    let expdate2: Date;

    beforeEach(() =>{
        expdate1 = new Date(2024, 11, 5)
        expdate2 = new Date(2024, 11, 7)
        lista= new ListaTareas()
        tarea1 = new Tarea("A", "Mi Descripcion", expdate1 , PRIORIDAD.ALTA, "micategoria", "mietiqueta")
        tarea2 = new Tarea("B", "Mi Descripcion", expdate1 , PRIORIDAD.BAJA, "micategoria", "mietiqueta")
        tarea3 = new Tarea("C", "Mi Descripcion", expdate2, PRIORIDAD.MEDIA, "micategoria", "mietiqueta")
        tarea4 = new Tarea("D", "Mi Descripcion", expdate2, PRIORIDAD.BAJA, "micategoria", "mietiqueta")
        tarea5 = new Tarea("E", "Mi Descripcion", expdate2, PRIORIDAD.ALTA, "micategoria", "mietiqueta")
    })
    
    it ("Prueba de InsertOrdered: insertar en la Mitad", () =>{ 
        lista.push(tarea1);
        lista.push(tarea3);
        OrdenadorDeTareas.insertOrderedTitle(lista, tarea2);
        expect(lista.pop()).toStrictEqual(tarea3);
        expect(lista.pop()).toStrictEqual(tarea2);
    })

    it ("Prueba de InsertOrdered: insertar al Final", () =>{ 
        lista.push(tarea1);
        lista.push(tarea2);
        OrdenadorDeTareas.insertOrderedTitle(lista, tarea3);
        expect(lista.pop()).toStrictEqual(tarea3);
        expect(lista.pop()).toStrictEqual(tarea2);
    })

    it ("Prueba de InsertOrdered: insertar en una Lista Vacia", () =>{ 
        OrdenadorDeTareas.insertOrderedTitle(lista, tarea1);
        OrdenadorDeTareas.insertOrderedTitle(lista, tarea2);
        expect(lista.pop()).toStrictEqual(tarea2);
        expect(lista.pop()).toStrictEqual(tarea1);
    })

    it ("Prueba de Ordenar por Titulo", () =>{
        lista.push(tarea2)
        lista.push(tarea4)
        lista.push(tarea1)
        lista.push(tarea5)
        lista.push(tarea3)
        OrdenadorDeTareas.sortByTitle(lista);
        expect(lista.pop()).toStrictEqual(tarea5)
        expect(lista.pop()).toStrictEqual(tarea4)
        expect(lista.pop()).toStrictEqual(tarea3)
        expect(lista.pop()).toStrictEqual(tarea2)
        expect(lista.pop()).toStrictEqual(tarea1)
    })

    it ("Prueba de Ordenar por Fecha de Vencimiento", () => {
        lista.push(tarea3)
        lista.push(tarea2)
        lista.push(tarea4)
        lista.push(tarea1)
        OrdenadorDeTareas.sortByExpirationDate(lista);
        expect(lista.pop().getExpirationDate()).toBe(expdate2)
        expect(lista.pop().getExpirationDate()).toBe(expdate2)
        expect(lista.pop().getExpirationDate()).toBe(expdate1)
        expect(lista.pop().getExpirationDate()).toBe(expdate1)
    })

    it ("Prueba de Ordenar por Prioridad", () => {
        lista.push(tarea3)
        lista.push(tarea2)
        lista.push(tarea4)
        lista.push(tarea1)
        OrdenadorDeTareas.sortByPriority(lista);
        expect(lista.pop().getPriority()).toBe(PRIORIDAD.BAJA)
        expect(lista.pop().getPriority()).toBe(PRIORIDAD.BAJA)
        expect(lista.pop().getPriority()).toBe(PRIORIDAD.MEDIA)
        expect(lista.pop().getPriority()).toBe(PRIORIDAD.ALTA)
        
    })
    
})