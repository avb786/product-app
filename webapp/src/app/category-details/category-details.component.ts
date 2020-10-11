import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../service/category-service.service'

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  public insertCatagory: any;
  public catagoryList: any;
  public updateCategory: any;
  public updateFlag: any = false;
  public createFlag: any = true;
  public toUpdateList: any;
  constructor(
    public _CategoryServiceService: CategoryServiceService
  ) { }

  ngOnInit(): void {
    this.getCatagory();
  }

  createCatagory() {
    console.log('insertCatagory', this.insertCatagory);
    const body = {};
    body['name'] = this.insertCatagory;
    this._CategoryServiceService.insertCategory(body).subscribe((response) => {
      this.getCatagory();
      this.insertCatagory = '';      
    })
  }

  getCatagory() {
    this._CategoryServiceService.getCategory().subscribe((response) => {
      // console.log('response---',response);
      this.catagoryList = response;
    })
  }

  editCatagory(list) {
    this.updateFlag = true;
    this.createFlag = false;
    this.toUpdateList = list;
    this.updateCategory = list.name;
    // console.log('LIST', list);
    
  }
  updateCatagory() {
    const body = {};
    body['name'] = this.updateCategory;
    const id = this.toUpdateList.id;
  this._CategoryServiceService.updateCategory(body, id).subscribe(response => {
    // console.log('Updated', response);
    this.goTocreateCatagory();
    this.getCatagory();
    
  })
  }

  deleteCatagory(list) {
    const  id = list.id;
    this._CategoryServiceService.deleteCategory(id).subscribe(response => {
      this.getCatagory();
    })
  }

  goTocreateCatagory() {
    this.updateFlag = false;
    this.createFlag = true;
  }
}
