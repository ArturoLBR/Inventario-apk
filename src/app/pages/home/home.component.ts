import { Component, OnDestroy   } from '@angular/core';
import { Platform,IonRouterOutlet, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {

  private backButtonSubscription: Subscription | undefined;;

  constructor(private platform: Platform, private router: Router,
    private routerOutlet: IonRouterOutlet,
    private navCtrl: NavController,
    private alertCtrl: AlertController
    ){
      this.setupBackButtonRedirect();
    }

    ngOnDestroy() {
      if (this.backButtonSubscription) {
        this.backButtonSubscription.unsubscribe();
      }
    }
  
    private setupBackButtonRedirect() {
      if (Capacitor.getPlatform() == 'android') {
        this.platform.backButton.subscribeWithPriority(10, async () => {
          if (!this.router.url.includes('/editar')) {
            const alert = await this.alertCtrl.create({
              header: 'Exit App',
              subHeader: 'Confirm',
              message: 'Are you sure you want to exit the App?',
              buttons: [
                {
                  text: 'No',
                  role: 'cancel'
                },
                {
                  text: 'Yes',
                  role: 'confirm',
                  handler: () => { App.exitApp(); }
                }
              ]
            });
  
            await alert.present();
          }
        });
      }
    }










  
  /*

  this.setupBackButtonRedirect();

  }

ngOnInit() {
    this.setupBackButtonRedirect();
  }

  private setupBackButtonRedirect() {
    this.platform.backButton.subscribeWithPriority(20, () => {
      if (this.router.url === '/editar') {
        this.router.navigateByUrl('/home');
      }else{
      //  navigator['app'].exitApp();
      }
          });
  }
*/

}
