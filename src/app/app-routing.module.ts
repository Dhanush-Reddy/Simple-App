import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { UpdateComponent } from './update/update.component';
const routes: Routes = [
  {path:'Patient',component:PatientComponent},
  {path:'Patient/:id',component:PatientComponent},

  {path:'update/:id',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
