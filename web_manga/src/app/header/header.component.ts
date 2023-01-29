import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { IManga, IUser } from '../manga';
import { MangaService } from '../manga.service';
import { SearchResultScreenComponent } from '../search-result-screen/search-result-screen.component';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  user: IUser;
  hide: boolean;

  constructor(private router: Router, private _login: LoginService) { }

  ngOnInit(): void {
    //let elements = document.getElementsByName("loginOrSignup");
    this.user = this._login.getUser();

    if (this.user != null){
      // elements.forEach(e => {
      //   e.hidden = true;
      // });
      this.hide = true;

      // document.getElementById("username")!.hidden = false;
      // document.getElementById("Logout")!.hidden = false;


      this.username = this.user.username;
    }else{
      // elements.forEach(e => {
      //   e.hidden = false;
      // });
  
      this.hide = false;

      // document.getElementById("username")!.hidden = true;
      // document.getElementById("Logout")!.hidden = true;
    }
  }

  onClickSubmit(data: any){
    //console.log(data.select);
    let searchBy = data.select;
    if (searchBy == "" || searchBy == undefined)
      searchBy = 'byName';
    this.router.navigate(['/search', searchBy, data.str.trim()]).then(()=>{
      window.location.reload();
    });
  }

  onClickLogout(){
    this._login.userLogout();
    this.router.navigate(['/homepage']).then(()=>{
      window.location.reload();
    });
  }
}
