import 'rxjs/add/operator/switchMap'
import { Observable } from 'rxjs/Observable'

import { Component, OnInit }                from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

import { Memo }        from '../memo'
import { MemoService } from '../memo.service'

@Component({
    selector: 'memo-detail',
    templateUrl: './memo-detail.component.html'
})
export class MemoDetailComponent implements OnInit {
    memo: Memo

    constructor(
        private memoService: MemoService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.memoService.find(+params.get('id')))
            .subscribe((memo: Memo) => this.memo = memo)
    }

    save() {
        this.memoService.saveAll()
    }

    delete() {
        if (!confirm(`정말로 ${this.memo.id}번 메모를 지우시겠어요?`)) return

        this.memoService.remove(this.memo)
        this.goBack()
    }

    goBack() {
        this.router.navigate(['/list'])
    }
}