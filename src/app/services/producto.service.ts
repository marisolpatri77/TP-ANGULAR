import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos!: Array<Producto>;
 

  constructor() {
    this.productos = [
      {
        _id: '1',
        nombre: 'Glaze',
        descripcion: 'Sombra líquida cromada',
        img: 'https://colourpop.com/cdn/shop/products/Multi-Chrome-Badges-Glaze.jpg?v=1681948175&width=988',
        precio: 5000
      },
      {
        _id: '2',
        nombre: 'In a trance',
        descripcion: 'Paleta de sombras',
        img: 'https://colourpop.com/cdn/shop/files/image_2.png?v=1709848668&width=988',
        precio: 20000
      },
      {
        _id: '3',
        nombre: 'Purple Prose',
        descripcion: 'Máscara de pestañas',
        img: 'https://colourpop.com/cdn/shop/files/1_PURPLE_PROSE_BFF_MASCARA2.jpg?v=1700000691&width=988',
        precio: 12000
      },
      {
        _id: '4',
        nombre: 'Azabu-Juban',
        descripcion: 'Delineador en gel crema',
        img: 'https://colourpop.com/cdn/shop/files/Azabu-Juban-Stylized-Linear.jpg?v=1695837534&width=988',
        precio: 5000
      },
      {
        _id: '5',
        nombre: 'Moon Crystal Power',
        descripcion: 'Gloss para cara y ojos',
        img: 'https://colourpop.com/cdn/shop/files/Moon-Crystal-Power-Gloss-Stylized-plate-1_c2b6106a-6280-4979-9955-cfe73d0765f9.jpg?v=1695837776&width=988',
        precio: 8000
      },
      {
        _id: '6',
        nombre: 'Moonlight Kiss',
        descripcion: 'Set de glosses',
        img: 'https://colourpop.com/cdn/shop/files/Lip-Kit-Bundle-on-blue-purple.jpg?v=1695836369&width=988',
        precio: 40000
      }
      
    ];
   }


  getProducts(): Array<Producto> {
    return this.productos;
  }

}
