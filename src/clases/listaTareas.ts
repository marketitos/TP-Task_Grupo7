import { NodeTarea } from "./nodeTarea";
import { Tarea } from "./tarea";

/**
 * Clase que permite la simulación de la estructura de datos Lista.
 */
export class ListaTareas {
    private head: NodeTarea;
    
    constructor() {
        this.head = undefined as unknown as NodeTarea;
    }

    /**
     * Permite obtener el primer nodo de la lista.
     * @returns 
     */
    public getHead():NodeTarea{
        return this.head
    }
    
    /**
     * Permite establecer el primer nodo de la lista.
     * @param value nodo a establecer.
     */
    public setHead(value: NodeTarea){
        this.head = value;
    }

    /**
     * Agrega un nodo de tipo Tarea al final de la lista.
     * @param value tarea a definir en el nodo.
     */
    public push(value: Tarea): NodeTarea {
        const node = new NodeTarea(value);
        let headAux = this.head;
        while(headAux && headAux.next) {
            headAux = headAux.next;
        }
        if (!headAux) {
            this.head = node
        } else {
            headAux.next = node;
        }
        return node;
    }
    
    /**
     * Elimina y devuelve el último nodo de la lista.
     * @returns 
     */
    public pop(): Tarea {
        let value = undefined;
        let headAux = this.head;
        let previous:NodeTarea = undefined as unknown as NodeTarea;
        while(headAux && headAux.next) {
            previous = headAux;
            headAux = headAux.next;
        }
        if (!previous) {
            this.head = undefined as unknown as NodeTarea;
        } else {
            previous.next = undefined as unknown as NodeTarea;
        }
        value = headAux.value;
        return value;
    }

    /**
     * Agrega un nodo de tipo Tarea delante del primer nodo de la lista y lo devuelve.
     * @param value tarea a definir en el nodo.
     * @returns 
     */
    public insertFirst(value: Tarea): NodeTarea {
        const node = new NodeTarea(value);
        node.next = this.head;
        this.head = node;
        return node;
    }

    /**
     * Permite eliminar y devolver el primer nodo de la lista.
     * @returns 
     */
    public removeFirst(): Tarea {
        let value = undefined as unknown as Tarea;
        if (this.head) {
            value = this.head.value;
            this.head = this.head.next;
        }
        return value;
    }

    /**
     * Permite insertar y devolver un nodo conservando el orden.
     * @param value valor del nodo a insertar.
     * @returns 
     */
    public insertOrdered(value: Tarea): NodeTarea {
        const node = new NodeTarea(value);
        let headAux = this.head;
        let previous:NodeTarea = undefined as unknown as NodeTarea;
        while(headAux && headAux.value < value) {
            previous = headAux;
            headAux = headAux.next;
        }
        if (!previous) {
            this.head = node;
        } else {
            previous.next = node;
        }
        node.next = headAux;
        return node;
    }

    /**
     * Permite insertar un nodo respetando el orden de la lista siempre y cuando el mismo no exista previamente en la lista. Devuelve el puntero al nodo encontrado o insertado.
     * @param value valor del nodo a insertar.
     * @returns 
     */
    public insertUnique(value: Tarea): NodeTarea {
        const node = this.search(value);
        if (!node) {
            this.insertOrdered(value);
        }
        return node;
    }

    /**
     * Permite eliminar el nodo que contiene el valor pasado por parametro.
     * @param value valor del nodo a eliminar.
     * @returns 
     */
    public delete(value: Tarea): Tarea {
        let headAux = this.head;
        let previous:NodeTarea = undefined as unknown as NodeTarea;
        while(headAux && headAux.value !== value) {
            previous = headAux;
            headAux = headAux.next;
        }
        if (!previous) {
            this.head = headAux.next;
        } else {
            previous.next = headAux.next;
        }
        return headAux.value;
    }
    
    /**
     * Permite buscar y devolver el nodo que contenga el valor pasado por parametro.
     * @param value valor del nodo a buscar.
     * @returns 
     */
    public search(value: Tarea): NodeTarea {
        let headAux = this.head;
        while(headAux && headAux.value !== value) {
            headAux = headAux.next;
        }
        return headAux;
    }
    
    /**
     * Permite ordenar una lista.
     */
    public sort(): void {
        let value: Tarea;
        let listAux = new ListaTareas();
        while(this.head) {
            value = this.removeFirst();
            listAux.insertOrdered(value);
        }
        this.head = listAux.head;
        listAux.clear();
    }

    /**
     * Permite vaciar la lista.
     */
    public clear(): void {
        while(this.head){
            this.removeFirst();
        }
    }
}   