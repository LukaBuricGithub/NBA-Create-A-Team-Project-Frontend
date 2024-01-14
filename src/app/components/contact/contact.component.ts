import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm=new FormGroup({
    firstName:new FormControl("",[Validators.required]),
    lastName:new FormControl("",[Validators.required]),
    mail:new FormControl("",[Validators.email,Validators.required]),
    message:new FormControl("",[Validators.required])
  });

  constructor(fb:FormBuilder)
  {
    
  }

  public submitData()
  {
    if(this.contactForm.valid)
    {
      this.contactForm.reset();
    }
  }

  public enableSubmitBtn() : boolean
  {
    return this.contactForm.valid;
  }

  ngOnInit(): void {
    
  }
}
