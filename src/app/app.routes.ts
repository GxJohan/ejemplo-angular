import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./app/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'registro',
        loadChildren: () => import('./app/registro/registro.module').then(m => m.RegistroModule)
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/login'
    }
];
