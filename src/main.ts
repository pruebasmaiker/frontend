import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { AppComponent } from './app/app.component';
import { PersonajeDetalleComponent } from './app/components/personaje-detalle/personaje-detalle.component';
import { PersonajeListaComponent } from './app/components/personaje-lista/personaje-lista.component';
import { ReportesComponent } from './app/components/reportes/reportes.component';

const routes = [
  { path: '', component: PersonajeListaComponent },
  { path: 'personaje/:id', component: PersonajeDetalleComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withHashLocation()),
    // Agrega aquí otros providers como HttpClientModule si hace falta
    provideHttpClient()
  ]
});