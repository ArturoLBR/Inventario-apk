import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent {


  constructor(private platform: Platform, private router: Router) {

  }

  ngOnInit() {
    this.setupBackButtonRedirect();
  }
  
  private setupBackButtonRedirect() {
    this.platform.backButton.subscribeWithPriority(20, () => {
      if (this.router.url === '/soporte') {
        this.router.navigateByUrl('/home');
      }
    });
  }

  enviarDatos() {
    
  }

}
