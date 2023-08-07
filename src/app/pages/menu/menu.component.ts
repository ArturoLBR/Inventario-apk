import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  
  mensajeConsola: String []=[];

  constructor(private alertCtrl: AlertController) {}


 

  async enviar() {

      const alert = await this.alertCtrl.create({
        message: 'Mensaje enviado',
        buttons: ['OK'],


      });
      
      
      await alert.present();   

}



}
