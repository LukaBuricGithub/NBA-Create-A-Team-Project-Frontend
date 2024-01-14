import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { NbaServiceService } from 'src/services/nba-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.scss']
})
export class UpdateAccountComponent {

  editForm!: FormGroup;

  userGet!:User;

  userID!:number;

  constructor(private fb: FormBuilder,private service:NbaServiceService,private router:Router, private route:ActivatedRoute,private _location: Location) 
  { }
 
  ngOnInit(): void {
    this.editForm = this.fb.group({
      username:['', Validators.required] 
    });



    this.route.queryParams.subscribe(params => {
      let data1 = params['usernameID'];
      this.userID = Number(data1);
    });

    this.service.getUserByID(this.userID).subscribe((x:User)=>{
      this.userGet=x;

      this.editForm = this.fb.group({
        username: [this.userGet.username, Validators.required]
      });

      this.editForm.value.username=this.userGet.username;
    });
  }

  public submitData()
  {
    if(this.editForm.valid)
    {
      const updatedUser: User = {
        userID:this.userGet.userID,
        email:this.userGet.email,
        username:this.editForm.value.username,
        password:this.userGet.password,
        isActive:this.userGet.isActive,
        isAdmin:this.userGet.isAdmin,
      };

      this.service.updateUser(updatedUser).subscribe((x)=>{});
      this.editForm.reset();
      this.router.navigate(['/index']);
    }
  }

  public enableSubmitBtn() : boolean
  {
    let enable:boolean=false;
    if(this.editForm.valid)
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