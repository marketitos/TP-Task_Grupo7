import NodeTarea from "./nodeTarea";
import Tarea from "./tarea";

export default class ListaTareas {
    private head: NodeTarea;
    
    constructor() {
        this.head = undefined as unknown as NodeTarea;
    }

    public getHead():NodeTarea{
        return this.head
    }

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

    public insertFirst(value: Tarea): NodeTarea {
        const node = new NodeTarea(value);
        node.next = this.head;
        this.head = node;
        return node;
    }

    public removeFirst(): Tarea {
        let value = undefined as unknown as Tarea;
        if (this.head) {
            value = this.head.value;
            this.head = this.head.next;
        }
        return value;
    }

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

    public insertUnique(value: Tarea): NodeTarea {
        const node = this.search(value);
        if (!node) {
            this.insertOrdered(value);
        }
        return node;
    }

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
    
    public search(value: Tarea): NodeTarea {
        let headAux = this.head;
        while(headAux && headAux.value !== value) {
            headAux = headAux.next;
        }
        return headAux;
    }
    
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

    public clear(): void {
        while(this.head){
            this.removeFirst();
        }
    }
}   