import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameGrupos } from './utl/gruposcomponent';
import { IdgsComponent } from './utl/idgs/idgs.component';
import { IricComponent } from './utl/iric/iric.component';
import { MenuComponent } from './utl/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SumaComponent } from './utl/formulario/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './utl/formulario/operas/operas.module';
import { DistanciaComponent } from './Tarea/distancia/distancia.component';
import { CalculoModule } from './Tarea/distancia/calculo/calculo.module';
import { CalificacionAlumComponent } from './utl/calificacion-alum/calificacion-alum.component';
import { AlumnoFilterPipe } from './utl/alumno-filter.pipe';
import { AlumnoReactiveComponent } from './formularios/alumno-reactive/alumno-reactive.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NameGrupos,
    IdgsComponent,
    IricComponent,
    MenuComponent,
    SumaComponent,
    DistanciaComponent,
    CalificacionAlumComponent,
    AlumnoFilterPipe,
    AlumnoReactiveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule,
    CalculoModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
