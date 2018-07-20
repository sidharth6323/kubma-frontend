import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {
  url = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }
}
