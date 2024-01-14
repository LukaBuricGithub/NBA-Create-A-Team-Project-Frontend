import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/models/Player';
import { PlayerForPost } from 'src/app/models/PlayerForPost';
import { ListPlayerJSON, PlayerJSON } from 'src/app/models/PlayerJSON';
import { Team } from 'src/app/models/Team';
import { TeamForPost } from 'src/app/models/TeamForPost';
import { User } from 'src/app/models/User';
import { NbaServiceService } from 'src/services/nba-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.scss']
})
export class UpdateTeamComponent implements OnInit {

  teamToUpdate!:Team;

  listOfOldPlayers:Player[]=[];

  oldPlayer1!:Player;
  oldPlayer2!:Player;
  oldPlayer3!:Player;
  oldPlayer4!:Player;
  oldPlayer5!:Player;

  teamID!:number;

  createTeamForm!:FormGroup;
  
  constructor(private service:NbaServiceService,private router:Router,private fb:FormBuilder,private route: ActivatedRoute,private _location: Location){}


  list1!:ListPlayerJSON;

  list2!:ListPlayerJSON;

  list3!:ListPlayerJSON;

  list4!:ListPlayerJSON;

  list5!:ListPlayerJSON;

  user!:User;

  listOfPlayers1:PlayerJSON[]=[];

  listOfPlayers2:PlayerJSON[]=[];

  listOfPlayers3:PlayerJSON[]=[];

  listOfPlayers4:PlayerJSON[]=[];

  listOfPlayers5:PlayerJSON[]=[];

  
  selectedPlayer1!:PlayerJSON;

  selectedPlayer2!:PlayerJSON;

  selectedPlayer3!:PlayerJSON;

  selectedPlayer4!:PlayerJSON;

  selectedPlayer5!:PlayerJSON;

  lastInsertedTeamId!:number;


selectedPlayers1=this.listOfPlayers1;

selectedPlayers2=this.listOfPlayers2;

selectedPlayers3=this.listOfPlayers3;

selectedPlayers4=this.listOfPlayers4;

selectedPlayers5=this.listOfPlayers5;


