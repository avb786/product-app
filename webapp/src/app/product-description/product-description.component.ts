import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../service/category-service.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {
  public productname: any;
  public productdescription: any;
  public categoryList: any;
  public selectedCatagory: any;
  public productList: any;
  public updateBtn: any = false;
  public createBtn: any = true;
  listId: any;
  constructor(
    public _CategoryServiceService: CategoryServiceService
  ) { }

  ngOnInit(): void {
    this.getProduct();
    this.getCategory();
  }

  createProduct() {
    const body = {};
    body['name'] = this.productname;
    body['description'] = this.productdescription;
    body['category'] = this.selectedCatagory;
    this._CategoryServiceService.insertProduct(body).subscribe(response => {
      this.getProduct();
    })
    }

    getProduct() {
      this._CategoryServiceService.getProduct().subscribe(response => {
        this.productList = response;
      })
    }

    getCategory() {
      this._CategoryServiceService.getCategoryForProduct().subscribe(response => {
        this.categoryList = response;
      })
    }

    editProduct(list) {
      this.updateBtn = true;
      this.createBtn = false;
      this.listId = list.id;
      this.productname = list.name;
      this.productdescription = list.description;
      this.selectedCatagory = list.category;
    }

    updateProduct() {
    const body = {};
    body['name'] = this.productname;
    body['description'] = this.productdescription;
    body['category'] = this.selectedCatagory;
    this._CategoryServiceService.updateProduct(body, this.listId ).subscribe(response => {
      this.getProduct();
      this.createBtn = true;
      this.updateBtn = false;
      this.productname = '';
      this.productdescription = '';
      this.selectedCatagory = '';
    })
    }

    deleteProduct(listId) {
      this._CategoryServiceService.deleteProduct(listId).subscribe(response => {
        this.getProduct();
      })
    }

}
