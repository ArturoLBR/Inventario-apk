import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienes',
  templateUrl: './bienes.component.html',
  styleUrls: ['./bienes.component.css']
})
export class BienesComponent {


  constructor(private platform: Platform, private router: Router) {
    this.setupBackButtonRedirect();
  }

  private setupBackButtonRedirect() {
    this.platform.backButton.subscribeWithPriority(20, () => {
      if (this.router.url === '/bienes') {
        this.router.navigateByUrl('/home');
      }
    });
  }
  


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



  onSearch(event: any) {
    const searchTerm = event.target.value;
    // Aquí puedes implementar la lógica para realizar la búsqueda con el término de búsqueda 'searchTerm'
    console.log('Término de búsqueda:', searchTerm);
    // Por ejemplo, puedes llamar a un servicio para filtrar los datos basados en el término de búsqueda y actualizar la lista de bienes en tu app.
  }

  restablecerInventario() {
    // Asignar un nuevo array vacío para restablecer el inventario
    this.productos = [];
  }


}