  ngOnInit(): void {
    this.createTeamForm = this.fb.group({
      teamName:['', Validators.required] ,
      selectedPlayer1: [null],
      selectedPlayer2: [null],
      selectedPlayer3: [null],
      selectedPlayer4: [null],
      selectedPlayer5: [null],
    });


    this.route.queryParams.subscribe(params => {
      let data1 = params['teamID'];
      this.teamID = Number(data1);
    });




    this.service.getTeamByID(this.teamID).subscribe((x:Team)=>{
      this.teamToUpdate=x;

      this.service.getAllPlayersInTeam(this.teamID).subscribe((x:Player[])=>{
        this.listOfOldPlayers=x;
        this.oldPlayer1=this.listOfOldPlayers[0];
        this.oldPlayer2=this.listOfOldPlayers[1];
        this.oldPlayer3=this.listOfOldPlayers[2];
        this.oldPlayer4=this.listOfOldPlayers[3];
        this.oldPlayer5=this.listOfOldPlayers[4];
  
        this.selectedPlayer1 = {
          id:this.oldPlayer1.playerJSONID,
          first_name:this.oldPlayer1.firstName,
          last_name:this.oldPlayer1.lastName,
          position:this.oldPlayer1.position,
        };
  
        this.selectedPlayer2 = {
          id:this.oldPlayer2.playerJSONID,
          first_name:this.oldPlayer2.firstName,
          last_name:this.oldPlayer2.lastName,
          position:this.oldPlayer2.position,
        };
  
        this.selectedPlayer3 = {
          id:this.oldPlayer3.playerJSONID,
          first_name:this.oldPlayer3.firstName,
          last_name:this.oldPlayer3.lastName,
          position:this.oldPlayer3.position,
        };
  
        this.selectedPlayer4 = {
          id:this.oldPlayer4.playerJSONID,
          first_name:this.oldPlayer4.firstName,
          last_name:this.oldPlayer4.lastName,
          position:this.oldPlayer4.position,
        };
  
        this.selectedPlayer5 = {
          id:this.oldPlayer5.playerJSONID,
          first_name:this.oldPlayer5.firstName,
          last_name:this.oldPlayer5.lastName,
          position:this.oldPlayer5.position,
        };

        this.createTeamForm = this.fb.group({
          teamName: [this.teamToUpdate.teamName, Validators.required],
          selectedPlayer1: [this.selectedPlayer1],
          selectedPlayer2: [this.selectedPlayer2],
          selectedPlayer3: [this.selectedPlayer3],
          selectedPlayer4: [this.selectedPlayer4],
          selectedPlayer5: [this.selectedPlayer5],
        });
      });
      
      this.createTeamForm.value.selectedPlayer1=this.selectedPlayer1;
      this.createTeamForm.value.selectedPlayer2=this.selectedPlayer2;
      this.createTeamForm.value.selectedPlayer3=this.selectedPlayer3;
      this.createTeamForm.value.selectedPlayer4=this.selectedPlayer4;
      this.createTeamForm.value.selectedPlayer5=this.selectedPlayer5;
    });

    this.service.getPlayersFromJSON('abe').subscribe((x:ListPlayerJSON)=>{
       this.list1=x;
       this.listOfPlayers1=this.list1.data;
     });

     this.service.getPlayersFromJSON('abe').subscribe((x:ListPlayerJSON)=>{
      this.list2=x;
      this.listOfPlayers2=this.list2.data;
    });

    this.service.getPlayersFromJSON('abe').subscribe((x:ListPlayerJSON)=>{
      this.list3=x;
      this.listOfPlayers3=this.list3.data;
    });

    this.service.getPlayersFromJSON('abe').subscribe((x:ListPlayerJSON)=>{
      this.list4=x;
      this.listOfPlayers4=this.list4.data;
    });

    this.service.getPlayersFromJSON('abe').subscribe((x:ListPlayerJSON)=>{
      this.list5=x;
      this.listOfPlayers5=this.list5.data;
    });

  }



onKey1(event: Event) {
  if (event instanceof KeyboardEvent) {
    const value = (event.target as HTMLInputElement).value;
    
    let filterDataConvert = value.toString();
    let filtedData=filterDataConvert.toLowerCase();
    let listJSON!:ListPlayerJSON;
    this.service.getPlayersFromJSON(filtedData).subscribe((x:ListPlayerJSON)=>{
      listJSON=x;
      this.listOfPlayers1=x.data;
    }); 
  }
}
onKey2(event: Event) {
  if (event instanceof KeyboardEvent) {
    const value = (event.target as HTMLInputElement).value;
    
    let filterDataConvert = value.toString();
    let filtedData=filterDataConvert.toLowerCase();
    let listJSON!:ListPlayerJSON;
    this.service.getPlayersFromJSON(filtedData).subscribe((x:ListPlayerJSON)=>{
      listJSON=x;
      this.listOfPlayers2=x.data;
    }); 
  }
}
onKey3(event: Event) {
  if (event instanceof KeyboardEvent) {
    const value = (event.target as HTMLInputElement).value;
    
    let filterDataConvert = value.toString();
    let filtedData=filterDataConvert.toLowerCase();
    let listJSON!:ListPlayerJSON;
    this.service.getPlayersFromJSON(filtedData).subscribe((x:ListPlayerJSON)=>{
      listJSON=x;
      this.listOfPlayers3=x.data;
    }); 
  }
}
onKey4(event: Event) {
  if (event instanceof KeyboardEvent) {
    const value = (event.target as HTMLInputElement).value;
    
    let filterDataConvert = value.toString();
    let filtedData=filterDataConvert.toLowerCase();
    let listJSON!:ListPlayerJSON;
    this.service.getPlayersFromJSON(filtedData).subscribe((x:ListPlayerJSON)=>{
      listJSON=x;
      this.listOfPlayers4=x.data;
    }); 
  }
}
onKey5(event: Event) {
  if (event instanceof KeyboardEvent) {
    const value = (event.target as HTMLInputElement).value;
    
    let filterDataConvert = value.toString();
    let filtedData=filterDataConvert.toLowerCase();
    let listJSON!:ListPlayerJSON;
    this.service.getPlayersFromJSON(filtedData).subscribe((x:ListPlayerJSON)=>{
      listJSON=x;
      this.listOfPlayers5=x.data;
    }); 
  }
}

public submitData()
{
  
  if(this.createTeamForm.valid && this.selectedPlayer1 !=null && this.selectedPlayer2 !=null && this.selectedPlayer3 !=null 
    && this.selectedPlayer4 !=null && this.selectedPlayer5 !=null)
    {
      const updatedTeam: Team= {
        teamID:this.teamToUpdate.teamID,
        teamName:this.createTeamForm.value.teamName,
        userID:this.teamToUpdate.userID,
      };

      const updatedPlayer1: Player = {
        playerID:this.oldPlayer1.playerID,
        playerJSONID: this.selectedPlayer1.id,
        firstName: this.selectedPlayer1.first_name,
        lastName: this.selectedPlayer1.last_name,
        position: this.selectedPlayer1.position,
        teamID: this.oldPlayer1.teamID, 
      };

      const updatedPlayer2: Player = {
        playerID:this.oldPlayer2.playerID,
        playerJSONID: this.selectedPlayer2.id,
        firstName: this.selectedPlayer2.first_name,
        lastName: this.selectedPlayer2.last_name,
        position: this.selectedPlayer2.position,
        teamID: this.oldPlayer2.teamID,
      };

      const updatedPlayer3: Player = {
        playerID:this.oldPlayer3.playerID,
        playerJSONID: this.selectedPlayer3.id,
        firstName: this.selectedPlayer3.first_name,
        lastName: this.selectedPlayer3.last_name,
        position: this.selectedPlayer3.position,
        teamID: this.oldPlayer3.teamID,
      };

      const updatedPlayer4: Player = {
        playerID:this.oldPlayer4.playerID,
        playerJSONID: this.selectedPlayer4.id,
        firstName: this.selectedPlayer4.first_name,
        lastName: this.selectedPlayer4.last_name,
        position: this.selectedPlayer4.position,
        teamID: this.oldPlayer4.teamID,
      };

      const updatedPlayer5: Player = {
        playerID:this.oldPlayer5.playerID,
        playerJSONID: this.selectedPlayer5.id,
        firstName: this.selectedPlayer5.first_name,
        lastName: this.selectedPlayer5.last_name,
        position: this.selectedPlayer5.position,
        teamID: this.oldPlayer5.teamID,
      };


      this.service.updateTeam(updatedTeam).subscribe((x)=>{});
      this.service.updatePlayer(updatedPlayer1).subscribe((x)=>{});
      this.service.updatePlayer(updatedPlayer2).subscribe((x)=>{});
      this.service.updatePlayer(updatedPlayer3).subscribe((x)=>{});
      this.service.updatePlayer(updatedPlayer4).subscribe((x)=>{});
      this.service.updatePlayer(updatedPlayer5).subscribe((x)=>{}); 
    }
}

public enableSubmitBtn() : boolean
{
  return true;
}

}
