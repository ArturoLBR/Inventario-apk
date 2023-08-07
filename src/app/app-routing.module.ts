import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BienesComponent } from './pages/bienes/bienes.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { EditarComponent } from './pages/editar/editar.component';
import { InformeComponent } from './pages/informe/informe.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SoporteComponent } from './pages/soporte/soporte.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },

  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'bienes',
    component: BienesComponent
  },
  {
    path:'configuracion',
    component:ConfiguracionComponent
  },
  {
    path:'editar',
    component:EditarComponent
  },
  {
    path:'informe',
    component:InformeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'soporte',
    component:SoporteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
