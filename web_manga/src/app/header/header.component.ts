import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { IManga } from '../manga';
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

  constructor(private router: Router, private _login: LoginService) { }

  ngOnInit(): void {
    let elements = document.getElementsByName("loginOrSignup");
    this.username = this._login.getUser();

    if (this.username != null){
      elements.forEach(e => {
        e.hidden = true;
      });
  
      document.getElementById("username")!.hidden = false;
      document.getElementById("Logout")!.hidden = false;
    }else{
      elements.forEach(e => {
        e.hidden = false;
      });
  
      document.getElementById("username")!.hidden = true;
      document.getElementById("Logout")!.hidden = true;
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

  // onClick(){
  //   this.router.navigate(['/homepage']);
  // }

}
