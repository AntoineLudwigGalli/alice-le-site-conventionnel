
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = "https://api.web3forms.com/submit";
  
  constructor(private http: HttpClient)  {}

  SendEmail(input: any) {
    return this.http.post(this.url, input, {responseType: 'text'}).pipe(
      map(
        (response) => {
          if (response) {
            return response;
          }else{
            return null;
          }
        },
        (error: any) => {
          return error;
        }
      )
    )
  }
}
