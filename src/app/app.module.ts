import {RouterModule,Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgIfElseComponent } from './ng-if-else/ng-if-else.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { ContenidoAComponent } from './contenido-a/contenido-a.component';
import { ContenidoBComponent } from './contenido-b/contenido-b.component';
import { MiequipoComponent } from './miequipo/miequipo.component';

//servicios
import {EquipoService} from './equipo.service';


//AngularFIREBASE2 https://github.com/IdanCo/angularfire2/blob/master/docs/install-and-setup.md
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireBase2Component } from './angular-fire-base2/angular-fire-base2.component';




const routes: Routes=[
  {path:'A',component: ContenidoAComponent},
  {path:'B',component: ContenidoBComponent},
  {path:'Equipo/:id',component: MiequipoComponent},
  {path:'',component:AngularFireBase2Component,pathMatch:"full"},
  {path:"**",redirectTo:'',pathMatch:"full"}
];


@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgIfElseComponent,
    NgClassComponent,
    NgForComponent,
    EncabezadoComponent,
    FooterComponent,
    ContenidoAComponent,
    ContenidoBComponent,
    MiequipoComponent,
    AngularFireBase2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),


    //AngularFIREBASE2 https://github.com/IdanCo/angularfire2/blob/master/docs/install-and-setup.md
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule, 
    AngularFireStorageModule
    
  ],
  providers: [EquipoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
