import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.Home),
    title: 'Fahim Shahryer Sizan | Portfolio',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about').then((m) => m.About),
    title: 'About | Fahim Shahryer Sizan',
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects').then((m) => m.Projects),
    title: 'Projects | Fahim Shahryer Sizan',
  },
  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('./pages/project-details/project-details').then(
        (m) => m.ProjectDetails
      ),
    title: 'Project Details | Fahim Shahryer Sizan',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then((m) => m.Contact),
    title: 'Contact | Fahim Shahryer Sizan',
  },
  {
    path: '**',
    redirectTo: '',
  },
];