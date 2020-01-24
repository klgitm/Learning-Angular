import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ItemListComponent } from '../item-list/item-list.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: WelcomeComponent},
      { path: 'list', component: ItemListComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', component: PageNotFoundComponent}
    ])
  ],
  declarations: []
})
export class AppRoutingModule { }
