import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { IComment, IManga } from '../manga';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() manga: IManga;
  comments: IComment[];
  comment: IComment;
  username: string;

  constructor(private _login: LoginService) { }

  ngOnInit(): void {
    this.username = this._login.getUser().username;
  }

}
