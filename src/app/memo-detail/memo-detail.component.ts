import { Component, EventEmitter, Input, Output } from '@angular/core'

import { Memo } from '../memo'
import { MemoService } from '../memo.service'

@Component({
    selector: 'memo-detail',
    templateUrl: './memo-detail.component.html',
    styleUrls: ['./memo-detail.component.css']
})
export class MemoDetailComponent {
    @Input() memo: Memo
    @Output() remove = new EventEmitter<void>()

    constructor(private memoService: MemoService) {}

    save() {
        this.memoService.save()
    }

    delete() {
        if (confirm(`"${this.memo.title}" 이 메모 진짜 지워요?`)) this.remove.emit()
    }
}