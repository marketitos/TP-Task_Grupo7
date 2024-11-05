import { errorTareaNoExiste } from "../excepciones/errorTareaNoExiste";
import { ListaTareas } from "./listaTareas";
import { Tarea } from "./tarea";

/*
 * Clase para buscar tareas dentro de una lista utilizando ciertos parametros. 
 */
export class BuscadorDeTareas{
    /**
     * Busca una tarea dentro de una lista basandose en el titulo especificado y la devuelve.
     * @param list lista en donde buscar la tarea.
     * @param title titulo de la tarea a buscar.
     * @returns 
     */
    public static searchByTitle(list:ListaTareas, title:string):Tarea{
        let headAux = list.getHead()
        
        while (headAux.value.getTitle() != title && headAux.next){
            headAux = headAux.next;
        }
        if (headAux.value.getTitle() != title){
            throw new errorTareaNoExiste("El parametro proveeido no se encuentra en la lista");
        }
        return headAux.value;
    }

    /**
     * Busca tareas dentro de una lista basandose en la fecha de expiración especificada y las devuelve en un array de tareas.
     * @param list lista en donde buscar las tareas.
     * @param expirationDate fecha de expiración de las tareas a buscar.
     * @returns 
     */
    public static searchByExpirationDate(list: ListaTareas, expirationDate: Date): Tarea[]{
        let headAux = list.getHead()
        let tareas: Tarea[];
        tareas = [];
        
        while (headAux.next){
            if (headAux.value.getExpirationDate()===expirationDate){
               tareas.push(headAux.value); 
            }
            headAux = headAux.next;
        }
        if (tareas.length===0){
            throw new errorTareaNoExiste("El parametro proveeido no existe en la lista");
        }
        return tareas;
    }
}