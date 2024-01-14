import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { User } from 'src/app/models/User';
import { NbaServiceService } from 'src/services/nba-service.service';
import { Player } from 'src/app/models/Player';
import { Team } from 'src/app/models/Team';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-details-about-team',
  templateUrl: './details-about-team.component.html',
  styleUrls: ['./details-about-team.component.scss']
})
export class DetailsAboutTeamComponent implements OnInit{

  dataSource!: MatTableDataSource<Player>;

  displayedColumns: string[] = ['Name', 'Position'];
  
  teamID!:number;

  userID!:number;

  user!:User;

  players:Player[]=[];

  team!:Team;

  constructor(private route: ActivatedRoute,private _location: Location, private routeBack: Router,private service:NbaServiceService) 
  {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let data1 = params['teamID'];
      let data2 = params['usernameID'];
      this.teamID = Number(data1);
      this.userID = Number(data2);
    });



    this.service.getUserByID(this.userID).subscribe((x:User)=>{
      this.user=x;
    });

    this.service.getTeamByID(this.teamID).subscribe((z:Team)=>{
      this.team=z;
    });

    this.service.getAllPlayersInTeam(this.teamID).subscribe((y:Player[])=>{
      this.players=y;
      this.dataSource = new MatTableDataSource(this.players);
    });

  }
}
