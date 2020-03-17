import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'name', pathMatch: 'full' },
  {
    path: 'name',
    loadChildren: () =>
      import('./name/name.module').then(m => m.NameModule)
  },
  {
    path: 'math',
    loadChildren: () =>
      import('./math/math.module').then(m => m.MathModule)
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then(m => m.AboutModule)
  }
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: true,
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
