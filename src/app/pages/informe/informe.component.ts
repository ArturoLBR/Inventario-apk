import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent {

  
  productos:any[] = [
      
    {
      id:1,
      nombre: 'Producto 1',
      descripcion: 'Descripción del Producto 1',
      cantidad: 10,
      precio: 100,
      proveedor: 'Proveedor 1'
    },
    {
      id:2,
      nombre: 'Producto 2',
      descripcion: 'Descripción del Producto 2',
      cantidad: 5,
      precio: 50,
      proveedor: 'Proveedor 2'
    }

  ];


constructor(private platform: Platform, private router: Router) {
 
}

ngOnInit() {
  this.setupBackButtonRedirect();
}

private setupBackButtonRedirect() {
  this.platform.backButton.subscribeWithPriority(20, () => {
    if (this.router.url === '/informe') {
      this.router.navigateByUrl('/home');
    }
  });
}

actualizarProductos(nuevosProductos: any[]) {
  // Actualizar el array de productos con los nuevos productos recibidos
  this.productos = nuevosProductos;
}

agregarProductos(producto: any) {
  // Agregar el producto al array de productos
  this.productos.push(producto);
}

calcularCantidadTotal(): number {
  return this.productos.length;
}

calcularPrecioTotal(): number {
  let precioTotal = 0;
  this.productos.forEach(producto => {
    precioTotal += producto.precio;
  });
  return precioTotal;
}

calcularValorPromedioPorProducto(): number {
  if (this.productos.length === 0) {
    return 0;
  }
  const cantidadTotal = this.calcularCantidadTotal();
  const precioTotal = this.calcularPrecioTotal();
  return precioTotal / cantidadTotal;
}



}
