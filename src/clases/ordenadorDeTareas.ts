import ListaTareas from "./listaTareas";
import NodeTarea from "./nodeTarea";
import Tarea from "./tarea";

export default class OrdenadorDeTareas{
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