import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { NbaServiceService } from 'src/services/nba-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm!:FormGroup;

  loggedUser!:User;

  constructor(private fb: FormBuilder,private service:NbaServiceService,private router:Router) { }

  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public submitData()
  {
    if(this.loginForm.valid)
    {

      this.service.loginUser(this.loginForm.value.email,this.loginForm.value.password).subscribe((x:User) =>{
        this.loggedUser=x;
        if(this.loggedUser==null)
        {
        }
        else
        {
          const active="1";
          sessionStorage.setItem('isActive',active);

          let admin:string;
          if(this.loggedUser.isAdmin)
          {
            admin="1";
          }
          else
          {
            admin="0"
          }
          sessionStorage.setItem('isAdmin',admin);

          let userID:string;
          userID=this.loggedUser.userID.toString();
          sessionStorage.setItem('userId',userID);
        }
      })
    }
  }

  public enableSubmitBtn() : boolean
  {
    let enable:boolean=false;
    if(this.loginForm.valid)
    {
      enable=true;
    }
    else
    {
      enable:false;
    }
    return enable;
  }

}
