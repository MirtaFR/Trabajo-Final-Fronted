import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AddInformacionGeneralComponent } from './components/add-informacion-general/add-informacion-general.component';
import { InformacionGeneralDetailsComponent } from './components/informacion-general-details/informacion-general-details.component';
import { InformacionGeneralListComponent } from './components/informacion-general-list/informacion-general-list.component';
import { AddInicioSesionComponent } from './components/add-inicio-sesion/add-inicio-sesion.component';
import { InicioSesionDetailsComponent } from './components/inicio-sesion-details/inicio-sesion-details.component';
import { InicioSesionListComponent } from './components/inicio-sesion-list/inicio-sesion-list.component';
import { AddRecuperacionPasswordComponent } from './components/add-recuperacion-password/add-recuperacion-password.component';
import { RecuperacionPasswordDetailsComponent } from './components/recuperacion-password-details/recuperacion-password-details.component';
import { RecuperacionPasswordListComponent } from './components/recuperacion-password-list/recuperacion-password-list.component';
import { AddNuevaPasswordComponent } from './components/add-nueva-password/add-nueva-password.component';
import { NuevaPasswordDetailsComponent } from './components/nueva-password-details/nueva-password-details.component';
import { NuevaPasswordListComponent } from './components/nueva-password-list/nueva-password-list.component';
import { AddLugarNacimientoComponent } from './components/add-lugar-nacimiento/add-lugar-nacimiento.component';
import { LugarNacimientoDetailsComponent } from './components/lugar-nacimiento-details/lugar-nacimiento-details.component';
import { LugarNacimientoListComponent } from './components/lugar-nacimiento-list/lugar-nacimiento-list.component';
import { AddDomicilioParticularComponent } from './components/add-domicilio-particular/add-domicilio-particular.component';
import { DomicilioParticularDetailsComponent } from './components/domicilio-particular-details/domicilio-particular-details.component';
import { DomicilioParticularListComponent } from './components/domicilio-particular-list/domicilio-particular-list.component';
import { AddContactoComponent } from './components/add-contacto/add-contacto.component';
import { ContactoDetailsComponent } from './components/contacto-details/contacto-details.component';
import { ContactoListComponent } from './components/contacto-list/contacto-list.component';
import { AddDesarrolloComponent } from './components/add-desarrollo/add-desarrollo.component';
import { DesarrolloDetailsComponent } from './components/desarrollo-details/desarrollo-details.component';
import { DesarrolloListComponent } from './components/desarrollo-list/desarrollo-list.component';
import { AddMenuComponent } from './components/add-menu/add-menu.component';
import { MenuDetailsComponent } from './components/menu-details/menu-details.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { AddProyectoComponent } from './components/add-proyecto/add-proyecto.component';
import { ProyectoDetailsComponent } from './components/proyecto-details/proyecto-details.component';
import { ProyectoListComponent } from './components/proyecto-list/proyecto-list.component';
import { AddPatenteComponent } from './components/add-patente/add-patente.component';
import { PatenteDetailsComponent } from './components/patente-details/patente-details.component';
import { PatenteListComponent } from './components/patente-list/patente-list.component';
import { AddArticuloDivulgacionComponent } from './components/add-articulo-divulgacion/add-articulo-divulgacion.component';
import { ArticuloDivulgacionDetailsComponent } from './components/articulo-divulgacion-details/articulo-divulgacion-details.component';
import { ArticuloDivulgacionListComponent } from './components/articulo-divulgacion-list/articulo-divulgacion-list.component';
import { AddRevistaIndexadoComponent } from './components/add-revista-indexado/add-revista-indexado.component';
import { RevistaIndexadoDetailsComponent } from './components/revista-indexado-details/revista-indexado-details.component';
import { RevistaIndexadoListComponent } from './components/revista-indexado-list/revista-indexado-list.component';
import { AddEstanciasComponent } from './components/add-estancias/add-estancias.component';
import { EstanciasDetailsComponent } from './components/estancias-details/estancias-details.component';
import { EstanciasListComponent } from './components/estancias-list/estancias-list.component';
import { AddGradoAcademicoComponent } from './components/add-grado-academico/add-grado-academico.component';
import { GradoAcademicoDetailsComponent } from './components/grado-academico-details/grado-academico-details.component';
import { GradoAcademicoListComponent } from './components/grado-academico-list/grado-academico-list.component';
import { AddLibroComponent } from './components/add-libro/add-libro.component';
import { LibroDetailsComponent } from './components/libro-details/libro-details.component';
import { LibroListComponent } from './components/libro-list/libro-list.component';
import { AddSniComponent } from './components/add-sni/add-sni.component';
import { SniDetailsComponent } from './components/sni-details/sni-details.component';
import { SniListComponent } from './components/sni-list/sni-list.component';
import { AddNuevoModeloComponent } from './components/add-nuevo-modelo/add-nuevo-modelo.component';
import { NuevoModeloDetailsComponent } from './components/nuevo-modelo-details/nuevo-modelo-details.component';
import { NuevoModeloListComponent } from './components/nuevo-modelo-list/nuevo-modelo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserDetailsComponent,
    UsersListComponent,
    AddInformacionGeneralComponent,
    InformacionGeneralDetailsComponent,
    InformacionGeneralListComponent,
    AddInicioSesionComponent,
    InicioSesionDetailsComponent,
    InicioSesionListComponent,
    AddRecuperacionPasswordComponent,
    RecuperacionPasswordDetailsComponent,
    RecuperacionPasswordListComponent,
    AddNuevaPasswordComponent,
    NuevaPasswordDetailsComponent,
    NuevaPasswordListComponent,
    AddLugarNacimientoComponent,
    LugarNacimientoDetailsComponent,
    LugarNacimientoListComponent,
    AddDomicilioParticularComponent,
    DomicilioParticularDetailsComponent,
    DomicilioParticularListComponent,
    AddContactoComponent,
    ContactoDetailsComponent,
    ContactoListComponent,
    AddDesarrolloComponent,
    DesarrolloDetailsComponent,
    DesarrolloListComponent,
    AddMenuComponent,
    MenuDetailsComponent,
    MenuListComponent,
    AddProyectoComponent,
    ProyectoDetailsComponent,
    ProyectoListComponent,
    AddPatenteComponent,
    PatenteDetailsComponent,
    PatenteListComponent,
    AddArticuloDivulgacionComponent,
    ArticuloDivulgacionDetailsComponent,
    ArticuloDivulgacionListComponent,
    AddRevistaIndexadoComponent,
    RevistaIndexadoDetailsComponent,
    RevistaIndexadoListComponent,
    AddEstanciasComponent,
    EstanciasDetailsComponent,
    EstanciasListComponent,
    AddGradoAcademicoComponent,
    GradoAcademicoDetailsComponent,
    GradoAcademicoListComponent,
    AddLibroComponent,
    LibroDetailsComponent,
    LibroListComponent,
    AddSniComponent,
    SniDetailsComponent,
    SniListComponent,
    AddNuevoModeloComponent,
    NuevoModeloDetailsComponent,
    NuevoModeloListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
