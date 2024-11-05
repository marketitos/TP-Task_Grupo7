import { ListaTareas } from "./listaTareas";
import { NodeTarea } from "./nodeTarea";
import { Tarea } from "./tarea";

/**
 * Clase para ordenar tareas dentro de una lista utilizando ciertos parametros.
 */
export class OrdenadorDeTareas{
    /**
     * Ordena una lista por el orden alfabetico de las tareas.
     * @param list lista a ordenar.
     */
    public static sortByTitle(list:ListaTareas):void{
        let value: Tarea;
        let listAux = new ListaTareas();
        while(list.getHead()) {
            value = list.removeFirst();
            this.insertOrderedTitle(listAux, value);
        }
        list.setHead(listAux.getHead()) 
        listAux.clear();
    }

    /**
     * Permite insertar el titulo de forma ordenada.
     * @param list lista en donde insertar la tarea.
     * @param value tarea a insertar.
     */
    public static insertOrderedTitle(list:ListaTareas, value: Tarea):void{
        const node = new NodeTarea(value);
        let headAux = list.getHead();
        let previous:NodeTarea = undefined as unknown as NodeTarea;
        while(headAux && headAux.value.getTitle() < value.getTitle()) {
            previous = headAux;
            headAux = headAux.next;
        }
        if (!previous) {
            list.setHead(node);
        } else {
            previous.next = node;
        }
        node.next = headAux
    }

    /**
     * Ordena una lista por la fecha de expiración de las tareas.
     * @param list lista a ordenar.
     */
    public static sortByExpirationDate(list:ListaTareas):void{
        let value: Tarea;
        let listAux = new ListaTareas();
        while(list.getHead()) {
            value = list.removeFirst();
            this.insertOrderedExpirationDate(listAux, value);
        }
        list.setHead(listAux.getHead()) 
        listAux.clear();
    }

    /**
     * Permite insertar la fecha de expiración de forma ordenada.
     * @param list lista en donde insertar la tarea.
     * @param value tarea a insertar.
     */
    public static insertOrderedExpirationDate(list:ListaTareas, value: Tarea):void{
        const node = new NodeTarea(value);
        let headAux = list.getHead();
        let previous:NodeTarea = undefined as unknown as NodeTarea;
        while(headAux && headAux.value.getExpirationDate() < value.getExpirationDate()) {
            previous = headAux;
            headAux = headAux.next;
        }
        if (!previous) {
            list.setHead(node);
        } else {
            previous.next = node;
        }
        node.next = headAux
    }

    /**
     * Ordena una lista por la prioridad de las tareas.
     * @param list lista a ordenar.
     */
    public static sortByPriority(list:ListaTareas):void{
        let value: Tarea;
        let listAux = new ListaTareas();
        while(list.getHead()) {
            value = list.removeFirst();
            this.insertOrderedPriority(listAux, value);
        }
        list.setHead(listAux.getHead()) 
        listAux.clear();
    }

    /**
     * Permite insertar la prioridad de forma ordenada.
     * @param list lista en donde insertar la tarea.
     * @param value tarea a insertar.
     */
    public static insertOrderedPriority(list:ListaTareas, value: Tarea):void{
        const node = new NodeTarea(value);
        let headAux = list.getHead();
        let previous:NodeTarea = undefined as unknown as NodeTarea;
        while(headAux && headAux.value.getPriority() > value.getPriority()) {
            previous = headAux;
            headAux = headAux.next;
        }
        if (!previous) {
            list.setHead(node);
        } else {
            previous.next = node;
        }
        node.next = headAux
    }
}