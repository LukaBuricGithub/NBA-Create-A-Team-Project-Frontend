import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbaServiceService } from 'src/services/nba-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Nba_Frontend';

  isAdmin!:any;

  isActive!:any;

  userID!:number;


  constructor(private router: Router,private service:NbaServiceService){ }

  ngOnInit(): void {
    
    this.isActive=this.service.returnLoggedValue();

    let pomValue=this.service.returnAdminValue();
    if(pomValue !=null && pomValue!=0)
    {
      this.isAdmin=pomValue;
    }

    let user=this.service.returnUserID();
    if(user !=null)
    {
      this.userID=user;
    }

  }

  logout()
  {
    sessionStorage.clear();
  }

  goToCreateTeam(userID:number)
  {
    this.router.navigate(['/create-team'],{
      queryParams:{userID:userID}
    });
  }
  goToMyTeams(userID:number)
  {
    this.router.navigate(['/my-teams'],{
      queryParams:{userID:userID}
    });
  }
}


