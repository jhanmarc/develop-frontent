import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from 'src/app/component/partials/tabs/tabs.component';
import { LayoutsComponent } from 'src/app/component/layouts/layouts.component';

const routes: Routes = [
  { path: '', component: TabsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
