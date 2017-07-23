import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { Memo } from '../memo'
import { MemoService } from '../memo.service'

@Component({
  selector: 'memo-list',
  templateUrl: './memo-list.component.html',
  styleUrls: ['./memo-list.component.css']
})
export class MemoListComponent implements OnInit {
  memos: Memo[]

  @Input() selectedMemo: Memo
  @Output() select = new EventEmitter<Memo>()

  constructor(private memoService: MemoService) {}

  ngOnInit(): void {
    this.memos = this.memoService.get()
  }

  create() {
    const memo = {
      title: prompt('메모 제목을 입력하세요'),
      content: ''
    }
    
    this.memoService.add(memo)
    this.select.emit(memo)
  }
}