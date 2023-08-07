import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  

  // Declaración de las propiedades
  username: string='';
  password: string='';
  
  vUsername: string='';
  vPassword: string ='';

  constructor(private router: Router) {} // Inyecta el Router en el constructor

  onSubmit(): void {
    // manejar el inicio de sesión
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // enviar los datos de inicio de sesión a un servicio para autenticar al usuario
    // this.authService.login(this.username, this.password);

    if (this.username == this.vUsername && this.password==this.vPassword) {
      this.router.navigate(['/home']);
    } else {
      
    }
  }



}
