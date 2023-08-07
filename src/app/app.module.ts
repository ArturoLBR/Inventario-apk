import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './pages/home/home.component';
import { BienesComponent } from './pages/bienes/bienes.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { EditarComponent } from './pages/editar/editar.component';
import { InformeComponent } from './pages/informe/informe.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SoporteComponent } from './pages/soporte/soporte.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BienesComponent,
    ConfiguracionComponent,
    EditarComponent,
    InformeComponent,
    LoginComponent,
    MenuComponent,
    SoporteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
