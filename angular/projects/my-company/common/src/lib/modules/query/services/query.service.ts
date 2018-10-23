import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class QueryService {

    toQueryParams(pageIndex: number, pageSize: number, filter?: any, sortColumn?: string, sortDirection?: string): string {
        let queryParams = '';

        if (filter) {
            Object.keys(filter).forEach((key: string) => {
                if (filter.hasOwnProperty(key)) {
                    queryParams += queryParams.length > 0 ? '&' : '?';
                    queryParams += `${key}=${filter[key]}`;
                }
            });
        }

        if (sortColumn) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += `sortColumn=${sortColumn}`;
        }

        if (sortDirection) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += `sortDirection=${sortDirection}`;
        }

        // if (pageIndex) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += `pageIndex=${pageIndex}`;
        // }

        // if (pageSize) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += `pageSize=${pageSize}`;
        // }

        return queryParams;
    }
  
}