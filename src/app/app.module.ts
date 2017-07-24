import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule }   from '@angular/forms'

import { AppComponent }     from './app.component'
import { AppRoutingModule } from './app-routing.module'

import { MemoService }         from './memo/memo.service'
import { MemoListComponent }   from './memo/list/memo-list.component'
import { MemoDetailComponent } from './memo/detail/memo-detail.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],

  declarations: [
    AppComponent,
    MemoListComponent,
    MemoDetailComponent,
  ],

  providers: [MemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
