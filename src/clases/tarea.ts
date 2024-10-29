export default class Tarea {
    private id: number;
    private titulo: string;
    private descripcion: string;
    private fechaVencimiento: Date;
    private prioridad: string;
    private categoria: string;
    private etiqueta: string;
    private porcentaje: number;
    private estado: string;

    constructor(titulo: string, descripcion: string, fechaVencimiento: Date, prioridad: string, categoria: string, etiqueta: string) {
        this.id = Math.random();
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaVencimiento = fechaVencimiento;
        this.prioridad = prioridad;
        this.categoria = categoria;
        this.etiqueta = etiqueta;
        this.porcentaje = 0;
        this.estado = ESTADO.INCOMPLETA;
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.titulo;
    }

    public setTitle(titulo: string): void {
        this.titulo = titulo;
    }

    public getDescription(): string {
        return this.descripcion;
    }

    public setDescription(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public getExpirationDate(): Date {
        return this.fechaVencimiento;
    }

    public setExpirationDate(fechaVencimiento: Date): void {
        this.fechaVencimiento = fechaVencimiento;
    }

    public getPriority(): string {
        return this.prioridad;
    }

    public setPriority(prioridad: string): void {
        this.prioridad = prioridad;
    }

    public getCategory(): string {
        return this.categoria;
    }

    public setCategory(categoria: string): void {
        this.categoria = categoria;
    }

    public getTag(): string {
        return this.etiqueta;
    }

    public setTag(etiqueta: string): void {
        this.etiqueta = etiqueta;
    }

    public getPercentage(): number {
        return this.porcentaje;
    }

    public setPercentage(porcentaje: number): void {
        this.porcentaje = porcentaje;
    }

    public getState(): string {
        return this.estado;
    }

    public setState(estado: string): void {
        this.estado = estado;
    }
}