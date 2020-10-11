import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(
    private _http: HttpClient
  ) { }

  insertCategory(body) { 
    const url = 'http://localhost:8081/api/category/insert';
    return this._http.post(url, body);
  }

  updateCategory(body, id) { 
    const url = `http://localhost:8081/api/category/update?id=${id}`;
    return this._http.post(url, body);
  }

  getCategory() { 
    const url = 'http://localhost:8081/api/category/get';
    return this._http.get(url);
  }

  insertProduct(body) { 
    const url = 'http://localhost:8081/api/product/insert';
    return this._http.post(url, body);
  }

  getProduct() { 
    const url = 'http://localhost:8081/api/product/get';
    return this._http.get(url);
  }

  updateProduct(body, id) { 
    const url = `http://localhost:8081/api/category/update?id=${id}`;
    return this._http.post(url, body);
  }

  getCategoryForProduct() { 
    const url = 'http://localhost:8081/api/category/get/menu';
    return this._http.get(url);
  }

  deleteCategory(id) {
    const url = `http://localhost:8081/api/category/delete?id=${id}`;
    return this._http.delete(url);
  }

  deleteProduct(id) {
    const url = `http://localhost:8081/api/product/delete?id=${id}`;
    return this._http.delete(url);
  }

}
