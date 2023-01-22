import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IManga } from '../manga';
import { MangaService } from '../manga.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-result-screen',
  templateUrl: './search-result-screen.component.html',
  styleUrls: ['./search-result-screen.component.css']
})
export class SearchResultScreenComponent implements OnInit {
  searchBy: string;
  str: string;
  public searchedMangas: IManga[] = [];
  public listGenre: string[];

  constructor(private route: Router, private activateRoute: ActivatedRoute, private _mangaService: MangaService) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param: ParamMap) => {
      this.searchBy = param.get('searchBy')!;
      this.str = param.get('str')!;
    });
    this._mangaService.searchManga(this.searchBy, this.str).subscribe(data => this.searchedMangas = data);
    this.listGenre = this._mangaService.getGenres();
  } 

  selectManga(name: string){
    this.route.navigate(['/read', name]);
  }

  searchByGenre(genre: string){
    console.log(genre);
    this.route.navigate(['/search', 'genre', genre]).then(function(){
      window.location.reload();
    }
    );
  }

}
