import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../services/producto.service';


@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css'
})
export class Punto1Component {
  

  productos!: Array<Producto>;

  carrito: any = [];

  constructor(private productoService: ProductoService){
    //this.productos = new Array<Producto>();
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.productos = this.productoService.getProducts();
  }

  agregarProducto(idProducto:string){
    let producto = this.productos.find(p => p._id === idProducto);
    //console.log(producto);
    if (producto){
      this.carrito.push(producto);
    }
  }
}
