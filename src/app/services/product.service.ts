import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {
  //private domain = "http://ec2-18-191-117-32.us-east-2.compute.amazonaws.com:3000";
  private domain = "http://localhost:3000";
  private urlproducts = this.domain + '/products?service_type=Fabric';
  private urlgetinputs = this.domain + '/products/';
  private urlrating = this.domain + '/product/rate/';
  private urlratingPartner = this.domain + '/product/rate/partner/';
  private urluserrating = this.domain + '/user/update_rating/';
  private urlUserWishlist = this.domain + '/user/update_wishlist/';
  private trendingurl = 'http://ec2-13-127-44-90.ap-south-1.compute.amazonaws.com:4040/api/meta/trending';
  private urltailor = this.domain + '/products?service_type=Tailoring';
  private rateUrl = this.domain + '/products/rate';

  constructor(private http: HttpClient) { }

  getAllfabric(service) {
   return this.http.get(this.urlproducts+"&service="+service);
  }

  get(id) {
    return this.http.get(this.urlgetinputs + id);
  }

  getallTrendingProducts() {
    return this.http.get(this.trendingurl);
  }

  getAlltailor(service) {
    return this.http.get(this.urltailor+"&service="+service);
   }
  rateProduct(details,rating,user_id)
  {
    var token = localStorage.getItem("token")
    if(!token || token=="")
    {
      return false
    }
    var headers = new HttpHeaders({"x-access-token":token});
    this.http.get(this.urluserrating+user_id+"/"+details._id,{headers:headers}).map(data =>data).subscribe(response=>console.log(response));
    return this.http.put(this.urlrating+details._id+"/"+rating,details,{headers:headers}).map(data => data);
  }
  ratePartner(details,rating,user_id)
  {
    var token = localStorage.getItem("token")
    if(!token || token=="")
    {
      return false
    }
    const _headers = new HttpHeaders();
    const headers = _headers.append("x-access-token",token)
    console.log(headers)
    this.http.get(this.urluserrating+user_id+"/"+details._id).map(data =>data).subscribe(response=>console.log(response));
    return this.http.put(this.urlratingPartner+details._id+"/"+rating,details).map(data => data);
  }
  wishlistToggle(details,user_id,currentStatus)
  {
    var token = localStorage.getItem("token")
    if(!token || token=="")
    {
      return false
    }
    var headers = new HttpHeaders({"x-access-token":token});
    return this.http.put<any>(this.urlUserWishlist+user_id+"/"+details._id+"/"+currentStatus,details,{headers:headers}).map(data => data);
  }
  gettailor(id2) {
    return this.http.get(this.urlgetinputs + id2);
  }

}
