import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AuthService } from "angular2-social-login";

@Injectable()
export class customAuthService {

  token: string;
  sub;
  loginUrl = 'http://localhost:3000/login';
  userUrl = 'http://localhost:3000/me';
  signupUrl = 'http://localhost:3000/register';
  oauthCheckUrl = 'http://localhost:3000/check_oauth';

constructor(private http: HttpClient,public _oauth: AuthService) { }

  loginA(credentials) {
      console.log('AuthService-Username:', credentials);
      return this.http.post<any>(this.loginUrl, credentials);
  }
  signInOauth(provider){
    return this._oauth.login(provider);
  }
  Signup(credentials) {
      console.log('AuthService-Username:', credentials);
      return this.http.post<any>(this.signupUrl, credentials);
  }
  checkOauth(uid){
    return this.http.post<any>(this.oauthCheckUrl, {"oauth_id":uid})
  }
  getloginStatus()
  {
    var token = localStorage.getItem("token")
    if(!token || token=="")
    {
      return false
    }
    var headers = new HttpHeaders({"x-access-token":token});
    return this.http.get<any>(this.userUrl,{headers:headers});
  }

}
