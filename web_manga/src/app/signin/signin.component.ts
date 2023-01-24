import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { LoginService } from '../login.service';
import { MangaService } from '../manga.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private _manga: MangaService, private _login: LoginService, private route: Router) { }

  ngOnInit(): void {
  }

  onClickSubmit(value: any){
    if (value.pwd != value.confirmed_pwd)
      alert('password not matched! Please try again.');
    else{
      this._manga.signin(value.username.trim(), value.pwd).subscribe(
        data =>{
          if (data < 0)
            alert('Duplicate username!');
          else{
            alert('Sign in successful!');
            this._login.userLogin(data ,value.username.trim());

            this.route.navigate(['/homepage']).then(()=>{
            window.location.reload();
          });
          }
        }
      );
    }
  }
}
