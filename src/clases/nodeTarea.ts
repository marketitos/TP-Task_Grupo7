import Tarea from "./tarea";

export default class NodeTarea {
    private _value: Tarea;
    private _next: NodeTarea;

    constructor(value: Tarea) {
        this._value = value;
        this._next = undefined as unknown as NodeTarea;
    }

    public get value(): Tarea {
        return this._value;
    }
    
    public get next(): NodeTarea {
        return this._next;
    }

    public set next(n: NodeTarea) {
        this._next = n;
    }
}