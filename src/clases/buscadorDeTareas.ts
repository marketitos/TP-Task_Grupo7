import errorTareaNoExiste from "../excepciones/errorTareaNoExiste";
import ListaTareas from "./listaTareas";
import Tarea from "./tarea";

export default class BuscadorDeTareas{
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