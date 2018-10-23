import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QueryService } from '@my-company/common';
import { MockDataItem } from './models/mock-data-item';

const LIST_QUERY = 'http://localhost:8000/api/items/';

export const ASCENDING = 'asc';

@Injectable({
  providedIn: 'root'
})
export class LazyALibraryService {

  constructor(
    private queryService: QueryService,
    private httpClient: HttpClient) { }

  getItems(filter, sortColumn, sortDirection, pageIndex, pageSize): Observable<Array<MockDataItem>> {
    let queryParams = this.queryService.toQueryParams(pageIndex, pageSize, filter, sortColumn, sortDirection);
    return this.httpClient.get<Array<MockDataItem>>(`${LIST_QUERY + queryParams}`);
  }

}
