import {mock} from "jest-mock-extended";
import {ListaTareas} from "../src/clases/listaTareas"
import {BuscadorDeTareas} from "../src/clases/buscadorDeTareas"
import {Tarea} from "../src/clases/tarea"
import { PRIORIDAD } from "../src/enums/prioridad";
import { errorTareaNoExiste } from "../src/excepciones/errorTareaNoExiste";

describe("Prueba del buscador de tareas", () =>{

    let lista: ListaTareas;
    let tarea1: Tarea;
    let tarea2: Tarea;
    let tarea3: Tarea;
    let expdate: Date;

    beforeEach(() =>{
        expdate = new Date(2024, 11, 5)
        lista= new ListaTareas()
        tarea1 = new Tarea("Mi Titulo", "Mi Descripcion", expdate , PRIORIDAD.ALTA, "micategoria", "mietiqueta")
        tarea2 = new Tarea("El Titulo", "Mi Descripcion", expdate , PRIORIDAD.BAJA, "micategoria", "mietiqueta")
        tarea3 = new Tarea("Sin Titulo", "Mi Descripcion", new Date("2019-01-18"), PRIORIDAD.MEDIA, "micategoria", "mietiqueta")
        lista.push(tarea1);
        lista.push(tarea2);
        lista.push(tarea3);
    })

    it("Prueba de buscar una tarea por titulo", () => {
        expect(BuscadorDeTareas.searchByTitle(lista, "El Titulo")).toBe(tarea2)
    })

    it("Prueba de buscar una tarea por fecha de vencimiento", () =>{
        let tareas = [tarea1, tarea2]
        expect(BuscadorDeTareas.searchByExpirationDate(lista, expdate)).toStrictEqual(tareas);
    })

    it("Prueba de tirar la exepcion", () =>{
        /*try {
            BuscadorDeTareas.searchByTitle(lista, "nada")
        } catch (error) {
            expect(error).toBeInstanceOf(errorTareaNoExiste)
        }*/
       expect(()=>BuscadorDeTareas.searchByTitle(lista, "nada")).toThrow(errorTareaNoExiste);
    })
})