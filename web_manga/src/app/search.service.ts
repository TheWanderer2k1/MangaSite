import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IManga } from './manga';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private route: Router) { }


  searchByAuthor(author: string){
    //console.log(author);
    this.route.navigate(['/search', 'byAuthor', author]);
  }

  searchByGenre(genre: string){
    //console.log(genre);
    this.route.navigate(['/search', 'genre', genre]);
  }

  // setSearchResult(manga: IManga[]){
  //   localStorage.setItem('search_input', JSON.stringify(manga));
  // }

  // getSearchResult(): IManga[]{
  //   return JSON.parse(localStorage.getItem('search_input')!);
  // }
}
