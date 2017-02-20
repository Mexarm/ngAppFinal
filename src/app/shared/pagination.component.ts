import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() items = [];
  @Input() pageSize: number = 10;
  @Output() pageChanged = new EventEmitter();
  @Output() itemClicked = new EventEmitter();
  pages = [];
  currentPage;
  currentPageItems = [];
  currentPost;

  constructor() { }

  ngOnInit() {
    this.createPageArray();
    this.loadPageItems();

  }

  ngOnChanges() {
    this.createPageArray();
    this.loadPageItems();


  }

  private createPageArray() {
    var temp_array = [];
    this.currentPage = 1;
    for (var i = 1; i <= Math.ceil(this.items.length / this.pageSize); i++)
      temp_array.push(i);

    this.pages = temp_array;
  }

  private loadPageItems() {

    if (this.items.length) {
      var pageSize = Number(this.pageSize);

      this.currentPageItems = [];
      var start = (this.currentPage - 1) * pageSize;
      var end = start + pageSize - 1;
      var temp_array = [];
      temp_array = [];
      for (var i = start; i < end; i++)
        temp_array.push(this.items[i]);
      this.currentPageItems = temp_array;
      console.log("start " + start + ", end: " + end);
      console.log("currentPageItems");
      console.log(this.currentPageItems);
    }

  }

  pageClick(page) {
    this.currentPage = page;
    console.log(page);
    this.loadPageItems();
    this.pageChanged.emit(page);
  }

  nextPage() {
    var lastPage = this.pages[this.pages.length - 1];
    var currentPage = this.currentPage;
    if (lastPage > currentPage) {
      this.currentPage++;
      this.pageClick(this.currentPage);
    }
  }

  prevPage() {
    var firstPage = this.pages[0];
    var currentPage = this.currentPage;
    if (currentPage > firstPage)
      {
        this.currentPage--;
        this.pageClick(this.currentPage);
      }
  }

  itemClick(item) {
    this.currentPost = item;
    this.itemClicked.emit(item);
    console.log(item);
  }


}
