import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../../models/ticket';
import { Punto5Service } from '../../services/punto5.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto5bis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto5bis.component.html',
  styleUrl: './punto5bis.component.css'
})
export class Punto5bisComponent {

  ticketsVendidos!: Array<Ticket>;

  constructor(private router: Router,
              private punto5Service: Punto5Service
  ){
    this.obtenerTickets();
  }

  irFormulario(){
    this.router.navigate(['punto5']);
  }

  obtenerTickets(){
    this.ticketsVendidos = this.punto5Service.getTickets();
  }


  mostrarTotalVentas(op: String){
    if (op === 'l'){
      let arrayLocal = this.ticketsVendidos.filter(function(ticket){
        return ticket.tipoEspectador === 'l';
      });
    } else if (op === 'e'){
      let arrayExtranjero = this.ticketsVendidos.filter(function(ticket){
        return ticket.tipoEspectador === 'e';
      });
    } else {
      this.ticketsVendidos = this.punto5Service.getTickets();
    }
  }

}
