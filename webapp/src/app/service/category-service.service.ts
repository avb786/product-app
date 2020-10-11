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
}
