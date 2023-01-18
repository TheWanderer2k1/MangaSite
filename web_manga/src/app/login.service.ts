import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  userLogin(username: string){
    let userObj = {
      username: username,
      expiry: new Date().getTime() + 86400000 //one day
    }

    localStorage.setItem('loginSession', JSON.stringify(userObj));
  }

  userLogout(){
    localStorage.removeItem('loginSession');
  }

  getUser(): any{
    let userObj = JSON.parse(localStorage.getItem('loginSession')!);

    if (userObj == null)
      return null;

    if (new Date().getTime() > userObj.expiry){
      userObj.username = null;
      this.userLogout();
    }
    return userObj.username;
  }
}
