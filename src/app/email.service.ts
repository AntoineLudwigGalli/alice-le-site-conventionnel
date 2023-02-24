
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ContactModel } from './contact-model';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
//mettre l'adresse mail à la place du code (ex:https://formsubmit.co/alice.webdeveloppement@gmail.com) et ensuite remplacer par le code envoyé par mails
  private url = "https://formsubmit.co/eb67e3234bf1d373ec350a2ef35c530b";
  
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
