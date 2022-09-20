import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  {path:'listing', component:ListingComponent},
  {path:'', redirectTo:'listing', pathMatch:'full'},
  {path:'blog-detail', component:DetailComponent},
  {path:'blog-detail/:id', component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
