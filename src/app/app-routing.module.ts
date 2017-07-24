import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { MemoListComponent } from './memo/list/memo-list.component'
import { MemoDetailComponent } from './memo/detail/memo-detail.component'

const routes: Routes = [
    { path: 'list', component: MemoListComponent },
    { path: 'detail/:id', component: MemoDetailComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}