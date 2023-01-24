import { Injectable } from '@angular/core';
import { IUser } from './manga';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  userLogin(ID_reader: number, username: string){
    let userObj: IUser = {
      ID_reader: ID_reader,
      username: username,
      expiry: new Date().getTime() + 86400000 //one day
    }

    localStorage.setItem('loginSession', JSON.stringify(userObj));
  }

  userLogout(){
    localStorage.removeItem('loginSession');
  }

  getUser(): IUser{
    let userObj = JSON.parse(localStorage.getItem('loginSession')!);

    if (userObj == null)
      return null!;

    if (new Date().getTime() > userObj.expiry){
      this.userLogout();
      userObj = null;
    }
    return userObj;
  }
}
