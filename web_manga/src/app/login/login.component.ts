import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ID_reader: number;
  username: string;

  constructor(private route: Router, private _login: LoginService) { }

  ngOnInit(): void {
  }

  onClickSubmit(data: any){
    fetch('http://localhost/webmanga/login.php' + '?username=' + data.username + '&pwd=' + data.pwd).then((res) => res.json()).then(
      response =>{
        console.log(response);
        if (response != null || response != undefined){
          this._login.userLogin(response.ID_reader ,response.username);

          this.route.navigate(['/homepage']).then(()=>{
            window.location.reload();
          });
        }else
          alert('wrong password or account not exist!');

      }
    );
    
  }
}
