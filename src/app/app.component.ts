import { Component } from '@angular/core';

import { Memo } from './memo'
import { MemoService } from './memo.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectedMemo: Memo

  constructor(private memoService: MemoService) {}

  removeSelected() {
    this.memoService.remove(this.selectedMemo)
    this.selectedMemo = null
  }
}
