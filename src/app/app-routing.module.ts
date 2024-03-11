import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { Project1Component } from './projects/project1/project1.component';

const routes: Routes = [
  {path : "", component : HomepageComponent},
  {path :'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)},
  {path : '**', component : HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
