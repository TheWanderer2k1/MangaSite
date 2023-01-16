import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IChapter, IManga } from './manga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  private _urlListManga: string ="http://localhost/webmanga/getListManga.php";

  private _urlManga: string ="http://localhost/webmanga/getManga.php";

  private _urlChapter: string ="http://localhost/webmanga/getListChapter.php";

  private _urlSearch: string = "http://localhost/webmanga/searchManga.php";

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
}
