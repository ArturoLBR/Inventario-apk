import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'; 
import { ElementRef } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent {


  constructor (private el: ElementRef, private alertCtrl: AlertController, private router: Router, private platform: Platform){
    
    
  }

  ngOnInit() {
    this.setupBackButtonRedirect();
  }
  
  private setupBackButtonRedirect() {
    this.platform.backButton.subscribeWithPriority(20, () => {
      if (this.router.url === '/configuracion') {
        this.router.navigateByUrl('/home');
      }
    });
  }


  async mostrarAlerta() {
    const alert = await this.alertCtrl.create({
      header: 'Acerca de',
      message: '¡Bienvenido a la aplicación de inventario! Esta es una app de inventario sencilla desarrollada con Ionic. ¡Esperamos que te sea útil!',
      buttons: ['OK']
    });

    await alert.present();
  }



  temaOriginal: boolean = true; // Inicialmente, el tema es el original



  cambiarTema() {
  
    
    const colorTema = '#007bff'; 

    if (this.temaOriginal) {
      // Si el tema actual es el original, aplicar el nuevo color
      this.el.nativeElement.ownerDocument.documentElement.style.setProperty('--ion-color-primary', colorTema);
    } else {
      // Si el tema actual es el nuevo color, restaurar el color original
      this.el.nativeElement.ownerDocument.documentElement.style.removeProperty('--ion-color-primary');
    }

  // Cambiar el estado del tema
  this.temaOriginal = !this.temaOriginal;


  }

  async restablecerInventario() {
    // Agregar aquí la lógica para restablecer el inventario
    // Por ejemplo, puedes reiniciar el array de productos o eliminar todos los registros de la base de datos, según tu implementación.
    
    // Luego, muestra una alerta indicando que el inventario ha sido restablecido
    const alert = await this.alertCtrl.create({
      message: 'Inventario restablecido',
      buttons: ['OK']
    });
    await alert.present();
  }


}
