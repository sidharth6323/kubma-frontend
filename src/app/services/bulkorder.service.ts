import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BulkorderService {
  orderUrl = 'http://localhost:3000/Bulkorders';

  constructor(private http: HttpClient) {

  }

  bulkorder(bulkOrder) {
  return this.http.post(this.orderUrl, bulkOrder);
  }

}
