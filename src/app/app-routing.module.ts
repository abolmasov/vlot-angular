import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([{ path: 'about', loadChildren: './about/about.module#AboutModule' }]),
  Shell.childRoutes([{ path: 'career', loadChildren: './career/career.module#CareerModule' }]),
  Shell.childRoutes([{ path: 'client', loadChildren: './client/client.module#ClientModule' }]),
  Shell.childRoutes([{ path: 'business', loadChildren: './business/business.module#BusinessModule' }]),
  Shell.childRoutes([{ path: 'faq', loadChildren: './faq/faq.module#FaqModule' }]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
