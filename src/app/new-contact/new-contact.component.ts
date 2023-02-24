import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { EmailService } from '../email.service';



@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent {

  contactForm!: FormGroup;

  

  constructor(private formBuilder: FormBuilder, private contact : EmailService) {

  
  this.contactForm = this.formBuilder.group({
    firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern("^[a-zA-Z]+$")]],
    lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern("^[a-zA-Z]+$")]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.pattern("(0|\\+33|0033)[1-9][0-9]{8}")]],
    content: ['', [Validators.required, Validators.minLength(10), ]],
    access_key: ['b9000ad6-3f66-4d48-9012-3ca358c8a238'],
    subject: ['Un nouveau message est arrivé pour A.L.I.C.E.'],
  })
}
get firstname() {
  return this.contactForm?.get('firstname');
}
get lastname() {
  return this.contactForm?.get('lastname');
}
get email() {
  return this.contactForm?.get('email');
}
get phoneNumber() {
  return this.contactForm?.get('phoneNumber');
}
get content() {
  return this.contactForm?.get('content');
}
get access_key() {
  return this.contactForm?.get('access_key');
}
get subject() {
  return this.contactForm?.get('subject');
}


onSubmit(contactForm: any)
{
  console.log(contactForm);
  
  this.contact.SendEmail(contactForm)
      .subscribe(response => { 
      
        location.href = '' //redirection après envoi
      }, error => {
      console.warn(error.responseText)
      console.log({ error })
    })
}

}
