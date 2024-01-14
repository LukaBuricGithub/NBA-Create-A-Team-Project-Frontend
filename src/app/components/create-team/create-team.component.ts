import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerJSON,ListPlayerJSON } from 'src/app/models/PlayerJSON'; 
import { NbaServiceService } from 'src/services/nba-service.service';
import { User } from 'src/app/models/User';
import { TeamForPost } from 'src/app/models/TeamForPost';
import { PlayerForPost } from 'src/app/models/PlayerForPost'; 
import { Team } from 'src/app/models/Team';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})

export class CreateTeamComponent implements OnInit{

  createTeamForm!:FormGroup;
  
  constructor(private service:NbaServiceService,private router:Router,private fb:FormBuilder,private _location: Location,private route: ActivatedRoute){}


  loggedUserId!:number;

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


  ngOnInit(): void {



    this.route.queryParams.subscribe(params => {
      let data1 = params['userID'];
      this.loggedUserId = Number(data1);
    });


    this.createTeamForm = this.fb.group({
      teamName:['', Validators.required] 
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

selectedPlayers1=this.listOfPlayers1;

selectedPlayers2=this.listOfPlayers2;

selectedPlayers3=this.listOfPlayers3;

selectedPlayers4=this.listOfPlayers4;

selectedPlayers5=this.listOfPlayers5;


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
    }); ;
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
      const newTeam: TeamForPost= {
        teamName:this.createTeamForm.value.teamName,
        userID:this.loggedUserId,
      };

      this.service.postTeam(newTeam).subscribe((response:any) => {
        
        const newTeamId = response.teamID;

        const newPlayer1: PlayerForPost = {
          playerJSONID: this.selectedPlayer1.id,
          firstName: this.selectedPlayer1.first_name,
          lastName: this.selectedPlayer1.last_name,
          position: this.selectedPlayer1.position,
          teamID: newTeamId, 
        };
  
        const newPlayer2: PlayerForPost = {
          playerJSONID: this.selectedPlayer2.id,
          firstName: this.selectedPlayer2.first_name,
          lastName: this.selectedPlayer2.last_name,
          position: this.selectedPlayer2.position,
          teamID: newTeamId,
        };
  
        const newPlayer3: PlayerForPost = {
          playerJSONID: this.selectedPlayer3.id,
          firstName: this.selectedPlayer3.first_name,
          lastName: this.selectedPlayer3.last_name,
          position: this.selectedPlayer3.position,
          teamID: newTeamId,
        };
  
        const newPlayer4: PlayerForPost = {
          playerJSONID: this.selectedPlayer4.id,
          firstName: this.selectedPlayer4.first_name,
          lastName: this.selectedPlayer4.last_name,
          position: this.selectedPlayer4.position,
          teamID: newTeamId,
        };
  
        const newPlayer5: PlayerForPost = {
          playerJSONID: this.selectedPlayer5.id,
          firstName: this.selectedPlayer5.first_name,
          lastName: this.selectedPlayer5.last_name,
          position: this.selectedPlayer5.position,
          teamID: newTeamId,
        };
        
        this.service.postPlayer(newPlayer1).subscribe((x)=>{});
        this.service.postPlayer(newPlayer2).subscribe((x)=>{});
        this.service.postPlayer(newPlayer3).subscribe((x)=>{});
        this.service.postPlayer(newPlayer4).subscribe((x)=>{});
        this.service.postPlayer(newPlayer5).subscribe((x)=>{});
      });  
  }


}

public enableSubmitBtn() : boolean
{
  return true;
}

}
