import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationListComponent } from '../app/notification-list/notification-list.component'



const routes:Routes=[
  {path:'',component:NotificationListComponent},
  {path:'list',component:NotificationListComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
