import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto5Component } from './components/punto5/punto5.component';
import { Punto5bisComponent } from './components/punto5bis/punto5bis.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'punto1',
        component: Punto1Component
    },
    {
        path: 'punto5',
        component: Punto5Component
    },
    {
        path:'punto5bis',
        component: Punto5bisComponent
    }
];
