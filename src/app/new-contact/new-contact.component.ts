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
    firstname: ['', [Validators.required, Validators.minLength(10)]],
    lastname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
    email: ['', [Validators.required, Validators.minLength(10)]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
    content: ['', [Validators.required, Validators.minLength(10)]],
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
