import { Component, EventEmitter, Output} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';



interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  cantidad: number;
  precio: number;
  proveedor: string;
}

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})

export class EditarComponent {

  
  id: number | null;
  nombre: string;
  descripcion: string;
  cantidad: number| null;
  precio: number| null;
  proveedor: string;


  constructor(private alertCtrl: AlertController, private router: Router, private platform: Platform) {
    
    // Inicializar las propiedades si es necesario
    this.id = null;
    this.nombre = '';
    this.descripcion = '';
    this.cantidad = null;
    this.precio = null;
    this.proveedor = '';

    
  }

  ngOnInit() {
    this.setupBackButtonRedirect();
  }
  
  private setupBackButtonRedirect() {
    this.platform.backButton.subscribeWithPriority(20, () => {
      if (this.router.url === '/editar') {
        this.router.navigateByUrl('/home');
      }
    });
  }




  productos: Producto[] = [
    {
      id:1,
      nombre: 'Producto 1',
      descripcion: 'Descripción del Producto 1',
      cantidad: 10,
      precio: 100,
      proveedor: 'Proveedor 1'
    },
    {
      id: 2,
      nombre: 'Producto 2',
      descripcion: 'Descripción del Producto 2',
      cantidad: 5,
      precio: 50,
      proveedor: 'Proveedor 2'
    }
  ];



  @Output() productosCambiados = new EventEmitter<any[]>();

  async guardarCambios() {
 
    const nuevoProducto: Producto = {
      id: this.id!,
      nombre: this.nombre,
      descripcion: this.descripcion,
      cantidad: this.cantidad!,
      precio: this.precio!,
      proveedor: this.proveedor
    };


     // Agrega el objeto al array de productos
     this.productos.push(nuevoProducto);

     // Limpia los inputs después de guardar los datos
     this.id = null;
     this.nombre = '';
     this.descripcion='';
     this.cantidad = null;
     this.precio = null;
     this.proveedor = '';

     const alert = await this.alertCtrl.create({
      message: 'Producto guardado',
      buttons: ['OK'],

    });

    await alert.present();   

 // Emitir el evento con los productos actualizados
 //this.productosCambiados.emit(this.productos);

  }
  

  async buscarDatos() {

    const idBuscado = this.id;
    const idBuscadoEnNumero = Number(idBuscado);
      
    //console.log("producto id: ",producto.id)
    if (idBuscado !== null) {
      const productoEncontrado = this.productos.find((producto) => producto.id === idBuscadoEnNumero);
  

    if (productoEncontrado) {
      // Si se encontró el producto con el id buscado, establecer los valores en las propiedades
      this.nombre = productoEncontrado.nombre;
      this.descripcion = productoEncontrado.descripcion;
      this.cantidad = productoEncontrado.cantidad;
      this.precio = productoEncontrado.precio;
      this.proveedor = productoEncontrado.proveedor;

      const alert = await this.alertCtrl.create({
        message: 'Producto no encontrado',
        buttons: ['OK'],
      });

    } else {
      // Si no se encontró el producto, limpiar las propiedades
      this.nombre = '';
      this.descripcion = '';
      this.cantidad = null;
      this.precio = null;
      this.proveedor = '';

      const alert = await this.alertCtrl.create({
        message: 'Producto no encontrado',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }

  }



  async eliminarDatos() {
    const idBuscado = this.id;
    const idBuscadoEnNumero = Number(idBuscado);
  
    if (idBuscado !== null) {
      const indiceProducto = this.productos.findIndex((producto) => producto.id === idBuscadoEnNumero);
  
      if (indiceProducto !== -1) {
        // Si se encontró el producto con el id buscado, eliminarlo del array de productos
        this.productos.splice(indiceProducto, 1);
  
        const alert = await this.alertCtrl.create({
          message: 'Producto eliminado',
          buttons: ['OK'],
        });
  
        await alert.present();
      } else {
        // Si no se encontró el producto, mostrar un mensaje de error
        const alert = await this.alertCtrl.create({
          message: 'Producto no encontrado',
          buttons: ['OK'],
        });
  
        await alert.present();
      }
    }
  
    // Limpiar las propiedades después de eliminar el producto
    this.id = null;
    this.nombre = '';
    this.descripcion = '';
    this.cantidad = null;
    this.precio = null;
    this.proveedor = '';
  }
  
 


  


}

