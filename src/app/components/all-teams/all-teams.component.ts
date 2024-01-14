import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { Router } from '@angular/router';
import { Team } from 'src/app/models/Team';
import { User } from 'src/app/models/User';
import { NbaServiceService } from 'src/services/nba-service.service';
import { ListOfPlayers } from 'src/app/models/ListOfPlayers';
import { Player } from 'src/app/models/Player';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-all-teams',
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.scss']
})
export class AllTeamsComponent implements OnInit {

  dataSource!: MatTableDataSource<Team>;

  displayedColumns: string[] = ['team', 'action'];
  
  allTeams!:Team[];

  constructor(private service:NbaServiceService,private router:Router){}
  
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

}