import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/models/Team';
import { NbaServiceService } from 'src/services/nba-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-all-teams-administration',
  templateUrl: './all-teams-administration.component.html',
  styleUrls: ['./all-teams-administration.component.scss']
})
export class AllTeamsAdministrationComponent implements OnInit {

  dataSource!: MatTableDataSource<Team>;

  displayedColumns: string[] = ['team', 'action','action2','action3'];
  
  allTeams!:Team[];

  loggedUserId!:number;

  constructor(private service:NbaServiceService,private router:Router,private _location: Location,private route: ActivatedRoute){}

  ngOnInit(): void {



    this.service.getAllTeams().subscribe((x:Team[])=>{
      this.allTeams=x;
      this.dataSource = new MatTableDataSource(this.allTeams);
    });

  }

  goToDetails(teamID:number,usernameID:number)
  {
    this.router.navigate(['/details'],{
      queryParams:{teamID:teamID,usernameID:usernameID}
    });
  }

  goToUpdate(teamID:number)
  {
    this.router.navigate(['/edit-team'],{
      queryParams:{teamID:teamID}
    });
  }
  deleteTeam(teamID:number)
  {
    this.service.deleteTeamByID(teamID).subscribe((x)=>{});
  }

}
