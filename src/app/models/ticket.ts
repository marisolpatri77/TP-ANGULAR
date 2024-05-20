export class Ticket {
    id: number;
    dni: string;
    precioReal: number;
    tipoEspectador: string;
    fechaCobro: Date;
    precioCobrado: number;


    constructor(){
        this.id = 0;
        this.dni = "";
        this.precioReal = 0;
        this.tipoEspectador = "";
        this.fechaCobro = new Date();
        this.precioCobrado = 0;
    }
}
