import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { LoadingService } from '@my-company/common';
import { MockDataItem } from './models/mock-data-item';
import { LazyALibraryService } from './lazy-a-library.service';

export class LazyALibraryDataSource implements DataSource<MockDataItem> {

    private listItemsSubject = new BehaviorSubject<MockDataItem[]>([]);
    
    constructor(private lazyALibraryService: LazyALibraryService,
        private loadingService: LoadingService) {}

    connect(collectionViewer: CollectionViewer): Observable<MockDataItem[]> {
        return this.listItemsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.listItemsSubject.complete();
        this.loadingService.loading$.next(false);
    }

    loadItems(filter: any = {},
        sortColumn = 'id', sortDirection = 'asc',
        pageIndex = 0, pageSize = 10) {
            
        this.loadingService.loading$.next(true);

        this.lazyALibraryService.getItems(filter, sortColumn, sortDirection,
            pageIndex, pageSize).pipe(
            catchError(() => {
                return of([]);
            }),
            finalize(() => {
                this.loadingService.loading$.next(false)
            })
        )
        .subscribe((listItems: Array<MockDataItem>) => this.listItemsSubject.next(listItems));
    }    
}
