import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Memo } from '../memo'
import { MemoService } from '../memo.service'

@Component({
  selector: 'memo-list',
  templateUrl: './memo-list.component.html',
  styleUrls: ['./memo-list.component.css']
})
export class MemoListComponent implements OnInit {
  memos: Memo[]

  constructor(
    private memoService: MemoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.memos = this.memoService.get()
  }

  goto(memo: Memo) {
    this.router.navigate(['/detail', memo.id])
  }
}