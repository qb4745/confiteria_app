import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'usuario/:id',
    loadComponent: () => import('./usuario/usuario.page').then( m => m.UsuarioPage)
  },
  {
    path: 'usuario',
    loadComponent: () => import('./usuario/usuario.page').then( m => m.UsuarioPage)
  },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.page').then( m => m.AdminPage)
  },
  {
    path: 'registrar',
    loadComponent: () => import('./registrar/registrar.page').then( m => m.RegistrarPage)
  },
  {
    path: 'productlist',
    loadComponent: () => import('./admin/productlist/productlist.page').then( m => m.ProductlistPage)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
