import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IChapter, IComment, IManga } from './manga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  private _urlListManga: string ="http://localhost/webmanga/getListManga.php";

  private _urlManga: string ="http://localhost/webmanga/getManga.php";

  private _urlChapter: string ="http://localhost/webmanga/getListChapter.php";

  private _urlSearch: string = "http://localhost/webmanga/searchManga.php";

  private _urlAuthen: string = "http://localhost/webmanga/login.php";

  private _urlGetCmt: string = "http://localhost/webmanga/getListComments.php";

  private _urlAddCmt: string = "http://localhost/webmanga/addComment.php";

  private _urlSignin: string = "http://localhost/webmanga/signin.php";

  constructor(private http: HttpClient) { }

  getListManga(): Observable<IManga[]>{
    return this.http.get<IManga[]>(this._urlListManga);
  }
  
  getManga(name: string): Observable<IManga>{
    let queryParam = new HttpParams().append("name", name);

    return this.http.get<IManga>(this._urlManga, {params: queryParam});
  }

  getListChapter(name: string): Observable<IChapter[]>{
    let queryParam = new HttpParams();
    queryParam = queryParam.append("name", name);

    return this.http.get<IChapter[]>(this._urlChapter, {params: queryParam});
  }

  searchManga(searchBy: string, str: string): Observable<IManga[]>{
    let queryParam = new HttpParams();
    queryParam = queryParam.append("searchBy", searchBy);
    queryParam = queryParam.append("str", str);

    return this.http.get<IManga[]>(this._urlSearch, {params: queryParam});
  }

  getGenres(){
    let genres = ["action", "comedy", "drama", "fantasy", "historical", "horror", "martial art", "mecha", "romance", "slice of life",
                  "sport", "supernatural"];
    return genres;
  }

  getListComments(ID_manga: number): Observable<IComment[]>{
    let queryParam = new HttpParams();
    queryParam = queryParam.append("ID_manga", ID_manga);

    return this.http.get<IComment[]>(this._urlGetCmt, {params: queryParam});
  }

  addComment(ID_manga: number, ID_reader: number, cmt: string): Observable<IComment>{
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('ID_manga', ID_manga);
    body = body.set('ID_reader', ID_reader);
    body = body.set('cmt', cmt);
    return this.http.post<IComment>(this._urlAddCmt, body, {headers: myHeaders});
  }

  signin(username: string, pwd: string):Observable<number>{
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('username', username);
    body = body.set('pwd', pwd);
    return this.http.post<number>(this._urlSignin, body, {headers: myHeaders});
  }



  // userAuthen(username: string, pwd: string): any{
  //   //console.log(this._urlAuthen + '?username=' + username + '&pwd=' + pwd);
  //   return fetch(this._urlAuthen + '?username=' + username + '&pwd=' + pwd).then((res) => res.json()).then(
  //     msg => {
  //       //console.log(msg);
  //       return msg.msg;
  //     }
  //   )
  // }
}
