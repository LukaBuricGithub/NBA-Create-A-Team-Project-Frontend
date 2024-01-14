import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListPlayerJSON, PlayerJSON } from 'src/app/models/PlayerJSON';
import { User } from 'src/app/models/User';
import { UserForPost } from 'src/app/models/UserForPost';
import { TeamForPost } from 'src/app/models/TeamForPost';
import { PlayerForPost } from 'src/app/models/PlayerForPost';
import { Team } from 'src/app/models/Team';
import { Player } from 'src/app/models/Player';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NbaServiceService {

  constructor(private http:HttpClient) { }

  public isActive$ = new Subject();




  getPlayersFromJSON(criteria:string)
  {
    return this.http.get<ListPlayerJSON>('https://localhost:7094/api/Player/get-players-by-name?criteria='+criteria);
  }
  getAllPlayersInTeam(teamID:number)
  {
    return this.http.get<Player[]>("https://localhost:7094/api/Player/GetAllPlayersInTeam?teamId="+teamID);
  }



  getUserByID(userID:number)
  {
    return this.http.get<User>("https://localhost:7094/api/User/GetUserById?userId="+userID);
  }
  getAllUsers():Observable<User[]>
  {
    return this.http.get<User[]>("https://localhost:7094/api/User/GetAllUsers");
  }
  postUser(user:UserForPost)
  {
    return this.http.post("https://localhost:7094/api/User/CreateUser",user);
  }
  updateUser(user:User)
  {
    return this.http.put<User>("https://localhost:7094/api/User/UpdateUser",user);
  }
  loginUser(email:string,password:string)
  {
    return this.http.get<User>("https://localhost:7094/api/User/UserLogin?email="+email+"&password="+password);
  }
  changeUserStatus(userID:number)
  {
      const url = `https://localhost:7094/api/User/ChangeUserToActiveOrDeactive?userID=${userID}`;
      return this.http.put(url, null);
    //return this.http.put("https://localhost:7094/api/User/ChangeUserToActiveOrDeactive?userID="+userID)
  }


  postTeam(team:TeamForPost)
  {
    return this.http.post("https://localhost:7094/api/Team/CreateTeam",team);
  }
  getLastInsertedTeamId()
  {
    return this.http.get<number>("https://localhost:7094/api/Team/LastInsertedTeam");
  }
  getTeamByID(teamID:number)
  {
    return this.http.get<Team>("https://localhost:7094/api/Team/GetTeamByID?teamID="+teamID);
  }
  getAllTeams():Observable<Team[]>
  {
    return this.http.get<Team[]>("https://localhost:7094/api/Team/GetAllTeams");
  }
  getAllTeamsFromUserID(userID:number):Observable<Team[]>
  {
    return this.http.get<Team[]>("https://localhost:7094/api/Team/GetAllTeamsFromUserID?userId="+userID);
  }
deleteTeamByID(teamID:number)
{
  return this.http.delete("https://localhost:7094/api/Team/DeleteTeamByID?teamID="+teamID);
}


  updateTeam(team:Team)
  {
    return this.http.put<Team>("https://localhost:7094/api/Team/UpdateTeam",team);
  }



  postPlayer(player:PlayerForPost)
  {
    return this.http.post("https://localhost:7094/api/Player/InsertPlayeDatabase",player);
  }
  updatePlayer(player:Player)
  {
    return this.http.put<Player>("https://localhost:7094/api/Player/UpdatePlayer",player)
  }



  IsloggedIn()
  {
    return sessionStorage.getItem('isActive')!=null;
  }
  returnLoggedValue()
  {
    const num = sessionStorage.getItem('isActive');
    let value!:number;
    if(num !== null)
    {
      value=parseInt(num);
    }
    return value;
  }
  returnAdminValue()
  {
    const num = sessionStorage.getItem('isAdmin');
    let value!:number;
    if(num !== null)
    {
      value=parseInt(num);
    }
    return value;
  }
  returnUserID()
  {
    const num = sessionStorage.getItem('userId');
    let value!:number;
    if(num !== null)
    {
      value=parseInt(num);
    }
    return value;
  }
}
