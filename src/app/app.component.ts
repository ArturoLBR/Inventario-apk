import { Component, Optional } from '@angular/core';
import { AlertController, IonRouterOutlet, Platform, ToastController } from '@ionic/angular';
import {App} from '@capacitor/app';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tap=0;

  title = 'inventario-app';

  
  constructor(
    private platform: Platform,
    private toastCtrl: ToastController,
    private alertCtrl:AlertController,
    @Optional() private routerOulet?: IonRouterOutlet

  ){
   this.platform.ready().then(() => {
   // this.exitAppOnDoubleTap();
    this.exitAppOnAlert();
   });
  }

  exitAppOnAlert(){

    if(Capacitor.getPlatform()=='android') {
      this.platform.backButton.subscribeWithPriority(10,async() => {
        if(!this.routerOulet?.canGoBack()) {
          this.alerExit();
        }
      });
    }
  }



  exitAppOnDoubleTap(){

    if(Capacitor.getPlatform()=='android') {
      this.platform.backButton.subscribeWithPriority(10,async() => {
        if(!this.routerOulet?.canGoBack()) {
          this.tap++;
          if (this.tap == 2) App.exitApp(); 
          else{
            this.doubleTapExitToast ();
          }
        }
      });
    }
  }


  async doubleTapExitToast(){

    console.log('doubletapexit was called!');
    let toast = await this.toastCtrl.create({
      message: 'Tap back button again to exit the App before I/´m gone',
      duration:3000,
      position:'bottom',
      color: 'primary'
    });

    toast.present();
    const dismiss = await toast.onDidDismiss();
    if(dismiss){
      console.log('dismiss: ',dismiss);
      this.tap =0;

    }

  }

  async alerExit(){
    console.log('alert');
    const alert = await this.alertCtrl.create({
      header:'Exit App',
      subHeader:'Confirm',
      message: 'Are you sure you wnat to exit the App',
      buttons: [
        {
          text:'No',
          role:'cancel'
        },
        {
          text:'Ye',
          role:'confirm',
          handler: () => { App.exitApp();}
        }
      ],
    });
    alert.present();
  }


} 

