import { Injectable } from '@angular/core'
import { Memo } from './memo'

@Injectable()
export class MemoService {
    private memos: Memo[]

    constructor() {
        const saved = JSON.parse(localStorage.getItem('memos'))
        
        this.memos = saved as Memo[] || []
        this.save()
    }

    get(): Memo[] {
        return this.memos
    }

    add(memo: Memo) {
        this.memos.push(memo)
        this.save()
    }

    remove(memo: Memo) {
        const index = this.memos.indexOf(memo)
        if (index < 0) return
        
        this.memos.splice(index, 1)
        this.save()
    }

    save() {
        localStorage.setItem('memos', JSON.stringify(this.memos))
    }
}