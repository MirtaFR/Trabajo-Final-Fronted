import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { InformacionGeneralListComponent } from './components/informacion-general-list/informacion-general-list.component';
import { InformacionGeneralDetailsComponent } from './components/informacion-general-details/informacion-general-details.component';
import { AddInformacionGeneralComponent } from './components/add-informacion-general/add-informacion-general.component';
import { AddInicioSesionComponent } from './components/add-inicio-sesion/add-inicio-sesion.component';
import { InicioSesionListComponent } from './components/inicio-sesion-list/inicio-sesion-list.component';
import { RecuperacionPasswordListComponent } from './components/recuperacion-password-list/recuperacion-password-list.component';
import { RecuperacionPasswordDetailsComponent } from './components/recuperacion-password-details/recuperacion-password-details.component';
import { AddRecuperacionPasswordComponent } from './components/add-recuperacion-password/add-recuperacion-password.component';
import { NuevaPasswordListComponent } from './components/nueva-password-list/nueva-password-list.component';
import { NuevaPasswordDetailsComponent } from './components/nueva-password-details/nueva-password-details.component';
import { AddNuevaPasswordComponent } from './components/add-nueva-password/add-nueva-password.component';
import { LugarNacimientoListComponent } from './components/lugar-nacimiento-list/lugar-nacimiento-list.component';
import { LugarNacimientoDetailsComponent } from './components/lugar-nacimiento-details/lugar-nacimiento-details.component';
import { AddLugarNacimientoComponent } from './components/add-lugar-nacimiento/add-lugar-nacimiento.component';
import { ContactoListComponent } from './components/contacto-list/contacto-list.component';
import { ContactoDetailsComponent } from './components/contacto-details/contacto-details.component';
import { AddContactoComponent } from './components/add-contacto/add-contacto.component'; 
import { DomicilioParticularListComponent } from './components/domicilio-particular-list/domicilio-particular-list.component';
import { DomicilioParticularDetailsComponent } from './components/domicilio-particular-details/domicilio-particular-details.component';
import { AddDomicilioParticularComponent } from './components/add-domicilio-particular/add-domicilio-particular.component';
import { DesarrolloListComponent } from './components/desarrollo-list/desarrollo-list.component';
import { AddDesarrolloComponent } from './components/add-desarrollo/add-desarrollo.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { AddMenuComponent } from './components/add-menu/add-menu.component';
import { AddProyectoComponent } from './components/add-proyecto/add-proyecto.component';
import { AddPatenteComponent } from './components/add-patente/add-patente.component';
import { AddArticuloDivulgacionComponent } from './components/add-articulo-divulgacion/add-articulo-divulgacion.component';
import { AddRevistaIndexadoComponent } from './components/add-revista-indexado/add-revista-indexado.component';
import { AddEstanciasComponent } from './components/add-estancias/add-estancias.component';
import { AddGradoAcademicoComponent } from './components/add-grado-academico/add-grado-academico.component';
import { AddLibroComponent } from './components/add-libro/add-libro.component';
import { AddSniComponent } from './components/add-sni/add-sni.component';


const routes: Routes = [
  { path: '', redirectTo: 'user-add', pathMatch: 'full' },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'user-add', component: AddUserComponent },
  { path: 'informacion_general',component: InformacionGeneralListComponent},
  { path: 'informacion_general-add',component:AddInformacionGeneralComponent},
  { path: 'inicio_sesion' ,component: InicioSesionListComponent},
  { path: 'inicio_sesion-add' ,component:AddInicioSesionComponent},
  { path: 'recuperacion_password', component:RecuperacionPasswordListComponent},
  { path: 'recuperacion_password-add', component:AddRecuperacionPasswordComponent},
  { path: 'nueva_password' ,component: NuevaPasswordListComponent},
  { path: 'nueva_password-add' ,component:AddNuevaPasswordComponent},
  { path: 'lugar_nacimiento', component:LugarNacimientoListComponent},
  { path: 'lugar_nacimiento-add', component:AddLugarNacimientoComponent},
  { path: 'domicilio_particular', component: DomicilioParticularListComponent},
  { path: 'domicilio_particular-add', component: AddDomicilioParticularComponent},
  { path: 'contacto', component: ContactoListComponent},
  { path: 'contacto-add', component: AddContactoComponent},
  { path: 'desarrollo', component: DesarrolloListComponent},
  { path: 'desarrollo-add', component: AddDesarrolloComponent},
  { path: 'menu', component: MenuListComponent},
  { path: 'menu-add', component: AddMenuComponent},
  { path: 'proyecto-add', component: AddProyectoComponent},
  { path: 'patente-add', component: AddPatenteComponent},
  { path: 'articulo-add', component: AddArticuloDivulgacionComponent},
  { path: 'revista-add', component: AddRevistaIndexadoComponent},
  { path: 'estancias-add', component: AddEstanciasComponent},
  { path: 'grado-add', component: AddGradoAcademicoComponent},
  { path: 'libro-add', component: AddLibroComponent},
  { path: 'sni-add', component: AddSniComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
