import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../../models/ticket';
import { CommonModule } from '@angular/common';
import { Punto5Service } from '../../services/punto5.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-punto5',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './punto5.component.html',
  styleUrl: './punto5.component.css'
})
export class Punto5Component {

  ticket! : Ticket;

  constructor(private punto5Service : Punto5Service,
              private router: Router
  ){
    this.ticket = new Ticket();
  }

  calcularDescuento(tipo_espectador: string){
    if(tipo_espectador == 'l') {
      this.ticket.precioCobrado = this.ticket.precioReal - this.ticket.precioReal * 0.2;
    }
    else{
      this.ticket.precioCobrado = this.ticket.precioReal;
    }
  }

  registrar(): void {
    console.log(this.ticket);
    this.punto5Service.addTicket(this.ticket);
    this.ticket = new Ticket();
  }

  irResumen(){
    this.router.navigate(['punto5bis']);
  }

}
