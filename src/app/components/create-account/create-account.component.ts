import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForPost } from 'src/app/models/UserForPost';
import { NbaServiceService } from 'src/services/nba-service.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit
{

  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder,private service:NbaServiceService,private router:Router) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  public submitData()
  {
    if(this.registrationForm.valid)
    {
      const newUser: UserForPost = {
        email: this.registrationForm.value.email,
        username: this.registrationForm.value.username,
        password: this.registrationForm.value.password,
        isActive: true,
        isAdmin: false,
      };

      this.service.postUser(newUser).subscribe((x)=>{});
      this.registrationForm.reset();
      this.router.navigate(['/index']);
    }
  }

  public enableSubmitBtn() : boolean
  {
    const password = this.registrationForm.get('password')?.value;
    const confirmPassword = this.registrationForm.get('confirmPassword')?.value;
    let match:boolean=false;

    if(password == confirmPassword)
    {
      match=true;
    }
    else
    {
      match=false;
    }
    return match;
  }
}
