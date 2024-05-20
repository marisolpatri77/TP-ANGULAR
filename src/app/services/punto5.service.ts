import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class Punto5Service {

  ticketsVendidos: Array<Ticket>;

  constructor() {
    this.ticketsVendidos = [];
  }

  addTicket(ticket: Ticket): void {
    this.ticketsVendidos.push(ticket);
  }

  getTickets(): Array<Ticket>{
    return this.ticketsVendidos;
  }

}
