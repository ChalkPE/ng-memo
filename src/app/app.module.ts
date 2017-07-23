import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'

import { MemoService } from './memo.service'
import { MemoListComponent } from './memo-list/memo-list.component'
import { MemoDetailComponent } from './memo-detail/memo-detail.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],

  declarations: [
    AppComponent,
    MemoListComponent,
    MemoDetailComponent
  ],

  providers: [MemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
