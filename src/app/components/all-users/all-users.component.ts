import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { NbaServiceService } from 'src/services/nba-service.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit{

  
  dataSource!: MatTableDataSource<User>;

  displayedColumns: string[] = ['username', 'action','action2'];

  users:User[]=[];
  
  constructor(private service:NbaServiceService,private router:Router){}


  ngOnInit(): void {

    this.service.getAllUsers().subscribe((x:User[])=>{
      this.users=x;
      this.dataSource = new MatTableDataSource(this.users);

    });

  }

  checkStatus(isActive:boolean)
  {
    if(isActive)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  activateOrDeactivate(userID:number)
  {
    this.service.changeUserStatus(userID).subscribe((x)=>{});
    location.reload(); 
  }

  changeUsername(userID:number)
  {
    this.router.navigate(['/edit-user'],{
      queryParams:{usernameID:userID}
    });
  }


}
