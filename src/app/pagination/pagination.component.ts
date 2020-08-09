import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Output() sharedVarChange = new EventEmitter();
  @Input() totalcount1;
  public limit = 10;
  public totalpages: any;
  public totalcount: any;
  public clicked: any;
  public currentPage = 0;
  public pgarray: any;
  public mainpgarray: any;
  constructor(
  ) {
  }
  ngOnInit() {
    this.initializePageData();
  }
  ngOnChanges(changes: SimpleChanges) {
    // this.currentPage = this.givenSelectedPageNumber ? (this.givenSelectedPageNumber - 1) : 0;
    // this.totalcount1 = changes.totalcount1 ? changes.totalcount1.currentValue : this.totalcount1;
    // this.initializePageData();
    this.currentPage = 0;
    this.totalcount1 = changes.totalcount1 ? changes.totalcount1.currentValue : this.totalcount1;
    if (changes.totalcount1) {
      this.initializePageData();
    }
  }
  initializePageData() {
    this.pgarray = [];
    this.mainpgarray = [];
    this.clicked = [];
    const temp = [];
    this.totalpages = Math.ceil(this.totalcount1 / this.limit);
    for (let i = 0; i < this.totalpages; i++) {
      this.clicked.push(false);
      this.mainpgarray.push(i + 1);
      temp[i] = { checked: false, intermediate: false };
    }
    this.pgarray = this.mainpgarray.slice(0, this.limit);
    this.clicked[this.currentPage] = true;
  }
  pageClicked(pgno) {
    this.clicked[this.clicked.indexOf(true)] = false;
    this.currentPage = pgno - 1;
    this.clicked[this.currentPage] = true;
    this.sharedVarChange.emit({ pageNumber: pgno });
  }
  showPages(type) {
    switch (type) {
      case 'next':
        this.pgarray = this.currentPage === this.pgarray[0] - 1 ?
          this.mainpgarray.slice(this.pgarray[this.pgarray.length - 1],
            this.mainpgarray[this.pgarray[this.pgarray.length - 1] + this.limit - 1]
              ? this.pgarray[this.pgarray.length - 1] + this.limit : this.mainpgarray.length) :
          this.mainpgarray.slice(this.currentPage, this.currentPage + this.limit);
        break;
      case 'previous':
        this.pgarray = this.mainpgarray[this.currentPage - this.limit] ?
          this.mainpgarray.slice(this.currentPage - this.limit, this.currentPage) :
          this.mainpgarray.slice(0, this.limit);
        break;
      default: break;
    }
    this.currentPage = this.pgarray[0] - 1;
  }
}
