import { Injectable } from '@angular/core'
import { Memo } from './memo'

@Injectable()
export class MemoService {
    private lastId: number
    private memos: Memo[]

    constructor() {
        this.lastId = MemoService.load('lastId') as number || 0
        this.memos = MemoService.load('memos') as Memo[] || []

        this.saveAll()
    }

    static load(key: string) {
        return JSON.parse(localStorage.getItem(key))
    }

    static save(key: string, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    saveAll() {
        MemoService.save('lastId', this.lastId)
        MemoService.save('memos', this.memos)
    }

    get(): Memo[] {
        return this.memos
    }

    find(id: number) {
        return Promise.resolve(this.memos.find(m => m.id === id))
    }

    add(title = '', content = ''): Memo {
        const memo: Memo = {
            title, content,
            id: ++this.lastId
        }
        
        this.memos.push(memo)
        this.saveAll()
        
        return memo
    }

    remove(memo: Memo) {
        const index = this.memos.indexOf(memo)
        if (index < 0) return
        
        this.memos.splice(index, 1)
        this.saveAll()
    }
}