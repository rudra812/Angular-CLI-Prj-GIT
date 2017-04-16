import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class AboutService{
    private baseUrl: string = 'http://localhost:8085/about';
    constructor(private http:Http){
        
    }
    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
     handleError(error: any)  { 
        let errorMsg = error.message ;
        console.log(errorMsg);
        return Observable.throw(errorMsg);
    }
    succesHandler(data:any){
        return data.json();
    }
    getAll(): Observable<any>{
    let res = this.http
      .get(`${this.baseUrl}/searching`, {headers: this.getHeaders()})
      .map(this.succesHandler)
      .catch(this.handleError);
      return res;
  }
  
}
