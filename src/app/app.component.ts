import { Component } from '@angular/core';
import { Router }    from '@angular/router';

import { Memo } from './memo/memo'
import { MemoService } from './memo/memo.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    private memoService: MemoService
  ) {}

  create() {
    const memo = this.memoService.add()
    this.router.navigate(['/detail', memo.id])
  }
}
