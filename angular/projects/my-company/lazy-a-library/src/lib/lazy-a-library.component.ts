import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

import { LazyALibraryDataSource } from './lazy-a-library-datasource';
import { LazyALibraryService } from './lazy-a-library.service';
import { LayoutService, LoadingService } from '@my-company/common';

@Component({
  selector: 'lib-lazy-a-library',
  templateUrl: './lazy-a-library.component.html',
  styleUrls: ['./lazy-a-library.component.css']
})
export class LazyALibraryComponent implements OnInit, OnDestroy {

  dataSource: LazyALibraryDataSource;

  displayedColumns: string[] = [
    'id',
    'first_name',
    'last_name',
    'email',
    'gender',
    'ip_address'
  ];

  filter: FormGroup;

  filterValueChanges: Subscription;
  
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private LazyALibraryService: LazyALibraryService,
    private loadingService: LoadingService,
    public layoutService: LayoutService) { }

  ngOnInit() {
    this.filter = this.createFilterFormGroup();
    this.filterValueChanges = this.filter.valueChanges.pipe(debounceTime(500)).subscribe(change => this.onFilter());
    this.paginator.pageIndex = 0;
    this.dataSource = new LazyALibraryDataSource(this.LazyALibraryService, this.loadingService);
    this.loadPage();
  }

  ngOnDestroy() {
    this.filterValueChanges.unsubscribe();
  }

  createFilterFormGroup() {
    let group: any = {};
    this.displayedColumns.forEach(column => group[column] = new FormControl(''));
    return new FormGroup(group);
  }

  loadPage() {
    this.dataSource.loadItems(
        this.filter.value,
        this.sort.active, this.sort.direction,
        this.paginator.pageIndex, this.paginator.pageSize);
  }

  onFilter() {
    this.paginator.pageIndex = 0;
    this.loadPage();
  }

  onSort() {
    this.paginator.pageIndex = 0;
    this.loadPage();
  }

  onPage() {
    this.loadPage();
  }

}
